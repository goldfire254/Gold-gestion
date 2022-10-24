const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = {

    name: "warnings",
    description: "Recupère les avertissements d'un membre",
    permission: Discord.PermissionFlagsBits.Administrator,
    category: "modération",
    dm: false,
    options: [
        {
          required: true,
          type: "user",
          name: 'membre',
          description: 'Le membre à récupérer le warn'
        }
      ],

    async run(bot, interaction) {

      try {
 
            let user = interaction.options.getUser("membre")        
            let warnings = await db.get(`warnings_${interaction.guild.id}_${user.id}`);
            let reason = await db.get(`warnings_${interaction.guild.id}_${user.id}_list`);

            if(warnings === null) warnings = 0;
            if(reason === null) reason = ""; else reason.join('\n')

            const embed = new Discord.EmbedBuilder()
                .setColor(color)
                .setTitle('**WARNINGS**')
                .setDescription(`L'utilisateur ${user} à été avertie ${warnings} fois pour le(s) raison(s) : \n${reason} `)

          return interaction.reply({ embeds: [embed]})

        } catch (error) {
          console.log(`❌ une erreur s'est produite sur la commande warnings`, error)
          return interaction.reply({content: '❌ Une erreur s\'est produite produite', ephemeral: true})}
      }
    }