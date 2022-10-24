const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color


module.exports = {

    name: "verification",
    description: "Permet de mettre un message de verification",
    permission: Discord.PermissionFlagsBits.Administrator,
    dm: false,
    options: [
        {
          required: true,
          type: "string",
          name: 'type',
          description: 'on ou off'
        },
        {
            required: true,
            type: "channel",
            name: 'channel',
            description: 'Le salon du message'
        },
        {
            required: true,
            type: "role",
            name: 'role',
            description: 'Le role a ajouté'
        }
],


  
    async run(bot, interaction) {

        const on_off = interaction.options.getString("type")
        const salon = interaction.options.getChannel('channel')
        const rls = interaction.options.getRole('role')
        const rl = await db.set('roles' + interaction.guild.id,rls)
        const on_embed = new Discord.EmbedBuilder()
            .setColor(color)
            .setDescription(`✅ ${interaction.user.tag} la verification est bien activé !`)
        const off_embed = new Discord.EmbedBuilder()
            .setColor(color)
            .setDescription(`✅ ${interaction.user.tag} la verification est bien desactivé !`)
        const undifined_embed = new Discord.EmbedBuilder()
            .setColor(color)
            .setDescription(`⭕ ${interaction.user.tag} il faut remplir la case type par on ou off`)
        if(on_off == "on") {
            interaction.reply({ embeds: [on_embed]})
            await db.set("verification" + interaction.guild.id + salon,true)
        }
        else if(on_off == "off") {
            interaction.reply({ embeds: [off_embed]})
            await db.set("verification" + interaction.guild.id + salon,false)
        }else {     
            interaction.reply({ embeds: [undifined_embed]})
        }
        const verif = await db.get('verification' + interaction.guild.id + salon)
        if(verif == true) {
            const embed = new Discord.EmbedBuilder()
                .setColor(color)
                .setDescription(`clique sur le bouton pour acceder à l'integralité du serveur !`)
            const button = new Discord.ActionRowBuilder().addComponents(
                new Discord.ButtonBuilder()
                    .setCustomId('verif')
                    .setEmoji('✅')
                    .setLabel('verification')
                    .setStyle(Discord.ButtonStyle.Success)
            )
            interaction.guild.channels.cache.get(salon.id).send({ embeds: [embed], components: [button]})
        }
        else if(verif == false) return;
    }
}