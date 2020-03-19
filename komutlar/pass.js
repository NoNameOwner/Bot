const Discord = require('discord.js');
const client = new Discord.Client();
var randomstring = require('randomstring');

exports.run = (client, message) => {
              if(message.channel.type == "dm")  return;
  if(message.channel.type !== "text") return;
    message.reply("DM'ni Konrol Et").then(msg => msg.delete(5000));
     message.author.sendMessage(
            randomstring.generate({
            length: 12,
            charset: 'alphabetic'
              
}))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rastgeleşifre', 'rastgeleşifre', 'rastgeleşifre', 'rastgeleşifre'],
  permLevel: 0
};

exports.help = {
  name: 'rastgeleşifre',
  description: 'Random Şifre Oluşturur',
  usage: 'rastgeleşifre'
};
