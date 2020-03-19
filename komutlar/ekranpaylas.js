const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  if (!message.member.voiceChannel) return message.channel.send(new Discord.RichEmbed().setDescription("Lütfen Ses Kanalına Giriniz.").setColor('RANDOM'));
  else message.channel.send(new Discord.RichEmbed().setDescription(`**[Click to Screen Share](https://discordapp.com/channels/${message.guild.id}/${message.member.voiceChannel.id})**`).setColor('RANDOM'));
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ekranpaylaş'],
  permLevel: 0
};

exports.help = {
  name: 'ekranaç',
  description: 'ScreenShare Command',
};