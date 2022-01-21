const { DataTypes } = require("sequelize");
const sequelize = require("../config/DatabaseConfig");

const bcrypt = require("bcrypt");

const CleaningJob = sequelize.define('Service', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.DOUBLE, allowNull:false},
    description: {type: DataTypes.STRING,allowNull: false},
    squere: {type: DataTypes.INTEGER},
});

module.exports = CleaningJob;
