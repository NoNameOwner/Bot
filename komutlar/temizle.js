const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let oki = args.slice(0).join(' ');

if (message.member.hasPermission("MANAGE_MESSAGES") || message.author.id == "360322989515866112") {
  if (oki.length < 1) return message.reply('Bir Sayı Belirt. [100 Veya Daha Az]');

  message.delete();
  message.channel.bulkDelete(oki);  
  message.channel.send(oki + ' Adet Mesaj Silindi').then(msg => msg.delete(5000));
  
}else{
  message.channel.send('Üzgünüm **MANAGE_MESSAGES** Yetkin Yok').then(msg => msg.delete(5000));
}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sil'],
  permLevel: 0
};

exports.help = {
  name: 'temizle',
  description: 'Chattaki Yazıları Siler',
  usage: 'temizle'
};