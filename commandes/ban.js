const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = {

    name: "ban",
    description: "Ban un membre",
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
            .setDescription(`✅ ${member} à été ban par ${interaction.user.tag} avec succès`)

          if(!interaction.member.permissions.has(PermissionFlagsBits.KickMembers)) return interaction.reply("Vous ne pouvez pas ban ce membre !");
          if(!interaction.guild.members.me.permissions.has(PermissionFlagsBits.KickMembers)) return interaction.reply("je n'est pas la permissons de ban ce membre !");

          member.ban({ reason: `${reason} (ban par ${interaction.user.tag})`})

            return  interaction.reply({ embeds: [embed]})

        } catch (error) {
          console.log(`❌ une erreur s'est produite sur la commande unban`, error)
          return interaction.reply({content: '❌ Une erreur s\'est produite produite', ephemeral: true})        }
      }
    }