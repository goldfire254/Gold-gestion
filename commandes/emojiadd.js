
const Discord = require('discord.js')

module.exports = {

    name: "emoji_add",
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

    async run(bot, interaction, args) {

        
        if(!interaction.member.permissions.has(Discord.PermissionsBitField.resolve("Administrator"))) return interaction.reply("vous n'avez pas les permissions d'effectuer la commandes");
        if(!interaction.guild.members.me.permissions.has(Discord.PermissionsBitField.resolve("Administrator"))) return interaction.reply("vous n'avez pas les permissions d'effectuer la commandes");
       
        try {

            let emoji = interaction.options.getString("emoji")?.trim();
            let name = interaction.options.getString("name");

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
                interaction.reply({ content: `Nouveau emoji ajouter sur le serveur : ${emoji.toString} avec le nom : ${emoji.name}`})
            });

        } catch (error) {
            console.log(`❌ une erreur c'est produite sur la commande emojiadd`, error)
            return interaction.reply({content: '❌ Une erreur c\'est produite', ephemeral: true})        }
      } 
    }