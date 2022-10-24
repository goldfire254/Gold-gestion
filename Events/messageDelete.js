const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = async (bot, message) => {

    const user = message.author.tag
    const message_content = message.content
    const salon = message.channel.name
    const logs = await db.get('setlogs')
    const actv = await db.get('setlogs' + message.guild.id)
    const embed = new Discord.EmbedBuilder()
        .setColor(color)
        .setDescription(`${user} à supprimer un message dans ${salon} \nle message était : ${message_content}`)
    const message_logs = await db.get("messagelogs" + message.guild.id)
    if(logs == false) return;
    if(message_logs == true) {
        message.guild.channels.cache.get(logs).send({ embeds: [embed]})
    }
}