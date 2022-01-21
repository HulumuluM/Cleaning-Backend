const { DataTypes } = require("sequelize");
const sequelize = require("../config/DatabaseConfig");

const bcrypt = require("bcrypt");


const Orders = sequelize.define('Orders', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    adress: {type: DataTypes.STRING},
    price: {type: DataTypes.DOUBLE, allowNull:false},
    review: {type: DataTypes.STRING},
    begin_date: {type: DataTypes.DATE},
    end_date: {type: DataTypes.DATE},
} );

module.exports = Orders;