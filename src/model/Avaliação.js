let {Sequelize, DataTypes } = require('sequelize');
let db = require('../db');
const Livro = require('./Livro');
const Usuario = require('./Usuario');

const Avaliacao = db.define('Avaliacao',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nota: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        comentario: DataTypes.STRING(80),
        status_leitura: DataTypes.STRING,
        resenha: DataTypes.STRING(500),
        id_livro: {
            type: DataTypes.INTEGER,
            references: {
                model: Livro,
                key: 'id'
            }
        },
        id_usuario: {
            type: DataTypes.INTEGER,
            references: {
                model: Usuario,
                key: 'id'
            }
        }
    }
);
Avaliacao.belongsTo(Livro);
Livro.hasMany(Avaliacao, {as: 'avaliacoes'});

Avaliacao.belongsTo(Usuario);
Usuario.hasMany(Avaliacao, {as: 'avaliacoes'});

module.exports = Avaliacao;