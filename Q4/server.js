// server.js

const http = require('http');
const WebSocket = require('ws');
const Chatbot = require('./chatbot'); // Replace with the correct path to your chatbot.js file

const chatbot = new Chatbot();

const server = http.createServer();
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', (message) => {
    console.log(`Received: ${message}`);
    const response = chatbot.processMessage(message);
    ws.send(response);
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

server.listen(3000, () => {
  console.log('WebSocket server is listening on port 9000');
});
