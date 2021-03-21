let {Sequelize, DataTypes } = require('sequelize');
let db = require('../db');

const Livro = db.define('Livro',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        titulo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        editora: DataTypes.STRING,
        tradutor: DataTypes.STRING,
        ISBN: DataTypes.STRING,
        ano: DataTypes.INTEGER,
        paginas:  DataTypes.INTEGER,
        snopse: DataTypes.STRING(500)
    }
);
module.exports = Livro; 