const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],});
const mongoose = require('mongoose');
const { nanoid } = require ("nanoid");
const discordUrlShortenerDb = require("../models/discordShortUrl.js")

async function shortURL(message){
    const urlToShort = message.content.split("createshorturl ")[1];
    message.reply("Generating Short ID...");

    const generatedShortID = nanoid(4);
    await discordUrlShortenerDb.create({
        originalUrl: urlToShort,
        shortenedUrl: generatedShortID,
        createdBy: message.author.id,
    }, console.log("Database Accessed - One new added."));
    
    message.reply("**Short ID:** " + generatedShortID + " || Use the keyword **openshorturl** before the shortID to decode");

}

async function decodeURL(message){
    const urlToDecode = message.content.split("openshorturl ")[1];
    message.reply("Opening...");

    const decodedURL = await discordUrlShortenerDb.findOne(
        {
            shortenedUrl: urlToDecode,
        },
    )
    if(!decodedURL){message.reply("ERR: ShortID doesn't exist!");}
    else{message.reply("**Original URL:** " + decodedURL.originalUrl);}

}

module.exports = {shortURL, decodeURL};