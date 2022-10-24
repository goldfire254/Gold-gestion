const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = {

    name: "fakenitro",
    description: "donne un  faux nitro",
    permission: Discord.PermissionFlagsBits.Administrator,
    category: "modération",
    dm: true,

    async run(bot, interaction) {

      try {

        const embed = new Discord.EmbedBuilder()
            .setColor(color)
            .setDescription("clique sur le bouton pour avoir ton nitro")
            .setImage("https://i.imgur.com/4vRgE4s.jpg")
            const button = new Discord.ActionRowBuilder().addComponents(
                new Discord.ButtonBuilder()
                    .setCustomId("nitro")
                    .setEmoji("🎁")
                    .setStyle(Discord.ButtonStyle.Primary)
            )
                    interaction.reply({ embeds: [embed], components: [button]})
        
        }catch (error) {
            console.log(`❌ une erreur s'est produite sur la commande fakenitro`, error)
            return interaction.reply({content: '❌ Une erreur s\'est produite produite', ephemeral: true})}
    }
}