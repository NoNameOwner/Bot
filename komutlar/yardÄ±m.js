const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let pages = [
        "**Kullanıcı Komutları:**\n\n  \nno.avatarım = Avatarını Gösterir \nno.çekiliş = Üyeler Arasında Çekiliş Yapar \nno.yaz = Bota Yazı Yazdırır \nno.wasted = Avatarınıza Wasted Efekti Koyar \nno.rastgeleşifre = Şifre Oluşturur \nno.dm = Birine Özel Mesaj Atar \nno.gizlidm = Mesaj Attıktan Sonra Kimin Attığı Gözükmez Ve Bot Geri Bildirim Vermez \nno.smoke = Mesajınıza Aga Be Der \nno.sorusor = Soru Sorarsınız Cevaplar \nno.slots = Slot Oynarsınız \nno.megaslots = Daha Zor Slot Oynarsınız \nno.kolayslots = En Kolay Slot Oynarsınız \nno.yazıtura = Yazı Tura Oynarsınız \nno.stresçarkı = Stres Çarkı Çevirir \nno.atasözü = Ata Sözü Söyler \nno.emojiyazı = Yazınızı Emoji Halinde Yazar \nno.vur = Birine Vurur \nno.hesapla = İşlem Yazarsanız Cevaplar \nno.boks = Boks Makinesine Vurur \nno.mcb = Minecraft Başarımları Yazdırırsınız \nno.mcs Minecraft Skininizi Gösterir \nno.acıtansöz = Acıtan Söz Söyler",
        "**Ana Komutlar**\n\n  \nno.yardım = Komutları Gösterir \nno.şarkıyardım = Şarkı Açmak İçin Yardım Eder \nno.sunucubilgi = Sunucu Hakkındaa Bilgi Verir \nno.botping = Botun Pingini Gösterir \nno.botbilgi = Bot Hakkında Bilgi Verir \nno.istatistik = Botun İstatistiklerini Gösterir \nno.roller = Sunucudaki Rolleri Gösterir \nno.top10sunucu = Botun Olduğu Sunuculardan En İyilerini Gösterir.",
        "**Admin Komutları**\n\n  \nno.temizle = Mesajları Siler \nno.kick = Birini Atar \nno.ban = Birini Banlar \nno.seskanalıac = Ses Kanalı Açar \nno.yazıkanalıac = Yazı Kanalı Açar \nno.küfürengel = Küfürleri Engeller \nno.reklamtaraması = Üyelerin Adlarındaki Veya Oynuyor Kısmındaki Reklamları Bulur \nno.reklamengel = Link Atmayı Engeller \nno.oylama = Oylama Yapar \nno.everyoneengel = Everyone Engeli \nno.muteyardım \nno.otorol = Sunucuya Girenlere Otomatik Rol Verir \nno.yetkiver = Kullanıcıya Seçtiğiniz Yetkiyi Verir Ve Kulanıcının Adı Söyle Olur [YetkiAdı] Sizin Belirlediğiniz Ad",
              ];
  let page = 1;

  const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail('')
    .setFooter(`Sayfa ${page} / ${pages.length}`)
    .setDescription(pages[page-1])
  message.channel.send(embed).then(msg => {

  msg.react('⬅')
  .then(r => {
    msg.react('➡')

      //Filter
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;

      const backwards = msg.createReactionCollector(backwardsFilter, { time: 100000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 100000 });

      forwards.on('collect', r => {
        if(page === pages.length) return;
        page++;
        embed.setDescription(pages[page-1]);
        embed.setColor('RANDOM')
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })
      backwards.on('collect', r => {
        if(page === 1) return;
        page--;
        embed.setColor('RANDOM')
        embed.setDescription(pages[page-1]);
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })

    })
  })
};


exports.conf = {
enabled: true,
guildOnly: true,
aliases: ["y"],
permLevel: 0
};

exports.help = {
name: 'yardım',
description: 'Yardım Listesini Gösterir',
usage: 'yardım'
};