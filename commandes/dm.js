const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = {

    name: "dm",
    description: "Empeche un dm a un membre",
    permission: Discord.PermissionFlagsBits.Administrator,
    dm: false,
    options: [
        {
            type: "user",
            name: "membre",
            description: "le membre a qui envoyer le message",
            required: true
        },
        {
            type: "string",
            name: "message",
            description: "le message a envoyer",
            required: true
        }
    ],

    async run(bot, interaction) {

        const membre = interaction.options.getUser('membre')
        const msg = interaction.options.getString("message")
        const embed = new Discord.EmbedBuilder()
            .setColor(color)
            .setDescription(`${msg}`)
            .setFooter({ text: `dm de la part ${interaction.user.tag} dans le serveur ${interaction.guild.name}`, iconURL: `${interaction.user.displayAvatarURL({ dynamic: true})}`})
        const valid_embed = new Discord.EmbedBuilder()
            .setColor(color)
            .setDescription(`✅ ${interaction.user.tag} j'ai bien envoyer le dm a ${membre}`)
        bot.users.send(`${membre.id}`, { embeds: [embed]})
        interaction.reply({ embeds: [valid_embed]})

    
    }
}