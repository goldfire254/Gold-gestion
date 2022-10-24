const { codeBlock } = require('discord.js');
const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color


module.exports = {

    name: "setbump",
    description: "config le bump",
    permission: "Aucune",
    dm: true,
    options: [
        {
            type: "string",
            name: "type",
            description: "on ou off",
            required: true
        },
        {
            type: "string",
            name: "description",
            description: "La description du serveur",
            required: true
        }
    ],

    async run(bot, interaction) {

        try {
            const reponse = interaction.options.getString('type')
            if(reponse == "on") {
                const descriptions = interaction.options.getString('description')
                await db.set('bump' + interaction.guild.id,true)
                await db.set('description' + interaction.guild.id,descriptions)
                const on_embed = new Discord.EmbedBuilder()
                    .setColor(color)
                    .setDescription(`✅ Le bump est bien configurer`)
                interaction.reply({ embeds: [on_embed]})
            }
            else if(reponse == "off") {
                const bump = await db.set('bump' + interaction.guild.id,false)
                const off_embed = new Discord.EmbedBuilder()
                    .setColor(color)
                    .setDescription(`✅ Le bump est bien désactiver`)
                interaction.reply({ embeds: [off_embed]})
            }
            else {
                const undi_embed = new Discord.EmbedBuilder()
                .setColor(color)
                .setDescription(`❌ Veuiller saisr on ou off dans l'options`)
            interaction.reply({ embeds: [undi_embed]})
            }
            
        } catch (error) {
            console.log(`❌ une erreur s'est produite sur la commande setbump`, error)
            return interaction.reply({content: '❌ Une erreur s\'est produite produite', ephemeral: true})
        }
    }
}