const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = async (bot, role) => {

    const now = new Date();
    const heure = now.getHours();
    const roles = role.name
    const minute  = now.getMinutes();
    const rolesID = role.id
    const logs = await db.get('setlogs')
    const actv = await db.get('setlogs' + role.guild.id)
    const embed = new Discord.EmbedBuilder()
        .setColor(color)
        .setTitle(`**Role créé : ${roles}**`)
        .setDescription(`🎭 Role créé : ${roles}`)
        .setFooter({ text: `ID du role : ${rolesID} • Aujourd'hui à ${heure}:${minute}`})
    const modlogs =  await db.get("modlogs" + role.guild.id)
    if(actv == false) return;
    if(modlogs == true) {
        role.guild.channels.cache.get(logs).send({ embeds: [embed]})
    }
}