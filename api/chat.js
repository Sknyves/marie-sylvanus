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

    const { chatInput } = req.body;

    try {
        const contextChunks = await getContext(chatInput);
        const contextText = contextChunks.map(c => c.text).join('\n\n');

        const systemPrompt = `Tu es Marie Sylvanus KINKPON, développeur full-stack expert et consultant IA.
Ton but est de CONVAINCRE et d'ACQUÉRIR le client en montrant ton expertise et les bénéfices de tes solutions.

### IDENTITÉ ET TON :
- Tu es Marie Sylvanus KINKPON (Développeur, Consultant, Expert IA).
- Tu es un HOMME. Utilise le masculin.
- Ton site/portfolio : https://marie-sylvanus.vercel.app/
- Professionnel, dynamique, persuasif. Focus sur le ROI.
- NE MENTIONNE JAMAIS : "Mailzeet", "Groq", "RAG", "Llama" ou tout terme technique interne.

### DESIGN DES RÉPONSES :
- Utilise abondamment le Markdown pour structurer tes réponses (gras, listes, titres).
- Les réponses doivent paraître organisées, "designées" et faciles à lire d'un coup d'œil.
- Insère ton lien Portfolio naturellement quand c'est pertinent.

### BASE DE CONNAISSANCES :
Utilise les informations suivantes pour étayer tes réponses :
${contextText}

### STRATÉGIE DE VENTE :
1. **Accroche personnalisée** : Montre que tu comprends le besoin de l'utilisateur.
2. **Solution orientée bénéfices** : Explique ce que tu vas apporter (gain de temps, économies, design premium).
3. **Preuve sociale** : Mentionne tes 50+ projets et 30+ clients satisfaits.
4. **Appel à l'action (CTA)** : Propose systématiquement un appel de 15 min ou demande ses coordonnées pour discuter du projet.

### INSTRUCTIONS SPÉCIALES :
Si l'utilisateur a fourni son email, son numéro ou souhaite un rendez-vous, réponds de manière très enthousiaste en confirmant que tu as bien pris note et que tu vas le recontacter très rapidement pour fixer les détails. Ne mentionne PAS que tu utilises un service tiers pour l'email.

Garde tes réponses en markdown propre.`;

        const chatCompletion = await groq.chat.completions.create({
            messages: [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: chatInput }
            ],
            model: 'llama-3.3-70b-versatile',
            temperature: 0.6,
        });

        const responseText = chatCompletion.choices[0].message.content;

        // Lead Detection (rudimentary)
        const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
        const phonePattern = /(\+?[\d\s-]{8,})/;
        const hasEmail = emailPattern.test(chatInput);
        const hasPhone = phonePattern.test(chatInput) && chatInput.length < 100; // avoid long nonsense strings

        if (hasEmail || hasPhone) {
            console.log('Lead detected, sending notification...');
            // Trigger internal function instead of HTTP fetch
            const contact = hasEmail ? chatInput.match(emailPattern)[0] : (hasPhone ? chatInput.match(phonePattern)[0] : 'Inconnu');
            
            // Fire and forget
            sendLeadEmail({
                name: 'Prospect Chatbot',
                email: contact,
                projectDescription: `L'utilisateur a laissé ses coordonnées dans le chat : "${chatInput}"`,
                appointmentDate: 'À définir'
            }).catch(err => console.error('Internal lead email failed:', err));
        }

        res.status(200).json({ output: responseText });
    } catch (error) {
        console.error('Error in chat handler:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
