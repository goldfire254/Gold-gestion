
const Discord = require('discord.js')

module.exports = {

    name: "clone",
    description: "clone un salon",
    permission: Discord.PermissionFlagsBits.Administrator,
    category: "modération",
    dm: false,

    async run(bot, interaction, message, args) {


        if(!interaction.member.permissions.has(Discord.PermissionsBitField.resolve("Administrator"))) return interaction.reply("vous n'avez pas les permissions d'effectuer la commandes");
        if(!interaction.guild.members.me.permissions.has(Discord.PermissionsBitField.resolve("Administrator"))) return interaction.reply("vous n'avez pas les permissions d'effectuer la commandes");
       
        try {

            const channel = interaction.channel;

            channel.clone({position: channel.rawPosition}).then(async ch => {
                ch.send(`\`cloné par ${interaction.user.tag}\``)
            })

        } catch (error) {
            console.log(`❌ une erreur c'est produite sur la commande clone`, error)
            return interaction.reply({content: '❌ Une erreur c\'est produite', ephemeral: true})        }
      } 
    }