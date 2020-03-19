const Discord = require('discord.js');
exports.run = function(client, message, args) {
  
  let playerName = args.slice(0).join(' ');
  if (playerName.length < 1) return message.reply('Lütfen Minecraft Premium Adınızı Yazınız');
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle(`*${playerName}* Adlı Kullanıcının Skini`)
  .setDescription(`**${playerName}** Adlı Skini Görüyorsunuz. \nDaha Büyük Görmek İçin Resme Tıklayın!`)
  .setFooter("Minecraft Skin Gösteriliyor.", `https://minotar.net/helm/${playerName}/100.png`)
  .setThumbnail(`https://minotar.net/armor/body/${playerName}/100.png`)
  .setTimestamp()
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['mcs'],
  permLevel: 0
};

exports.help = {
  name: 'mcskin',
  description: 'skin',
  usage: 'mcskin [kullanıcıadı]'
};