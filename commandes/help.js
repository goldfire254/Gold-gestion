const Discord = require('discord.js')

module.exports = {

    name: "help",
    description: "Donne la liste des commandes",
    permission: "Aucune",
    category: "acceuil",
    dm: true,

    async run(bot, interaction, args) {

        try {

            const config = require('../config.json')
            const prefix = config.prefix

            const acembed = new Discord.EmbedBuilder()
                .setColor('Yellow')
                .setTitle("**__🏡 · acceuil__**")
                .setDescription("🏡 voici la liste des commandes du bot 🏡")
                .setThumbnail(`${interaction.user.displayAvatarURL({ dynamic: true})}`)
                .addFields({ name: `\`${prefix} help\``, value: "Donne la liste des commandes", inline: false})
                .addFields({ name: `\`${prefix} support\``, value: "Donne le support du bot", inline: false})

            const utembed = new Discord.EmbedBuilder()
                .setColor('Yellow')
                .setTitle('**__📚 · utilitaire__**')
                .setDescription("📚 voici les commandes utilitaires 📚")
                .setThumbnail(`${interaction.user.displayAvatarURL({ dynamic: true})}`)
                .addFields({ name: `\`${prefix} alerte\``, value: "Donne un rappel dans le chat", inline: false})
                .addFields({ name: `\`${prefix} claim\``, value: "Donne le temps pour claim", inline: false})
                .addFields({ name: `\`${prefix} pic\``, value: "Donne la photo de profil d'un membre", inline: false})
                .addFields({ name: `\`${prefix} youtube\``, value: "Donne la chaîne youtube du serveur", inline: false})
                .addFields({ name: `\`${prefix} emojiadd\``, value: "Ajoute un emoji sur le serveur", inline: false})
                .addFields({ name: `\`${prefix} clone\``, value: "Clone un salon", inline: false})
                .addFields({ name: `\`${prefix} roleadd\``, value: "Ajoute un role", inline: false})
                .addFields({ name: `\`${prefix} removerole\``, value: "Retire un role", inline: false})
                .addFields({ name: `\`${prefix} say\``, value: "Envoie un message de la part du bot", inline: false})
            
            const moembed = new Discord.EmbedBuilder()
                .setColor('Yellow')
                .setTitle('**__🔨 · moderation__**')
                .setDescription("🔨 voici les commandes de modération 🔨")
                .setThumbnail(`${interaction.user.displayAvatarURL({ dynamic: true})}`)
                .addFields({ name: `\`${prefix} ban\``, value: "Ban un membre du serveur", inline: false})
                .addFields({ name: `\`${prefix} kick\``, value: "Kick un membre du serveur", inline: false})
                .addFields({ name: `\`${prefix} lock\``, value: "Empeche les membres de parler dans un salon", inline: false})
                .addFields({ name: `\`${prefix} unlock\``, value: "Deverouille un salon", inline: false})
                .addFields({ name: `\`${prefix} clear\``, value: "supprime des message", inline: false})
                .addFields({ name: `\`${prefix} renew\``, value: "Recréer un salon", inline: false})

            const inembed = new Discord.EmbedBuilder() 
                .setColor('Yellow')
                .setTitle('**__📌 · information__**')
                .setDescription("📌 voici les commandes utilitaires 📌")
                .setThumbnail(`${interaction.user.displayAvatarURL({ dynamic: true})}`)
                .addFields({ name: `\`${prefix} serverinfo\``, value: "Donne des information sur le serveur", inline: false})
                .addFields({ name: `\`${prefix} userinfo\``, value: "Donne des information sur un membre", inline: false})
                .addFields({ name: `\`${prefix} ping\``, value: "Donne la latence du bot", inline: false})
                .addFields({ name: `\`${prefix} setbot\``, value: "Change les infos du bot", inline: false})

                const fuembed = new Discord.EmbedBuilder() 
                .setColor('Yellow')
                .setTitle('**__🧨 · fun__**')
                .setDescription("🧨 voici les commandes utilitaires 🧨")
                .setThumbnail(`${interaction.user.displayAvatarURL({ dynamic: true})}`)
                .addFields({ name: `\`${prefix} 8ball \``, value: "Donne une reponse a une question", inline: false})
                .addFields({ name: `\`${prefix} calin \``, value: "Fais un calin a un membre", inline: false})
                .addFields({ name: `\`${prefix} dé \``, value: "Donne un nombre aléatoire", inline: false})
                .addFields({ name: `\`${prefix} lovecalc \``, value: "Donne le pourcentage d'ammour entre deux membre", inline: false})

            const componentsHelp = (select) => [
                new Discord.ActionRowBuilder().addComponents(
                    new Discord.SelectMenuBuilder()
                        .setCustomId("help select")
                        .setPlaceholder("selectonner la categori de votre choix")
                        .setDisabled(select)
                        .addOptions([
                            {
                                label: "🏡 · acceuil",
                                value: "l'acceuil",
                            },
                            {
                                label: "🔨 · moderation",
                                value: "les commandes de moderation",
                            },
                            {
                                label: "📚 · utilitaire",
                                value: "les commande utilitaires",
                            },
                            {
                                label: "📌 · information",
                                value: "les commande d'information",
                            },
                            {
                                label: "🧨 · fun",
                                value: "les commandes fun",
                            },
                        ])
                )
            ]

            	const message = await interaction.reply({ embeds: [acembed], components: componentsHelp(false), fetchReply: true})

                const collector = message.createMessageComponentCollector({
                    filter: (u) => {
                        if(u.user.id === interaction.user.id) return true;
                    else{
                        return false;
                    }
                },
                errors: ["TIME"]
            });

            collector.on("collect", (cld) => {
                    if(cld.values[0] === "les commandes de moderation"){
                        cld.update({embeds: [moembed], components: componentsHelp(false)})
                    }
                    else if(cld.values[0] === "les commande utilitaires"){
                        cld.update({embeds: [utembed], component: componentsHelp(false)})
                    }
                    else if(cld.values[0] === "les commande d'information"){
                        cld.update({embeds: [inembed], component: componentsHelp(false)})
                    }
                    else if(cld.values[0] === "l'acceuil"){
                        cld.update({embeds: [acembed], component: componentsHelp(false)})
                    }
                    else if(cld.values[0] === "les commandes fun"){
                        cld.update({embeds: [fuembed], component: componentsHelp(false)})
                    }
            });
        } catch (error) {
            console.log(`❌ une erreur c'est produite sur la commande help`, error)
            return interaction.reply({content: '❌ Une erreur c\'est produite', ephemeral: true})        }
    }
}