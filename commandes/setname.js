const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = {

    name: "setname",
    description: "Change le pseudo du bot",
    permission: Discord.PermissionFlagsBits.Administrator,
    category: "modération",
    dm: false,
    options: [
        {
          required: true,
          type: "string",
          name: 'name',
          description: 'Le pseudo du bot'
        }
    ],

    async run(bot, interaction) {

      try {
        if(interaction.user.id === '976906979786252289') {
            const name = interaction.options.getString('name') 
            bot.user.setUsername(name)
            const embed = new Discord.EmbedBuilder()
                .setColor(color)
                .setDescription(`✅ Mon pseudo est maintenant ${name}`)
            interaction.reply({ embeds: [embed]})
        }else return;
        } catch (error) {
          console.log(`❌ une erreur s'est produite sur la commande setname`, error)
          return interaction.reply({content: '❌ Une erreur s\'est produite produite', ephemeral: true})}
      }
    }