const { EmbedBuilder } = require("discord.js")

const Discord = require('discord.js')
const intents = new Discord.IntentsBitField(3276799)
const bot = new Discord.Client({intents})

module.exports = {

    name: "user_info",
    description: "donne les info sur un membre",
    permission: "Aucune",
    category: "Utilitaires",
    dm: false,
    options: [
        {
            required: true,
            type: "user",
            name: "membre",
            description: "le membre dont vous chercher les infos"
        }
    ],

    async run(bot, interaction, message, args) {

        try {

            const member = interaction.options.getUser("membre")
            const URL = member.displayAvatarURL({ format: "png"})
            const name = member.username

            const embed = new EmbedBuilder()
                .setColor('Yellow')
                .setTitle('**__USER INFO__**')
                .setDescription('voici les info du membre')
                .setAuthor({ name: `${name}`, iconURL: URL})
                .setThumbnail(`${member.displayAvatarURL({dynamic: true})}`)
                .addFields({ name: "nom du membre :", value: `le membre s'appel : ${member.tag}`, inline: false})
                .addFields({ name: "id du membres :", value: `l'id du membre est : ${member.id}`, inline: false})
                .addFields({ name: "date de création du compte :", value : `le compte du membre a été créé le : ${member.createdAt}`, inline: false})

            interaction.reply({ embeds: [embed]});
        } catch (error) {
            console.log(`❌ une erreur c'est produite sur la commande userinfo`, error)
            return interaction.reply({content: '❌ Une erreur c\'est produite', ephemeral: true})        }
    }
}