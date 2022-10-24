const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = {

    name: "warn",
    description: "Avertis un membre",
    permission: Discord.PermissionFlagsBits.Administrator,
    category: "modération",
    dm: false,
    options: [
        {
          required: true,
          type: "user",
          name: 'membre',
          description: 'Le membre à warn'
        },
        {
          required: false,
          type: "string",
          name: 'raison',
          description: 'La raison du warn'
        }
      ],

    async run(bot, interaction) {

      try {

          const user = interaction.options.get("membre").member;
          const reason = interaction.options.get("raison")?.value || "Pas de  raison !";
          const embed = new Discord.EmbedBuilder()
            .setColor(color)
            .setDescription(`✅ ${user} à été avertie pour la raison : ${reason} avec succès !`)
          if(user === interaction.member) return interaction.reply({ content: `❌vous ne pouvez pas vous auto warn`, ephemeral: true});

          if(reason.length > 1500) return interaction.reply({ content: `La raison de l'avertissement est trop longue`, ephemeral: true});

          if(user.user.bot) return interaction.reply({ content: `❌ Vous ne pouvez pas avertir les bots !`, ephemeral: true});

          const warnings = await db.get(`warnings_${interaction.guild.id}_${user.id}`);

          if(warnings === null) {
            await db.set(`warnings_${interaction.guild.id}_${user.id}`, 1)
            await db.push(`warnings_${interaction.guild.id}_${user.id}_list`, reason)
          }else if(warnings !== null) {
            await db.add(`warnings_${interaction.guild.id}_${user.id}`, 1);
            await db.push(`warnings_${interaction.guild.id}_${user.id}_list`, reason);
          }

          return interaction.reply({ embeds: [embed]})

        } catch (error) {
          console.log(`❌ une erreur s'est produite sur la commande warn`, error)
          return interaction.reply({content: '❌ Une erreur s\'est produite produite', ephemeral: true})}
      }
    }