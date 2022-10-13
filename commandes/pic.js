const Discord = require('discord.js')

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

    async run(bot, interaction, message, args) {

        try {

            const member = interaction.options.getUser("membre")
            const URL = member.displayAvatarURL({ format: "png", dynamic: true})
            const name = member.username

            const embed = new Discord.EmbedBuilder()
                .setColor('Yellow')
                .setAuthor({ name: `${name}`, iconURL: URL})
                .setImage(URL)

            interaction.reply({ embeds: [embed]});
        } catch (error) {
            console.log(`❌ une erreur c'est produite sur la commande pic`, error)
            return interaction.reply({content: '❌ Une erreur c\'est produite', ephemeral: true})        }
    }
}