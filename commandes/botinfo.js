const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = {

    name: "botinfo",
    description: "donne les info sur le bot",
    permission: "Aucune",
    category: "Utilitaires",
    dm: false,

    async run(bot, interaction) {

        try {

            const embed = new EmbedBuilder()
                .setColor(color)
                .setTitle('**__BOT INFO__**')
                .setDescription('voici les infos du bot')
                .addFields({ name: "nom du bot", value: `le bot s'appel ${bot.user.tag}`, inline: false})
                .addFields({ name: "id du bot :", value: `l'id du bot est ${bot.user.id}`, inline: false})
                .addFields({ name: "date de création", value : `le bot a été créé le ${bot.user.createdAt}`, inline: false})
                .addFields({ name: "créateur du bot", value : `le createur du bot est !"Delta#5128`, inline: false})
                .addFields({ name: "systeme du bot", value : `le bot est codé en js (node.js) c'est un bot v14`, inline: false})

            interaction.reply({ embeds: [embed]});
        } catch (error) {
            console.log(`❌ une erreur s'est produite sur la commande serverinfo`, error)
            return interaction.reply({content: '❌ Une erreur s\'est produite produite', ephemeral: true})        }
    }
}