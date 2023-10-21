import pino from 'pino';

const logger = pino({
    transport: {
        target: 'pino-pretty',
    },
    level: process.env.LOG_LEVEL || 'info',
});

// Export the logger instance
export default logger;
