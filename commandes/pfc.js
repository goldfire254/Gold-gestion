const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = {

  name: 'pfc',
  description: 'Jeux pierre, feuille, ciseaux',
  permission: "Aucune",
  dm: false,
  category: "Fun",
  options: [
    {
      type: "string",
      name: "choix",
      description: "pierre, feuille, ciseaux",
      required: true,
    }
  ],

  async run(bot, interaction) {

    const random = ["pierre", "feuille", "ciseaux"]
    const result = random[Math.floor(Math.random() * random.length)];
    const choix = interaction.options.getString("choix"); 

    if (choix ==! "pierre" || choix ==! "feuille" || choix ==! "ciseaux") return interaction.reply({ content: "Veuillez choisir entre \`pierre\`, \`feuille\` ou \`ciseaux\`", ephemeral: true })

    if (choix === "ciseaux" & result === "ciseaux") {
        const embed = new Discord.EmbedBuilder()
            .setColor(color)
            .setDescription(`🖖 ⭕ 🖖 \n Vous avez vous deux fait ciseaux vous avez fait égalité`)
        interaction.channel.send({embeds: [embed]})
    }
    if (choix === "pierre" & result === "pierre") {
        const embed = new Discord.EmbedBuilder()
            .setColor(color)
            .setDescription(`✊ ⭕ ✊ \n Vous avez vous deux fait pierre vous avez fait égalité`)
        interaction.channel.send({embeds: [embed]})
    }
    if (choix === "feuille" & result === "feuille") {
        const embed = new Discord.EmbedBuilder()
            .setColor(color)
            .setDescription(`✋ ⭕ ✋ \n Vous avez vous deux fait feuille vous avez fait égalité`)
        interaction.channel.send({embeds: [embed]})
    }
    if (choix === "pierre" & result === "ciseaux") {
        const embed = new Discord.EmbedBuilder()
            .setColor(color)
            .setDescription(`✊ ✅ 🖖 \n La pierre gagne contre le ciseaux tu as gagner`)
        interaction.channel.send({embeds: [embed]})
    }
    if (choix === "ciseaux" & result === "pierre") {
        const embed = new Discord.EmbedBuilder()
            .setColor(color)
            .setDescription(`🖖 ❌ ✊ \n Le ciseaux perd contre la pierre tu as perdu`)
        interaction.channel.send({embeds: [embed]})
    }
    if (choix === "pierre" & result === "feuille") {
        const embed = new Discord.EmbedBuilder()
            .setColor(color)
            .setDescription(`✊ ❌ ✋ \n La pierre perd contre la feuille tu as perdu`)
        interaction.channel.send({embeds: [embed]})
    }
    if (choix === "feuille" & result === "pierre") {
        const embed = new Discord.EmbedBuilder()
            .setColor(color)
            .setDescription(`✋ ✅ ✊ \n La feuille gagne contre la pierre tu as gagner`)
        interaction.channel.send({embeds: [embed]})
    }
    if (choix === "feuille" & result === "ciseaux") {
        const embed = new Discord.EmbedBuilder()
            .setColor(color)
            .setDescription(`✋ ❌ 🖖 \n La feuille perd contre le ciseaux tu as perdu`)
        interaction.channel.send({embeds: [embed]})
    }
    if (choix === "ciseaux" & result === "feuille") {
        const embed = new Discord.EmbedBuilder()
        .setColor(color)
        .setDescription(`🖖 ✅ ✋ \n Le ciseaux gagne contre la feuille tu as gagner`)
    interaction.channel.send({embeds: [embed]})
    }
  }
}