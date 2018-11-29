const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online`);
    bot.user.setPresence({game: { name: "ultra-h.com | !info", type: 0 }});

});

bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(ch => ch.name === '👋welcome');
    if (!channel) return;
    channel.send(`Hey ${member}! Welcome to the official ultra host discord server. Do not forget to read the channel topics! You may ask for help in <#489467701648031754> or introduce and talk with other members in <#489465446366707725> Channel. Enjoy your stay 😊😊😊`);
  });

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(cmd === `${prefix}info`){
        return message.channel.send("Hello! I am the official Discord bot of **Ultra Host** created by Socket#7043. Type `!cmds` to access currently available commands. I am currently in development, more features will be added in near future. **Do not forget to visit my home :smile: at** https://ultra-h.com");
    }
});

bot.login(botconfig.token);
