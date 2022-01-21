const { DataTypes } = require("sequelize");
const sequelize = require("../config/DatabaseConfig");
const bcrypt = require("bcrypt");

const Basket = sequelize.define('Basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    quantity: {type: DataTypes.INTEGER},
    price: {type: DataTypes.DOUBLE, allowNull:false},
});

module.exports = Basket;