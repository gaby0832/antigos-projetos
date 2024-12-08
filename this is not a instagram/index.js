const express = require("express");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const Usuarios = require("./usuarios.js");
const Postagens = require("./posts.js");

const path = require("path");

var session = require("express-session");

const app = express();

mongoose
  .connect(
    "mongodb://root:B9IhV8esmjpyppmk@ac-olh8i3k-shard-00-00.v1ae00h.mongodb.net:27017,ac-olh8i3k-shard-00-01.v1ae00h.mongodb.net:27017,ac-olh8i3k-shard-00-02.v1ae00h.mongodb.net:27017/instagram?ssl=true&replicaSet=atlas-o0a693-shard-0&authSource=admin&retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(function () {
    console.log("online-db");
  })
  .catch(function (err) {
    console.log(err.message);
  });

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(session({ secret: "SBHTassgDFqwCAS", cookie: {} }));

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.use("/public", express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "/pages"));

app.get("/", (req, res) => {
  if (req.query.busca == null) {
    Usuarios.find({})
      .sort({ _id: -1 })
      .exec(function (err, users) {
        Postagens.find({})
          .sort({ _id: -1 })
          .exec(function (err, posts) {
            users = users.map((val) => {
              return {
                nome: val.nome,
                imagem: val.imagem_perfil,
              };
            });

            posts = posts.map((val) => {
              return {
                id: val._id,
                titulo: val.titulo,
                imagemautor: val.image,
                userautor: val.autor,
                autorimage: val.autor_image,
              };
            });
            res.render("home", {
              name: req.session.name,
              login: req.session.login,
              imagem: req.session.image,
              users: users,
              posts: posts,
            });
          });
      });
  } else {
    Usuarios.find(
      { nome: { $regex: req.query.busca, $options: "i" } },
      function (err, users) {
        users = users.map((val) => {
          return {
            nome: val.nome,
            imagem: val.imagem_perfil,
          };
        });

        res.render("busca", {
          login: req.session.login,
          imagem: req.session.image,
          name: req.session.name,
          users: users,
        });
      }
    );
  }
});

app.get("/user/:slug", (req, res) => {
  Usuarios.find({ nome: req.params.slug }, function (error, users) {
    Postagens.find({ autor: req.params.slug }).exec(function (err, posts) {
      users = users.map((val) => {
        return {
          nome: val.nome,
          imagem: val.imagem_perfil,
        };
      });

      posts = posts.map((val) => {
        return {
          id: val._id,
          titulo: val.titulo,
          imagemautor: val.image,
          userautor: val.autor,
          autorimage: val.autor_image,
        };
      });

      if (users.length > 0) {
        res.render("single", {
          name: req.session.name,
          login: req.session.login,
          imagem: req.session.image,
          users: users,
          posts: posts,
        });
      } else {
        res.redirect("/");
      }
    });
  });
});

app.get("/apagar/:user/:id", (req, res) => {
  if (req.session.name == req.params.user) {
    Postagens.deleteOne({ _id: req.params.id }).then(function () {
      res.redirect("/");
    });
  } else {
    res.redirect("/");
  }
});

app.post("/login/logar", (req, res) => {
  Usuarios.find({ email: { $regex: req.body.email }}).exec(function (err, users) {
        
        if (users.length > 0) {
          if(users[0].senha == req.body.password){
            req.session.name = users[0].nome;
            req.session.login = users[0].email;
            req.session.image = users[0].imagem_perfil;
            res.redirect("/login/logar");
          }
        }else{
          res.redirect("/login/logar");
        };

    });
});

app.post("/login/personalizar", (req, res) => {
  Usuarios.findOneAndUpdate(
    { nome: req.session.name },
    { $set: { imagem_perfil: req.body.imagemalt }}
  ).then(() => {
    Postagens.find(
      { autor: { $regex: req.session.name, $options: "i" } },
      function (err, users) {
        users = users.map((val) => {
          return {
            id: val._id,
            titulo: val.titulo,
            imagemautor: val.image,
            userautor: val.autor,
            autorimage: val.autor_image,
          };
        });

        users.forEach((val) => {
          Postagens.findOneAndUpdate(
            { _id: val.id },
            { $set: { autor_image: req.body.imagemalt } }
          ).then();
        });
      }
    );

    req.session.image = req.body.imagemalt;
    res.redirect("/user/" + req.session.name);
  });
});

var cadastro = false;
app.post("/login/cadastro", (req, res) => {
var usersFind = false;
const usersEfind = Usuarios.find({ email: { $regex: req.body.emailregister } }).exec(function(err,userE) {
      if (userE.length != 0) {
        console.log('Achou uma conta com esse Email');
        usersFind = true;
      }else{
        console.log('Não achou uma conta com esse Email');
        usersNfind();
      }

    });
const usersNfind = () =>{ Usuarios.find({ nome: { $regex: req.body.usernameregister }  }).exec(function(err,userP) {
      if (userP.length != 0) {
        console.log('Achou uma conta com esse Nome')
         usersFind = true;
      }else{
        console.log('Não achou uma conta com esse Nome');
        verificaConta();
      }
    });
}


 const verificaConta = ()=>{
    if(usersFind == false){
      Usuarios.create({
            nome: req.body.usernameregister,
            senha: req.body.passwordregister,
            imagem_perfil: req.body.imagemregister,
            email: req.body.emailregister,
      });
      cadastro = true;
      res.redirect("/login/logar");
    }else{
      res.redirect("/login/cadastro");
    }
 };
 
});

app.get("/login/logar", (req, res) => {
  if (req.session.login != null) {
    res.redirect("/");
  } else {
    cadastro = false;
    res.render("login-perfil", {});
  }
});

app.get("/login/cadastro", (req, res) => {
  if (req.session.login == null) {
    if (cadastro != false) {
      res.redirect("/login/logar");
    } else {
      res.render("register-perfil", {});
    }
  } else {
    res.redirect("/");
  }
});

app.get("/perfil/deslogar", (req, res) => {
  if (req.session.login != null) {
    req.session.login = null;
    cadastro = false;
    req.session.name = null;
    res.redirect("/");
  } else {
    res.redirect("/");
  }
});

app.get("/login/personalizar", (req, res) => {
  if (req.session.login != null) {
    res.render("personalizar", {});
  } else {
    res.redirect("/");
  }
});

app.get("/login/postar", (req, res) => {
  if (req.session.login != null) {
    res.render("postagens", {});
  } else {
    res.redirect("/");
  }
});

app.post("/login/postar", (req, res) => {
  if (req.session.login != null) {
    Postagens.create({
      titulo: req.body.contentpost,
      image: req.body.imagempost,
      autor: req.session.name,
      email_autor: req.session.login,
      autor_image: req.session.image,
    });
    res.redirect("/");
  } else {
    res.redirect("/");
  }
});

app.listen(5000, () => {
  console.log("online");
});
