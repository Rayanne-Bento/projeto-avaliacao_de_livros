let {Sequelize, DataTypes } = require('sequelize');
let db = require('../db');

const Livro = db.define('Livro',
    {
        ISBN: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        titulo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        editora: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ano: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }
);
module.exports = Livro; 