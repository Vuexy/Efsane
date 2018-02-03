const Discord = require("discord.js");
const client = new Discord.Client();
const translate = require('google-translate-api');
const ayarlar = require('./ayarlar.json')
const moment = require('moment');

const prefix = 'e!';

client.on('ready', () => {
  console.log("BOT: AGG sunucusu için hazırım!");
  client.user.setActivity(`e!yardım | AGG\'yi`, { type: "WATCHING"});
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'giris-cikis');
  if (!channel) return;
  let embed = new Discord.RichEmbed()
  .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
  .setDescription(`${member} sunucuya katıldı! **AGG**'ye hoşgeldin!`)
  .setFooter("Giriş-Çıkış")
  .setTimestamp()
  channel.send(embed);
});

client.on('guildMemberRemove', member => {
  const channel = member.guild.channels.find('name', 'giris-cikis');
  if (!channel) return;
  let embed = new Discord.RichEmbed()
  .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
  .setDescription(`${member} sunucudan gitti! Görüşürüz...`)
  .setFooter("Giriş-Çıkış")
  .setTimestamp()
  channel.send(embed);
});


// ---------------------------------------------------------------------------------

client.on('message', message => {
  if(message.author.bot) return;
  if(message.content.indexOf(prefix) !== 0) return;
  const args = message.content.substring(prefix.length).split(" ");
  const command = args.shift().toLowerCase();

   if(command === "ping") {
 let embed = new Discord.RichEmbed()
   .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
     .setDescription('Hey! Benim **' + client.ping + ' ms** pingim var!');
    message.channel.send(embed);
  }
    if(command === "avatar") {
     let avatar = new Discord.RichEmbed()
    .setImage(message.author.avatarURL)
    let member = message.mentions.members.first()
    if(!member)
    return message.channel.send(avatar);
         const avat = new Discord.RichEmbed()
         .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
         .setImage(member.user.avatarURL)
         return message.channel.send(avat);
 }
   if(command === "sorusor") {
    var cevaplar = [
      'Evet', 'Hayır', 'Sanırım', 'Kesinlikle'
    ];
    // if(message.channel.id === "324213139866648576" || message.channel.id === "310486176920371211")return message.channel.send(":no_entry_sign:Yasaklı komut. Bu kanalda soru soramazsın.")
    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)]
    message.channel.send(cevap.toString())
   }
         if(command === "anketaç") {
    if(!message.member.hasPermission("MANAGE_NICKNAMES"))
    return (message.channel.send("**Mesajları Yönetme** yetkisine sahip değilsin!"))
    const anketYap = args.join(" ");
    message.delete().catch(O_o=>{});
    let embed = new Discord.RichEmbed()
    .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
    .setDescription(anketYap)
    .setTimestamp()
    .setFooter('Efsane')
    message.channel.send(embed)
    .then(function (message) {
      message.react("✔")
      message.react("❌")
    }).catch(function() {
      //Something
     });
}
 if(command === "duyuru") {
const anketYap = args.join(" ");
message.delete().catch(O_o=>{});
let embed = new Discord.RichEmbed()
.setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
.setFooter('Efsane')
.setTimestamp()
.setDescription(anketYap)
.setTimestamp()
message.channel.send(embed)
.then(function (message) {
}).catch(function() {
//Something
});
}
     if (command === 'temizle') {
   message.channel.bulkDelete(100);
   let embed = new Discord.RichEmbed()
   .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
   .setDescription("**100** adet mesaj başarıyla silindi!");
   message.channel.send(embed);
 }
 if(command === "sunucubilgi") {
  const Discord = require('discord.js')
  const kullanicibilgimk = new Discord.RichEmbed()
  .setAuthor('Sunucu Bilgileri', message.guild.avatarURL)
  .setThumbnail(message.guild.iconURL)
  .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
  .setTimestamp()
  .addField('Sunucu İsmi', message.guild.name, true )
  .addField('Sunucu ID', message.guild.id, true)
  .addField('Varsayılan Kanal',message.guild.defaultChannel, true)
  .addField('Sunucu Bölgesi',message.guild.region, true)
  .addField('Sunucu Kurucusu',message.guild.owner, true)
  .addField('Toplam Kullanıcı', message.guild.members.size, true)
  .addField('Toplam kanal', message.guild.channels.size, true)
  .addField('AFK kanalı',message.guild.AFKChannel,true)
  .addField('Doğrulama Seviyesi',message.guild.verificationLevel, true)
  .addField('Oluşturulma Tarihi', message.guild.createdAt, true)
  return message.channel.send(kullanicibilgimk);
}
          if (command === "çeviri") {
        let translateme = args.slice(0).join(" ")
        translate(translateme, { to: ayarlar.translate }).then(res => {
            message.channel.send("", { embed: new Discord.RichEmbed().setTitle("Çeviri").setColor("#00C5FF").setDescription("Yazılan dil - ** " + res.from.language.iso + "**\nÇevirilen dil - ** " + ayarlar.translate + "**\nYazılan Kelime - **" + translateme + "**\nÇevirilen Kelime :arrow_down:```" + res.text + "```").setFooter("Powered by Google") })
        }).catch(err => {
            message.channel.send(":x: An error has occurred. Details: " + err)
        });
}
        if (command === "süre") {

require('moment-duration-format');

        message.channel.send("**" + moment.duration(client.uptime).format(' D [gün], H [saat], m [dakika], s [saniye]') + "**")
    }
});

 // ---------------------------------------------------------------------------------

   client.on('message', message => {
  if (message.content.toLowerCase() === 'selam') {
     let embed = new Discord.RichEmbed()
 .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
 .setDescription('Aleyküm selam! **AGG**\'ye hoşgeldin!');
   message.channel.send(embed);
   message.react("🇦")
   message.react("🇸")
  }
    if (message.content.toLowerCase() === 'sa') {
     let embed = new Discord.RichEmbed()
 .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
 .setDescription('Aleyküm selam! **AGG**\'ye hoşgeldin!');
   message.channel.send(embed);
   message.react("🇦")
   message.react("🇸")
  }
    if (message.content.toLowerCase() === 'selamın aleyküm') {
     let embed = new Discord.RichEmbed()
 .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
 .setDescription('Aleyküm selam! **AGG**\'ye hoşgeldin!');
   message.channel.send(embed);
   message.react("🇦")
   message.react("🇸")
  }
    if (message.content.toLowerCase() === 'sea') {
     let embed = new Discord.RichEmbed()
 .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
 .setDescription('Aleyküm selam! **AGG**\'ye hoşgeldin!');
   message.channel.send(embed);
   message.react("🇦")
   message.react("🇸")
  }
 });

// ---------------------------------------------------------------------------------

client.login('NDA4NjI0MTMxMTk4NjgxMDg5.DVSwaQ.rZdN5mDj29whXz99P4HAl__HNOE');