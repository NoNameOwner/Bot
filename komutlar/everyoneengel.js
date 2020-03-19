const db = require("quick.db");
const Discord = require("discord.js");
exports.run = async (client, message, args) => {
    if (message.member.hasPermission("ADMINISTRATOR") || message.author.id == "360322989515866112") {
        if (!args[0])
    return message.channel.send(
      "Aç Yada Kapat Yazmalısın [Örn : no.everyoneengel aç Yada ] no.everyoneengel kapat"
    );
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send("Üzgünüm **MANAGE_MESSAGES** Yetkin Yok");
  if (args[0] == "aç") {
    db.set(`everyone_${message.guild.id}`, "acik").then(i => {
      message.channel.send(
        "✅ Everyone Engel Başarıyla Açıldı! **MANAGE_MESSAGES** Yetkisine Sahip Olanların Everyoneleri Engellenmicektir."
      ).then(msg => msg.delete(5000));
    });
  }
  if (args[0] == "kapat") {
    db.set(`everyone_${message.guild.id}`, "kapali").then(i => {
      message.channel.send("✅ Everyone Engel Kapatıldı");
    });
};
}
else
{
    message.channel.send('Üzgünüm **ADMINISTRATOR** Yetkin Yok').then(msg => msg.delete(5000));
}
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['everyoneengelleyici'],
  permLevel: 0
};

exports.help = {
  name: "everyoneengel",
  description: "Küfürleri Engeller",
  usage: "everyoneengel"
};
