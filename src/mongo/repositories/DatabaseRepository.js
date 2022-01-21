const mongoose = require('mongoose');
const databaseScheme = require("../schemes/DatabaseScheme");

const Database = mongoose.model("Database", databaseScheme);

module.exports = Database;