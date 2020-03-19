const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let kanal = args.slice(0).join(' ');
    let guild = message.guild;
    if (message.member.hasPermission("MANAGE_CHANNELS") || message.author.id == "360322989515866112"){
      if (kanal.length < 1) return message.reply('Lütfen Oluşturacağım Kanalın Adını Yaz');
  message.delete();
  guild.createChannel(kanal, 'text');
  message.channel.send(kanal + "** Yazı Kanalı Oluşturuldu**");
    }else{
      message.reply('Üzgünüm **MANAGE_CHANNELS** Yetkin Yok');
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yazı-kanalı-aç', 'yazıkanalı','metinkanalı','metin-kanalı'],
  permLevel: 0
};

exports.help = {
  name: 'yazıkanalıac',
  description: 'Bir ses kanalı açar',
  usage: 'yazıkanalıac [İsim]'
};