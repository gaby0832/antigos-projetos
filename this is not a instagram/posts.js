const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newSchema = new Schema({
    titulo: String,
    image: String,
    autor: String,
    email_autor: String,
    autor_image: String,
},{colletion: 'postagens'})


var Postagens = mongoose.model('Postagens',newSchema);

module.exports = Postagens;