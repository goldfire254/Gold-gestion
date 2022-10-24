const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = {

    name: "emoji",
    description: "ajoute un emoji",
    permission: "Aucune",
    category: "Utilitaires",
    dm: false,
    options: [
        {
            required: true,
            type: "user",
            name: 'emoji',
            description: "l'emoji a ajouter"
        },
        {
            required: true,
            type: "string",
            name: 'nom',
            description: "le nom de l'emoji"
        }
    ],

    async run(bot, interaction) {

        
        if(!interaction.member.permissions.has(Discord.PermissionsBitField.resolve("Administrator"))) return interaction.reply("vous n'avez pas les permissions d'effectuer la commandes");
        if(!interaction.guild.members.me.permissions.has(Discord.PermissionsBitField.resolve("Administrator"))) return interaction.reply("vous n'avez pas les permissions d'effectuer la commandes");
       
        try {

            const emoji = interaction.options.getString("emoji")?.trim();
            const name = interaction.options.getString("name");

            const embed = new Discord.EmbedBuilder()
                .setColor(color)
                .setDescription(`✅ l'emoji : ${emoji} à été ajouté avec succès`)

            if(emoji.startsWith("<") && emoji.endWith(">")){

                const id = emoji.match(/\d{15,}/g)[0];
                const type = await axios.get(`https://cdn.discordapp.com/emojis/${id}.gif`).then(image => {
                    if(image) return "gif"
                    else return "png"
                }).catch(err => {
                    return "png"
                });

                emoji = `https://cdn.discordapp.com/emojis/${id}.${type}?quality=lossless`
            }

            await interaction.guild.emojis.create({ attachment: emoji, name: name}).then(emoji => {
                interaction.reply({ embeds: [embed]})
            });

        } catch (error) {
            console.log(`❌ une erreur s'est produite sur la commande emojiadd`, error)
            return interaction.reply({content: '❌ Une erreur s\'est produite produite', ephemeral: true})        }
      } 
    }