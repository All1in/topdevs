const { handleMessage } = require('./messageHandler');
const { log } = require('../utils/logger');

function handleConnection(ws, wss) {
    console.log('Client connected')

    const interval = setInterval(() => {
        ws.send(JSON.stringify({ type: 'REQUEST_COUNTER' }));
    }, 1000);

    ws.on('message', (message) => handleMessage(message, ws));

    ws.on('close', () => {
        clearInterval(interval);
    })

}

module.exports = { handleConnection }