const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = {

    name: "wllist",
    description: "Récupére un membre sur la wl",
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
            let wl = await db.get(`wl_${interaction.guild.id}_${user.id}`);
            let reason = await db.get(`wl_${interaction.guild.id}_${user.id}_list`);
            let Embed = new Discord.EmbedBuilder()
                .setColor(color)
                .setDescription("❌ L'utilisateur n'est pas wl")

            if(wl === null) wl = 0;
            if(reason === null) reason = ""; else reason.join('\n');
            if(wl === 0) return interaction.reply({ embeds: [Embed]})
            

            const embed = new Discord.EmbedBuilder()
                .setColor(color)
                .setTitle('**WITHELISTE**')
                .setDescription(`L'utilisateur ${user} à été wl`)

          return interaction.reply({ embeds: [embed]})

        } catch (error) {
          console.log(`❌ une erreur s'est produite sur la commande wllist`, error)
          return interaction.reply({content: '❌ Une erreur s\'est produite produite', ephemeral: true})}
      }
    }