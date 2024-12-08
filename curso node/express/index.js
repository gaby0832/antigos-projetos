const express = require('express') // Importando o express
const app = express(); // Iniciando o express


app.listen(1010,function(err){
	if(err){
		console.log('Ocorreu um erro',err)
	}else{
		console.log('Servidor aberto na porta 1010')
	}
})

