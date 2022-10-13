const { EmbedBuilder } = require("discord.js")

const Discord = require('discord.js')
const intents = new Discord.IntentsBitField(3276799)
const bot = new Discord.Client({intents})

module.exports = {

    name: "server_info",
    description: "donne les info sur le serveur",
    permission: "Aucune",
    category: "Utilitaires",
    dm: false,

    async run(bot, interaction, message, args) {

        try {

            const URL = interaction.user.displayAvatarURL({ format: "png"})
            const name = interaction.user.username

            const embed = new EmbedBuilder()
                .setColor('Yellow')
                .setTitle('**__SERVER INFO__**')
                .setDescription('voici les info du serveur')
                .setAuthor({ name: `${name}`, iconURL: URL})
                .setThumbnail('https://i.imgur.com/ASRXZtJ.png')
                .addFields({ name: "nom du serveur", value: `le server s'appel ${interaction.guild.name}`, inline: false})
                .addFields({ name: "total des membres :", value: `nous sommes ${interaction.guild.memberCount}`, inline: false})
                .addFields({ name: "date de création", value : `le serveur a été créé le ${interaction.guild.createdAt}`, inline: false})
                .addFields({ name: "niveau de vérification", value: `le niveau de verification du serveur est de ${interaction.guild.verificationLevel}`, inline: false})

            interaction.reply({ embeds: [embed]});
        } catch (error) {
            console.log(`❌ une erreur c'est produite sur la commande serverinfo`, error)
            return interaction.reply({content: '❌ Une erreur c\'est produite', ephemeral: true})        }
    }
}