const Response = require("../utils/Response");
const HttpStatusCodeError = require("../errors/HttpStatusCodeError");
const ValidationError = require('sequelize').ValidationError;
const MongoLogger = require('./../utils/MongoLogger');

module.exports = (error, req, res, next) => {
    error.route = req.path;
    MongoLogger.LogError(error);

    if (error instanceof HttpStatusCodeError) {
        res.status(error.status || 500).json(new Response(error.message, error.status || 500));
    }
    else if (error instanceof ValidationError) {
        res.status(error.status || 400).json(new Response(error.errors[0].message, error.status || 400));
    }
    else {
        console.log(error);
        res.status(500).json(new Response("Internal Server Error", 500));
    }
}