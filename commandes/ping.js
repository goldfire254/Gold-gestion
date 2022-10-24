const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = {

    name: "ping",
    description: "montre la latence",
    permission: "Aucune",
    dm: true,

    async run(bot, interaction) {

        try {

            const embed = new Discord.EmbedBuilder()
                .setColor(color)
                .addFields({ name: 'BOT', value: `${Date.now() - interaction.createdTimestamp}ms.`, inline: true})
                .addFields({ name: "API", value: `${Date.now() - interaction.createdTimestamp}ms`, inline: true})

            await interaction.reply({ embeds: [embed]});
        } catch (error) {
            console.log(`❌ une erreur s'est produite sur la commande ping`, error)
            return interaction.reply({content: '❌ Une erreur s\'est produite produite', ephemeral: true})        
        }
    }
}