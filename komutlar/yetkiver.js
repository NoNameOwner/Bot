const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  
 if(message.member.hasPermission("ADMINISTRATOR") || message.author.id == "360322989515866112"){

   //
  let username = args.slice(0).join(' ');
  if (username.length < 1) return message.reply('Lütfen Rol Vereceğin Kullanıcıyı Etiketle').then(msg => msg.delete(5000));
  
  let rolsname = args.slice(1).join(' ');
  if (rolsname.length < 1) return message.reply("Lütfen Kullanıcıya Vereceğin Rolun Adını Etiketle").then(msg => msg.delete(5000));
   
  let setnicknames = args.slice(2).join(' ');
  if (setnicknames.length < 1) return message.reply("Lütfen Kullanıcının Yeni Adını Yaz (Vereceğin Rolün Adından Fazla Varsa Bazen Rol Yanlış Verilmiş Olabilir)").then(msg => msg.delete(5000));
  //
   
   
   
  var toname = message.guild.member(message.mentions.users.first());
  var rolname = message.mentions.roles.first().name
  var usernames = args[2]
  
  
  var rol = message.guild.roles.find(`name`, rolname);
  
  
  if(!rol){
    try{
  message.channel.send(`**${rolname}** Adlı Bu Rolu Bulamadım. (Yetki Vermediyse Botun Rolunu Üste Al)`).then(msg => msg.delete(5000));
      
    }catch(e){
      console.log(e.stack);
    }
  }
    
  await(toname.addRole(rol.id))
  toname.setNickname(`[${rolname}] ${usernames}`)
  message.channel.send(`${toname} Kullanıcısının Adı Değiştirildi, Rolu Verildi. (Yetki Vermediyse Botun Rolunu Üste Al)`).then(msg => msg.delete(5000));
     
  
 }else{
    message.channel.send('Üzgünüm **ADMINISTRATOR** Yetkin Yok').then(msg => msg.delete(5000));
  }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yetkiver',
  description: '',
  usage: 'yetkiver'
};
