const Joi = require("joi");

const CleaningJobScheme = {
    create: Joi.object().keys({
        name: Joi.string().required(),


    }),

    edit: Joi.object().keys({
        name: Joi.string(),


    }),
};

module.exports = CleaningJobScheme;
