const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newSchema = new Schema({
    nome: String,
    senha: String,
    imagem_perfil: String,
    email: String,
},{colletion: 'usuarios'})


var Usuarios = mongoose.model('Usuarios',newSchema);

module.exports = Usuarios;