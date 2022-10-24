const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = {

    name: "setlogs",
    description: "Définie le salon des logs",
    permission: Discord.PermissionFlagsBits.Administrator,
    category: "modération",
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

      try {

            const logs = await db.set("setlogs",interaction.channel.id);    


            const on_off = interaction.options.getString("type")
            const on_embed = new Discord.EmbedBuilder()
                .setColor(color)
                .setDescription(`✅ ${interaction.user.tag} Le salon des logs est bien définie sur ${interaction.channel.name} !`)
            const off_embed = new Discord.EmbedBuilder()
                .setColor(color)
                .setDescription(`✅ ${interaction.user.tag} Le salon des logs est bien desactivé !`)
            const undifined_embed = new Discord.EmbedBuilder()
                .setColor(color)
                .setDescription(`⭕ ${interaction.user.tag} il faut remplir la case type par on ou off`)
            if(on_off == "on") {
                interaction.reply({ embeds: [on_embed]})
                await db.set("setlogs" + interaction.guild.id,true)
            }
            else if(on_off == "off") {
                interaction.reply({ embeds: [off_embed]})
                await db.set("setlogs" + interaction.guild.id,false)
            }else {     
                interaction.reply({ embeds: [undifined_embed]})
            }
        

        } catch (error) {
          console.log(`❌ une erreur s'est produite sur la commande setlogs`, error)
          return interaction.reply({content: '❌ Une erreur s\'est produite produite', ephemeral: true})}
      }
    }