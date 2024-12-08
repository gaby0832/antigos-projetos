const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas','root','02082004',{
	host: 'localhost',
	dialect: 'mysql'
});

module.exports = connection;