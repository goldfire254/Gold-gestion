
const Discord = require('discord.js')

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

    async run(bot, interaction, message, args) {

        if(!interaction.member.permissions.has(Discord.PermissionsBitField.resolve("Administrator"))) return interaction.reply("vous n'avez pas les permissions d'effectuer la commandes");
        if(!interaction.guild.members.me.permissions.has(Discord.PermissionsBitField.resolve("Administrator"))) return interaction.reply("vous n'avez pas les permissions d'effectuer la commandes");
       
        try {

            let amount = interaction.options.getNumber("nombre");
            let phrase = interaction.options.getString("phrase");

            if(isNaN(amount)) return interaction.reply(`veuillez mettre des chiffres`)

            if(!phrase){
                interaction.channel.bulkDelete(amount).then(async message => {
                    await interaction.reply({ embeds: [embed]})

                    setTimeout(async () => {
                        await interaction.deleteReply();
                    }, 2000)
                })
            }else{
                interaction.channel.bulkDelete((await interaction.channel.messages.fetch({ limit: amount})).filter(filterMSG => filterMSG.content.toLowerCase() === phrase.toLowerCase()), {
                    filterOld: true
                }).then(async (message) => {
                    await interaction.reply({ embeds: [embed]})

                    
                    setTimeout(async () => {
                        await interaction.deleteReply();
                    }, 2000)
                })
            }

        } catch (error) {
            console.log(`❌ une erreur c'est produite sur la commande clear`, error)
            return interaction.reply({content: '❌ Une erreur c\'est produite', ephemeral: true})        }
      } 
    }