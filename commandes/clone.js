const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = {

    name: "clone",
    description: "clone un salon",
    permission: Discord.PermissionFlagsBits.Administrator,
    category: "modération",
    dm: false,

    async run(bot, interaction) {


        if(!interaction.member.permissions.has(Discord.PermissionsBitField.resolve("Administrator"))) return interaction.reply("vous n'avez pas les permissions d'effectuer la commandes");
        if(!interaction.guild.members.me.permissions.has(Discord.PermissionsBitField.resolve("Administrator"))) return interaction.reply("vous n'avez pas les permissions d'effectuer la commandes");
       
        try {

            const channel = interaction.channel;
            const embed = new Discord.EmbedBuilder()
                .setColor(color)
                .setDescription(`✅ Le salon à été cloné avec succès !`)

            channel.clone({position: channel.rawPosition}).then(async ch => {
                ch.send({ embeds: [embed]})
            })

        } catch (error) {
            console.log(`❌ une erreur s'est produite sur la commande clone`, error)
            return interaction.reply({content: '❌ Une erreur s\'est produite produite', ephemeral: true})        }
      } 
    }