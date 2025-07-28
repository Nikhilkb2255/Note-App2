const cron = require('node-cron');

cron.schedule('*/5 * * * * *', () => {
    console.log('Hi');
});

// every 5 miniute