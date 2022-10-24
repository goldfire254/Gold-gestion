const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = {
    name: 'flags',
    description: 'Affiche un drapeau',
    permissions: "Aucune",
    dm: false,
    category: 'fun',
     async run(bot, interaction) {
        try{
            const target = interaction.options.getMember('membre') || interaction.member;
            const flags = [
                `https://i.imgur.com/hHoI6ZY.png`,
                `https://i.imgur.com/KtdcSQZ.png`,
                `https://i.imgur.com/1azqodJ.png`,
                `https://i.imgur.com/Wwsoy2z.png`,
                `https://i.imgur.com/Wwsoy2z.png`,
                `https://i.imgur.com/beAomML.png`,
                `https://i.imgur.com/VzfNTYG.png`,
                `https://i.imgur.com/23pxXWs.png`,
                `https://i.imgur.com/40X0lpv.png`,
                `https://i.imgur.com/vmVojyk.png`,
                `https://i.imgur.com/SPnL2yq.png`
            ]
            const embed = new EmbedBuilder()
            .setDescription(`**${interaction.user.tag} Voici votre drapeau**`)
            .setImage(flags[Math.floor(Math.random() * flags.length)])
            .setColor(color)
            interaction.reply({embeds: [embed]})
            
        
    } catch(error) {
        console.log(`❌ une erreur s'est produite sur la commande flags`, error)
        return interaction.reply({content: '❌ Une erreur s\'est produite produite', ephemeral: true})
    }
      }
    }