const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = {

    name: "membercount",
    description: "Donne le nombre de membre du sevreur",
    permission: "Aucune",
    dm: true,

    async run(bot, interaction) {

        try {
       
            const embed = new Discord.EmbedBuilder()
                .setColor(color)
                .setDescription(`nous sommes ${interaction.guild.memberCount}`)
        } catch (error) {
            console.log(`❌ une erreur s'est produite sur la commande membercount`, error)
            return interaction.reply({content: '❌ Une erreur s\'est produite produite', ephemeral: true})
        }
    }
}