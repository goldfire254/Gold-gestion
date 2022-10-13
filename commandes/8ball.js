const Discord = require('discord.js')

module.exports = {

    name: "8ball",
    description: "Pose moi une question",
    permission: "Aucune",
    category: "Fun",
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
                .setColor('Yellow')

            await interaction.reply({embeds: [embed]})
        } catch (error) {
            console.log(`❌ une erreur c'est produite sur la commande 8ball`, error)
            return interaction.reply({content: '❌ Une erreur c\'est produite', ephemeral: true})
        }
    }
}