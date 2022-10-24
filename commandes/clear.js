const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = {

    name: "clear",
    description: "supprime des messages",
    permission: Discord.PermissionFlagsBits.Administrator,
    category: "modération",
    dm: false,
    options: [
        {
            required: true,
            type: "number",
            name: 'nombre',
            description: "le nombre de message a supprimer"
        }
    ],

    async run(bot, interaction) {

        if(!interaction.member.permissions.has(Discord.PermissionsBitField.resolve("Administrator"))) return interaction.reply("vous n'avez pas les permissions d'effectuer la commandes");
        if(!interaction.guild.members.me.permissions.has(Discord.PermissionsBitField.resolve("Administrator"))) return interaction.reply("vous n'avez pas les permissions d'effectuer la commandes");
       
        try {

            const amount = interaction.options.getNumber("nombre");
            const phrase = interaction.options.getString("phrase");
            const embed = new Discord.EmbedBuilder()
                .setColor(color)
                .setDescription(`✅ ${amount} messages ont été supprimé avec succès`)
            if(isNaN(amount)) return interaction.reply(`❌ veuillez mettre des chiffres`)

            if(!phrase){
                interaction.channel.bulkDelete(amount).then(async message => {
                    await interaction.reply({ embeds: [embed]})
                })
            }else{
                interaction.channel.bulkDelete((await interaction.channel.messages.fetch({ limit: amount})).filter(filterMSG => filterMSG.content.toLowerCase() === phrase.toLowerCase()), {
                    filterOld: true
                }).then(async (message) => {
                    await interaction.reply(`${amount} messages ont été supprimer correctement !`)

                    
                    setTimeout(async () => {
                        await interaction.deleteReply();
                    }, 2000)
                })
            }

        } catch (error) {
            console.log(`❌ une erreur s'est produite sur la commande clear`, error)
            return interaction.reply({content: '❌ Une erreur s\'est produite produite', ephemeral: true})        }
      } 
    }