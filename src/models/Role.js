const Sequelize = require('sequelize');
const sequelize = require('../config/DatabaseConfig');

const Role = sequelize.define('role', {
        id: {
            type: Sequelize.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true,
            field: 'id'
        },
        name: {
            type: Sequelize.STRING(30),
            allowNull: false,
            unique: true,
            field: 'name'
        }
    },
    {
        timestamps: false
    });

module.exports = Role;