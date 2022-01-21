const { DataTypes } = require("sequelize");
const sequelize = require("../config/DatabaseConfig");

const bcrypt = require("bcrypt");



const Rooms = sequelize.define('Rooms', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
});

module.exports = Rooms;