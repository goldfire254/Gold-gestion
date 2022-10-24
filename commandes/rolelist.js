const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = {

    name: "rolelist",
    description: "Donne la liste des membres ayant un role",
    permission: Discord.PermissionFlagsBits.Administrator,
    dm: false,
    options: [
        {
            type: "role",
            name: "role",
            description: "choisis un role",
            required: true,
        }
    ],

    async run(bot, interaction) {

        try {

            const rl = interaction.options.getRole("role")
            const embed = new Discord.EmbedBuilder()
                .setColor(color)
                .setTitle(`**LISTE DU ROLE ${rl.name}**`)
                .setDescription(`${rl.members.map(m => `${m.user.username}`).join("\n") || "Aucun utilisateur"}`)
            return interaction.reply({ embeds: [embed]})

        } catch (error) {
            console.log(`❌ une erreur s'est produite sur la commande rolelist`, error)
            return interaction.reply({content: '❌ Une erreur s\'est produite produite', ephemeral: true})        }
    }
}

