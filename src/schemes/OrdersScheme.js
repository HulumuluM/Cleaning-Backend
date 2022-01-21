const Joi = require('joi');

const OrdersScheme = {
    create: Joi.object().keys(
        {
            ServicesId: Joi.number()
                .integer()
                .required(),

            RoomsId: Joi.number()
                .integer()
                .required()
        }
    ),

    edit: Joi.object().keys(
        {
            ServicesId: Joi.number()
                .integer(),

            RoomsId: Joi.number()
                .integer()
        }
    )
};

module.exports = OrdersScheme;