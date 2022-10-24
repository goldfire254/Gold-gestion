const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color


module.exports = {

    name: "8ball",
    description: "Pose moi une question",
    permission: "Aucune",
    dm: true,
    options: [
        {
            type: "string",
            name: "question",
            description: "La question que tu veut me poser",
            required: true
        },
    ],

    async run(bot, interaction) {

        try {

            const question = interaction.options.getString("question")


            const questionArray = [

                "Oui !",
                "Non !",
                "Biensur !",
                "Je ne suis pas sur !",
                "Dsl, mais je sais pas !",
                "Probablement pas !",
                "Probablement oui !",
            ];

            const embed = new Discord.EmbedBuilder() 
                .setTitle('🎱 8ball')
                .setDescription(`
                ❓ **Votre question :**
                > \`${question}\`

                📤 **Ma réponse :**
                > \`${questionArray[Math.floor(Math.random() * questionArray.length)]}\``)
                .setColor(color)

            await interaction.reply({embeds: [embed]})
        } catch (error) {
            console.log(`❌ une erreur s'est produite sur la commande 8ball`, error)
            return interaction.reply({content: '❌ Une erreur s\'est produite produite', ephemeral: true})
        }
    }
}