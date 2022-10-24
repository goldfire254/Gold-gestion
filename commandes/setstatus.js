const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = {

    name: "setstatus",
    description: "change les informations du bots",
    permission: Discord.PermissionFlagsBits.Administrator,
    category: "acceuil",
    dm: false,
    options: [
        {
            required: true,
            type: "string",
            name: "status",
            description: "change le status du bot ( online, dnd, idle, invisible)"
        },
        {
            required: true,
            type: "string",
            name: "bio",
            description: "change la biography du bot"
        }
    ],

    async run(bot, interaction) {

        if(!interaction.member.permissions.has(Discord.PermissionsBitField.resolve("Administrator"))) return interaction.reply("vous n'avez pas les permissions d'effectuer la commandes");
        if(!interaction.guild.members.me.permissions.has(Discord.PermissionsBitField.resolve("Administrator"))) return interaction.reply("vous n'avez pas les permissions d'effectuer la commandes");

        const statues = interaction.options.getString("status")
        const biographie = interaction.options.getString("bio")
        const embed = new Discord.EmbedBuilder()
            .setColor(color)
            .setDescription(`✅ le status à été modifié avec succès`)

        try {

            bot.user.setPresence({ activities: [{ name: `${biographie}`}], status: `${statues}` })

            interaction.reply({ embeds: [embed]})

        } catch (error) {
            console.log(`❌ une erreur s'est produite sur la commande setbot`, error)
            return interaction.reply({content: '❌ Une erreur s\'est produite produite', ephemeral: true})        }
    }     
}