const mongoose = require('mongoose');
const errorScheme = require("../schemes/ErrorScheme");

const Error = mongoose.model("Error", errorScheme);

module.exports = Error;