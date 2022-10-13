const Discord = require('discord.js')

module.exports = {

    name: "setbot",
    description: "change les informations du bots",
    permission: Discord.PermissionFlagsBits.Administrator,
    category: "acceuil",
    dm: false,
    options: [
        {
            required: true,
            type: "string",
            name: "status",
            description: "change le status du bot ( online, dnd, idle, invisible)"
        },
        {
            required: true,
            type: "string",
            name: "bio",
            description: "change la biography du bot"
        }
    ],

    async run(bot, interaction, message, args) {

        if(!interaction.member.permissions.has(Discord.PermissionsBitField.resolve("Administrator"))) return interaction.reply("vous n'avez pas les permissions d'effectuer la commandes");
        if(!interaction.guild.members.me.permissions.has(Discord.PermissionsBitField.resolve("Administrator"))) return interaction.reply("vous n'avez pas les permissions d'effectuer la commandes");

        const statues = interaction.options.getString("status")
        const biographie = interaction.options.getString("bio")

        try {

            bot.user.setPresence({ activities: [{ name: `${biographie}`}], status: `${statues}` })

            interaction.reply(`mon status est bien defini sur \`${statues}\` ma bio est bien defini sur \`${biographie}\``)

        } catch (error) {
            console.log(`❌ une erreur c'est produite sur la commande setbot`, error)
            return interaction.reply({content: '❌ Une erreur c\'est produite', ephemeral: true})        }
    }     
}