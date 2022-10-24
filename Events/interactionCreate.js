const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = async (bot, interaction) => {

    if(interaction.type === Discord.InteractionType.ApplicationCommand) {

        let command = require(`../commandes/${interaction.commandName}`)
        command.run(bot, interaction, command.options)
    }
    if(interaction.isButton()) {
        if(interaction.customId === "fleche droite acceuil" || interaction.customId === "fleche gauche util") {
                const mod_embed = new Discord.EmbedBuilder()
                    .setColor(color)
                    .setTitle(`**__modération__**`)
                    .addFields({ name: `\`adminlist\``, value: `Donne la liste des administrateur`})
                    .addFields({ name: `\`mute\``, value: `Rend muet un membre`})
                    .addFields({ name: `\`unmute\``, value: `Redonne la parole à un membre`})
                    .addFields({ name: `\`lock\``, value: `Permet de fermer un salon`})
                    .addFields({ name: `\`unlock\``, value: `Permet d'ouvrir un salon`})
                    .addFields({ name: `\`kick\``, value: `Expulse un membre du serveur`})
                    .addFields({ name: `\`ban\``, value: `Ban un membre du serveur`})
                    .addFields({ name: `\`clear\``, value: `Supprime 1 ou plusieurs messages`})
                    .addFields({ name: `\`renew\``, value: `Recréer un salon à l'identique`})
                    .addFields({ name: `\`unban\``, value: `Unban un membre du serveur`})
                    .addFields({ name: `\`hide\``, value: `Permet de chacher un salon`})
                    .addFields({ name: `\`unhide\``, value: `Permet de reveler un salon`})
                    .setFooter({ text: 'page 1/8'});
                
                    const droite_button = new Discord.ActionRowBuilder().addComponents(
                        new Discord.ButtonBuilder()
                        .setCustomId("fleche gauche mod")
                        .setEmoji("👈")
                        .setStyle(Discord.ButtonStyle.Primary)
                    ).addComponents(
                        new Discord.ButtonBuilder()
                            .setCustomId("fleche droite mod")
                            .setEmoji("👉")
                            .setStyle(Discord.ButtonStyle.Primary)
                    )
                        interaction.update({ embeds: [mod_embed], components: [droite_button]})
            }else if(interaction.customId === "fleche droite mod" || interaction.customId === "fleche gauche logs") {
                const util_embed = new Discord.EmbedBuilder()
                    .setColor(color)
                    .setTitle(`**__utilitaires__**`)
                    .addFields({ name: `\`help\``, value: `Vous permet d'obtenir l'intégralité des commandes du bot et leurs informations`})
                    .addFields({ name: `\`ping\``, value: `Permet d'afficher le ping du bot`})
                    .addFields({ name: `\`bump\``, value: `Bump votre serveur dans le support du bot`})
                    .addFields({ name: `\`support\``, value: `Donne le serveur du bot`})
                    .addFields({ name: `\`addrole\``, value: `Permet d'ajouter un role à un membre`})
                    .addFields({ name: `\`delrole\``, value: `Retire un role à un membre`})
                    .addFields({ name: `\`emoji\``, value: `Permet d'ajouter' un emoji sur le serveur`})
                    .addFields({ name: `\`pic\``, value: `Permet d'obtenir l'avatar d'un membre`})
                    .addFields({ name: `\`serverinfo\``, value: `Permet d'obtenir les informations du serveur`})
                    .addFields({ name: `\`roleinfo\``, value: `Donne les informations sur un role`})
                    .addFields({ name: `\`suggest\``, value: `Fait une suggestion sur le serveur`})
                    .addFields({ name: `\`userinfo\``, value: `Donne des informations sur un membre`})
                    .setFooter({ text: 'page 2/8'});
            
                    const droite_button = new Discord.ActionRowBuilder().addComponents(
                        new Discord.ButtonBuilder()
                        .setCustomId("fleche gauche util")
                        .setEmoji("👈")
                        .setStyle(Discord.ButtonStyle.Primary)
                    ).addComponents(
                        new Discord.ButtonBuilder()
                            .setCustomId("fleche droite util")
                            .setEmoji("👉")
                            .setStyle(Discord.ButtonStyle.Primary)
                    )
                            interaction.update({ embeds: [util_embed], components: [droite_button]}) 
        }else if(interaction.customId === "fleche droite util" || interaction.customId === "fleche gauche ant") {
            const logs_embed = new Discord.EmbedBuilder()
                .setColor(color)
                .setTitle(`**__logs__**`)
                .addFields({ name: `\`messagelogs\``, value: `Affiche tous les logs des messages supprimés ou édités`})
                .addFields({ name: `\`modlogs\``, value: `Affiche tous les logs des actions de modération`})
                .addFields({ name: `\`raidlogs\``, value: `Affiche les logs de l'antiraid`})
                .addFields({ name: `\`setlogs\``, value: `Salon ou sera envoyer tous les suggestions du serveur`})
                .setFooter({ text: 'page 3/8'});
        
                const droite_button = new Discord.ActionRowBuilder().addComponents(
                    new Discord.ButtonBuilder()
                    .setCustomId("fleche gauche logs")
                    .setEmoji("👈")
                    .setStyle(Discord.ButtonStyle.Primary)
                ).addComponents(
                    new Discord.ButtonBuilder()
                        .setCustomId("fleche droite logs")
                        .setEmoji("👉")
                        .setStyle(Discord.ButtonStyle.Primary)
                )
                        interaction.update({ embeds: [logs_embed], components: [droite_button]}) 
        }else if(interaction.customId === "fleche droite logs" || interaction.customId === "fleche gauche fun") {
            const ant_embed = new Discord.EmbedBuilder()
            .setColor(color)
            .setTitle(`**__antiraid__**`)
            .addFields({ name: `\`antilink\``, value: `Active l'antilink`})
            .addFields({ name: `\`antichannel\``, value: `Active l'antichannel `})
            .addFields({ name: `\`antirole\``, value: `Active l'antirole`})
            .addFields({ name: `\`antibot\``, value: `Active l'antibot`})
            .addFields({ name: `\`secur\``, value: `Affiche le niveau de l'antiraid`})
            .setFooter({ text: 'page 4/8'});
    
            const droite_button = new Discord.ActionRowBuilder().addComponents(
                new Discord.ButtonBuilder()
                .setCustomId("fleche gauche ant")
                .setEmoji("👈")
                .setStyle(Discord.ButtonStyle.Primary)
            ).addComponents(
                new Discord.ButtonBuilder()
                    .setCustomId("fleche droite ant")
                    .setEmoji("👉")
                    .setStyle(Discord.ButtonStyle.Primary)
            )
                    interaction.update({ embeds: [ant_embed], components: [droite_button]}) 
        }else if(interaction.customId === "fleche droite ant" || interaction.customId === "fleche gauche own1") {
            const fun_embed = new Discord.EmbedBuilder()
            .setColor(color)
            .setTitle(`**__fun__**`)
            .addFields({ name: `\`8ball\``, value: `Répond à une question`})
            .addFields({ name: `\`dé\``, value: `Donne un nombre au hasard entre deux nombres`})
            .addFields({ name: `\`lovecalc\``, value: `Donne le pourcentage d'amour entre deux personnes`})
            .addFields({ name: `\`qi\``, value: `Donne le pourcentage de qi d'une personne`})
            .addFields({ name: `\`calin\``, value: `Fais un calin à une autres personnes`})
            .addFields({ name: `\`gay\``, value: `Dit à quelle pourcent la personne est gay`})
            .addFields({ name: `\`flags\``, value: `Affiche un drapeau`})
            .addFields({ name: `\`politique\``, value: `Dit pour qui vote la personne`})
            .addFields({ name: `\`taff\``, value: `Donne le metier d'une personne`})
            .addFields({ name: `\`fakenitro\``, value: `Donne un fake nitro`})
            .addFields({ name: `\`police\``, value: `renvoie un texte avec une autre police`})
            .addFields({ name: `\`say\``, value: `Envoie un message de la part du bot`})
            .addFields({ name: `\`pfc\``, value: `Lance une partie de pierre papier ciseaux contre le bot`})
            .setFooter({ text: 'page 5/8'});
    
            const droite_button = new Discord.ActionRowBuilder().addComponents(
                new Discord.ButtonBuilder()
                .setCustomId("fleche gauche fun")
                .setEmoji("👈")
                .setStyle(Discord.ButtonStyle.Primary)
            ).addComponents(
                new Discord.ButtonBuilder()
                    .setCustomId("fleche droite fun")
                    .setEmoji("👉")
                    .setStyle(Discord.ButtonStyle.Primary)
            )
                    interaction.update({ embeds: [fun_embed], components: [droite_button]}) 
            }else if(interaction.customId === "fleche droite fun" || interaction.customId === "fleche gauche own2") {
                const own1_embed = new Discord.EmbedBuilder()
                .setColor(color)
                .setTitle(`**__owner 1__**`)
                .addFields({ name: `\`bl\``, value: `Blacklist un membre`})
                .addFields({ name: `\`unbl\``, value: `Unblacklist un membre`})
                .addFields({ name: `\`bllist\``, value: `Verifie si un membre est dans la bl`})
                .addFields({ name: `\`wl\``, value: `Witheliste un membre`})
                .addFields({ name: `\`unwl\``, value: `Unwitheliste un membre`})
                .addFields({ name: `\`wllist\``, value: `Verifie si un membre est dans la wl`})
                .addFields({ name: `\`owner\``, value: `Ajoute un membre owner`})
                .addFields({ name: `\`unowner\``, value: `Retire un owner`})
                .addFields({ name: `\`ownerlist\``, value: `Verifie si un membre est owner`})
                .setFooter({ text: 'page 6/8'});
        
                const droite_button = new Discord.ActionRowBuilder().addComponents(
                    new Discord.ButtonBuilder()
                    .setCustomId("fleche gauche own1")
                    .setEmoji("👈")
                    .setStyle(Discord.ButtonStyle.Primary)
                ).addComponents(
                    new Discord.ButtonBuilder()
                        .setCustomId("fleche droite own1")
                        .setEmoji("👉")
                        .setStyle(Discord.ButtonStyle.Primary)
                )
                        interaction.update({ embeds: [own1_embed], components: [droite_button]}) 
                }else if(interaction.customId === "fleche droite own1" || interaction.customId === "fleche gauche perm") {
                    const own2_embed = new Discord.EmbedBuilder()
                    .setColor(color)
                    .setTitle(`**__owner 2__**`)
                    .addFields({ name: `\`setstatus\``, value: `Parametre le status du bot`})
                    .addFields({ name: `\`membercount\``, value: `Donne le nombre de membre dans le serveur`})
                    .addFields({ name: `\`serverlist\``, value: `Donne la liste des serveur ou est le bot`})
                    .addFields({ name: `\`leave\``, value: `Fais quitter le bot d'un serveur`})
                    .addFields({ name: `\`couleur\``, value: `change la couleur du bot`})
                    .addFields({ name: `\`config\``, value: `Affiche la configuration du bot sur le serveur`})
                    .addFields({ name: `\`ticket\``, value: `Créer un ticket`})
                    .addFields({ name: `\`embed\``, value: `Créer un embed`})
                    .addFields({ name: `\`soutien\``, value: `Créer un role de soutien`})
                    .addFields({ name: `\`dm\``, value: `Envoie un dm de la part du bot`})
                    .addFields({ name: `\`setname\``, value: `Defini le pseudo du bot`})
                    .addFields({ name: `\`restart\``, value: `Redemarre le bot`})
                    .setFooter({ text: 'page 7/8'});
            
                    const droite_button = new Discord.ActionRowBuilder().addComponents(
                        new Discord.ButtonBuilder()
                        .setCustomId("fleche gauche own2")
                        .setEmoji("👈")
                        .setStyle(Discord.ButtonStyle.Primary)
                    ).addComponents(
                        new Discord.ButtonBuilder()
                            .setCustomId("fleche droite own2")
                            .setEmoji("👉")
                            .setStyle(Discord.ButtonStyle.Primary)
                    )
                            interaction.update({ embeds: [own2_embed], components: [droite_button]}) 
                }else if(interaction.customId === "fleche droite own2" || interaction.customId === "fleche gauche acceuil") {
                    const perm_embed = new Discord.EmbedBuilder()
                        .setColor(color)
                        .setTitle(`**__config__**`)
                        .addFields({ name: `\`setsuggest\``, value: `Defini le salon des suggestions`})
                        .addFields({ name: `\`setjoinchannel\``, value: `Defini le salon d'arriver`})
                        .addFields({ name: `\`setleavechannel\``, value: `Defini le salon des depart`})
                        .addFields({ name: `\`setlogs\``, value: `Defini le salon des logs`})
                        .addFields({ name: `\`setbump\``, value: `Configure le bump`})
                        .addFields({ name: `\`join\``, value: `Active le message d'arriver`})
                        .addFields({ name: `\`leave\``, value: `Active le message des départ`})
                        .addFields({ name: `\`autorole\``, value: `Active l'autorole'`})
                        .setFooter({ text: 'page 8/8'});
                
                        const droite_button = new Discord.ActionRowBuilder().addComponents(
                            new Discord.ButtonBuilder()
                            .setCustomId("fleche gauche perm")
                            .setEmoji("👈")
                            .setStyle(Discord.ButtonStyle.Primary)
                        ).addComponents(
                            new Discord.ButtonBuilder()
                                .setCustomId("fleche droite perm")
                                .setEmoji("👉")
                                .setStyle(Discord.ButtonStyle.Primary)
                        )
                                interaction.update({ embeds: [perm_embed], components: [droite_button]}) 
                    }else  if(interaction.customId === "open-ticket") {
                        const cat = await db.get('ticketcategorie' + interaction.guild.id)
                        interaction.guild.channels.create({
                            name: `ticket ${interaction.user.username}`,
                            parent: cat.id,
                            type: Discord.ChannelType.GuildText,
                            permissionOverwrites: [
                                {
                                    id: interaction.guild.id,
                                    deny: [ Discord.PermissionFlagsBits.ViewChannel, Discord.PermissionFlagsBits.SendMessages ]
                                },
                                {
                                    id: interaction.user.id,
                                    allow: [ Discord.PermissionFlagsBits.ViewChannel, Discord.PermissionFlagsBits.SendMessages ]
                                },
                            ]
                    }).then( (chat) => {
                        const Embed = new Discord.EmbedBuilder()
                            .setColor(color)
                            .setDescription("✅ votre ticket à été créé avec succès ! Cliquez sur le bouton pour fermer le ticket")
                        const close_ticket = new Discord.ActionRowBuilder().addComponents(
                            new Discord.ButtonBuilder()
                                .setCustomId("close-ticket")
                                .setEmoji("🔒")
                                .setStyle(Discord.ButtonStyle.Primary)
                        
                        )
                        chat.send({ embeds: [Embed], components: [close_ticket]})
                    })
                    }else if (interaction.customId === "close-ticket") {
                        const demmande_close_embed = new Discord.EmbedBuilder()
                            .setColor(color)
                            .setDescription(`🧨 Etes vous sur de supprimer ce ticket`)
                        const yes_button = new Discord.ActionRowBuilder().addComponents(
                            new Discord.ButtonBuilder()
                                .setCustomId("yes")
                                .setEmoji("✅")
                                .setStyle(Discord.ButtonStyle.Primary)
                        )
            
                        interaction.reply({ embeds: [demmande_close_embed], components: [yes_button]})
            
            
                    }else if (interaction.customId === "yes") {
                        try{
                            const wait_embed = new Discord.EmbedBuilder()
                                .setColor(color)
                                .setDescription(`⏳ Le ticket vas se supprimer dans 5 secondes !`)
                            interaction.reply({ embeds: [wait_embed]})
                            setTimeout( () => {
                                interaction.channel.delete().catch( e => { return; } )
                            }, 5000)
                        } catch (e) {
                            return
                        }
                    }else if(interaction.customId === "nitro") {
                        const embed = new Discord.EmbedBuilder()
                            .setColor(color)
                            .setDescription("😂 Je t'ai eu")
                        interaction.reply({ embeds: [embed]})
                    }
                    else if(interaction.customId === "verif") {
                        const rl = await db.get('roles' + interaction.guild.id)
                        const embed = new Discord.EmbedBuilder()
                            .setColor(color)
                            .setDescription(`✅ Vous avez passé la verification avec succès ! Le role ${rl} vous a été ajouter`)
                        await db.set("addrole" + interaction.guild.id + rl,true)
                        interaction.reply({ embeds: [embed], ephemeral: true})
                    }

    
    }
}