const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let okss = args.slice(0).join(' ');
const oks = message.guild.channels.find(r => r.name === okss);
    oks.delete();
  message.channel.send(okss + ' **Kanalını Sildim**').then(msg => msg.delete(7000));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kanalsildir'],
  permLevel: 0
};

exports.help = {
  name: 'kanalsil',
  description: 'Bir ses kanalı açar',
  usage: 'kanalsil [İsim]'
};