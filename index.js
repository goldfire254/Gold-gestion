const Discord = require('discord.js')
const intents = new Discord.IntentsBitField(3276799)
const bot = new Discord.Client({intents})
const loadCommands = require('./loaders/loadcommands')
const loadEvents = require('./loaders/loadEvents')
const config = require("./config.json")
const token = config.token


bot.commands = new Discord.Collection()

loadCommands(bot)
loadEvents(bot)         

bot.login(process.env.TOKEN);