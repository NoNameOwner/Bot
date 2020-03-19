const db = require("quick.db");
const Discord = require("discord.js");
exports.run = async (client, message, args) => {
    if (message.member.hasPermission("ADMINISTRATOR") || message.author.id == "360322989515866112") {
        if (!args[0])
    return message.channel.send(
      "Aç Yada Kapat Yazmalısın [Örn : no.reklamengel aç Yada ] no.reklamengel kapat"
    );
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send("Üzgünüm **MANAGE_MESSAGES** Yetkin Yok");
  if (args[0] == "aç") {
    db.set(`reklam_${message.guild.id}`, "acik").then(i => {
      message.channel.send(
        "✅ Reklam Engel Başarıyla Açıldı! **MANAGE_MESSAGES** Yetkisine Sahip Olanların Reklamları Engellenmicektir."
      ).then(msg => msg.delete(5000));
    });
  }
  if (args[0] == "kapat") {
    db.set(`reklam_${message.guild.id}`, "kapali").then(i => {
      message.channel.send("✅ Reklam Engel Kapatıldı");
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
  aliases: ['reklamengelleyici'],
  permLevel: 0
};

exports.help = {
  name: "reklamengel",
  description: "Küfürleri Engeller",
  usage: "reklamengel"
};
