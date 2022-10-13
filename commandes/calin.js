const { EmbedBuilder } = require("discord.js")
const Discord = require('discord.js')
const config = require("../config.json")

module.exports = {
    name: 'calin',
    description: 'La commande calin permet de faire un calin',
    permissions: "Aucune",
    dm: false,
    category: 'fun',
    options: [
        {
            name: "membre",
            description: "membre",
            type: "user",
            required: true
        }
    ],
     async run(bot, interaction) {
        try{
            const target = interaction.options.getMember('membre') || interaction.member;
            const calin = [
                `https://acegif.com/wp-content/uploads/gif/anime-hug-38.gif`,
                `https://acegif.com/wp-content/uploads/gif/anime-hug-5.gif`,
                `https://i.pinimg.com/originals/23/4d/47/234d471b1068bc25d435c607224454c9.gif`,
                `https://i.skyrock.net/6316/91506316/pics/3227357985_1_4_Gv21i7uB.gif`,
                `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvyt2ozsXEpQrOsEAoGcN8rTECPqAh8GpFBA&usqp=CAU`,
                `https://risibank.fr/cache/medias/0/17/1726/172693/full.gif`,
                `https://www.gifimili.com/gif/2018/02/scrat-calin-avec-son-gland.gif`
            ]
            const embed = new EmbedBuilder()
            .setDescription(`**${interaction.user.username} fait un câlin à ${target}**`)
            .setImage(calin[Math.floor(Math.random() * calin.length)])
            .setColor('Yellow')
            interaction.reply({embeds: [embed]})
            
        
    } catch(error) {
        console.log(`❌ une erreur c'est produite sur la commande calin`, error)
        return interaction.reply({content: '❌ Une erreur c\'est produite', ephemeral: true})
    }
      }
    }