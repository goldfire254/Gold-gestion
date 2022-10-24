const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

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

    async run(bot, interaction) {

        
        if(!interaction.member.permissions.has(Discord.PermissionsBitField.resolve("Administrator"))) return interaction.reply("vous n'avez pas les permissions d'effectuer la commandes");
        if(!interaction.guild.members.me.permissions.has(Discord.PermissionsBitField.resolve("Administrator"))) return interaction.reply("vous n'avez pas les permissions d'effectuer la commandes");
       
        try {

            const channel = interaction.options.getChannel("salon");

            const embed = new Discord.EmbedBuilder()
            .setColor(color)
            .setDescription(`✅ le salon a été renew avec succès`)

            channel.clone({position: channel.rawPosition}).then(async ch => {
                ch.send({ embeds: [embed]})
            })


            await channel.delete()

        } catch (error) {
            console.log(`❌ une erreur s'est produite sur la commande renew`, error)
            return interaction.reply({content: '❌ Une erreur s\'est produite produite', ephemeral: true})        }
      } 
    }