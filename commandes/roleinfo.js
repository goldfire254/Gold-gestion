const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color


module.exports = {

    name: "roleinfo",
    description: "donne les info sur un role",
    permission: "Aucune",
    category: "Utilitaires",
    dm: false,
    options: [
        {
            required: true,
            type: "role",
            name: "role",
            description: "le role dont vous chercher les infos"
        }
    ],

    async run(bot, interaction) {

        try {

            const role = interaction.options.getRole("role")

            const embed = new Discord.EmbedBuilder()
                .setColor(color)
                .setTitle('**__ROLE INFO__**')
                .setDescription('voici les info du role')
                .setAuthor({ name: `${role.name}`, iconURL: interaction.user.displayAvatarURL({dynamic: true})})
                .setThumbnail(`${interaction.user.displayAvatarURL({dynamic: true})}`)
                .addFields({ name: "nom du role :", value: `le role s'appel : ${role.name}`, inline: false})
                .addFields({ name: "id du role :", value: `l'id du role est : ${role.id}`, inline: false})

            interaction.reply({ embeds: [embed]});
        } catch (error) {
            console.log(`❌ une erreur s'est produite sur la commande roleinfo`, error)
            return interaction.reply({content: '❌ Une erreur s\'est produite produite', ephemeral: true})}
    }
}