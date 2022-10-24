const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = {

    name: "unowner",
    description: "Retire un owner",
    permission: Discord.PermissionFlagsBits.Administrator,
    category: "modération",
    dm: false,
    options: [
        {
          required: true,
          type: "user",
          name: 'membre',
          description: 'Le membre à unowner'
        }
      ],

    async run(bot, interaction) {

      try {
 
            let user = interaction.options.getUser("membre")        

            if(user === interaction.member) return interaction.reply(`❌ vous ne vouvez pas vous unowner`)

            const embed = new Discord.EmbedBuilder()
                .setColor(color)
                .setDescription(`✅ ${user} n'est plus owner !`)

            let owner = await db.get(`owner_${interaction.guild.id}_${user.id}`);

            if(owner === null) {
                return interaction.reply("❌ l'utilisateur n'est pas owner")
            }

            await db.delete(`owner_${interaction.guild.id}_${user.id}`)
            await db.delete(`owner_${interaction.guild.id}_${user.id}_list`)

            return interaction.reply({ embeds: [embed]})

        } catch (error) {
          console.log(`❌ une erreur s'est produite sur la commande unowner`, error)
          return interaction.reply({content: '❌ Une erreur s\'est produite produite', ephemeral: true})}
      }
    }