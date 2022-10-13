const Discord = require('discord.js')

module.exports = {

    name: "ping",
    description: "montre la latence",
    permission: "Aucune",
    category: "acceuil",
    dm: true,

    async run(bot, interaction) {

        try {

            const embed = new Discord.EmbedBuilder()
                .setColor('Yellow')
                .addFields({ name: 'BOT', value: `${Date.now() - interaction.createdTimestamp}ms.`, inline: true})
                .addFields({ name: "API", value: `${Date.now() - interaction.createdTimestamp}ms`, inline: true})

            await interaction.reply({ embeds: [embed]});
        } catch (error) {
            console.log(`❌ une erreur c'est produite sur la commande ping`, error)
            return interaction.reply({content: '❌ Une erreur c\'est produite', ephemeral: true})        
        }
    }
}