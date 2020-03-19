const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

//• Çalışma Süresi   :: ${duration}
exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("asciidoc", `= İSTATİSTİKLER =
• Bellek Kullanımı :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
• Kullanıcılar     :: ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}
• Sunucular        :: ${client.guilds.size.toLocaleString()}
• Kanallar         :: ${client.channels.size.toLocaleString()}
• Discord.JS sürüm :: v${Discord.version}`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['istatisik', 'stats'],
  permLevel: 0
};

exports.help = {
  name: 'istatistik',
  description: 'Botun İstatistiklerini Gösterir.',
  usage: 'istatistik'
};