import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

async function testMultiTurnLead() {
    console.log("--- Test Multi-Turn Lead Collection ---");

    const history = [];
    const interactions = [
        "Bonjour ! Je suis intéressé par vos services.",
        "Je m'appelle Jean Dupont.",
        "Mon projet est de créer une boutique en ligne pour vendre des vêtements. Voici mon mail : jean.dupont@example.com"
    ];

    for (const input of interactions) {
        console.log(`\nUser: ${input}`);
        
        const response = await fetch('http://localhost:3000/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chatInput: input,
                history: history
            })
        });

        const data = await response.json();
        console.log(`Bot: ${data.output.substring(0, 100)}...`);
        
        // Add to history for next turn
        history.push({ role: 'user', content: input });
        history.push({ role: 'assistant', content: data.output });
    }
}

// Since Vercel functions are tested through the handler export, we'll mock the handler call
// For a quick local verification without a running server:
import handler from '../api/chat.js';

async function mockLocalTest() {
    console.log("--- Mock Local Multi-Turn Test ---");
    const history = [];
    const interactions = [
        "Bonjour !",
        "Je m'appelle Jean Dupont.",
        "Je veux un site e-commerce pro. Mon mail est jean.dupont@example.com"
    ];

    for (const input of interactions) {
        console.log(`\nUser: ${input}`);
        
        const mockRes = {
            status: function(s) { this.statusCode = s; return this; },
            json: function(d) { this.data = d; return this; }
        };

        await handler({ 
            method: 'POST', 
            body: { chatInput: input, history: history } 
        }, mockRes);

        console.log(`Bot: ${mockRes.data.output.substring(0, 150)}...`);
        
        history.push({ role: 'user', content: input });
        history.push({ role: 'assistant', content: mockRes.data.output });
    }
}

mockLocalTest().catch(console.error);
