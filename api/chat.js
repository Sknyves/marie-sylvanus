import { pipeline } from '@xenova/transformers';
import Groq from 'groq-sdk';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

import { sendLeadEmail } from './appointment.js';

dotenv.config();

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const KB_PATH = path.resolve(process.cwd(), './data/knowledge_base_with_embeddings.json');

// Cache the model and KB
let embedder = null;
let kb = null;

async function getContext(query) {
    if (!embedder) {
        embedder = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');
    }
    if (!kb) {
        kb = JSON.parse(fs.readFileSync(KB_PATH, 'utf8'));
    }

    const queryEmbedding = await embedder(query, { pooling: 'mean', normalize: true });
    const queryVector = Array.from(queryEmbedding.data);

    // Calculate similarity
    const results = kb.map(chunk => {
        const similarity = dotProduct(queryVector, chunk.embedding);
        return { ...chunk, similarity };
    });

    // Sort and get top 3
    return results.sort((a, b) => b.similarity - a.similarity).slice(0, 3);
}

function dotProduct(a, b) {
    return a.reduce((sum, val, i) => sum + val * b[i], 0);
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { chatInput, history = [], stream = false } = req.body;

    try {
        const contextChunks = await getContext(chatInput);
        const contextText = contextChunks.map(c => c.text).join('\n\n');

        const systemPrompt = `Tu es Marie Sylvanus KINKPON, développeur full-stack expert et consultant IA.
Ton but est de CONVAINCRE et d'ACQUÉRIR le client.

### IDENTITÉ :
- Homme, expert, persuasif. 
- Site : https://marie-sylvanus.vercel.app/
- Interdiction de citer "Groq", "Mailzeet", etc.

### DESIGN DES RÉPONSES :
- Utilise le Markdown : **gras**, listes, et SURTOUT des **tableaux** pour présenter des options ou tarifs si pertinent.
- Organise tes réponses pour qu'elles soient visuellement "premium".

### BASE DE CONNAISSANCES :
${contextText}

### STRATÉGIE :
1. Découverte : Obtiens NOM, BUT du projet, et EMAIL.
2. ROI : Prouve la valeur.
3. Call to Action : Propose un appel de 15 min.`;

        const messages = [
            { role: 'system', content: systemPrompt },
            ...history,
            { role: 'user', content: chatInput }
        ];

        if (stream) {
            // STREAMING MODE
            res.setHeader('Content-Type', 'text/event-stream');
            res.setHeader('Cache-Control', 'no-cache');
            res.setHeader('Connection', 'keep-alive');

            const streamResponse = await groq.chat.completions.create({
                messages: messages,
                model: 'llama-3.3-70b-versatile',
                temperature: 0.6,
                stream: true,
            });

            let fullText = '';
            for await (const chunk of streamResponse) {
                const content = chunk.choices[0]?.delta?.content || '';
                fullText += content;
                res.write(`data: ${JSON.stringify({ chunk: content })}\n\n`);
            }

            res.write('data: [DONE]\n\n');
            res.end();

            // Background Lead Extraction after stream ends
            handleLeadExtraction(chatInput, history, fullText).catch(e => console.error('Lead extraction error:', e));
            return;
        } else {
            // NON-STREAMING MODE (Legacy/Testing)
            const chatCompletion = await groq.chat.completions.create({
                messages: messages,
                model: 'llama-3.3-70b-versatile',
                temperature: 0.6,
            });

            const responseText = chatCompletion.choices[0].message.content;
            res.status(200).json({ output: responseText });

            handleLeadExtraction(chatInput, history, responseText).catch(e => console.error('Lead extraction error:', e));
        }
    } catch (error) {
        console.error('Error in chat handler:', error);
        if (!res.writableEnded) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

async function handleLeadExtraction(userInput, history, botResponse) {
    const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
    const phonePattern = /(\+?[\d\s-]{8,})/;
    
    if (emailPattern.test(userInput) || phonePattern.test(userInput) || emailPattern.test(botResponse)) {
        console.log('Potential lead detected, starting LLM extraction...');
        
        // Use a fast model to extract structured data
        const extractionPrompt = `Extrais les informations suivantes de cet échange entre un client et un assistant IA.
Réponds UNIQUEMENT en JSON valide.

CONVERSATION :
${history.map(m => `[${m.role}] ${m.content}`).join('\n')}
[user] ${userInput}

STRUCTURE JSON :
{
  "name": "Nom complet ou 'Inconnu'",
  "email": "Email ou null",
  "phone": "Téléphone ou null",
  "goal": "But du projet / intention",
  "is_lead": true/false
}`;

        const extraction = await groq.chat.completions.create({
            messages: [{ role: 'system', content: extractionPrompt }],
            model: 'llama-3.1-8b-instant',
            response_format: { type: "json_object" },
            temperature: 0.1,
        });

        const data = JSON.parse(extraction.choices[0].message.content);

        if (data.is_lead && (data.email || data.phone)) {
            sendLeadEmail({
                name: data.name,
                email: data.email || data.phone,
                projectDescription: `Goal: ${data.goal}\nContext: ${userInput}`,
                appointmentDate: 'À définir'
            }).catch(err => console.error('Lead email failed:', err));
        }
    }
}
