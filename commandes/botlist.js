const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = {

    name: "botlist",
    description: "Donne la liste des bots",
    permission: Discord.PermissionFlagsBits.Administrator,
    dm: false,

    async run(bot, interaction) {

        try {

            const list = interaction.guild.members.cache.filter(m => m.user.bot).map(m => m.user.username).join("\n")
            const embed = new Discord.EmbedBuilder()
                .setColor(color)
                .setTitle('**LISTE DES BOT**')
                .setDescription(`${list}`)
            return interaction.reply({ embeds: [embed]})

        } catch (error) {
            console.log(`❌ une erreur s'est produite sur la commande botlist`, error)
            return interaction.reply({content: '❌ Une erreur s\'est produite produite', ephemeral: true})        }
    }
}

