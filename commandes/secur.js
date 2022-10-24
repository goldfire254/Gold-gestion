const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = {

    name: "secur",
    description: "Affiche l'antiraid",
    permission: Discord.PermissionFlagsBits.Administrator,
    category: "modération",
    dm: false,

    async run(bot, interaction) {

      try {
        //const
        const create = await db.get("antichannel" + interaction.guild.id)
        const antibot = await db.get("antibot" + interaction.guild.id)
        const link = await db.get("antilink" + interaction.guild.id)
        //let emoji
        let create_channel;
        let antibot_on;
        let antilink;
        //let message
        let message_create_channel;
        let message_antibot_on;
        let message_antilink;
        //if == true emoji
        if(create == true) create_channel = "✅"
        if(antibot == true) antibot_on = "✅"
        if(link == true) antilink = "✅" 
        //if == false
        if(create == false) create_channel = "❌"
        if(antibot == false) antibot_on = "❌"
        if(link == false) antilink = "❌" 
        //if == true message
        if(create == true) message_create_channel = "on"
        if(antibot == true) message_antibot_on = "on"
        if(link == true) message_antilink = "on" 
        //if == false
        if(create == false) message_create_channel = "off"
        if(antibot == false) message_antibot_on = "off"
        if(link == false) message_antilink = "off" 
        //embed
        const secur_embed = new Discord.EmbedBuilder()
            .setColor(color)
            .setTitle("**ANTIRAID**")
            .setDescription(`${interaction.user.tag} voila le niveau de sécurité du serveur !`)
            .addFields({ name: `**antichannel**     ${create_channel}`, value: `l'antichannel est ${message_create_channel}`})
            .addFields({ name: `**antilink**        ${antilink}`, value: `l'antilink est ${message_antilink}`})
            .addFields({ name: `**antibot**         ${antibot_on}`, value: `l'antibot est ${message_antibot_on}`})
        interaction.reply({ embeds: [secur_embed]})

        } catch (error) {
          console.log(`❌ une erreur s'est produite sur la commande secur`, error)
          return interaction.reply({content: '❌ Une erreur s\'est produite produite', ephemeral: true})}
      }
    }