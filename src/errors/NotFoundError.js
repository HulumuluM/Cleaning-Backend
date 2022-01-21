const HttpStatusCodeError = require("./HttpStatusCodeError");

class NotFoundError extends HttpStatusCodeError {
    constructor(message) {
        super(message, 404);
    }
}

module.exports = NotFoundError;