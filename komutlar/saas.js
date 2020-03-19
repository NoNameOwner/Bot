const db = require("quick.db");
const Discord = require("discord.js");
exports.run = async (client, message, args) => {
    if (message.member.hasPermission("ADMINISTRATOR") || message.author.id == "360322989515866112") {
       
      if(!args[0]) return message.channel.send("Lütfen **saas** *aç* veya *kapat* Yazınız");
      
      if(args[0] == 'aç'){
        db.set(`saas_${message.guild.id}`, 'açık')
        message.channel.send("**Sa-As** Başarıyla Açıldı");
      }
      
      if(args[0] == 'kapat'){
        db.set(`saas_${message.guild.id}`, 'kapat')
        message.channel.send("**Sa-As** Başarıyla Kapatıldı");
      }
    
}
else
{
    message.channel.send('Üzgünüm **ADMINISTRATOR** Yetkin Yok').then(msg => msg.delete(5000));
}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['saas'],
  permLevel: 0
};

exports.help = {
  name: "saas",
  description: "Küfürleri Engeller",
  usage: "saas"
};
