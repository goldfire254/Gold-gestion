const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color;

module.exports = {

    name: "unwarn",
    description: "Enlève un avertissement",
    permission: Discord.PermissionFlagsBits.Administrator,
    category: "modération",
    dm: false,
    options: [
        {
          required: true,
          type: "user",
          name: 'membre',
          description: 'Le membre à unwarn'
        }
      ],

    async run(bot, interaction) {

      try {
 
            let user = interaction.options.getUser("membre")        

            if(user === interaction.member) return interaction.reply(`❌ vous ne vouvez pas vous unwarn`)

            const embed = new Discord.EmbedBuilder()
                .setColor(color)
                .setDescription(`✅ Le warn de ${user} à été retiré par ${interaction.user.tag} avec succès !`)

            let warnings = await db.get(`warnings_${interaction.guild.id}_${user.id}`);

            if(warnings === null) {
                return interaction.reply("❌ l'utilisateur n'a aucun avertissements")
            }

            await db.delete(`warnings_${interaction.guild.id}_${user.id}`)
            await db.delete(`warnings_${interaction.guild.id}_${user.id}_list`)

            return interaction.reply({ embeds: [embed]})

        } catch (error) {
          console.log(`❌ une erreur s'est produite sur la commande unwarn`, error)
          return interaction.reply({content: '❌ Une erreur s\'est produite produite', ephemeral: true})}
      }
    }