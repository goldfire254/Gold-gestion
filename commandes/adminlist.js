const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = {

    name: "adminlist",
    description: "Donne la liste des admins",
    permission: Discord.PermissionFlagsBits.Administrator,
    dm: false,

    async run(bot, interaction) {

        try {

            const list = interaction.guild.members.cache.filter(m => !m.user.bot).filter(member => member.permissions.has([Discord.PermissionsBitField.Flags.Administrator]))
            const embed = new Discord.EmbedBuilder()
                .setColor(color)
                .setTitle('**LISTE DES MEMBRES-ADMINS**')
                .setDescription(`${list.map(m => `${m.user.username}`).join("\n")}`)
            
            const list_bot = interaction.guild.members.cache.filter(m => m.user.bot).filter(member => member.permissions.has([Discord.PermissionsBitField.Flags.Administrator]))
            const embed_bot = new Discord.EmbedBuilder()
                .setColor(color)
                .setTitle('**LISTE DES BOT-ADMINS**')
                .setDescription(`${list_bot.map(m => `${m.user.username}`).join("\n")}`)
            return interaction.reply({ embeds: [embed, embed_bot]})

        } catch (error) {
            console.log(`❌ une erreur s'est produite sur la commande adminlist`, error)
            return interaction.reply({content: '❌ Une erreur s\'est produite produite', ephemeral: true})        }
    }
}