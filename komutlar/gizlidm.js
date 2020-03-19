const Discord = require('discord.js');

exports.run = (client, message, args, command) => {
                let mentos = message.mentions.members.first();
            if (!mentos) return message.channel.send('Birini Etiketle (Örn : @User)')

            let oks = args.slice(1).join(" ")
            if (!oks) return message.channel.send(':speech_balloon: Lütfen Mesaj Yaz')
  
            let yazan = 'GizliDM = '
            
            mentos.send(yazan + oks)
          
              message.delete();
            

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gdm'],
  permLevel: 0
};

exports.help = {
  name: 'gizlidm',
  description: 'DM Mesaj Atar',
  usage: 'gizlidm [Mesaj]'
};