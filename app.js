require("dotenv").config();

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],});
const mongoose = require('mongoose');
const {connectDatabase} = require("./conection.js");
const {shortURL, decodeURL} = require("./controllers/mainFunctions.js")

// Connecting Database...
connectDatabase(process.env.MONGODB_URL);

// For responding to normal messages
client.on("messageCreate", (message) => {
    
    if(!message.author.bot){ // Shouldn't reply to itself
        console.log("Message Recieved: " + message.content);
        if(message.content.startsWith("createshorturl")){
            shortURL(message);
        }

        else if(message.content.startsWith("openshorturl")){
            decodeURL(message);
        }

        else{
            message.reply({content: "Hey, there! Start by sending **createshorturl *YourURL*** to generate Short ID for your fav URLs",});
        }
        console.log("Reply Sent");
    }
});

// For responding to inteaction (slash commands)
client.on("interactionCreate", (interaction) => {
    console.log("User Interacted");
    interaction.reply("Pong!");
    console.log("Reply Sent!")
})

client.login("ODg0Nz5MTU4MDU1OA.GePEn-k_93sHzW0CFUqqJxRS3DS");

