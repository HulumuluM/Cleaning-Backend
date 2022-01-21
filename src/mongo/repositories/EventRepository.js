const mongoose = require('mongoose');
const eventScheme = require("../schemes/EventScheme");

const Event = mongoose.model("Event", eventScheme);

module.exports = Event;