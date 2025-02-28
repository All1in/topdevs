const { log } = require('../utils/logger')

function handleMessage(message, ws) {
    try {
        const data = JSON.parse(message);
        if(data && typeof data.counter === 'number') {
            log(`Received counter value: ${data.counter}`)
        }
    } catch(error) {
        log('Invalid message format', 'error');
    }
}

module.exports = { handleMessage };