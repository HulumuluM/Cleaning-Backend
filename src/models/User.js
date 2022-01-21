const Sequelize = require('sequelize');
const sequelize = require('../config/DatabaseConfig');
const UserConfig = require('../config/ModelsConfig.json');

const User = sequelize.define('user', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true,
            field: 'id'
        },
        login: {
            type: Sequelize.STRING(30),
            allowNull: false,
            unique: true,
            field: 'login'
        },
        password: {
            type: Sequelize.STRING(60),
            allowNull: false,
            unique: false,
            field: 'password'
        }
    },
    {
        timestamps: false
    });

module.exports = User;