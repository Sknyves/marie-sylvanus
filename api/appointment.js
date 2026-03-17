import fetch from 'node-fetch';

export async function sendLeadEmail({ name, email, projectDescription, appointmentDate }) {
    const MAILZEET_API_URL = 'https://api.mailzeet.com/v1/mails';
    const PUBLIC_KEY = process.env.MAILZEET_PUBLIC_KEY;
    const DEVELOPER_EMAIL = 'mariesyl321@gmail.com';

    console.log(`Sending Lead Notification to Marie (${DEVELOPER_EMAIL})`);
    
    // 1. NOTIFICATION POUR MARIE (DÉVELOPPEUR)
    const adminPayload = {
        sender: { email: 'assistant@marie-sylvanus.com', name: 'Assistant Chatbot' },
        recipients: [{ email: DEVELOPER_EMAIL, name: 'Marie Sylvanus' }],
        subject: `🔥 Nouveau Lead : ${name || 'Prospect'}`,
        html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; border: 1px solid #eee; padding: 20px;">
                <h2 style="color: #2563eb;">🚀 Nouveau Prospect Délecté !</h2>
                <p>Un visiteur a laissé ses coordonnées via le chatbot.</p>
                <hr style="border: 0; border-top: 1px solid #eee;">
                <p><strong>Nom :</strong> ${name || 'Non précisé'}</p>
                <p><strong>Contact :</strong> ${email}</p>
                <p><strong>Message/Contexte :</strong> ${projectDescription}</p>
                <p><strong>Date souhaitée :</strong> ${appointmentDate || 'À définir'}</p>
                <hr style="border: 0; border-top: 1px solid #eee;">
                <p style="font-size: 0.8em; color: #71717a;">Action requise : Recontacter le client sous 24h.</p>
            </div>
        `
    };

    // 2. CONFIRMATION POUR LE CLIENT
    const clientPayload = {
        sender: { email: DEVELOPER_EMAIL, name: 'Marie Sylvanus KINKPON' },
        recipients: [{ email: email, name: name || 'Client' }],
        subject: `Accusé de réception - Votre projet web - Marie Sylvanus KINKPON`,
        html: `
            <div style="font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #1a1a1a; max-width: 600px; padding: 40px; border: 1px solid #f0f0f0; border-radius: 16px; background-color: #ffffff;">
                <div style="margin-bottom: 30px; text-align: center;">
                    <img src="https://marie-sylvanus.vercel.app/logo.png" alt="Logo MS" style="height: 60px; width: auto;">
                </div>
                <h2 style="color: #111; margin-bottom: 24px; font-size: 24px; letter-spacing: -0.02em;">Bonjour,</h2>
                <p style="font-size: 16px; margin-bottom: 16px;">C'est <strong>Marie Sylvanus</strong>. J'ai bien reçu votre message via mon assistant virtuel.</p>
                <p style="font-size: 16px; margin-bottom: 24px;">Votre intérêt pour mes services me fait grandement plaisir. J'ai déjà commencé à analyser votre demande pour voir comment je peux apporter une valeur ajoutée maximale à votre vision.</p>
                
                <div style="background-color: #f9f9f9; border-left: 4px solid #000; padding: 20px; margin-bottom: 30px;">
                    <p style="margin: 0; font-weight: bold; font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; color: #666;">Prochaine étape</p>
                    <p style="margin: 8px 0 0; font-size: 16px; color: #333;">Je vais examiner les détails de votre profil et vous recontacter personnellement sous <strong>24h ouvrées</strong> pour fixer un créneau d'échange personnalisé.</p>
                </div>

                <p style="font-size: 16px; margin-bottom: 32px;">En attendant, je vous invite à explorer mes dernières réalisations sur mon portfolio :</p>
                
                <div style="text-align: center; margin-bottom: 40px;">
                    <a href="https://marie-sylvanus.vercel.app/" style="display: inline-block; background-color: #000; color: #fff; text-decoration: none; padding: 16px 32px; border-radius: 12px; font-weight: bold; font-size: 16px; transition: all 0.3s ease;">Voir mon Portfolio →</a>
                </div>

                <hr style="border: 0; border-top: 1px solid #eee; margin-bottom: 30px;">
                
                <p style="font-size: 15px; color: #666; margin: 0;">Très cordialement,</p>
                <p style="font-size: 18px; font-weight: bold; color: #000; margin: 5px 0 0;">Marie Sylvanus KINKPON</p>
                <p style="font-size: 14px; color: #888; margin: 2px 0 0;">Développeur Full-Stack & Consultant IA</p>
            </div>
        `
    };

    try {
        console.log(`Triggering dual email via Mailzeet...`);
        // On envoie les deux emails
        const [adminResp, clientResp] = await Promise.all([
            fetch(MAILZEET_API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${PUBLIC_KEY}` },
                body: JSON.stringify(adminPayload)
            }),
            fetch(MAILZEET_API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${PUBLIC_KEY}` },
                body: JSON.stringify(clientPayload)
            })
        ]);

        const adminData = await adminResp.json();
        const clientData = await clientResp.json();
        
        console.log('Admin notification status:', adminData);
        console.log('Client confirmation status:', clientData);
        
        return adminData;
    } catch (error) {
        console.error('Mailzeet Dual-Send Error:', error);
        throw error;
    }
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const data = await sendLeadEmail(req.body);
        res.status(200).json({ success: true, data });
    } catch (error) {
        console.error('Error in appointment handler:', error);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
}
