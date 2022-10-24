const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = async (bot, message) => {

    const link = await db.get("antilink" + message.author.id)
    const wl = await db.get(`wl_${message.guild.id}_${message.author.id}`)
    if(link == true) {
        if(wl == true) return;
            if(message.content.includes("https://")) {
                const embed = new Discord.EmbedBuilder()
                    .setColor(color) 
                    .setDescription(`⭕ ${message.author.tag} tu n'as pas le droit de poster de lien dans ce serveur !`)
                message.delete()
                message.channel.send({ embeds: [embed]})
        }else return;
    }
    if(message.content === `<@${bot.user.id}>`) {


        const embed = new Discord.EmbedBuilder()
            .setColor(color)
            .setDescription('mon **prefix** sur ce serveur est **/**')
        
        message.channel.send({ embeds: [embed]})
    }

    //commandes incomplete
    if(message.content === "/") {

        const embed = new Discord.EmbedBuilder()
            .setColor(color)
            .setDescription('❌ impossible d\'executer votre commande car elle a surement été mal formulé')

        message.channel.send({ embeds: [embed]})
    }
}