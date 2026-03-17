import { pipeline } from '@xenova/transformers';
import fs from 'fs';
import path from 'path';

const KB_PATH = './data/knowledge_base.json';
const OUTPUT_PATH = './data/knowledge_base_with_embeddings.json';

async function generate() {
    console.log('Loading embedding model...');
    const embedder = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');

    console.log('Reading knowledge base...');
    const kb = JSON.parse(fs.readFileSync(KB_PATH, 'utf8'));

    const chunks = [];

    // Chunks for Profile
    chunks.push({
        text: `Profil de Marie Sylvanus KINKPON: ${kb.profile.role}. ${kb.profile.description} Experience: ${kb.profile.experience}. Projets: ${kb.profile.projects_count}. Clients: ${kb.profile.clients_count}.`,
        metadata: { type: 'profile' }
    });

    // Chunks for Services
    kb.services.forEach(s => {
        chunks.push({
            text: `Service: ${s.name}. Détails: ${s.details} Tarifs: ${s.price_range}.`,
            metadata: { type: 'service', name: s.name }
        });
    });

    // Chunks for Projects
    kb.projects.forEach(p => {
        chunks.push({
            text: `Projet: ${p.title}. Description: ${p.description} Catégories: ${p.categories.join(', ')}.`,
            metadata: { type: 'project', title: p.title }
        });
    });

    // Chunks for FAQ
    kb.faq.forEach(f => {
        chunks.push({
            text: `Question: ${f.question} Réponse: ${f.answer}`,
            metadata: { type: 'faq', question: f.question }
        });
    });

    console.log(`Generating embeddings for ${chunks.length} chunks...`);
    for (const chunk of chunks) {
        const output = await embedder(chunk.text, { pooling: 'mean', normalize: true });
        chunk.embedding = Array.from(output.data);
    }

    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(chunks, null, 2));
    console.log(`Done! Saved to ${OUTPUT_PATH}`);
}

generate().catch(console.error);
