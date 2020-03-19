const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let botid = "606185941547089974"
  if (message.mentions.members.first() == `<@${botid}>`) {
    message.channel.send("Ben Ölümsüzüm Bunu Unutma ☠");
    
  }else{
    if (!message.guild) {
        const ozelmesajuyari = new Discord.RichEmbed()
            .setColor(0xFF0000)
            .setTimestamp()
            .setAuthor(message.author.username, message.author.avatarURL)
            .addField('⚠ Uyarı ⚠', '`kafasınasık` Adlı Komutu Öel Mesajlarda Kullanamazsın.');
        return message.author.sendEmbed(ozelmesajuyari);
    }
    let guild = message.guild
    let reason = args.slice(1).join(' ');
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('Kimin Kafasınası Kacağını Yazmalısın.').catch(console.error);
    message.channel.send('Kafasına Sıkılıyor....')
        .then(nmsg => nmsg.edit('https://goo.gl/91Y2az'))
        .then(nmsg => nmsg.edit('https://goo.gl/91Y2az'))
        .then(nmsg => nmsg.edit('https://goo.gl/91Y2az'))
        .then(nmsg => nmsg.edit('https://goo.gl/fWHUqt'))
        .then(nmsg => nmsg.edit('https://goo.gl/fWHUqt'))
        .then(nmsg => nmsg.edit('https://goo.gl/fWHUqt'))
        .then(nmsg => nmsg.edit('https://goo.gl/fWHUqt'))
        .then(nmsg => nmsg.edit('https://goo.gl/fWHUqt'))
        .then(nmsg => nmsg.edit('https://goo.gl/91Y2az'))
        .then(nmsg => nmsg.edit('https://goo.gl/91Y2az'))
        .then(nmsg => nmsg.edit(`${Random[kafasınasık]}`));
    var Random = [
        'Tam İsabet',
        'HeadShot Aferim İyi İş',
        'Iskaladın Tekrar Dene.',
        'Adam Öldü Napıyon',
    ];
    var kafasınasık = Math.floor(Math.random() * Random.length);
  }
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['sık'],
    permLevel: 0
};

exports.help = {
    name: 'vur',
    description: 'İstediğiniz kişinin kafasına sıkar.',
    usage: 'vur [kullanıcı]'
};