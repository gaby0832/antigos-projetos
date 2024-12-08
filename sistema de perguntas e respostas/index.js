const express = require("express");
const app = express();
const bodyParser =  require('body-parser');
const connection = require('./database/database');
const questionModel = require('./database/Questions');
const RespostaModel = require('./database/Resposta');


connection.authenticate().then(()=>{
  console.log('Deu certo');
}).catch((error)=>{
  console.log(error);
})

app.set("view engine", "ejs");

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.get("/", (req, res) => {
  questionModel.findAll({ raw: true, order: [
    ['id','DESC']
  ]}).then((perguntas)=>{
      res.render("index",{
        perguntas: perguntas,
      });
  })

});

app.get("/perguntar", (req, res) => {
  res.render("perguntar");
});

app.post("/perguntar",(req,res)=>{
  var titulo = req.body.titulo;
  var pergunta = req.body.pergunta;
  questionModel.create({
    titulo: titulo,
    descricao: pergunta,
  }).then(()=>{
    res.redirect("/");
  })
});


app.get('/pergunta/:id',(req,res)=>{
  var id = req.params.id;
  
  questionModel.findOne({
    where: {id: id}
  }).then((pergunta)=>{
    if(pergunta != undefined){
      RespostaModel.findAll({
        where: {perguntaId: pergunta.id},
        order: [['id','DESC']],
      }).then((respostas)=>{
          res.render('pergunta-single',{pergunta: pergunta, respostas: respostas});    
      })
    }else{
      res.redirect("/");
    }
  })

})


app.post("/responder",(req, res)=>{
  var corpo = req.body.corpo;
  var perguntaId = req.body.perguntaId;
  RespostaModel.create({
    corpo: corpo,
    perguntaId: perguntaId,
  }).then(()=>{
    res.redirect("/pergunta/"+perguntaId);
  })

})

app.listen(5000, () => {
  console.log("rodando");
});
