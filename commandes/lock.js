const { PermissionFlagsBits } = require('discord.js');
const Discord = require('discord.js')

module.exports = {

    name: "lock",
    description: "Empeche les membre de parler",
    permission: Discord.PermissionFlagsBits.Administrator,
    dm: false,

    async run(bot, interaction, args) {

        if(!interaction.member.permissions.has(Discord.PermissionsBitField.resolve("Administrator"))) return interaction.reply("vous n'avez pas les permissions d'effectuer la commandes");
        if(!interaction.guild.members.me.permissions.has(Discord.PermissionsBitField.resolve("Administrator"))) return interaction.reply("vous n'avez pas les permissions d'effectuer la commandes");

        try {
            interaction.channel.permissionOverwrites.edit(interaction.guild.id, { SendMessages: false, AddReactions: true, CreatePublicThreads: false, CreatePrivateThreads: false});

            return interaction.reply({ embeds: [embed]});

        } catch (error) {
            console.log(`❌ une erreur c'est produite sur la commande lock`, error)
            return interaction.reply({content: '❌ Une erreur c\'est produite', ephemeral: true})        }
    }
}

