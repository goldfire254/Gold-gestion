const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = {

    name: "raidlogs",
    description: "Active les logs de raid",
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
        //const
        const on_off = interaction.options.getString("type")
        const on_embed = new Discord.EmbedBuilder()
            .setColor(color)
            .setDescription(`✅ ${interaction.user.tag} raidlogs est bien activé !`)
        const off_embed = new Discord.EmbedBuilder()
            .setColor(color)
            .setDescription(`✅ ${interaction.user.tag} raidlogs est bien desactivé !`)
        const undifined_embed = new Discord.EmbedBuilder()
            .setColor(color)
            .setDescription(`⭕ ${interaction.user.tag} il faut remplir la case type par on ou off`)
        //if == on
        if(on_off == "on") {
            interaction.reply({ embeds: [on_embed]})
            await db.set("raidlogs" + interaction.guild.id,true)
        }
        //else if == off
        else if(on_off == "off") {
            interaction.reply({ embeds: [off_embed]})
            await db.set("raidlogs" + interaction.guild.id,false)
        }
        //else == undifined
        else {     
            interaction.reply({ embeds: [undifined_embed]})
        }
    
    }
}