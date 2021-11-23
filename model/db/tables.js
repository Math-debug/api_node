const Sequelize = require('sequelize');
const db = require('./db');

const Produtos = db.define('produtos',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    descricao:{
        type: Sequelize.STRING,
        allowNull: false
    },
    preco: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Produtos;