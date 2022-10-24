const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = async (bot, channel) => {

    //const heure
    const now = new Date();
    const heure = now.getHours();
    const minute  = now.getMinutes();
    //const db
    const create = await db.get("antichannel" + channel.guild.id)
    const logs = await db.get('setlogs')
    const actv = await db.get('setlogs' + channel.guild.id)
    const raid_logs =  await db.get("raidlogs" + channel.guild.id)
    const wl = await db.get(`wl_${channel.guild.id}_${channel.members.id}`)
    //const name 
    const salon_name = channel.name
    const salonID = channel.id
    //const embed
    const embed = new Discord.EmbedBuilder()
        .setColor(color)
        .setTitle(`**raidlogs**`)
        .setDescription(`📝 salon textuel créé : ${salon_name}`)
        .setFooter({ text: `ID du salon : ${salonID} • Aujourd'hui à ${heure}:${minute}`})
    //verification logs
    if(actv == false) return;
    if(raid_logs == true) {
        channel.guild.channels.cache.get(logs).send({ embeds: [embed]})
    }
    if(create == false) return;
    if(create == true) {
        if(wl == true) return;
            //envoie
            channel.delete()
    }
}