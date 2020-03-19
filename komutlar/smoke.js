const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
  let agabee = message.author.username
if (mesaj.length < 1) return message.reply(':speech_balloon: Birşey Yaz');
            let users = message.author.id;
  message.channel.send(`<@${users}>` + ' Aga Be Üzülme');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yakyak'],
  permLevel: 0
};

exports.help = {
  name: 'smoke',
  description: 'Aga Bee',
  usage: 'smoke [Mesaj]'
};
