const Joi = require("joi");

const RoleScheme = {
    create: Joi.object().keys({
        name: Joi.string().max(30).required(),
    }),

    edit: Joi.object().keys({
        name: Joi.string().max(30),
    }),
};

module.exports = RoleScheme;
