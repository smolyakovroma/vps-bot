const TelegramBot = require('node-telegram-bot-api')
const os = require('os')
var cron = require('cron').CronJob;
var request = require('request')

const  bot = new TelegramBot('502048915:AAG6w13xh0tAvYmhIHtFBighP0T_yDXwfAw', {polling:true})

bot.on('message', msg=> {
    // request
    //     .get('https://console.pool.bitcoin.com/srv/api/user?apikey=6d7f9039-ba2b-4c56-90a6-b0bfafd75049')
    //     .on('response', function(error, response, body) {
    //         // var data = JSON.parse(body)
    //         bot.sendMessage(147121534, response)
    //
    //     })

    request('https://console.pool.bitcoin.com/srv/api/user?apikey=6d7f9039-ba2b-4c56-90a6-b0bfafd75049', function (error, response, body) {
        var data = JSON.parse(body)
                bot.sendMessage(147121534, data.bitcoinBalance)
    });
});


// public static final String UserApikey = "27490671-e869-47dd-aabd-193e30d7d881";
// public static final String WorkerApikey = "27490671-e869-47dd-aabd-193e30d7d881";
//
// public static final String UserApikey1 = "6d7f9039-ba2b-4c56-90a6-b0bfafd75049";
// public static final String WorkerApikey1 = "6d7f9039-ba2b-4c56-90a6-b0bfafd75049";
// 147121534
var job = new Cron( '0 * * * * *', function () {
    bot.sendMessage(147121534, `test`)
});

job.start();