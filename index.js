
const Discord = require('discord.js')
Intents = Discord.Intents;
const client = new Discord.Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGE_REACTIONS]});
client.login("token")
client.on('ready', async () =>  {
  console.log(`Logged in as ${client.user.tag}!`);
const row = new Discord.MessageActionRow()
.addComponents(
    new Discord.MessageButton()
        .setCustomId('fr')
        .setLabel('Français')
        .setStyle('SUCCESS')
        .setEmoji('🇫🇷'),
    new Discord.MessageButton()
        .setCustomId('en')
        .setLabel('English')
        .setStyle('SUCCESS')
        .setEmoji('🇺🇸'),
);
const embed = new Discord.MessageEmbed()
.setTitle("Choose your language");
const guild = await client.guilds.cache.get("serveur / guild id")
const channel = await guild.channels.cache.get("channel / salon id")

let embedhelpmsg = await channel.send({
    components: [row],
    embeds: [embed]
});
});
client.on('interactionCreate', i => {
    				if (i.customId === 'fr') {
                        i.member.roles.add(["role 1","role commun"])
                       
                    }
    				if (i.customId === 'en') {
                        i.member.roles.add(["role 2","role commun"])
                        
                    }
})
