
const os = module.require('os');
const Discord = module.require("discord.js");
const { version } = module.require("discord.js");

exports.run = async (bot, message, args) => {

const arch = os.arch();
const used = process.memoryUsage().heapUsed / 1024 / 1024;

let totalSeconds = process.uptime();
let seconds = Math.floor(totalSeconds % 60);
let days = Math.floor((totalSeconds % 31536000) / 86400);
let hours = Math.floor((totalSeconds / 3600) % 24);
let mins = Math.floor((totalSeconds / 60) % 60);
let ping = bot.ping;
message.channel.send(`**My Stats**:\nMem Usage: **${Math.round(used * 100) / 100} MB**\nUptime: **Days: ${days} | Hours: ${hours} | Minutes: ${mins} | Seconds: ${seconds}**\nNode: **${process.version}**\n Library: **v${version}**\nArch: **${arch}**\nPlatform: **${os.platform}**\nServers: **${bot.guilds.size}**\nUsers: **${bot.users.size}**\nChannels: **${bot.channels.size}**\nPing: **${ping}ms**\n`);

};
