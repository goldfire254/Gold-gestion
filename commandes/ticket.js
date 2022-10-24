const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = {

    name: "ticket",
    description: "Créer un message pour ouvrir un ticket",
    permission: Discord.PermissionFlagsBits.Administrator,
    category: "Utilitaires",
    dm: true,
    options: [
        {
            type: "string",
            name: "titre",
            description: "le titre de l'embed",
            required: true,
        },
        {
            type: "string",
            name: "description",
            description: "la description de l'embed",
            required: true,
        },
        {
            type: "channel",
            name: "categorie",
            description: "la categorie des ticket",
            required: true,
        }
    ],

    async run(bot, interaction) {

            const categorie = interaction.options.getChannel('categorie')
            const titre = interaction.options.getString("titre")
            const description = interaction.options.getString("description")
            const embed = new Discord.EmbedBuilder()
                .setColor(color)
                .setTitle(`${titre}`)
                .setDescription(`${description}`)
            await db.set('ticketcategorie' + interaction.guild.id,categorie)

                const open_ticket = new Discord.ActionRowBuilder().addComponents(
                        new Discord.ButtonBuilder()
                            .setCustomId("open-ticket")
                            .setEmoji("🎫")
                            .setStyle(Discord.ButtonStyle.Primary)
                        )
                        interaction.reply({ embeds: [embed], components: [open_ticket]})
    }
}