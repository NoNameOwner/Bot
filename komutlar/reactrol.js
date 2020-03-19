const Discord = require('discord.js');
const db = require("quick.db");
exports.run = async(client, message, args) => {
  
  
    if(message.member.hasPermission("ADMINISTRATOR") || message.author.id == "360322989515866112"){
      
    }else{
      message.channel.send('Üzgünüm **ADMINISTRATOR** Yetkin Yok').then(msg => msg.delete(5000));
    }
  let okss = args.slice(0).join(' ');
if (okss.length < 1) return message.reply('Lütfen **no.reactrol** *msgid* *rolid* *emojiid* veya **no.reactrol** *sıfırla*').then(msg => msg.delete(5000));
  
  if(args[0] == "msgid"){
    
    let msgId = args[1];

    let msgids = msgId
    await db.set(`reactmsgid_${message.guild.id}`,msgids)
    message.channel.send(`Mesaj ID'niz ${msgId} Olarak Ayarlandı.`).then(msg => msg.delete(5000));
  }
  
    if(args[0] == "rolid"){
    
    let rolId = args[1];

    let rolids = rolId
    await db.set(`reactrolid_${message.guild.id}`,rolids)
    message.channel.send(`Rol ID'niz ${rolId} Olarak Ayarlandı.`).then(msg => msg.delete(5000));
  }
  
    if(args[0] == "emojiid"){
    
    let emojiId = args[1];

    let emojiids = emojiId
    await db.set(`reactemojiid_${message.guild.id}`,emojiids)
    message.channel.send(`Emoji ID'niz ${emojiId} Olarak Ayarlandı.`).then(msg => msg.delete(5000));
  }
  
  if(args[0] == "sıfırla"){
    message.channel.send(`Tüm Ayarlar Sıfırlandı`).then(msg => msg.delete(5000));
    db.delete(`reactmsgid_${message.guild.id}`)
    db.delete(`reactrolid_${message.guild.id}`)
    db.delete(`reactemojiid_${message.guild.id}`)
  }
    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rcrol'],
  permLevel: 0
};

exports.help = {
  name: 'reactrol',
  description: '',
  usage: 'reactrol'
};