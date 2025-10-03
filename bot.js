const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: process.env.MC_HOST,
  username: process.env.MC_EMAIL,
  password: process.env.MC_PASSWORD
});

bot.on('spawn', () => {
  console.log('Bot je spawnovan!');
});

bot.on('error', err => console.log('Greška: ', err));
bot.on('end', () => console.log('Bot se disconnectao'));
