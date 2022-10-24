const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = {

    name: "police",
    description: "change de police un texte",
    permission: "Aucune",
    category: "Utilitaires",
    dm: false,
    options: [
        {
            required: true,
            type: "string",
            name: "texte",
            description: "Le textes a changer le police"
        },
        {
            required: true,
            type: "string",
            name: "police",
            description: "italique   gras   souligné   barré   code   gras italique"
        }
    ],

    async run(bot, interaction) {

        try {
            const texte = interaction.options.getString('texte')
            const police = interaction.options.getString('police')
            if(police == "italique") {
                interaction.channel.send(`*${texte}*`)
            }
            else if(police == "gras") {
                interaction.channel.send(`**${texte}**`)
            }
            else if(police == "souligné") {
                interaction.channel.send(`__${texte}__`)
            }
            else if(police == "barré") {
                interaction.channel.send(`~~${texte}~~`)
            }
            else if(police == "code") {
                interaction.channel.send(`\`${texte}\``)
            }
            else if(police == "gras souligné") {
                interaction.channel.send(`***${texte}***`)
            }
            else {
                const embed = new Discord.EmbedBuilder()
                    .setColor(color)
                    .setDescription('❌ Veuillez rentrer : italique / gras / souligné / barré / code / gras italique')
                interaction.channel.send({ embeds: [embed]})
            }

        } catch (error) {
            console.log(`❌ une erreur s'est produite sur la commande police`, error)
            return interaction.reply({content: '❌ Une erreur s\'est produite produite', ephemeral: true})        }
    }
}