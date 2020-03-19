const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const fs = require("fs");
exports.run = (client, message, params) => {
var Random = [
'**+Bu ne yapmış \n-Hırsızlık yapmış \n+Atın ateşe yansın \n +Peki bu ne yapmış? \n-Cinayet işlemiş \n+Atın ateşe yansın \n+Eee bu ne yapmış? \n-Çok sevmiş \n+Bırakın o zaten yanmış**',
'** Kulaklık:takılı \nSes:full \nGözler:kapalı \nHayaller:o zaten hep açık**',
'**Biz onlara kalbimizi verdik, oyuncak sandılar...**', 
'** +Karanlıktan korkar  mısın? \n -Hiç güneş görmedik ki karanlıktan korkalım**'
];
var atasozuver = Math.floor(Math.random()*Random.length);
const atasozu= new Discord.RichEmbed()
.setDescription(`${Random[atasozuver]}`)
.setColor("RANDOM")
message.channel.send(atasozu)
};
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['acıtanyazılar', 'canyakansözler', 'acıtansöz'],
permLevel: 0
};

exports.help = {
name: 'acıtansözler',
description: 'Bot Tarafından Rasgele Acıtan Sözler Gönderilir',
usage: 'acıtansözler'
};