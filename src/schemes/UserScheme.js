const Joi = require('joi');

const UserScheme = {
    create: Joi.object().keys(
        {
            login: Joi.string()
                .alphanum()
                .min(3)
                .max(30)
                .required(),

            password: Joi.string()
                .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

            roleId: Joi.number(),

            avatar: Joi.string(),

            firstName: Joi.string()
                .min(3)
                .max(30)
                .required(),

            birthday: Joi.string()
                .required(),

            email: Joi.string()
                .email()
                .required(),

            phone: Joi.string(),
        }
    ),

    edit: Joi.object().keys(
        {
            login: Joi.string()
                .alphanum()
                .min(3)
                .max(30),

            password: Joi.string()
                .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

            roleId: Joi.number(),

            avatar: Joi.string(),

            firstName: Joi.string()
                .min(3)
                .max(30),

            birthday: Joi.string(),

            email: Joi.string()
                .email(),

            phone: Joi.string(),
        }
    ),

    login: Joi.object().keys(
        {
            login: Joi.string()
                .alphanum()
                .min(3)
                .max(30)
                .required(),

            password: Joi.string()
                .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        }
    )
};

module.exports = UserScheme;