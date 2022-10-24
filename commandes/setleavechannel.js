const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = {

    name: "setleavechannel",
    description: "Définie le salon des départ",
    permission: Discord.PermissionFlagsBits.Administrator,
    category: "modération",
    dm: false,
    options: [
        {
          required: true,
          type: "channel",
          name: 'channel',
          description: 'Le salon ou envoyer le message'
        }
],

    async run(bot, interaction) {

      try {

        const salon = interaction.options.getChannel('channel')
        await db.set('leavechannel',salon)
        const embed = new Discord.EmbedBuilder()
            .setColor(color)
            .setDescription(`✅ Le salon ${salon} est bien défini comme le salon de depart`)
        interaction.reply({ embeds: [embed]})
        } catch (error) {
          console.log(`❌ une erreur s'est produite sur la commande setleavechannel`, error)
          return interaction.reply({content: '❌ Une erreur s\'est produite produite', ephemeral: true})}
      }
    }