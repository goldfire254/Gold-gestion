const { PermissionFlagsBits } = require('discord.js');
const Discord = require('discord.js')

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

    async run(bot, interaction, args) {

      try {

          const member = interaction.options.get("membre").member;
          const reason = interaction.options.get("raison")?.value || "Pas de  raison !";

          if(!interaction.member.permissions.has(PermissionFlagsBits.KickMembers)) return interaction.reply("Vous ne pouvez pas ban ce membre !");
          if(!interaction.guild.members.me.permissions.has(PermissionFlagsBits.KickMembers)) return interaction.reply("je n'est pas la permissons de ban ce membre !");

          member.ban({ reason: `${reason} (Kick par ${interaction.user.tag})`})
          .then(() => {
            interaction.reply(`${member} ban avec succès`)
          }).catch((err) => {
            interaction.reply(`erreur: ${err}`)
          });
        } catch (error) {
          console.log(`❌ une erreur c'est produite sur la commande ban`, error)
          return interaction.reply({content: '❌ Une erreur c\'est produite', ephemeral: true})        }
      }
    }