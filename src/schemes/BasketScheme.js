const Joi = require('joi');

const BasketScheme = {
    create: Joi.object().keys(
        {
            BasketId: Joi.number()
                .integer()
                .required()
        }
    ),

    edit: Joi.object().keys(
        {
            BasketId: Joi.number()
                .integer()
        }
    )
};

module.exports = BasketScheme;