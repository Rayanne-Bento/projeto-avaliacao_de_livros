let {Sequelize, DataTypes } = require('sequelize');
let db = require('../db');

const Categoria = db.define('Categoria',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
);
module.exports = Categoria;