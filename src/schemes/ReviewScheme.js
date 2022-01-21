const Joi = require("joi");

const ReviewScheme = {
    create: Joi.object().keys({
        comment: Joi.string().required(),

        rate: Joi.number().required(),

        date: Joi.string(),
    }),

    edit: Joi.object().keys({
        comment: Joi.string(),

        rate: Joi.number(),

        date: Joi.string(),
    }),
};

module.exports = ReviewScheme;
