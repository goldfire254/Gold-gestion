const Discord = require('discord.js')

module.exports = {

    name: "claim",
    description: "donne le temps de claim des membre",
    permission: Discord.PermissionFlagsBits.Administrator,
    category: "Utilitaires",
    dm: true,

    async run(bot, message, args) {

        if(!interaction.member.permissions.has(Discord.PermissionsBitField.resolve("Administrator"))) return interaction.reply("vous n'avez pas les permissions d'effectuer la commandes");
        if(!interaction.guild.members.me.permissions.has(Discord.PermissionsBitField.resolve("Administrator"))) return interaction.reply("vous n'avez pas les permissions d'effectuer la commandes");

        try {

            const embed = new Discord.EmbedBuilder()
                .setColor('Yellow')
                .addFields({ name: "1 :", value: "🍬 | booster = 40s", inline: false})
                .addFields({ name: "2 :", value: "✨ | VIP = 35s", inline: false})
                .addFields({ name: "3 :", value: "🔱 | soutien = 30s", inline: false})
                .addFields({ name: "4 :", value: "🍺 | membre = 15s", inline: false})


            await message.reply({ embeds: [embed]});
        } catch (error) {
            console.log(`❌ une erreur c'est produite sur la commande claim`, error)
            return interaction.reply({content: '❌ Une erreur c\'est produite', ephemeral: true})        }
    }
}