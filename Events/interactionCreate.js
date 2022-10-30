const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = async (bot, interaction) => {

    if(interaction.type === Discord.InteractionType.ApplicationCommand) {

        let command = require(`../commandes/${interaction.commandName}`)
        command.run(bot, interaction, command.options)  
    }
}
