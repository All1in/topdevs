const WebSocket = require('ws');
const { handleConnection } = require('./handlers/connectionHandler');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => handleConnection(ws, wss));

console.log('WebSocket server running on ws://localhost:8080');