const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color
 
module.exports = {
    name: "dé",
    description: "choisi un nombre aléatoire",
    permission: "Aucune",
    dm: true,
    category: "fun",
    options: [
        {
            required: true,
            type: "number",
            name: "min",
            description: "nombre minimum du dé"
        },
        {
            required: true,
            type: "number",
            name: "max",
            description: "nombre maximum du dé"
        }
    ],
 
 
    async run(bot, interaction) {

        try {
 
            const min = interaction.options.getNumber("min")
            const max = interaction.options.getNumber("max")
            const random = Math.floor(Math.random() * (max - min)) + min;
        
            const embed = new EmbedBuilder()
                .setTitle(`dé aléatoire`)
                .setColor(color)
                .setDescription(`tu as obtenue le chiffre  \`${random}\``)
                .setThumbnail(bot.user.displayAvatarURL({ dynamic: true }))
        
            await interaction.reply({ embeds: [embed]})
        } catch (error) {
            console.log(`❌ une erreur s'est produite sur la commande dé`, error)
            return interaction.reply({content: '❌ Une erreur s\'est produite produite', ephemeral: true})
        }
    }
 
}