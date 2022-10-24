const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = {

    name: "serverlist",
    description: "Donne la liste des serveur du bot",
    permission: Discord.PermissionFlagsBits.Administrator,
    dm: true,

    async run(bot, interaction) {
        let nombre = 1
        const list = bot.guilds.cache.map(guild => `**${nombre++} : ${guild.name}**` + " :" + "\n" + guild.id).join("\n")
        const embed = new Discord.EmbedBuilder()
            .setColor(color)
            .setTitle('**LISTE DES SERVER DU BOT**')
            .setDescription(list)
        interaction.reply({ embeds: [embed]})
    }
}