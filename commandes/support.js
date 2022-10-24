const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = {

    name: "support",
    description: "invite dans le serveur",
    permission: "Aucune",
    category: "acceuil",
    dm: true,

    async run(bot, interaction) {

        try {

            const embed = new Discord.EmbedBuilder()
                .setColor(color)
                .setTitle('rejoindre le serveur')
                .setURL('https://discord.gg/uVMRPzR8Zp')

            await interaction.reply({ embeds: [embed]});
        } catch (error) {
            console.log(`❌ une erreur s'est produite sur la commande support`, error)
            return interaction.reply({content: '❌ Une erreur s\'est produite produite', ephemeral: true})        }
    }
}