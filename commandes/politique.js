const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = {

    name: "politique",
    description: "montre qui vous avez voté",
    permission: "Aucune",
    dm: true,
    options: [
        {
            name: 'membre',
            description: 'Le membre que vous voulez savoir le vote',
            required: false,
            type: "user"
        }
    ],

    async run(bot, interaction) {

        try {

            let user = interaction.options.getUser("membre")
            if(!user) user = interaction.user
            const président = ["Poutine", "Macron", "Melenchon", "Zemmour", "Lepen", "Sarcozi", "Hidalgo", "Pécresse", "Trump", "Holland", "Blanc"]
            const random = président[Math.floor(Math.random() * président.length)]
            const embed = new Discord.EmbedBuilder()
                .setColor(color)
                .setDescription(`📥 ${user.tag} à voté **${random}**`)

            await interaction.reply({ embeds: [embed]});
        } catch (error) {
            console.log(`❌ une erreur s'est produite sur la commande politique`, error)
            return interaction.reply({content: '❌ Une erreur s\'est produite produite', ephemeral: true})        
        }
    }
}