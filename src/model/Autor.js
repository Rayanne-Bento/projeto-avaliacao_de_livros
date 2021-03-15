let {Sequelize, DataTypes } = require('sequelize');
let db = require('../db');

const Autor = db.define('Autor',
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
        },
        nascimento: {
            type: DataTypes.DATE,
            allowNull: false
        },
        mini_bio: DataTypes.STRING
    }
);
module.exports = Autor;