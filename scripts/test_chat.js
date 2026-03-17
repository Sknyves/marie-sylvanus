import handler from '../api/chat.js';

const mockReq = {
    method: 'POST',
    headers: {
        host: 'localhost:3000'
    },
    body: {
        chatInput: "Je suis intéressé par vos services, comment pouvons-nous collaborer ? Ecrivez moi par mail : sknyves@gmail.com"
    }
};

const mockRes = {
    status: (code) => {
        console.log('Status:', code);
        return mockRes;
    },
    json: (data) => {
        console.log('Response:', JSON.stringify(data, null, 2));
        return mockRes;
    }
};

console.log('Testing chat handler...');
handler(mockReq, mockRes).catch(console.error);
