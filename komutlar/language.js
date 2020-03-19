const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message, args) => {

  if (message.member.hasPermission('ADMINISTRATOR') || message.author.id == "360322989515866112"){

  if(args[0] == "en"){
    
      let i = await db.set(`language_${message.guild.id}`, `en`)
            message.channel.send("Language Set to English");
  }
    
      if(args[0] == "tr"){
    
      let i = await db.set(`language_${message.guild.id}`, `tr`)
      message.channel.send("Dil Türkçe Olarak Ayaralandı");
  }
      if(args[0] == "reset"){
    
      db.delete(`language_${message.guild.id}`,)
       message.channel.send("Language Reset");
        
  }
    
  }else{
    message.channel.send('Üzgünüm **ADMINISTRATOR** Yetkin Yok').then(msg => msg.delete(5000));
  }

};
  
  
    
exports.conf = {
    enabled: false,
    guildOnly: true,
    aliases: ['language'],
    permLevel: 3
}

exports.help = {
    name: 'language',
    description: '',
    usage: 'language'
}