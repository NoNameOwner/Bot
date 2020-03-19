const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
 var cevaplar = ['Boks Makinesi Sonucu : **Boks Makinesi Kırıldı = 3000** !', 
                 'Boks Makinesi Sonucu : **Çok Yavaş Vurdun = 100** !', 
                 'Boks Makinesi Sonucu : **Eh,Yani 900** !', 
                 'Boks Makinesi Sonucu : **1000** !',
                 'Boks Makinesi Sonucu : **Acayip Yavaş Vurdun = 50** !', 
                 'Boks Makinesi Sonucu : **Çok İyi! = 2000** !', 
                 'Boks Makinesi Sonucu : **Daha İyisini Yapabilirsin! = 700** !',
                 'Boks Makinesi Sonucu : **Daha İyisini Yapabilirsin!  = 550** !', 
                 'Boks Makinesi Sonucu : **Niye 1000 Değil = 999** !', 
                 'Boks Makinesi Sonucu : **Orta! = 1250** !', 
                 'Boks Makinesi Sonucu : **Yine İyisin  = 1150** !', 
                 'Boks Makinesi Sonucu : **Fena Değil  = 1200** !'
                ];
 var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)]; 
 const ping = new Discord.RichEmbed()
 .setColor(2828)
 .setDescription("🥊 " + cevap)
 return  message.channel.sendEmbed(ping)
};

exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: ['boks'],
   permLevel: 0
 };

 exports.help = {
   name: 'boks-makinesi',
   description: 'Boks makinesine vurur.',
   usage: 'boks-makinesi'
}