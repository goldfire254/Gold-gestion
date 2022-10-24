const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = {

    name: "autoroles",
    description: "Définie l'autorole'",
    permission: Discord.PermissionFlagsBits.Administrator,
    category: "modération",
    dm: false,
    options: [
        {
          required: true,
          type: "role",
          name: 'role',
          description: 'Le role a ajouter quand un membre join'
        }
],

    async run(bot, interaction) {

      try {

        const role = interaction.options.getRole('role')
        await db.set('autorole' + interaction.guild.id,role)
        const embed = new Discord.EmbedBuilder()
            .setColor(color)
            .setDescription(`✅ Le role ${role} est bien défini comme autorole`)
        interaction.reply({ embeds: [embed]})
        } catch (error) {
          console.log(`❌ une erreur s'est produite sur la commande autorole`, error)
          return interaction.reply({content: '❌ Une erreur s\'est produite produite', ephemeral: true})}
      }
    }