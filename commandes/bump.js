const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color


module.exports = {

    name: "bump",
    description: "Bump ton serveur",
    permission: "Aucune",
    dm: true,

    async run(bot, interaction) {

        try {
            const verif = await db.get('bump' + interaction.guild.id)
            if(verif == false) return;
            if(verif == true) {
                const invite = await interaction.channel.createInvite().then(async m=>{
                    const lien = m.url
                const description = await db.get('description' + interaction.guild.id)
                const embed = new Discord.EmbedBuilder()
                    .setColor(color)
                    .setTitle("**__NOUVEAU BUMP__**")
                    .setDescription(description)
                    .addFields({ name: `nom `, value: `${interaction.guild.name}`})
                    .setFooter({ text: `id : ${interaction.guild.id}`})
                const button = new Discord.ActionRowBuilder().addComponents(
                    new Discord.ButtonBuilder()
                        .setEmoji('📥')
                        .setLabel('rejoindre le serveur')
                        .setStyle(Discord.ButtonStyle.Link)
                        .setURL(lien)
                )
                    bot.guilds.cache.get('1030790550883930153').channels.cache.get('1033654790334451712').send({ embeds: [embed], components: [button]})})
            }
        } catch (error) {
            console.log(`❌ une erreur s'est produite sur la commande bump`, error)
            return interaction.reply({content: '❌ Une erreur s\'est produite produite', ephemeral: true})
        }
    }
}