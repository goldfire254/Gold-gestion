const Discord = require("discord.js")
const { EmbedBuilder, TextInputBuilder, ModalBuilder, ActionRowBuilder, TextInputStyle } = require("discord.js")
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color
 
module.exports = {
 
    name: "embed",
    description: "Envoyer un embed personnalisé",
    permission: Discord.PermissionFlagsBits.Administrator,
    dm: false,
 
    async run(bot, interaction) {
    
      let Modal = new Discord.ModalBuilder()
      .setCustomId('report')
      .setTitle('Créé ton embed')
    
      let question1 = new Discord.TextInputBuilder()
      .setCustomId('titre')
      .setLabel('Quel titre voulez-vous mettre ?')
      .setRequired(false)
      .setPlaceholder('Ecrit ici... (facultatif)')
      .setStyle(TextInputStyle.Short)
    
      let question2 = new Discord.TextInputBuilder()
      .setCustomId('description')
      .setLabel("Quelle description voulez-vous mettre ?")
      .setRequired(true)
      .setPlaceholder('Ecrit ici...')
      .setStyle(TextInputStyle.Paragraph)
    
      let question3 = new Discord.TextInputBuilder()
      .setCustomId('couleur')
      .setLabel('Quelle couleur voulez-vous mettre ?')
      .setRequired(false)
      .setPlaceholder('Dans ce format : #3dffcc (facultatif)')
      .setStyle(TextInputStyle.Short)
    
      let question4 = new Discord.TextInputBuilder()
      .setCustomId('footer')
      .setLabel('Quelle footer voulez-vous mettre ?')
      .setRequired(false)
      .setPlaceholder('Ecrit ici... (facultatif)')
      .setStyle(TextInputStyle.Short)
    
      let question5 = new Discord.TextInputBuilder()
      .setCustomId('timestamp')
      .setLabel('Voulez-vous mettre le timestamp ?')
      .setRequired(false)
      .setPlaceholder('oui/non (facultatif)')
      .setStyle(TextInputStyle.Short)
    
      let ActionRow1 = new Discord.ActionRowBuilder().addComponents(question1);
      let ActionRow2 = new Discord.ActionRowBuilder().addComponents(question2);
      let ActionRow3 = new Discord.ActionRowBuilder().addComponents(question3);
      let ActionRow4 = new Discord.ActionRowBuilder().addComponents(question4);
      let ActionRow5 = new Discord.ActionRowBuilder().addComponents(question5);
    
      Modal.addComponents(ActionRow1, ActionRow2, ActionRow3, ActionRow4, ActionRow5)
    
      await interaction.showModal(Modal)
    
      try {
        
        let reponse = await interaction.awaitModalSubmit({time: 300000})
        
        let titre = reponse.fields.getTextInputValue('titre')
        let description = reponse.fields.getTextInputValue('description')
        let couleur = reponse.fields.getTextInputValue('couleur')
        let footer = reponse.fields.getTextInputValue('footer')
        let timestamp = reponse.fields.getTextInputValue('timestamp')
        
        const EmbedBuilder = new Discord.EmbedBuilder()
        .setColor(color)
        .setDescription(`✅ Votre embed à été envoyer avec succès !`)
        
        if(!couleur) couleur = '#000001'
        if(!footer) footer = ' '
        if(!titre) titre = ' '
        if(!description) description = ' '
        
        let EmbedBuilder1 = new Discord.EmbedBuilder()
        .setColor(`${couleur}`)
        .setTitle(`${titre}`)
        .setDescription(`${description}`)
        .setFooter({ text: `${footer}` })
        
        if(reponse.fields.getTextInputValue('timestamp') === 'oui') EmbedBuilder1.setTimestamp()
        if(!reponse.fields.getTextInputValue('timestamp') === 'oui') return;
        
        await interaction.channel.send({embeds: [EmbedBuilder1]})
        
        await reponse.reply({embeds: [EmbedBuilder], ephemeral: true})
        
      } catch (err) { return; }
    }
}