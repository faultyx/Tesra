module.exports.run = async (bot, message, args) => {
  let msg = await message.channel.send("Pinging");
  msg.edit(`Pong! **${bot.ping}ms**`);
};
