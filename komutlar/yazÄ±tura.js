const Discord = require('discord.js');
const chancejs = require('chance');
const chance = new chancejs();

const cevaplar = [
	"YAZI TURA: __TURA__",
	"YAZI TURA: __YAZI__"
];

exports.run = function(client, message) {
	
	var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
	
	if (cevap === "YAZI TURA: __YAZI__") {
		
		 const embedyazı = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setDescription(cevap)
		.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/6/64/1TL_obverse.png")
		message.channel.send(embedyazı);
		
	} else if (cevap === "YAZI TURA: __TURA__") {
		
		const embedtura = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setDescription(cevap)
		.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/c/cd/1TL_reverse.png")
		message.channel.send(embedtura);
		
	}
		

};  

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'yazıtura', 
  description: 'Yazı Tura atar.',
  usage: 'yazıtura'
};