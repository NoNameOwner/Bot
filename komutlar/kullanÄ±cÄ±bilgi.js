const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params, args) => {
  
if (args[0] == message.mentions.member.first()){
  
}
  
    if (message.channel.type !== "group") {
        var Durum = message.author.presence.status;
        var Durm = (Durum == "online" ? (0x00AE86) : (Durum == "offline" ? (0x808080) : (Durum == "idle" ? (0xFFFF00) : (Durum == "dnd" ? (0xFF0000) : (0x00AE86)))))
        var durm = (Durum == "online" ? ("Aktif") : (Durum == "offline" ? ("Çevrim Dışı") : (Durum == "idle" ? ("Idled") : (Durum == "dnd" ? ("Rahatsız Etmeyin") : ("Boş")))))
      const kullanicibilgimk = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor(Durm)
      .setTimestamp()
      .addField("Adı:", message.author.username + '#' + message.author.discriminator)
      .addField("ID'si:", message.author.id)
      .addField("Kayıt Tarihi (İngilizce):",message.author.createdAt)
      .addField("Durum:", durm)
      .addField("Oynadığı Oyun:", message.author.presence.game ? message.author.presence.game.name : 'Boş')
      .addField("Bot'mu", message.author.bot ? '\n Evet' : 'Hayır')
      return message.channel.sendEmbed(kullanicibilgimk);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kbilgi'],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcıbilgi',
  description: '',
  usage: 'kullanıcıbilgi'
};