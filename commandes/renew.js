
const Discord = require('discord.js')

module.exports = {

    name: "renew",
    description: "recrée un salon",
    permission: Discord.PermissionFlagsBits.Administrator,
    category: "modération",
    dm: false,
    options: [
        {
            required: true,
            type: "channel",
            name: 'salon',
            description: 'Le salon a recréer'
          }
    ],

    async run(bot, interaction, message, args) {

        
        if(!interaction.member.permissions.has(Discord.PermissionsBitField.resolve("Administrator"))) return interaction.reply("vous n'avez pas les permissions d'effectuer la commandes");
        if(!interaction.guild.members.me.permissions.has(Discord.PermissionsBitField.resolve("Administrator"))) return interaction.reply("vous n'avez pas les permissions d'effectuer la commandes");
       
        try {

            const channel = interaction.options.getChannel("salon");

            channel.clone({position: channel.rawPosition}).then(async ch => {
                ch.send(`\`renew par ${interaction.user.tag}\``)
            })

            await channel.delete()

        } catch (error) {
            console.log(`❌ une erreur c'est produite sur la commande renew`, error)
            return interaction.reply({content: '❌ Une erreur c\'est produite', ephemeral: true})        }
      } 
    }