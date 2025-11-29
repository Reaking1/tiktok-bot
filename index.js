import { TikTokLiveConnection } from "tiktok-live-connector";
import chalk from "chalk";
import config from "./config/default"


//Create the connection
let tiktokUsername = config.tiktokUsername;
let tiktokLive = new TikTokLiveConnection(tiktokUsername,{
    enableWebsocketFallBack: true
});


//--log when connected---
tiktokLive.connect()
.then(state => {
    console.log(chalk.green(`🎉 Connected to @${tiktokUsername}'s LIVE!`));
        console.log(chalk.blue(`👀 Viewers: ${state.viewerCount}`));
})
.catch(err => console.error("❌ Failed to connect:", err));


//--Read Gift Events---
tiktokLive.on("gift", data => {
    console.log(chalk.magenta(`[GIFT] ${data.uniqueId} sent ${data.giftName}`));

    autoThankGift(data);
});


//-- Reads Chat comments --
tiktokLive.on("chat", data => {
    console.log(chalk.yellow(`[CHAT] ${data.uniqueId}: ${data.comment}`))
})


//--Like Event--
tiktokLive.on("like", data => {
    console.log(chalk.cyan(`[LIKE] ${data.uniqueId} liked the stream`))
});

//-----------------
//AUTO-REPLY LOGIC
//-----------------

function autoRespondToChat(message) {
    const text = message.comment.toLowerCase();


    if(text.includes("hi") || text.inculdes("hello") || text.includes("Awe")  || text.inculdes("What up man")) {
        console.log(chalk.green(`🤖 BOT: Hello @${message.uniqueId}!`))
    }

    if(text.includes("like")) {
         console.log(chalk.green(`🤖 BOT: Don't forget to LIKE the stream ❤`));
    }

    if(text.includes("gift")) {
          console.log(chalk.green(`🤖 BOT: Gifts help support the stream 🙏`));
    }

    //Add more resonses later
} 

// ----------------------------------
// 📌 AUTO THANK GIFTS
// ----------------------------------
function autoThankGift(data) {
    console.log(chalk.green(`🤖 BOT: Thank you @${data.uniqueId} for the ${data.giftName}! ❤️`));
}