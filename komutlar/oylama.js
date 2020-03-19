const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let user = message.author.id;
    if (message.member.hasPermission("ADMINISTRATOR") || message.author.id == "360322989515866112") {
   message.delete();

   let question = args.join(' ');

   let user = message.author.username

   if (!question) return message.channel.sendEmbed(

     new Discord.RichEmbed()
       .setFooter(`<@${user}>`, message.author.avatarURL)
     .addField(`:pencil2: Yazı Yazmalısın :x:`, `:syringe:`)).then(m => m.delete(5000));

     message.channel.sendEmbed(

       new Discord.RichEmbed()


       .setColor("RANDOM")
       .setThumbnail(message.author.avatarURL)
       .setTimestamp()
       .setFooter(`<@${user}>`, message.author.avatarURL)

       .addField(`**Oylama**`, `**${question}**`)).then(function(message) {

         message.react('✅');

         message.react('❌');

       });

}else
{
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
  name: 'oylama',
  description: 'Oylama Yapar.',
  usage: 'oylama'
};