const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = {

    name: "messagelogs",
    description: "Active les logs de message",
    permission: Discord.PermissionFlagsBits.Administrator,
    dm: false,
    options: [
        {
          required: true,
          type: "string",
          name: 'type',
          description: 'on ou off'
        }
],

    async run(bot, interaction) {

        const on_off = interaction.options.getString("type")
        const on_embed = new Discord.EmbedBuilder()
            .setColor(color)
            .setDescription(`✅ ${interaction.user.tag} messagelogs est bien activé !`)
        const off_embed = new Discord.EmbedBuilder()
            .setColor(color)
            .setDescription(`✅ ${interaction.user.tag} messagelogst est bien desactivé !`)
        const undifined_embed = new Discord.EmbedBuilder()
            .setColor(color)
            .setDescription(`⭕ ${interaction.user.tag} il faut remplir la case type par on ou off`)
        if(on_off == "on") {
            interaction.reply({ embeds: [on_embed]})
            await db.set("messagelogs" + interaction.guild.id,true)
        }
        else if(on_off == "off") {
            interaction.reply({ embeds: [off_embed]})
            await db.set("messagelogs" + interaction.guild.id,false)
        }else {     
            interaction.reply({ embeds: [undifined_embed]})
        }
    
    }
}