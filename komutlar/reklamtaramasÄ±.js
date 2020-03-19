const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = (client, message, args) => {
  if (message.member.hasPermission("ADMINISTRATOR") || message.author.id == "360322989515866112") {
    const members = message.guild.members.filter(
      member =>
        member.user.presence.game &&
        /(discord|http|https|www.|.com|.net|.org|invite|İnstagram|Facebook|watch|Youtube|youtube|facebook|instagram)/g.test(
          member.user.presence.game.name
        )
    );
    const memberss = message.guild.members.filter(
      member =>
        member.user.username &&
        /(discord|http|https|www.|.com|.net|.org|invite|İnstagram|Facebook|watch|Youtube|youtube|facebook|instagram)/g.test(
          member.user.username
        )
    );
    const embed = new Discord.RichEmbed()
      .addField(
        "Oynuyor Mesajı Reklam İçeren Kullanıcılar",
        members
          .map(member => `${member} = ${member.user.presence.game.name}`)
          .join("\n") || "Kimsenin oynuyor mesajı reklam içermiyor."
      )
      .addField(
        "Kullanıcı Adı Reklam İçeren Kullanıcılar",
        memberss
          .map(member => `${member} = ${member.user.username}`)
          .join("\n") || "Kimsenin kullanıcı adı reklam içermiyor."
      )
      .setColor("RANDOM");
    message.channel.send({ embed });
  } else {
    message.reply("Üzgünüm **ADMINISTRATOR** Yetkin Yok").then(msg => msg.delete(5000));
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["reklam-ara", "reklamara", "reklamtaraması", "reklamtara"],
  permLevel: 0
};

exports.help = {
  name: "reklam-taraması",
  category: "moderasyon",
  description:
    "Kullanıcıların Oynuyor mesajındaki ve Kullanıcı adlarındaki reklamları tarar.",
  usage: "reklam-taraması"
};
