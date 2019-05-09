const ID = module.require("../settings/credentials.json");
exports.run = async (bot, message, args) => {
  if (message.author.id !== ID.ownerID) {
    return message.reply("**OWNER ONLY**");
  } else {
  await message.channel.send("**Shutting down**");
  // shut down the bot
  process.exit(1);
}
};
