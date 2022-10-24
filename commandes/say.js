const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = {

    name: "say",
    description: "envoie un message de la part du bot",
    permission: "Aucune",
    category: "Utilitaires",
    dm: true,
    options: [
        {
            required: true,
            type: "string",
            name: "message",
            description: "le message a renvoyer"

        }
    ],

    async run(bot, interaction) {
        if(!interaction.guild.members.me.permissions.has(Discord.PermissionsBitField.resolve("Administrator"))) return interaction.reply("vous n'avez pas les permissions d'effectuer la commandes");
        try {
            
            const msg = interaction.options.getString("message");

            interaction.reply(msg)
        } catch (error) {
            console.log(`❌ une erreur s'est produite sur la commande say`, error)
            return interaction.reply({content: '❌ Une erreur s\'est produite produite', ephemeral: true})        }
    }
}