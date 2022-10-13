const fs = require('fs')

module.exports = async bot => {

  fs.readdirSync("./commandes").filter(f => f.endsWith("js")).forEach(async file => {

        let command = require(`../commandes/${file}`)
        if(!command.name || typeof command.name !== "string") throw new TypeError(`la commande ${file.slice(0, file.lenght - 3)} n'a pas de nom ! `)
        bot.commands.set(command.name, command)
        console.log(`commande ${file} chargée avec succès !`)
    }) 
}

/*
const fs = require("fs")
const path = require("path")

module.exports = async bot => {
    


    const getAllFiles = function(dirPath, arrayOfFiles) {
      files = fs.readdirSync(dirPath)

      arrayOfFiles = arrayOfFiles || []

      files.forEach(function(file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
          arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
        } else {
          arrayOfFiles.push(path.join(dirPath, "/", file))
        }
      })

      return arrayOfFiles
    }
    const result = getAllFiles("./commandes")
    console.log(result)

    result.forEach(async file => {

        let command = require(`../${file}`)
        if(!command.name || typeof command.name !== "string") throw new TypeError(`la commande ${file.slice(0, file.lenght - 3)} n'a pas de nom ! `)
        bot.commands.set(command.name, command)
        console.log(`commande ${file} chargée avec succès !`)
    })
}*/
