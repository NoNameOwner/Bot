const Discord = require('discord.js');



exports.run = async (client, message) => {
  let user = message.author.id;
  
    let textmsg = await message.channel.send({
        embed: {
            color: 0x00AE86,
            description: `<@${user}>` + ` Stres Çarkı Çevirdi!`,
            image: {
                url: "https://i.imgur.com/KJJxVi4.gif"
            }
        }
    });

    let bitiş = (Math.random() * (60 - 5 +1)) + 5;
    setTimeout(() => {
        textmsg.edit({
            embed: {
                color: "RANDOM",

                description: `<@${user}>` + `, Stres Çarkın ${bitiş.toFixed(2)} Saniye Döndü.`
            }
        });
    }, 5 * 1000);
};  

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'stresçarkı', 
  description: 'Sizin için bir stres çarkı çevirir.',
  usage: 'stresçarkı'
};