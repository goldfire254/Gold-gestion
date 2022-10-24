const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = {

    name: "ownerlist",
    description: "Récupére un membre owner",
    permission: Discord.PermissionFlagsBits.Administrator,
    category: "modération",
    dm: false,
    options: [
        {
          required: true,
          type: "user",
          name: 'membre',
          description: 'Le membre à récupérer'
        }
      ],

    async run(bot, interaction) {

      try {
 
            let user = interaction.options.getUser("membre")        
            let owner = await db.get(`owner_${interaction.guild.id}_${user.id}`);
            let Embed = new Discord.EmbedBuilder()
                .setColor(color)
                .setDescription("❌ L'utilisateur n'est pas owner")

            if(owner === null) owner = 0;
            if(owner === 0) return interaction.reply({ embeds: [Embed]})
            

            const embed = new Discord.EmbedBuilder()
                .setColor(color)
                .setTitle('**OWNERLIST**')
                .setDescription(`L'utilisateur ${user} à été owner`)

          return interaction.reply({ embeds: [embed]})

        } catch (error) {
          console.log(`❌ une erreur s'est produite sur la commande ownerlist`, error)
          return interaction.reply({content: '❌ Une erreur s\'est produite produite', ephemeral: true})}
      }
    }