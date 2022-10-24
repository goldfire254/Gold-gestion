const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = {

    name: "boosterlist",
    description: "Donne la liste des boosters",
    permission: Discord.PermissionFlagsBits.Administrator,
    dm: false,

    async run(bot, interaction) {

        try {

            const list = interaction.guild.members.cache.filter(member => member.premiumSince)
            const embed = new Discord.EmbedBuilder()
                .setColor(color)
                .setTitle('**LISTE DES BOOSTER**')
                .setDescription(`${list.map(m => `${m.user.username}`).join("\n") || "Aucun utilisateur a boost le serveur"}`)
            return interaction.reply({ embeds: [embed]})

        } catch (error) {
            console.log(`❌ une erreur s'est produite sur la commande boosterlist`, error)
            return interaction.reply({content: '❌ Une erreur s\'est produite produite', ephemeral: true})        }
    }
}