const Discord = require('discord.js')
const { EmbedBuilder, TextInputBuilder, ModalBuilder, ActionRowBuilder, TextInputStyle } = require("discord.js")
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color


module.exports = {

    name: "theme",
    description: "Définie la couleur du bot",
    permission: Discord.PermissionFlagsBits.Administrator,
    category: "modération",
    dm: false,

    async run(bot, interaction) {

        let Modal = new Discord.ModalBuilder()
        .setCustomId('report')
        .setTitle('Créé ton embed')

        let question3 = new Discord.TextInputBuilder()
        .setCustomId('couleur')
        .setLabel('Quelle couleur voulez-vous mettre ?')
        .setRequired(false)
        .setPlaceholder('Dans ce format : #3dffcc (facultatif)')
        .setStyle(TextInputStyle.Short)

        let ActionRow3 = new Discord.ActionRowBuilder().addComponents(question3);
        Modal.addComponents(ActionRow3)
      
        await interaction.showModal(Modal)
          
          let reponse = await interaction.awaitModalSubmit({time: 300000})
          
          let couleur = reponse.fields.getTextInputValue('couleur')
          
          const EmbedBuilder = new Discord.EmbedBuilder()
          .setColor(color)
          .setDescription(`✅ La couleur du bot est definie sur ${couleur}`)
          
          if(!couleur) couleur = '#000001'
          try{
            await reponse.reply({embeds: [EmbedBuilder]})
            await db.set('color')
            await db.add('color',couleur)
            const test = await db.get('color')
          }catch (err) {
            console.log(err)
          }
    }
}