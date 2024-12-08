const Sequelize = require('sequelize');
const connection = require('./database');

const Question = connection.define('pergunta',{
	titulo:{
		type: Sequelize.STRING,
		allowNull: false
	},
	descricao:{
		type: Sequelize.TEXT,
		allowNull: false
	}
});

Question.sync({force: false})

module.exports = Question;