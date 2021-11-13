const express = require('express');
const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'test' },
    transports: [
        new winston.transports.File({ filename: './logs/info.log', level: 'info' }),
    ],
});


// Constants
const PORT = 3050;
const HOST = '0.0.0.0';
// App
const app = express();
app.get('/', (req, res) => {
    logger.info(`Request Started ${Date.now().toString()}`)
    res.send('Hello World');
    logger.info(`Request Finished ${Date.now().toString()}`)
});
app.listen(PORT);
console.log(`Running on http:localhost:${PORT}`);
