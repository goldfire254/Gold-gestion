const Discord = require('discord.js')

module.exports = {

    name: "roleadd",
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

    async run(bot, interaction, message, args) {

        if(!interaction.member.permissions.has(Discord.PermissionsBitField.resolve("Administrator"))) return interaction.reply("vous n'avez pas les permissions d'effectuer la commandes");
        if(!interaction.guild.members.me.permissions.has(Discord.PermissionsBitField.resolve("Administrator"))) return interaction.reply("vous n'avez pas les permissions d'effectuer la commandes");

        try {

            let member = interaction.options.getMember("membre");
            let role = interaction.options.getRole("role");

            await member.roles.add(role);
            await interaction.reply(`le rôle ${role} a bien été ajouter a ${member}`)


        } catch (error) {
            console.log(`❌ une erreur c'est produite sur la commande roleadd`, error)
            return interaction.reply({content: '❌ Une erreur c\'est produite', ephemeral: true})        }
    }
}