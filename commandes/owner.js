const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = {

    name: "owner",
    description: "Ajoute un membre owner du bot",
    permission: Discord.PermissionFlagsBits.Administrator,
    category: "modération",
    dm: false,
    options: [
        {
          required: true,
          type: "user",
          name: 'membre',
          description: 'Le membre à mettre owner'
        }
      ],

    async run(bot, interaction) {

      try {

          const user = interaction.options.get("membre").member;
          const embed = new Discord.EmbedBuilder()
            .setColor(color)
            .setDescription(`✅ ${user} est maintenant owner !`)

          const owner = await db.get(`owner_${interaction.guild.id}_${user.id}`);

          if(owner === null) {
            await db.set(`wl_${interaction.guild.id}_${user.id}`,true)
          }else if(owner !== null) {
            const embed = new Discord.EmbedBuilder()
              .setColor(color)
              .setDescription(`⭕ Le membre est deja owner !`)
            return interaction.reply({ embeds: [embed]})
          }

          return interaction.reply({ embeds: [embed]})

        } catch (error) {
          console.log(`❌ une erreur s'est produite sur la commande owner`, error)
          return interaction.reply({content: '❌ Une erreur s\'est produite produite', ephemeral: true})}
      }
    }