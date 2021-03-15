const Sequelize = require('sequelize');
let db = new Sequelize(
    '',
    {
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false,
            }
        }
    }
);

module.exports = db;
