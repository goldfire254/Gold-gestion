const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = {

    name: "unhide",
    description: "Permet de reveler un salon",
    permission: Discord.PermissionFlagsBits.KickMembers,
    category: "modération",
    dm: false,
    options: [
        {
          required: true,
          type: "channel",
          name: 'channel',
          description: 'Le salon a reveler'
        }
      ],

    async run(bot, interaction) {

      try {
        let salon = interaction.options.getChannel('channel')
        if(!salon) salon = interaction.channel.id

        salon.permissionOverwrites.edit(interaction.guild.id, { ViewChannel: true })
        const embed = new Discord.EmbedBuilder()
            .setColor(color)
            .setDescription(`✅ ${salon} est bien réveler`)
        interaction.reply({ embeds: [embed]})

        } catch (error) {
          console.log(`❌ une erreur s'est produite sur la commande unhide`, error)
          return interaction.reply({content: '❌ Une erreur s\'est produite produite', ephemeral: true})        }
      }
    }