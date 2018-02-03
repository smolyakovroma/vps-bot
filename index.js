const TelegramBot = require('node-telegram-bot-api')
const os = require('os')
var cron = require('cron').CronJob;
var request = require('request')

const  bot = new TelegramBot('502048915:AAG6w13xh0tAvYmhIHtFBighP0T_yDXwfAw', {polling:true})

var status_miner1 = false;
var status_miner2 = false;

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
var job = new cron( '0 * * * * *', function () {
    // request('https://console.pool.bitcoin.com/srv/api/user?apikey=27490671-e869-47dd-aabd-193e30d7d881', function (error, response, body) {
    //     var data = JSON.parse(body)
    //     if (data.hashrateNowTerahashes > 0 && status_miner1 == false){
    //         status_miner1 = true;
    //         bot.sendMessage(147121534, `Miner 1 ВКЛЮЧЕН`)
    //     }else if(data.hashrateNowTerahashes == 0 && status_miner1 == true){
    //         status_miner1 = false;
    //         bot.sendMessage(147121534, `Miner 1 ВЫКЛЮЧЕН`)
    //     }
    // });
    //
    // request('https://console.pool.bitcoin.com/srv/api/user?apikey=6d7f9039-ba2b-4c56-90a6-b0bfafd75049', function (error, response, body) {
    //     var data = JSON.parse(body)
    //     if (data.hashrateNowTerahashes > 0 && status_miner2 == false){
    //         status_miner2 = true;
    //         bot.sendMessage(147121534, `Miner 2 ВКЛЮЧЕН`)
    //     } else if(data.hashrateNowTerahashes == 0 && status_miner2 == true){
    //         status_miner2 = false;
    //         bot.sendMessage(147121534, `Miner 2 ВЫКЛЮЧЕН`)
    //     }
    // });
});

job.start();