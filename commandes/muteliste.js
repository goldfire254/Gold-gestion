const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = {

    name: "muteliste",
    description: "Récupére les membres mutes",
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
        let mute = await db.get(`mute_${interaction.guild.id}_${user.id}`);
        let reason = await db.get(`mute_${interaction.guild.id}_${user.id}_list`);
        let Embed = new Discord.EmbedBuilder()
            .setColor(color)
            .setDescription("❌ L'utilisateur n'est pas mute")

        if(mute === null) mute = 0;
        if(reason === null) reason = ""; else reason.join('\n');
        if(mute === 0) return interaction.reply({ embeds: [Embed]})
        

        const embed = new Discord.EmbedBuilder()
            .setColor(color)
            .setTitle('**MUTLISTE**')
            .setDescription(`L'utilisateur ${user} à été mute pour le(s) raison(s) : \n${reason} `)

      return interaction.reply({ embeds: [embed]})

        } catch (error) {
          console.log(`❌ une erreur s'est produite sur la commande warnings`, error)
          return interaction.reply({content: '❌ Une erreur s\'est produite produite', ephemeral: true})}
      }
    }