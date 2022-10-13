const Discord = require('discord.js')
const intents = new Discord.IntentsBitField(3276799)
const bot = new Discord.Client({intents})

module.exports = async (bot, member) => {

    const bye = bot.guilds.cache.get('982649315640094731').channels.cache.get('1027092155023503430')

    const embed = new Discord.EmbedBuilder()
        .setColor('Yellow')
        .setTitle('**__ UN MEMBRE A QUITTER __**')
        .setThumbnail(member.displayAvatarURL({ format: "png" }))
        .addFields({ name: "bye", value: `${member} vient de quitter le serveur nous esperons bienot le revoir`})

    bye.send({ embeds: [embed]});
}