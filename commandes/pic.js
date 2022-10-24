const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = {

    name: "pic",
    description: "montre la pp d'un membre",
    permission: "Aucune",
    category: "Utilitaires",
    dm: false,
    options: [
        {
            required: true,
            type: "user",
            name: "membre",
            description: "le membre dont vous chercher a photo de profil"
        }
    ],

    async run(bot, interaction) {

        try {

            const member = interaction.options.getUser("membre")
            const URL = member.displayAvatarURL({ format: "png", dynamic: true})
            const name = member.username

            const embed = new Discord.EmbedBuilder()
                .setColor(color)
                .setAuthor({ name: `${name}`, iconURL: URL})
                .setImage(URL)

            interaction.reply({ embeds: [embed]});
        } catch (error) {
            console.log(`❌ une erreur s'est produite sur la commande pic`, error)
            return interaction.reply({content: '❌ Une erreur s\'est produite produite', ephemeral: true})        }
    }
}