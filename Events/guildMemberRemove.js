const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color
const logs = config.logs
const bye = config.bye

module.exports = async (bot, member) => {

    const leave = await db.get("leave" + member.guild.id)
    const salon = await db.get("leavechannel")
    if(leave == false) return;
    if(leave == true) {
        const embed = new Discord.EmbedBuilder()
            .setColor(color)
            .setTitle('**__ UN MEMBRE A QUITTER __**')
            .setThumbnail(member.displayAvatarURL({ format: "png" }))
            .addFields({ name: "bye", value: `${member} vient de quitter le serveur nous esperons bienot le revoir`})

        member.guild.channels.cache.get(salon.id).send({ embeds: [embed]});
    }
}