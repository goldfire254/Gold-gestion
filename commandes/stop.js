const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = {

    name: "stop",
    description: "stop le bot",
    permission: Discord.PermissionFlagsBits.Administrator,
    category: "modération",
    dm: false,

    async run(bot, interaction) {

      try {
        if(interaction.user.id === '976906979786252289') {
            process.exit();
        }else return;
        } catch (error) {
          console.log(`❌ une erreur s'est produite sur la commande stop`, error)
          return interaction.reply({content: '❌ Une erreur s\'est produite produite', ephemeral: true})}
      }
    }