const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply(':speech_balloon: Yazmam için herhangi bir şey yazmalısın.');
  message.delete();
  message.channel.send(mesaj);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['say', 'söyle', 'yazdır'],
  permLevel: 0
};

exports.help = {
  name: 'yaz',
  description: 'İstediğiniz Şeyi Bota Yazdırır',
  usage: 'yaz [Mesaj]'
};