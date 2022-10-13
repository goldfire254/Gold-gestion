const Discord = require('discord.js')
const intents = new Discord.IntentsBitField(3276799)
const bot = new Discord.Client({intents})
const loadCommands = require('./loaders/loadcommands')
const loadEvents = require('./loaders/loadEvents')
let s3 = new aws.S3({
    accessKeyId: process.env.S3_KEY,
  });

bot.commands = new Discord.Collection()

loadCommands(bot)
loadEvents(bot)         

bot.login(s3);
