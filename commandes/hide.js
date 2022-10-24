const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = {

    name: "hide",
    description: "Permet de cacher un salon",
    permission: Discord.PermissionFlagsBits.KickMembers,
    category: "modération",
    dm: false,
    options: [
        {
          required: true,
          type: "channel",
          name: 'channel',
          description: 'Le salon a cacher'
        }
      ],

    async run(bot, interaction) {

      try {
        let salon = interaction.options.getChannel('channel')
        if(!salon) salon = interaction.channel.id

        salon.permissionOverwrites.edit(interaction.guild.id, { ViewChannel: false })
        const embed = new Discord.EmbedBuilder()
            .setColor(color)
            .setDescription(`✅ ${salon} est bien caché`)
        interaction.reply({ embeds: [embed]})

        } catch (error) {
          console.log(`❌ une erreur s'est produite sur la commande hide`, error)
          return interaction.reply({content: '❌ Une erreur s\'est produite produite', ephemeral: true})        }
      }
    }