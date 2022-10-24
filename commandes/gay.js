const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = {

    name: "gay",
    description: "montre le pourcentage de gay chez un membre",
    permission: "Aucune",
    dm: true,
    options: [
        {
            name: 'membre',
            description: 'Le membre que vous voulez savoir le pourcentage de gay',
            required: false,
            type: "user"
        }
    ],

    async run(bot, interaction) {

        try {

            let user = interaction.options.getUser("membre")
            if(!user) user = interaction.user
            const min = 1
            const max = 100
            const random = Math.floor(Math.random() * (max - min)) + min;
            const embed = new Discord.EmbedBuilder()
                .setColor(color)
                .setDescription(`🏳‍🌈 Le pourcentage de gay de ${user.tag} est de **${random}%**`)

            await interaction.reply({ embeds: [embed]});
        } catch (error) {
            console.log(`❌ une erreur s'est produite sur la commande gay`, error)
            return interaction.reply({content: '❌ Une erreur s\'est produite produite', ephemeral: true})        
        }
    }
}