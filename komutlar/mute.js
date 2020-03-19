   const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args, db, msg) => {
  
  if (message.member.hasPermission("BAN_MEMBERS") || message.author.id == "360322989515866112") {
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Kullanıcı Bulunamadı");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Onu Muteleyemem");
  let muterole = message.guild.roles.find(`name`, "Muteli");
     
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Muteli",
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

  let mutetime = args[1];
  if(!mutetime) return message.reply("Bir Zaman Belirt");
  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> Susturuldu ${ms(ms(mutetime))}`);



  setTimeout(function(){
    tomute.removeRole(muterole.id);

    message.channel.send(`<@${tomute.id}> Eski Mutesi Açıldı`);
  }, ms(mutetime));
    
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
  name: 'mute',
  description: '',
  usage: 'mute [@User 1/d/h/m]'
};