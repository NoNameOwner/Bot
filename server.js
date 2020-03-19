const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const moment = require("moment");
const chalk = require("chalk");
const fs = require("fs");
const db = require("quick.db");
const express = require("express");
const app = express();
const http = require("http");
const ytdl = require("ytdl-core");
const ms = require("ms");
const args = require("args");

require("./util/eventLoader")(client);

const queue = new Map();

var prefix = ayarlar.prefix;

let owner = "460472615585316874";




client.on("ready", () => {
  console.log(`BOT: ${client.user.username} adı ile giriş yaptı!`);
});

    app.get("/", (request, response) => {
    console.log(`Botu Canlandırdım Efendim`);
    response.sendStatus(200);
    });
    app.listen(process.env.PORT);
    setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
    }, 280000);

client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.indexOf(prefix) !== 0) return;
});

client.on("message", msg => {

  if (msg.content === prefix + "botping" || msg.content === prefix + "ping") {
    msg.channel.send("Ping Durumum: " + client.ping);
  }

  if (msg.content === prefix + "avatarım") {
    msg.channel.sendEmbed(
      new Discord.RichEmbed()
        .setDescription(`Avatarınız:`)
        .setImage(`${msg.author.avatarURL} `)
        .setColor("RANDOM")
    );
  }
  
  if (msg.content.startsWith(prefix + "çekiliş")) {
    msg.channel.send("Kazanan Kişi Açıklanıyor Lütfen Bekleyin...")
    .then(nmsg => nmsg.edit("Kazanan Kişi Açıklanıyor Lütfen Bekleyin..."))
    .then(nmsg => nmsg.edit("Kazanan Kişi Açıklanıyor Lütfen Bekleyin..."))
    .then(nmsg => nmsg.edit("Kazanan Kişi Açıklanıyor Lütfen Bekleyin..."))
    .then(nmsg => nmsg.edit("Kazanan Kişi Açıklanıyor Lütfen Bekleyin..."))
    .then(nmsg => nmsg.edit(`Çekilişi Kazanan: ${msg.guild.members.random().user}`))
  }
  
  if(msg.content.startsWith(prefix + "top10sunucu")) {
                   let icon = client.user.displayAvatarURL;
                  if (client.guilds.size < 10) return msg.channel.send(':warning: Bu Komutu Kullana Bilmek İçin Botun En Az 10 Sunucuda Olması Lazım.')
 
                   const top = client.guilds.sort((a,b)=>a.memberCount-b.memberCount).array().reverse()
                   const embed = new Discord.RichEmbed()
                   .setColor("RANDOM")                  
                   .setThumbnail(icon)
                   .setTimestamp()
                   .addField(`1-) **${top[0].name}**`, ` » ${top[0].memberCount} Kullanıcı Bulunmaktadır.`)
                   .addField(`2-) **${top[1].name}**`, ` » ${top[1].memberCount} Kullanıcı Bulunmaktadır.`)
                   .addField(`3-) **${top[2].name}**`, ` » ${top[2].memberCount} Kullanıcı Bulunmaktadır.`)
                   .addField(`4-) **${top[3].name}**`, ` » ${top[3].memberCount} Kullanıcı Bulunmaktadır.`)
                   .addField(`5-) **${top[4].name}**`, ` » ${top[4].memberCount} Kullanıcı Bulunmaktadır.`)
                   .addField(`6-) **${top[5].name}**`, ` » ${top[5].memberCount} Kullanıcı Bulunmaktadır.`)
                   .addField(`7-) **${top[6].name}**`, ` » ${top[6].memberCount} Kullanıcı Bulunmaktadır.`)
                   .addField(`8-) **${top[7].name}**`, ` » ${top[7].memberCount} Kullanıcı Bulunmaktadır.`)
                   .addField(`9-) **${top[8].name}**`, ` » ${top[8].memberCount} Kullanıcı Bulunmaktadır.`)
                   .addField(`10-) **${top[9].name}**`, ` » ${top[9].memberCount} Kullanıcı Bulunmaktadır.`)
                   msg.channel.send(embed);
           }
  
  if (msg.content === prefix + "sunucubilgi") {
    const embed = new Discord.RichEmbed()
      .addField("Sunucu Adı", msg.guild.name, true)
      .addField("Sunucu Sahibi", msg.guild.owner, true)
      .addField("Toplam Üye Sayısı", msg.guild.memberCount, true)
      .addField("AFK Durma Süresi", msg.guild.afkTimeout, true)
      .setFooter("Sunucu Oluşturulma Tarihi " + msg.guild.createdAt)
      .addField("Sunucu Resmi", "↓↓↓↓↓↓↓↓↓↓↓↓")
      .setImage(msg.guild.iconURL)
      .setColor("RANDOM");

    return msg.channel.sendEmbed(embed);
  }

  
  if (msg.content === prefix + "muteyardım") {
    const embed = new Discord.RichEmbed()
      .setTitle("Mute Yardım")
      .setDescription("")
      .addField("**En Önemli Kısım:**"," **Muteli**diye Rol Oluşur Sakın Rolun Ayarlarıyla Oynamayın")
      .addField("**Nasıl Kullanılır:**","\nno.mute = Birilerini Muteler (Örn : no.mute @Kullanıcı 1/d/h/s) \n[d = Gün × h = Saat × s = Saniye] \nno.unmute = Mutelenlerin Mütesini Açar (Örn : no.unmute @Kullanıcı)");

    return msg.channel.sendEmbed(embed);
  }

  if (msg.content === prefix + "botbilgi") {
    const embed = new Discord.RichEmbed()
      .addField("Bot Sahibi", `<@${owner}>`, true)
      .addField("Botun Sunucusu", "Sunucuya Katılmak İçin : **[Tıkla](Senin İnvite Linkin)**")
      .addField("Version", "1.1.0", true)
      .addField("Toplam Sunucu Sayısı", client.guilds.size.toLocaleString(), true)
      .addField("Toplam Kullanıcı Sayısı",client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString(),true
      )
      .addField("Toplam Kanal Sayısı", client.channels.size, true)
      .setColor("RANDOM");

    return msg.channel.sendEmbed(embed);
  }
  if (msg.content === prefix + "mute") {
    const args = msg.content
      .slice(prefix.length)
      .trim()
      .split(/ +/g);
    if (args[0] == "officalrole") {
      db.set(`role_${msg.guild.id}`, "role").then(i => {
        msg.channel.send("✅").then(msg => msg.delete(5000));
      });
    }
  }
});




client.on("message", (msg, guild, id) => {
  db.fetch(`reklam_${msg.guild.id}`).then(i => {
    if (i == "acik") {
      const reklam = [
        "discord",
        "http",
        ".com",
        ".net",
        ".org",
        "İnstagram",
        "Facebook",
        "watch",
        "Youtube",
        "youtube",
        "facebook",
        "instagram",
        "https",
        "www.",
        "www",
        "com",
        "net",
        "org"
      ];
      if (reklam.some(word => msg.content.includes(word))) {
        try {
          if (!msg.member.hasPermission("MANAGE_MESSAGES")) {
            msg.delete();
            return msg.reply("Reklam Yazma! ⚠").then(msg => msg.delete(3000));
          }
        } catch (err) {
          console.log(err);
        }
      }
    } else if (i == "kapali") {
    }
    if (!i) return;
  });
});



client.on("message", (msg, guild, id) => {
  db.fetch(`everyone_${msg.guild.id}`).then(i => {
    if (i == "acik") {
      const reklam = ["@everyone", "everyone", "@here", "here"];
      if (reklam.some(word => msg.content.includes(word))) {
        try {
          if (!msg.member.hasPermission("MANAGE_MESSAGES")) {
            msg.delete();
            return msg.reply("Everyone Yazma! ⚠").then(msg => msg.delete(3000));
          }
        } catch (err) {
          console.log(err);
        }
      }
    } else if (i == "kapali") {
    }
    if (!i) return;
  });
});




client.on("message", async (message, guild, member) => {
  let i = await db.fetch(`saas_${message.guild.id}`)
  if (i === 'açık'){
    if (message.content.toLowerCase() == "sa"){
      message.reply("Aleyküm Selam")
    }
        if (message.content.toLowerCase() == "s.a"){
      message.reply("Aleyküm Selam")
    }
  }
});




//KÜFÜR ENGEL SİSTEMİ
client.on("message", (msg, guild, id) => {
  db.fetch(`kufur_${msg.guild.id}`).then(i => {
    if (i == "acik") {
      const kufur = [
        "oç",
        "amk",
        "ananı sikiyim",
        "ananisikm",
        "piç",
        "awk",
        "amk",
        "sikim",
        "sikiyim",
        "orospu çocuğu",
        "piç kurusu",
        "kahpe",
        "orospu",
        "mal",
        "sik",
        "yarrak",
        "aq",
        "aqu",
        "amık",
        "yarram",
        "sikimi ye",
        "mq",
        "aq",
        "acü",
        "amq"
      ];
      if (kufur.some(word => msg.content.includes(word))) {
        try {
          if (!msg.member.hasPermission("MANAGE_MESSAGES")) {
            msg.delete();
            return msg
              .reply("Küfür Etmemelisin! ⚠")
              .then(msg => msg.delete(3000));
          }
        } catch (err) {
          console.log(err);
        }
      }
    } else if (i == "kapali") {
    }
    if (!i) return;
  });
});




client.on('guildMemberAdd', async (member, guild, message) => {

let role = await  db.fetch(`otorolisim_${member.guild.id}`)
 let otorol = await db.fetch(`autoRole_${member.guild.id}`)
 let i = await db.fetch(`otorolKanal_${member.guild.id}`)
 if (!otorol || otorol.toLowerCase() === 'yok') return;
else {
 try {
 

  if (!i) return 

  member.addRole(member.guild.roles.get(otorol))
    var embed = new Discord.RichEmbed()
    .setDescription(`**Sunucuya Yeni Katılan** \`${member.user.tag}\` **Kullanıcısına** \`${role}\` **Rolü verildi.**`)
    .setColor('RANDOM') 
    .setFooter(`NoName Bot Otorol Sistemi`)
     member.guild.channels.get(i).send(embed)  } catch (e) {
 console.log(e)
}
}

});





//KOMUTLAR DOSYASINI TANIMA
const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "Düzeltildi")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "Düzeltildi")));
});

client.login("TOKEN");
