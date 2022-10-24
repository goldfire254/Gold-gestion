const { ActivityType } = require('discord.js');
const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = {

    name: "activity",
    description: "Change l'activité du bot",
    permission: Discord.PermissionFlagsBits.Administrator,
    dm: false,
    options: [
        {
            required: true,
            name: "activité",
            description: "watching listening competing playing streaming",
            type: "string"
        }
    ],

    async run(bot, interaction) {

        try {

            const activite = interaction.options.getString('activité')
            if(activite == "watching") {
                bot.user.setActivity('regarde', { type: ActivityType.Watching })
                const embed = new Discord.EmbedBuilder()
                    .setColor(color)
                    .setDescription(`✅ Mon activité est maitenant defini sur watching`)
                interaction.reply({ embeds: [embed]})
            }
            else if(activite == "listening") {
                bot.user.setActivity('écoute', { type: ActivityType.Listening })
                const embed = new Discord.EmbedBuilder()
                    .setColor(color)
                    .setDescription(`✅ Mon activité est maitenant defini sur listening`)
                interaction.reply({ embeds: [embed]})
            }
            else if(activite == "competing") {
                bot.user.setActivity('compete', { type: ActivityType.Competing })
                const embed = new Discord.EmbedBuilder()
                    .setColor(color)
                    .setDescription(`✅ Mon activité est maitenant defini sur competing`)
                interaction.reply({ embeds: [embed]})
            }
            else if(activite == "playing") {
                bot.user.setActivity('joue a', { type: ActivityType.Playing })
                const embed = new Discord.EmbedBuilder()
                    .setColor(color)
                    .setDescription(`✅ Mon activité est maitenant defini sur playing`)
                interaction.reply({ embeds: [embed]})
            }
            else if(activite == "streaming") {
                bot.user.setActivity('compete', { type: ActivityType.Streaming })
                const embed = new Discord.EmbedBuilder()
                    .setColor(color)
                    .setDescription(`✅ Mon activité est maitenant defini sur streaming`)
                interaction.reply({ embeds: [embed]})
            }
            else {
                const embed = new Discord.EmbedBuilder()
                    .setColor(color)
                    .setDescription(`veuillez rentrer une des valeurs suivantes : watching listening competing playing streaming`)
                interaction.reply({ embeds: [embed]})
            }

        } catch (error) {
            console.log(`❌ une erreur s'est produite sur la commande activity`, error)
            return interaction.reply({content: '❌ Une erreur s\'est produite produite', ephemeral: true})        }
    }
}
