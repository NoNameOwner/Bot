const Discord = require('discord.js');

const cevaplar = [
    "»Evet",
    "»Hayır",
    "»Belki",
    "»Olabilir",
    "»Daha sonra tekrar sor",
    "»İmkansız"
];


const cevaplar1 = [
    "»[Bu Bilgiyi Kafamdan Uydurdum 🤖]",
    "»[Sanırım Sallıyorum 🤖]",
    "»[Doğru Olabilir 🤖]",
    "»[Ben Botum Nerden Bilicem 🤖]",
    "»[Kardeş Yanlış Bilgi Olabilir 🤖]",
    "»[Hmmm 🤖]"
];


exports.run = function(client, message, args) {
    var soru = args.join(' ');
  
    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
    var cevap1 = cevaplar1[Math.floor(Math.random() * cevaplar1.length)];

    if(!soru) return message.reply('Bir soru belirt. [Örn: no.sorusor <soru>]')
    else message.channel.send(cevap + ", " + cevap1)

};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'sorusor', 
  description: 'Sihirli Soruları Cevaplar',
  usage: 'sorusor <soru>'
};