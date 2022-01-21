const Sequelize = require('sequelize');
const sequelize = require('../config/DatabaseConfig');

const UserRole = sequelize.define('users_role', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true,
            field: 'id'
        },
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: false,
            field: 'user_id'
        },
        roleId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: false,
            field: 'role_id'
        }
    },
    {
        timestamps: false
    });

module.exports = UserRole;