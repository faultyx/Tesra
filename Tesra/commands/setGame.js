const ID = module.require("../settings/credentials.json");
exports.run = async (bot, message, args) => {
  if (message.author.id !== ID.ownerID) {
    return message.reply("OWNER ONLY");
  } else {
  let gameName = args.join(" ");
  if(!gameName) return message.reply("**Supply some text**");
  bot.user.setActivity(gameName);
  message.channel.send(`**${gameName}** is now my playing game.`);
}
};
