const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = {

    name: "removerole",
    description: "retire un role a un membre",
    permission: Discord.PermissionFlagsBits.Administrator,
    dm: false,
    options: [
        {
            required: true,
            name: "membre",
            description: "membre auquel le role sera ajouter",
            type: "user"
        },
        {
            required: true,
            name: "role",
            description: "le role a retirer",
            type: "role"
        }
    ],

    async run(bot, interaction) {

        if(!interaction.member.permissions.has(Discord.PermissionsBitField.resolve("Administrator"))) return interaction.reply("vous n'avez pas les permissions d'effectuer la commandes");
        if(!interaction.guild.members.me.permissions.has(Discord.PermissionsBitField.resolve("Administrator"))) return interaction.reply("vous n'avez pas les permissions d'effectuer la commandes");

        try {

            let member = interaction.options.getMember("membre");
            let role = interaction.options.getRole("role");
            const embed = new Discord.EmbedBuilder()
            .setColor(color)
            .setDescription(`✅ le role ${role} a été retiré de ${member} avec succès`)

            await member.roles.remove(role);
            await interaction.reply({embeds: [embed]})


        } catch (error) {
            console.log(`❌ une erreur s'est produite sur la commande removerole`, error)
            return interaction.reply({content: '❌ Une erreur s\'est produite produite', ephemeral: true})        }
    }
}