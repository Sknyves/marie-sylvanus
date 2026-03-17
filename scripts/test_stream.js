import fetch from 'node-fetch';

async function testStreaming() {
  console.log('--- Testing Streaming API ---');
  const response = await fetch('http://localhost:3000/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chatInput: 'Quels sont tes tarifs ?',
      stream: true
    })
  });

  const reader = response.body;
  reader.on('data', (chunk) => {
    const lines = chunk.toString().split('\n\n');
    for (const line of lines) {
      if (line.startsWith('data: ')) {
        const content = line.replace('data: ', '');
        if (content === '[DONE]') {
            console.log('\n[DONE]');
        } else {
            try {
                const { chunk: text } = JSON.parse(content);
                process.stdout.write(text);
            } catch (e) {}
        }
      }
    }
  });
}

// Since we cannot easily run a local server and test it from here without 'run_command' hanging,
// I will instead trust the logic or use a mock.
// Actually, I can use the same handler-based mock but for streaming.

import handler from '../api/chat.js';

async function mockStreamingTest() {
    console.log('--- Mocking Streaming Response ---');
    const mockRes = {
        setHeader: (k, v) => {},
        write: (data) => {
            if (data.startsWith('data: ')) {
                const content = data.replace('data: ', '').trim();
                if (content && content !== '[DONE]') {
                    try {
                        const { chunk } = JSON.parse(content);
                        process.stdout.write(chunk);
                    } catch (e) {}
                }
            }
        },
        end: () => console.log('\n[END CONTENT]'),
        writableEnded: false
    };

    await handler({
        method: 'POST',
        body: { chatInput: 'Peux-tu me faire un tableau de tes tarifs ?', stream: true }
    }, mockRes);
}

mockStreamingTest().catch(console.error);
