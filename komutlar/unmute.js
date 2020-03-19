const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args, db) => {
  
if (message.member.hasPermission("BAN_MEMBERS") || message.author.id == "360322989515866112") {
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Kullanıcı Bulunamadı");
  let muterole = message.guild.roles.find(`name`, "Muteli");
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }

  await(tomute.removeRole(muterole.id));
  message.reply("Mutesi Açıldı");

}else{
  message.channel.send('Üzgünüm **BAN_MEMBERS** Yetkin Yok').then(msg => msg.delete(5000));
}

}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: 'unmute',
  description: '',
  usage: 'unmute [@User]'
};