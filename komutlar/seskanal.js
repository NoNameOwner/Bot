const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let kanal = args.slice(0).join(' ');
    let guild = message.guild;
    if (message.member.hasPermission("MANAGE_CHANNELS") || message.author.id == "360322989515866112") 
      {
        if (kanal.length < 1) return message.reply('Lütfen Oluşturacağım Kanalın Adını Yaz');
  message.delete();
  guild.createChannel(kanal, 'voice');
  message.channel.send(kanal + "** Ses Kanalı Oluşturuldu**")
      }else{
        return message.reply('Üzgünüm **MANAGE_CHANNELS** Yetkin Yok');
      }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ses-kanalı-aç', 'seskanalı'],
  permLevel: 0
};

exports.help = {
  name: 'seskanalıac',
  description: 'Bir ses kanalı açar',
  usage: 'seskanalıa [İsim]'
};