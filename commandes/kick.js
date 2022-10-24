const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = {

    name: "kick",
    description: "Kick un membre",
    permission: Discord.PermissionFlagsBits.KickMembers,
    category: "modération",
    dm: false,
    options: [
        {
          required: true,
          type: "user",
          name: 'membre',
          description: 'Le membre à bannir'
        },
        {
          required: false,
          type: "string",
          name: 'raison',
          description: 'La raison du banissement'
        }
      ],

    async run(bot, interaction) {

      try {

          const member = interaction.options.get("membre").member;
          const reason = interaction.options.get("raison")?.value || "Pas de  raison !";
          const embed = new Discord.EmbedBuilder()
            .setColor(color)
            .setDescription(`✅ ${member} à été kick par ${interaction.user.tag} avec succès`)

          member.kick({ reason: `${reason} (Kick par ${interaction.user.tag})`})
          .then(() => {
            interaction.reply({ embeds: [embed]})
          }).catch((err) => {
            interaction.reply(`erreur: ${err}`)
          });
        } catch (error) {
          console.log(`❌ une erreur s'est produite sur la commande kick`, error)
          return interaction.reply({content: '❌ Une erreur s\'est produite produite', ephemeral: true})        }
      }
    }