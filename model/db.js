const Sequelize = require('sequelize');
const config = require('../config/config.json');
const sequelize = new Sequelize('T2lipa',config.user,config.passwd,{
    dialect:'mysql',
    host: config.host
});
module.exports = sequelize;