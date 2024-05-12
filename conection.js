const mongoose = require("mongoose");

async function connectDatabase(url){
    mongoose.connect(url)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log("Error in Databse Connection" + err));
}

module.exports = {connectDatabase};