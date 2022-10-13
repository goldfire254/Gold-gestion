const Discord = require('discord.js')
const intents = new Discord.IntentsBitField(3276799)
const bot = new Discord.Client({intents})

module.exports = async (bot,member) => {

    const bienvenue = bot.guilds.cache.get('982649315640094731').channels.cache.get('1026569231879376956')

    const embed = new Discord.EmbedBuilder()
        .setColor('Yellow')
        .setTitle('**__ UN MEMBRE A REJOINS __**')
        .setThumbnail(member.displayAvatarURL({ format: "png" }))
        .addFields({ name: "salut", value: `${member} vient de rejoindre le serveur !`})

    bienvenue.send({ embeds: [embed]});
}