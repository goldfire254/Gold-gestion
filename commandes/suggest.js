const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = {

    name: "suggest",
    description: "Envoie votre suggestion pour le serveur",
    permission: "Aucune",
    category: "Utilitaires",
    dm: false,
    options: [
        {
            required: true,
            type: "string",
            name: "suggestion",
            description: "La suggestion pour le serveur"
        }
    ],

    async run(bot, interaction) {

        try {

                const suggestion = interaction.options.getString("suggestion")
                const salon = await db.get('suggestchannel')
                const embed = new Discord.EmbedBuilder()
                    .setColor(color)
                    .setTitle(`**__suggestion de ${interaction.user.tag}__**`)
                    .setDescription(`suggestion : ${suggestion}`)
                const valid_embed = new Discord.EmbedBuilder()
                    .setColor(color)
                    .setDescription(`✅ ${interaction.user.tag} votre suggestion a bien été envoyée`)
                interaction.channel.send({ embeds: [valid_embed], ephemeral: true})
                interaction.guild.channels.cache.get(salon.id).send({ embeds: [embed]})
        } catch (error) {
            console.log(`❌ une erreur s'est produite sur la commande suggest`, error)
            return interaction.reply({content: '❌ Une erreur s\'est produite produite', ephemeral: true})}
    }
}