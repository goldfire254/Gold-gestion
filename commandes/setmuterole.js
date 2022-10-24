const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = {

    name: "setmuterole",
    description: "créer le role mute",
    permission: Discord.PermissionFlagsBits.Administrator,
    dm: true,

    async run(bot, interaction) {

        try {
        
            const embed = new Discord.EmbedBuilder()
                .setColor(color)
                .setDescription(`✅ le mute rôle à été créé avec succès`)

            interaction.guild.roles.create({ name: "🔈 · mute", reason: "mute role", permissions: [Discord.PermissionsBitField.Flags.ViewChannel] })

            return interaction.reply({ embeds: [embed]})

        } catch (error) {
            console.log(`❌ une erreur s'est produite sur la commande setmuterole`, error)
            return interaction.reply({content: '❌ Une erreur s\'est produite produite', ephemeral: true})        
        }
    }
}