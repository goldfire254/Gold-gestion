const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json');
const interactionCreate = require('./interactionCreate');
const color = config.color
const logs = config.logs
const sanction = config.sanction
module.exports = async (bot, member) => {

    const join = await db.get("join" + member.guild.id)
    const salon = await db.get('joinchannel')
    const rl = await db.get('autorole')
    if(join == false) return;
    if(join == true) {
        const embed = new Discord.EmbedBuilder()
            .setColor(color)
            .setTitle('**__ UN MEMBRE A REJOINS __**')
            .setThumbnail(member.displayAvatarURL({ format: "png" }))
            .addFields({ name: "salut", value: `${member} vient de rejoindre le serveur !`})

        member.roles.add(rl.id)
        member.guild.channels.cache.get(salon.id).send({ embeds: [embed]});
    }
}