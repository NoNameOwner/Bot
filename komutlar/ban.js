const Discord = require('discord.js');

exports.run = (client, message, args, command) => {
  if (message.member.hasPermission("BAN_MEMBERS") || message.author.id == "360322989515866112") {
    
      let mesaj = args.slice(0).join(' ');
      if (mesaj.length < 1) return message.reply('Lütfen Birini Etiketle (Örn : @User)');
        var member= message.mentions.members.first();
        member.ban().then((member) => {
            message.channel.send(member.displayName + " Başarıyla Banladın");
        }).catch(() => {
          let users = message.author.id;
          if (message.mentions.members.first() == `<@${users}>`) {
          message.channel.send("Aynn Kendini Banla 🎉 Çok Zekisin");   
          }else{
              message.channel.send("Onun Banlayamam Rolu Senden Üstün");   
          }
        });
  
}else{
    message.channel.send('Üzgünüm **BAN_MEMBERS** Yetkin Yok').then(msg => msg.delete(5000));
}

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kalıcıkov', 'kalıcıat'],
  permLevel: 0
};

exports.help = {
  name: 'ban',
  description: 'İstediğiniz Kişiyi Bota Banlatır',
  usage: 'ban @User'
};