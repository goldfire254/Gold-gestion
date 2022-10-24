const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = {

    name: "unmute",
    description: "Demute un membre",
    permission: Discord.PermissionFlagsBits.Administrator,
    category: "modération",
    dm: false,
    options: [
        {
          required: true,
          type: "user",
          name: 'membre',
          description: 'Le membre à unmute'
        }
      ],

    async run(bot, interaction) {

      try {
 
            let user = interaction.options.getUser("membre")    

            if(user === interaction.member) return interaction.reply(`❌ vous ne vouvez pas vous unmute`)

            const embed = new Discord.EmbedBuilder()
                .setColor(color)
                .setDescription(`✅ ${user} à été unmute par ${interaction.user.tag} avec succès !`)

            let mute = await db.get(`mute_${interaction.guild.id}_${user.id}`);

            if(mute === null) {
                return interaction.reply("❌ l'utilisateur n'est pas mute")
            }

            await db.delete(`mute_${interaction.guild.id}_${user.id}`)
            await db.delete(`mute_${interaction.guild.id}_${user.id}_list`)


            return interaction.reply({ embeds: [embed]})

        } catch (error) {
          console.log(`❌ une erreur s'est produite sur la commande unmute`, error)
          return interaction.reply({content: '❌ Une erreur s\'est produite produite', ephemeral: true})}
      }
    }