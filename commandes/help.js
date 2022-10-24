const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = {

    name: "help",
    description: "Montre la liste des commandes",
    permission: "Aucune",
    dm: true,

    async run(bot, interaction) {

        const acceuil_embed = new Discord.EmbedBuilder()
            .setColor(color)
            .setTitle("**__📝 Liste des commandes :__**")
            .setDescription("Bot v14 créé par !\"Delta#5128")
            .addFields({ name: "**support :**", value:  "Tu peut add ton bot / recevoir de l'aide pour tes bots etc donc clique sur le button"})
            .addFields({ name: "**commandes principales :**", value: " /help  ||  /support"})
            .addFields({ name: "**info developpeur :**", value: "Bot gratuit go l'ajouter"})
            .setFooter({ text: 'page 0/8'});

            const droite_button = new Discord.ActionRowBuilder().addComponents(
                new Discord.ButtonBuilder()
                    .setCustomId("fleche gauche acceuil")
                    .setEmoji("👈")
                    .setStyle(Discord.ButtonStyle.Primary)
            ).addComponents(
                new Discord.ButtonBuilder()
                    .setCustomId("fleche droite acceuil")
                    .setEmoji("👉")
                    .setStyle(Discord.ButtonStyle.Primary)
            )
            const url_buton = new Discord.ActionRowBuilder().addComponents(
                new Discord.ButtonBuilder()
                    .setEmoji('🤖')
                    .setLabel('bot')
                    .setStyle(Discord.ButtonStyle.Link)
                    .setURL('https://discord.com/api/oauth2/authorize?client_id=1032254921753501757&permissions=8&scope=bot')
            ).addComponents(
                new Discord.ButtonBuilder()
                    .setEmoji('📥')
                    .setLabel('support')
                    .setStyle(Discord.ButtonStyle.Link)
                    .setURL('https://discord.gg/uVMRPzR8Zp')
            )
                interaction.reply({ embeds: [acceuil_embed], components: [droite_button, url_buton]})
                    
    }
}