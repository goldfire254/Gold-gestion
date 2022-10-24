const fs = require('fs')

module.exports = async bot => {

  fs.readdirSync("./commandes").filter(f => f.endsWith("js")).forEach(async file => {

        let command = require(`../commandes/${file}`)
        if(!command.name || typeof command.name !== "string") throw new TypeError(`la commande ${file.slice(0, file.lenght - 3)} n'a pas de nom ! `)
        bot.commands.set(command.name, command)
        console.log(`commande ${file} chargée avec succès !`)
    }) 
}