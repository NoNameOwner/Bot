const Discord = require('discord.js');
const { Command } = require('discord.js-commando');
const { stripIndents } = require('common-tags');
const slots = ['🍇', '🍊', '🍐', '🍒', '🍋','🍍','🍓','🍉'];

exports.run = function(client, message) {

	var slot1 = slots[Math.floor(Math.random() * slots.length)];
	var slot2 = slots[Math.floor(Math.random() * slots.length)];
	var slot3 = slots[Math.floor(Math.random() * slots.length)];
  var slot4 = slots[Math.floor(Math.random() * slots.length)];
	
	if (slot1 === slot2 && slot1 === slot3 && slot1 === slot4) {
		message.channel.send(stripIndents`
		${slot1} : ${slot2} : ${slot3} : ${slot4}

		Kazandın
		`); 
	} else {
		message.channel.send(stripIndents`
		${slot1} : ${slot2} : ${slot3} : ${slot4}

		Kaybettin
		`);	
  }
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['megaslots'],
  permLevel: 0
};

exports.help = {
  name: 'megalots', 
  description: 'Slots oyunu oynatır',
  usage: 'megaslots'
};