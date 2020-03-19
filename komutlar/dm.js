const Discord = require('discord.js');

exports.run = (client, message, args, command) => {

            let mentos = message.mentions.members.first();
            if (!mentos) return message.channel.send('Birini Etiketle (Örn : @User)')

            let oks = args.slice(1).join(" ")
            if (!oks) return message.channel.send(':speech_balloon: Lütfen Mesaj Yaz')
  
            let yazan = message.author.id;
            mentos.send(`<@${yazan}>` + ' ' + oks)
            message.channel.send("Dm Başarıyla Atıldı! Gönderilen Kişi " + mentos).then(msg => {msg.delete(5000)
              });
          
              message.delete();
            
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['direct'],
  permLevel: 0
};

exports.help = {
  name: 'dm',
  description: 'DM Mesaj Atar',
  usage: 'dm [Mesaj]'
};