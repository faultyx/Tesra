module.exports.run = (bot, message, args) => {
  let sayMsg = args.join(" ");
  if(!sayMsg) return message.reply("Supply some text!");
  message.channel.send(sayMsg);
};
