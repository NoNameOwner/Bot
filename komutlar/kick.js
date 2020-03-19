const Discord = require('discord.js');
  const embed = new Discord.RichEmbed()
exports.run = (client, message, args, command) => {

  if (message.member.hasPermission("KICK_MEMBERS") || message.author.id == "360322989515866112") {
      let mesaj = args.slice(0).join(' ');
      if (mesaj.length < 1) return message.reply('Lütfen Birini Etiketle (Örn : @User)');
        var member= message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send(member.displayName + " Başarıyla Kickledin");
        }).catch(() => {
          let users = message.author.id;
          if (message.mentions.members.first() == `<@${users}>`) {
          message.channel.send("Aynn Kendini Kickle 🎉 Çok Zekisin");   
          }else{
          message.channel.send("Onu Kickleyemem Rolu Senden Üstün");   
          }
        });
  
}else{
  message.channel.send('Üzgünüm **KICK_MEMBERS** Yetkin Yok').then(msg => msg.delete(5000));
}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['at', 'kov'],
  permLevel: 0
};

exports.help = {
  name: 'kick',
  description: 'İstediğiniz Kişiyi Bota Kickletir',
  usage: 'kick @User'
};