const db = require("quick.db");
const Discord = require("discord.js");
exports.run = async (client, message, args) => {
    if (message.member.hasPermission("ADMINISTRATOR") || message.author.id == "360322989515866112") {
        if (!args[0])
    return message.channel.send(
      "Aç Yada Kapat Yazmalısın [Örn : no.küfürengel aç Yada ] no.küfürengel kapat"
    );
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send("Üzgünüm **MANAGE_MESSAGES** Yetkin Yok");
  if (args[0] == "aç") {
    db.set(`kufur_${message.guild.id}`, "acik").then(i => {
      message.channel.send(
        "✅ Küfur Engel Başarıyla Açıldı! **MANAGE_MESSAGES** Yetkisine Sahip Olanların Küfürü Engellenmicektir."
      ).then(msg => msg.delete(5000));
    });
  }
  if (args[0] == "kapat") {
    db.set(`kufur_${message.guild.id}`, "kapali").then(i => {
      message.channel.send("✅ Küfür Engel Kapatıldı");
    });
  
};
  
}else
{
    message.channel.send('Üzgünüm **ADMINISTRATOR** Yetkin Yok').then(msg => msg.delete(5000));
}
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kfrengel", "küfürengel"],
  permLevel: 0
};

exports.help = {
  name: "küfürengelleme",
  description: "Küfürleri Engeller",
  usage: "küfürengelleme"
};
