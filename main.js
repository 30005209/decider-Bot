const Discord = require("discord.js")
require("dotenv").config()

const client = new Discord.Client({
    intents : 
    [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on("ready", () =>
{
    console.log("Logged in as ${client.user.name}}")
})

client.on("message", () => 
{

})

client.login(process.env.TOKEN);