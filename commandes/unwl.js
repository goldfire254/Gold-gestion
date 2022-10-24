const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = {

    name: "unwl",
    description: "Retire un wl",
    permission: Discord.PermissionFlagsBits.Administrator,
    category: "modération",
    dm: false,
    options: [
        {
          required: true,
          type: "user",
          name: 'membre',
          description: 'Le membre à unwl'
        }
      ],

    async run(bot, interaction) {

      try {
 
            let user = interaction.options.getUser("membre")        

            if(user === interaction.member) return interaction.reply(`❌ vous ne vouvez pas vous unwl`)

            const embed = new Discord.EmbedBuilder()
                .setColor(color)
                .setDescription(`✅ ${user} n'est plus wl !`)

            let wl = await db.get(`wl_${interaction.guild.id}_${user.id}`);

            if(wl === null) {
                return interaction.reply("❌ l'utilisateur n'est pas wl")
            }

            await db.delete(`wl_${interaction.guild.id}_${user.id}`)
            await db.delete(`wl_${interaction.guild.id}_${user.id}_list`)

            return interaction.reply({ embeds: [embed]})

        } catch (error) {
          console.log(`❌ une erreur s'est produite sur la commande unwl`, error)
          return interaction.reply({content: '❌ Une erreur s\'est produite produite', ephemeral: true})}
      }
    }