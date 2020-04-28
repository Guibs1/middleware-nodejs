const CronJob = require('cron').CronJob;

const jobs = [];

const showMessage = new CronJob('* * * * * *', function() {
  console.log('You will see this message every second 01');
}, null, true, 'America/Sao_Paulo');

const showMessage2 = new CronJob('* * * * * *', () => {
    console.log('You will see this message every second 02');
  }, null, true, 'America/Sao_Paulo');


jobs.push(showMessage, showMessage2);
module.exports = jobs;