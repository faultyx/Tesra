const ms = module.require("ms");
exports.run = async (bot, message, args) => {

let NTimer = args[0];

if(!args[0]){
return message.channel.send(`**Please enter a period of time, with either \`s,m,h,d or w\` at the end!**`);
}

if(args[0] <= 0){
return message.channel.send(`**Please enter a period of time, with either \`s,m,h,d or w\` at the end!**`);
}

message.channel.send(`**Timer has been set for**: ` + `${ms(ms(NTimer), {long: true})}`);

setTimeout(function(){
message.channel.send(`**Timer has ended, it was set for**: ${ms(ms(NTimer), {long: true})}` + message.author.toString());

}, ms(NTimer));

}
