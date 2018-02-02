const TelegramBot = require('node-telegram-bot-api')
const os = require('os')

const  bot = new TelegramBot('502048915:AAG6w13xh0tAvYmhIHtFBighP0T_yDXwfAw', {polling:true})

bot.on('message', msg=> {
    bot.sendMessage(msg.chat.id, `Hello from ${os.type}, hi ${msg.from.first_name}`)
})