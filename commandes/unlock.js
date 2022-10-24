const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = {

    name: "unlock",
    description: "Déverouille un salon",
    permission: Discord.PermissionFlagsBits.Administrator,
    dm: false,

    async run(bot, interaction) {

        if(!interaction.member.permissions.has(Discord.PermissionsBitField.resolve("Administrator"))) return interaction.reply("vous n'avez pas les permissions d'effectuer la commandes");
        if(!interaction.guild.members.me.permissions.has(Discord.PermissionsBitField.resolve("Administrator"))) return interaction.reply("vous n'avez pas les permissions d'effectuer la commandes");

        try {
            interaction.channel.permissionOverwrites.edit(interaction.guild.id, { SendMessages: true, AddReactions: true, CreatePublicThreads: true, CreatePrivateThreads: true});

            const embed = new Discord.EmbedBuilder()
                .setColor(color)
                .setDescription(`✅ le salon a été unlock avec succès`)

            interaction.reply({ embeds: [embed]})

            setTimeout(async () => {
                await interaction.deleteReply();
            }, 2000)

        } catch (error) {
            console.log(`❌ une erreur s'est produite sur la commande 8ball`, error)
            return interaction.reply({content: '❌ Une erreur s\'est produite produite', ephemeral: true})        }
    }
}