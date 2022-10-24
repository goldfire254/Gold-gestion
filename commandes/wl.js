const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = {

    name: "wl",
    description: "Protège un membre de l'antiraid",
    permission: Discord.PermissionFlagsBits.Administrator,
    category: "modération",
    dm: false,
    options: [
        {
          required: true,
          type: "user",
          name: 'membre',
          description: 'Le membre à wl'
        }
      ],

    async run(bot, interaction) {

      try {

          const user = interaction.options.get("membre").member;
          const embed = new Discord.EmbedBuilder()
            .setColor(color)
            .setDescription(`✅ ${user} à été ajouté dans la withliste avec succès !`)

          const wl = await db.get(`wl_${interaction.guild.id}_${user.id}`);

          if(wl === null) {
            await db.set(`wl_${interaction.guild.id}_${user.id}`,true)
          }else if(wl !== null) {
            const embed = new Discord.EmbedBuilder()
              .setColor(color)
              .setDescription(`⭕ Le membre est deja wl !`)
            return interaction.reply({ embeds: [embed]})
          }

          return interaction.reply({ embeds: [embed]})

        } catch (error) {
          console.log(`❌ une erreur s'est produite sur la commande wl`, error)
          return interaction.reply({content: '❌ Une erreur s\'est produite produite', ephemeral: true})}
      }
    }