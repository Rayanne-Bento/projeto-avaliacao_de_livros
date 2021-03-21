let {Sequelize, DataTypes } = require('sequelize');
let db = require('../db');
const Livro = require('./Livro');
const Categoria = require('./Categoria');

const pertence = db.define('pertence',
    {
        id_livro: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: Livro,
                key: 'id'
            }
        },
        id_categoria: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: Categoria,
                key: 'id'
            }
        },
    }
);
Categoria.belongsToMany(Livro, {through: pertence});
Livro.belongsToMany(Categoria, {through: pertence});

module.exports = pertence;