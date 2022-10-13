const Discord = require('discord.js')

module.exports = {

    name: "support",
    description: "invite dans le serveur",
    permission: "Aucune",
    category: "acceuil",
    dm: true,

    async run(bot, message, args) {

        try {

            const embed = new Discord.EmbedBuilder()
                .setColor('Yellow')
                .setTitle('rejoindre le serveur')
                .setURL('https://discord.gg/TdFq9SK5TZ')

            await message.reply({ embeds: [embed]});
        } catch (error) {
            console.log(`❌ une erreur c'est produite sur la commande support`, error)
            return interaction.reply({content: '❌ Une erreur c\'est produite', ephemeral: true})        }
    }
}