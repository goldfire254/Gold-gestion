const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = {

    name: "unban",
    description: "Unban un membre",
    permission: Discord.PermissionFlagsBits.KickMembers,
    category: "modération",
    dm: false,
    options: [
        {
          required: true,
          type: "user",
          name: 'membre',
          description: 'Le membre à unban'
        }
      ],

    async run(bot, interaction) {

      try {

          const member = interaction.options.getUser("membre");
          const embed = new Discord.EmbedBuilder()
            .setColor(color)
            .setDescription(`✅ ${member} à été unban par ${interaction.user.tag} avec succès`)

          if(!interaction.member.permissions.has(PermissionFlagsBits.KickMembers)) return interaction.reply("Vous ne pouvez pas ban ce membre !");
          if(!interaction.guild.members.me.permissions.has(PermissionFlagsBits.KickMembers)) return interaction.reply("je n'est pas la permissons de ban ce membre !");

          interaction.guild.members.unban(member);

            return  interaction.reply({ embeds: [embed]})

        } catch (error) {
          console.log(`❌ une erreur s'est produite sur la commande ban`, error)
          return interaction.reply({content: '❌ Une erreur s\'est produite produite', ephemeral: true})        }
      }
    }