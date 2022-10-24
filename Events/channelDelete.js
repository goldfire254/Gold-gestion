const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color


module.exports = async (bot, channel) => {

    const now = new Date();
    const heure = now.getHours();
    const salon = channel.name
    const minute  = now.getMinutes();
    const salonID = channel.id
    const logs = await db.get('setlogs')
    const actv = await db.get('setlogs' + channel.guild.id)
    const embed = new Discord.EmbedBuilder()
        .setColor(color)
        .setTitle(`**RAIDLOGS**`)
        .setDescription(`🗑 salon textuel supprimer : ${salon}`)
        .setFooter({ text: `ID du salon : ${salonID} • Aujourd'hui à ${heure}:${minute}`})
    const del_logs =  await db.get("raidlogs" + channel.guild.id)
    if(actv == false) return;
    if(del_logs == true) {
        channel.guild.channels.cache.get(logs).send({ embeds: [embed]})
    }
}