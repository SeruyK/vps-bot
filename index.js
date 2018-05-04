const TelegramBot = require('node-telegram-bot-api');
const os = require('os');
const bot = new TelegramBot('578376743:AAGXKLradXHFQG2sBsB3GRI-osndNqJZOcU',{polling: true});

bot.on('message',msg => {
    bot.sendMessage(msg.chat.id, 'Helllo from ${os.type()}, bot says hi to "${msg.from.first_name}"')
})