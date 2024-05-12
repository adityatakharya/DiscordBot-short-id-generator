const mongoose = require("mongoose");

const discordUrlShortenerSchema = new mongoose.Schema({
    originalUrl:{
        type: String,
        required: true,
    },
    shortenedUrl:{
        type: String,
        required: true,
    },
    createdBy: {
        type: Number,
        required: true,
    },
});

const discordUrlShortenerDb = mongoose.model("discordUrlShortenerDb", discordUrlShortenerSchema);

module.exports = discordUrlShortenerDb;