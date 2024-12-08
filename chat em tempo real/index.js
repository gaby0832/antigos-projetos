const express = require('express');
const app = express();
const http = require('http');
var bodyParser = require('body-parser');
const server = http.createServer(app);
const { Server } = require("socket.io");
const path = require('path');
const io = new Server(server);

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/pages'));



var usuarios = [];
var socketIds = [];


app.get('/', (req, res) => {

    res.render('index',{});

});


io.on('connection', (socket) => {

    socket.on('new user',(data)=>{
        if(usuarios.indexOf(data) != -1 || data == null || data == ""){
            socket.emit('new user',{success: false})
        }else{
            usuarios.push(data);
            socketIds.push(socket.id);

        
            socket.emit('new user',{success: true})
            
            socket.broadcast.emit('add user',usuarios);
            
            console.log(usuarios);
            console.log(socketIds);
            console.log("user connected")
        }
    })

    socket.on('chat message', (obj) => {
        if(usuarios.indexOf(obj.nome) != -1 && usuarios.indexOf(obj.nome) == socketIds.indexOf(socket.id)){
            io.emit('chat message', obj);
        }else{
            console.log('Erro: você não possui permissão para executar essa ação.')
        }
    });

    socket.on('disconnect',()=>{
        let id = socketIds.indexOf(socket.id);
        socketIds.splice(id,1)
        usuarios.splice(id,1);
        console.log(usuarios);
        socket.broadcast.emit('add user',usuarios);
        console.log(socketIds);
        console.log("user desconnected")
    })

});


server.listen(3000, () => {

  console.log('listening on *:3000');

});