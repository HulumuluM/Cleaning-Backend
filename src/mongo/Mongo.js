const mongoose = require("mongoose");

const MongoConfig = require("../config/MongoConfig.json");

async function connect() {
    await mongoose.connect(
        `mongodb://localhost:${MongoConfig.Port}/${MongoConfig.Collection}`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    );
}

module.exports = connect();
