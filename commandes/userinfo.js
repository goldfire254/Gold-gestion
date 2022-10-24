const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color


module.exports = {

    name: "userinfo",
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

    async run(bot, interaction) {

        try {

            const member = interaction.options.getUser("membre")
            const URL = member.displayAvatarURL({ format: "png"})
            const name = member.username

            const embed = new EmbedBuilder()
                .setColor(color)
                .setTitle('**__USER INFO__**')
                .setDescription('voici les info du membre')
                .setAuthor({ name: `${name}`, iconURL: URL})
                .setThumbnail(`${member.displayAvatarURL({dynamic: true})}`)
                .addFields({ name: "nom du membre :", value: `le membre s'appel : ${member.tag}`, inline: false})
                .addFields({ name: "id du membres :", value: `l'id du membre est : ${member.id}`, inline: false})
                .addFields({ name: "date de création du compte :", value : `le compte du membre a été créé le : ${member.createdAt}`, inline: false})

            interaction.reply({ embeds: [embed]});
        } catch (error) {
            console.log(`❌ une erreur s'est produite sur la commande userinfo`, error)
            return interaction.reply({content: '❌ Une erreur s\'est produite produite', ephemeral: true})}
    }
}