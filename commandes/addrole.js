const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = {

    name: "addrole",
    description: "ajoute un role a un membre",
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
            description: "le role a ajouter",
            type: "role"
        }
    ],

    async run(bot, interaction) {

        if(!interaction.member.permissions.has(Discord.PermissionsBitField.resolve("Administrator"))) return interaction.reply("vous n'avez pas les permissions d'effectuer la commandes");
        if(!interaction.guild.members.me.permissions.has(Discord.PermissionsBitField.resolve("Administrator"))) return interaction.reply("vous n'avez pas les permissions d'effectuer la commandes");

        try {

            const member = interaction.options.getMember("membre");
            const role = interaction.options.getRole("role");
            const embed = new Discord.EmbedBuilder()
            .setColor(color)
            .setDescription(`✅ le role ${role} a été ajouté a ${member} avec succès`)

            await member.roles.add(role);
            await interaction.reply({ embeds: [embed]})


        } catch (error) {
            console.log(`❌ une erreur s'est produite sur la commande roleadd`, error)
            return interaction.reply({content: '❌ Une erreur s\'est produite produite', ephemeral: true})        }
    }
}