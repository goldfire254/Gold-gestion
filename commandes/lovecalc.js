const Discord = require('discord.js');
const { EmbedBuilder } = require('discord.js');
 
module.exports = {
    name: "lovecalc",
    description: "donne le pourcentage d'amour entre de membre",
    permission: "Aucune",
    dm: true,
    category: "fun",
    options: [
        {
            required: true,
            type: "user",
            name: "user",
            description: "le premier membre"
        },
        {
            required: true,
            type: "user",
            name: "membre",
            description: "le deuxième membre"
        }
    ],
 
 
    async run(bot, interaction) {

        try {
 
            const membre = interaction.options.getUser("user")
            const member = interaction.options.getUser("membre")
            const min = 1;
            const max = 100;
            const random = Math.floor(Math.random() * (max - min)) + min;
            const lovecalc = [
                `https://acegif.com/wp-content/uploads/gif/anime-hug-38.gif`,
                `https://acegif.com/wp-content/uploads/gif/anime-hug-5.gif`,
                `https://i.pinimg.com/originals/23/4d/47/234d471b1068bc25d435c607224454c9.gif`,
                `https://i.skyrock.net/6316/91506316/pics/3227357985_1_4_Gv21i7uB.gif`,
                `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvyt2ozsXEpQrOsEAoGcN8rTECPqAh8GpFBA&usqp=CAU`,
                `https://risibank.fr/cache/medias/0/17/1726/172693/full.gif`,
                `https://www.gifimili.com/gif/2018/02/scrat-calin-avec-son-gland.gif`
            ]
        
            const embed = new EmbedBuilder()
                .setTitle(`💞 **__${membre.username}__ ${random}% __${member.username}__** 💞`)
                .setColor("Yellow")
                .setDescription(`Voilà ton le pourcentage d'amour entre **${membre.username}** et **${member.username}**`)
                .setTimestamp()
                .setImage(lovecalc[Math.floor(Math.random() * lovecalc.length)])
        
        
            await interaction.reply({ embeds: [embed] })
        } catch (error) {
            console.log(`❌ une erreur c'est produite sur la commande lovecalc`, error)
            return interaction.reply({content: '❌ Une erreur c\'est produite', ephemeral: true})
        }
    }
 
}