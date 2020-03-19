const Discord = require("discord.js");
const bot = new Discord.Client();
const ffmpeg = require("ffmpeg");
const ayarlar = "./ayarlar.json";
const prefix = ayarlar.prefix;



var fenomen = "http://fenomen.listenfenomen.com/fenomen/128/icecast.audio";
var metro   = "http://17773.live.streamtheworld.com/METRO_FM_SC";
var power   = "http://powerfm.listenpowerapp.com/powerfm/mpeg/icecast.audio";
var slowtr  = "https://radyo.dogannet.tv/slowturk";
var joyturk = "http://17733.live.streamtheworld.com/JOY_TURK_SC";
var mydonese = "http://10053.live.streamtheworld.com:443/RADIO_MYDONOSEAAC_SC"






exports.run = function (bot, message, args) {
  
  if (message.author.id == "360322989515866112") {
    
  
		let mesaj = args.slice(0).join(' ');
if(!mesaj) {
	message.channel.send("Radyo Kanalların \n**[1] - Fenomen FM**\n**[2] - SlowTürk**\n**[3] - JoyTürk**\n**[4] - Metro**\n**[5] - MyDonese**\n**[6] - PowerTürk**\n\nÖrnek Kullanım = no.radyo 1\nKapatmak İçin = no.radyo kapat")
}		
   
    if (!message.member.voiceChannel) return message.reply("Radyo Komutunu Kullanabilmek İçin Lütfen Sesli Bir Kanala Giriş Yapınız.");
    
    
    if (mesaj === "1") {
        if (message.member.voiceChannel.join()
        .then(connection => {
            const dispatcher = connection.playStream(fenomen);
            return message.channel.send("**Fenomen** FM Oynatılıyor.");
        }));
        return;
    };
    
  
	
	    if (mesaj === "2") {
        if (message.member.voiceChannel.join()
        .then(connection => {
            const dispatcher = connection.playStream(slowtr);
            return message.channel.send("**SlowTürk** FM Oynatılıyor.");
        }));
        return;
    };
    
		if (mesaj === "3") {
        if (message.member.voiceChannel.join()
        .then(connection => {
            const dispatcher = connection.playStream(joyturk);
            return message.channel.send("**JoyTürk** FM Oynatılıyor.");
        }));
        return;
    };

    if(mesaj === "4") {
        if (message.member.voiceChannel.join()
        .then(connection => {
            const dispatcher = connection.playStream(metro);
            return message.channel.send("**Metro** FM Oynatılıyor.");
        }));
        return;
    };

    if(mesaj === "5") {
        if (message.member.voiceChannel.join()
        .then(connection => {
            const dispatcher = connection.playStream(mydonese);
            return message.channel.send("**MyDonese** FM Oynatılıyor.");
        }));
        return;
    };    

    if(mesaj === "6") {
        if (message.member.voiceChannel.join()
        .then(connection => {
            const dispatcher = connection.playStream(power);
            return message.channel.send("**PowerTürk** FM Oynatılıyor.");
        }));
        return;
    } 
	
	if (mesaj === "kapat") {
							const voiceChannel = message.member.voiceChannel;

			voiceChannel.leave()
	}
    }else{
  message.channel.send('Üzgünüm Bu Komutu Sadece Kurucum Kullanabilir. Sebepi İse Test Aşamasında Olmasıdır!').then(msg => msg.delete(5000));
}
};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};
exports.help = {
    name: "radyo",
    description: "Belirtilen Radyo istasyonunu bulunduğu kanalda paylaşır.",
    usage: "radyo <sayı>"
};