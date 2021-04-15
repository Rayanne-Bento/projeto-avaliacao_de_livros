let {Sequelize, DataTypes } = require('sequelize');
let db = require('../db');
const Autor = require('./Autor');
const Livro = require('./Livro');

const escreve = db.define('escreve',
    {
        id_autor: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: Autor,
                key: 'id'
            }
        },
        id_livro: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: Livro,
                key: 'id'
            }
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }
);
Autor.belongsToMany(Livro, {through: escreve});
Livro.belongsToMany(Autor, {through: escreve});

module.exports = escreve;