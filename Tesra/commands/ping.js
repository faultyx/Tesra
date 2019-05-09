exports.run = async (bot, message, args) => {
  let msg = await message.channel.send("Pinging")
  msg.edit(`Pong! **${msg.createdTimestamp - message.createdTimestamp}ms**`);
};
