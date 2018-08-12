// packages
const Discord = require("discord.js");
// settings folder // credentials.json that includes our token
const settings = require("./settings/credentials.json");

// config // settings folder  // config.json that includes our game, status
const config = require("./settings/config.json");

// defining client for Discord //
const bot = new Discord.Client();

// defning owner id + [prefix]
const prefix = config.prefix;
const ownerID = config.ownerID;

bot.on("ready", () => {
  // you can set to dnd,idle,offline or online
  bot.user.setStatus("online");
  // you can set to WATCHING,LISTENING OR PLAYING
  bot.user.setActivity(config.activity, {type: config.activityType});
});

// Listener Event(s)
bot.on("message", async message => {

// Variables
let msg = message.content.toLowerCase() || message.content.toUpperCase();
let args = message.content.slice(prefix.length).trim().split(" ");
let cmd = args.shift().toLowerCase()

// Return functions
if (message.author.bot) return;
if (!message.content.startsWith(prefix)) return; // only replying to its prefix

//cmd handler
try {

delete require.cache[require.resolve(`./commands/${cmd}.js`)];
let commandFile = require(`./commands/${cmd}.js`);
commandFile.run(bot, message, args);
console.log(`${message.author.username} ran command ${cmd}`);

} catch (e) {

  console.log(e.stack);

}

});

//login
bot.login(settings.botToken);
console.log(`READY MESSAGE HERE`);
