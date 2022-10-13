const Discord = require('discord.js')
const intents = new Discord.IntentsBitField(3276799)
const bot = new Discord.Client({intents})

module.exports = {

    name: "youtube",
    description: "donne le lien des chaines youtube",
    Permission: "Aucune",
    category: "Utilitaires",
    dm: true,

    async run(bot, interaction) {

        try{

            const embed = new Discord.EmbedBuilder() 
                .setColor('Yellow')
                .setTitle('**__CHAINE YOUTUBE__**')
                .setURL('https://www.youtube.com/channel/UCBrZF_18QPTMG_E_dPRiEEg/featured')


            interaction.reply({ embeds: [embed]});
        } catch (error) {
            console.log(`❌ une erreur c'est produite sur la commande youtube`, error)
            return interaction.reply({content: '❌ Une erreur c\'est produite', ephemeral: true})       
        }
    }
}