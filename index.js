const Discord = require("discord.js");
const client = new Discord.Client();
const token = "NDODA
const music = require('discord.js-music-v11')
const voiceChannel = ('message.member.voiceChannel');
var prefix = ";";
var mention = "@401725412973215744"

var memberCount = client.users.size;

var servercount = client.guilds.size;


client.on("ready", () => {
console.log('En ligne')
setInterval(function(){client.user.setGame("私はあなたが好きです ","http://twitch.tv/bot")}, 10000);

setTimeout(function(){setInterval(function(){client.user.setGame(";aide | Commandes","http://twitch.tv/bot")}, 10000)}, 10000)
});

client.on('message', message => {
if(message.content === prefix + "aide") {
	var help_embed = new Discord.RichEmbed()		.setColor('#ff00ce')
		.setTitle('Menu Help')
.setFooter('千ΛĿΛ千ΣĿ & ReDy')
		.addField('__Utilités__\n', '\n**;aide**  Ouvre le menu help\n**;ping**  Ping Pong :ping_pong:\n**;stats**  Stats du bot (membres et serveurs)\n**;test**  Message test\n**;emojis**  Donne la liste d\'emojis\n__Informations__\n**;infosbot**  Affiche les informations du bot\n**;don**  Pour faire un don [Merci :wink:]\n__Aléatoire__\n**;flip**  Pile ou face ?\n**;roll ~~5~~d~~9~~** Lance un dés')
message.channel.send(help_embed)
} 
});


client.on('message', message => {
if (message.content === ";stats") {

    let m = " ";

    m += '**je suis en compagnie de** `'+ memberCount +'` **membres**\n';

    m += '**je suis présent dans** `'+ servercount+'` **serveurs** \n';

    message.channel.sendMessage(m).catch(console.log); 

} 
});


client.on('message', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    if (message.content.startsWith(prefix + 'ping')) {
        message.channel.sendMessage('Pong :ping_pong: ! Le ping est de `' + `${Date.now() - message.createdTimestamp}` + ' ms`');
    }
});

client.on('message', message => {
if(message.content === prefix + "test") {
    message.channel.send("(｡>﹏<｡) T...T.Test !!")
}
});

client.on('message', message => {
if(message.content === prefix + "infosbot") {
	var bot_embed = new Discord.RichEmbed()
		.setColor('#ff00ce')
.setFooter('千ΛĿΛ千ΣĿ & ReDy')
		.addField('Bonjour Onii-chan !!', 'Tu vas bien ?')
   .addField('Je m\'appelle αкυηαмαтαтα', 'Et toi?')
   .addField('Je suis programé en JavaScript.','Je ne suis pas un robot (/ω＼)')
   .addField('Tu vas m\'aider à grandir ','(｡>﹏<｡)')
    .addField('Mon ping ', + `${Date.now() - message.createdTimestamp}` + ' ms ')
message.channel.send(bot_embed)
} 
});

client.on('message', message => {
if(message.content === prefix + "don") {
	var don_embed = new Discord.RichEmbed()
		.setColor('#ff00ce')
		.setTitle('Menu Don')
.setFooter('千ΛĿΛ千ΣĿ & ReDy')
		.addField('**Paypal**','[Clique](paypal.me/Akunamatatabot)')
   .addField("**Patreon**","[Clique](https://www.patreon.com/Akunamatata)")
message.channel.send(don_embed)
} 
});

client.on('message', message => {
if (message.content === ";emojis")
{ const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
message.channel.send(emojiList); }
});


client.on('message', message => {
const messageWords = message.content.split(' ');

  const rollFlavor = messageWords.slice(2).join(' ');

  if (messageWords[0] === ';roll') {

    if (messageWords.length === 1) {

      

      return message.reply(

        (Math.floor(Math.random() * 6) + 1) + ' ' + rollFlavor

      );

    }


    let sides = messageWords[1]; 

    let rolls = 1;

    if (!isNaN(messageWords[1][0] / 1) && messageWords[1].includes('d')) {

      

      rolls = messageWords[1].split('d')[0] / 1;

      sides = messageWords[1].split('d')[1];

    } else if (messageWords[1][0] == 'd') {

      // !roll d20

      sides = sides.slice(1);

    }

    sides = sides / 1; // convert to number

    if (isNaN(sides) || isNaN(rolls)) {

      return;

    }

    if (rolls > 1) {

      const rollResults = [];

      for (let i = 0; i < rolls; i++) {

        rollResults.push(Math.floor(Math.random()*sides)+1);

      }

      const sum = rollResults.reduce((a,b) => a + b);

      return message.reply(`[${rollResults.toString()}] ${rollFlavor}`);

    } else {

      return message.reply(

        (Math.floor(Math.random() * sides) + 1) + ' ' + rollFlavor

      );

    }
}

});

client.on('message', message => {
if (message.content === ";flip") {
    	var result = Math.floor((Math.random() * 2) + 1);
    	if (result == 1) {
    	message.channel.send("Pile !");
    	} else if (result == 2) {
    		message.channel.send("face !");
    	}
    }

});

client.on("message", message => {
  if (message.author.bot) return;  
  const args = message.content.split(" ");
  let command = args[0];
  command = command.slice(prefix.length);
  if(!message.content.startsWith(prefix)) return; 
  if(message.channel.type === 'dm') return message.reply("**Il est fortement deconseillé d'utiliser les commandes en messages privés** :x:"); 

});





client.login(token)
