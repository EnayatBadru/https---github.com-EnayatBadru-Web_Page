//imports
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const { Op } = require("sequelize");
const Post = require('./models/Post');
const db = require('./models/db');
const bcrypt = require('bcrypt');
const port = 3000;

const path = require('path');

//app.express
const app = express();

//conf bodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//conf html
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use('/public', express.static(path.join(__dirname, 'public')));

//conf session
app.use(session({
  secret: 'uwqhkasmcoausacwacions',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7
  }
}));

//caminhos para o html
const cadastro = path.join(__dirname, 'views', 'cadastro.html');
const login = path.join(__dirname, 'views', 'login.html');
const main = path.join(__dirname, 'views', 'main.html');

app.set('views', path.join(__dirname, '/views'));

//Rotas principal
app.get('/', function(req, res){
    res.sendFile(login);
});

//rotas secundarias

//gravar no banco de dados
app.post('/add', function(req, res){
  Post.findOne({
      where: {
          [Op.or]: [
              { user: req.body.user.toLowerCase() },
              { email: req.body.email.toLowerCase() }
          ]
      }
  }).then((user) => {
      if (user) {
          res.send('Usuário ou email já existe no banco de dados');
      } else {
          bcrypt.hash(req.body.pass, 10, (err, hash) => {
              if (err) {
                  res.send(`Houve um erro ${err}`);
              } else {
                  Post.create({
                      user: req.body.user.toLowerCase(),
                      email: req.body.email.toLowerCase(),
                      pass: hash
                  }).then(()=>{
                      res.sendFile(login);
                  }).catch((e)=>{
                      res.send(`Houve um erro ${e}`);
                  });
              }
          });
      }
  }).catch((e)=>{
      res.send(`Houve um erro ${e}`);
  });
});


app.post('/logar', (req, res) => {
  const user = req.body.user;
  const pass = req.body.pass;

  Post.findOne({
    where: {
      [Op.or]: [
        { user: user },
        { email: user }
      ]
    }
  }).then((user) => {
    if (!user) {
      // Usuário não encontrado, exibe mensagem de erro
      res.send('Usuário ou senha incorretos');
    } else {
      // Verifica a senha usando bcrypt.compare()
      bcrypt.compare(pass, user.pass, (err, result) => {
        if (err) {
          console.log(err);
          res.send('Ocorreu um erro no servidor');
        } else if (result) {
          // Login bem-sucedido, armazena o estado de logon na sessão
          req.session.logado = true;
          req.session.user = user.user;
          res.sendFile(main);
        } else {
          // Senha incorreta, exibe mensagem de erro
          res.send('Usuário ou senha incorretos');
        }
      });
    }
  }).catch((err) => {
    console.log(err);
    res.send('Ocorreu um erro no servidor');
  });
});

//log out
app.get('/logout', (req, res) => {
  // Destrói o estado de logon na sessão
  req.session.logado = false;
  req.session.user = null;
  res.sendFile(login);
});

  // links
  app.get('/cadastro', (req, res)=>{
    res.sendFile(cadastro);
  });

  app.get('/login', (req, res)=>{
    res.sendFile(login);
  });


//listen
app.listen(port, function(){
    console.log(`Servidor Rodando na url http://localhost:${port}`);
})