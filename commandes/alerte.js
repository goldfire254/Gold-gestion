const { SlashCommandBuilder } = require('discord.js')
const Discord = require('discord.js')
const intents = new Discord.IntentsBitField(3276799)
const bot = new Discord.Client({intents})

module.exports = {

    name: "alerte",
    description: "Donne des rappels dans le chat",
    permission: Discord.PermissionFlagsBits.Administrator,
    category: "Utilitaires",
    dm: false,

    async run(bot, interaction, message, args) {

        if(!interaction.member.permissions.has(Discord.PermissionsBitField.resolve("Administrator"))) return interaction.reply("vous n'avez pas les permissions d'effectuer la commandes");
        if(!interaction.guild.members.me.permissions.has(Discord.PermissionsBitField.resolve("Administrator"))) return interaction.reply("vous n'avez pas les permissions d'effectuer la commandes");

        try {

            const URL = interaction.user.displayAvatarURL({ format: "png"})
            const name = interaction.user.username

            const embed = new Discord.EmbedBuilder()
                .setColor('Yellow')
                .setTitle('**__RAPPEL__**')
                .setDescription(' @everyone petit rappel')
                .setAuthor({ name: `${name}`, iconURL: URL})
                .setThumbnail('https://i.imgur.com/ASRXZtJ.png')
                .addFields({ name: "rappel 1", value: "je vous rappel qu'il faut rester actif pour pas être kick du serveur."})
                .addFields({ name: "rappel 2", value: "je vous rappel qu'il y a des giveaways sympa dans les salons giveaways."})
                .addFields({ name: "rappel 3", value: "je vous rappel qu'il y a beacoup d'event avec des recompense cool."})
                .addFields({ name: "rappel 4", value: "je vous rappel qu'il y a des recompense pour toutes les personnes qui boost donc booster le serveur."})
                .addFields({ name: "rappel 5", value: "je vous rappel qu'il y a des rôles pour acceder à different theme."})
                .addFields({ name: "rappel 6", value: "je vous rappel qu'il y a des invites rewards qui vous recompense quand vous inviter des personnes."})
                .addFields({ name: "rappel 7", value: "je vous rappel qu'il y a un rôle vip qui comporte des avantages a gagner facilement."})
                .addFields({ name: "rappel 8", value: "je vous rappel qu'il y a des session de recrutement staff, graphiste, developpeur, etc... ."})
                .addFields({ name: "rappel 9", value: "je vous rappel qu'il y a une chaîne youtube pour le serveur donc allez vous abonnez il y a une commande qui mène à la chaine."})
                .addFields({ name: "rappel 10", value: "je vous rappel qu'il y a un règlement donc aller le lire."})

            bot.channels.cache.get("1026569323541692538").send({ embeds: [embed]});
        } catch (error) {
            console.log(`❌ une erreur c'est produite sur la commande alerte`, error)
            return interaction.reply({content: '❌ Une erreur c\'est produite', ephemeral: true})        }
    }
}