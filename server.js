var express = require ('express');
var bodyParser = require('body-parser');
const app = express();
var mongoose = require('mongoose');

//Connection String
mongoose.connect('mongodb+srv://fabio:fabio123@cluster0-waiml.mongodb.net/bd-teste?retryWrites=true&w=majority', 
{useNewUrlParser:true, useUnifiedTopology: true }
);

//Configuração do server para usar body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Definindo a porta via arquivo de configuração
var port = process.env.port || 3000;

//ROTAS
var indexRoute = require("./src/routes/index-routes");
var productRoute = require("./src/routes/product-routes");

//Vincular a aplicacao (app) com o motor de rotas
//Rota geral (teste)
app.use('/api', indexRoute);
//Rotas para produtos
app.use('/api/products', productRoute);

app.listen(port, () => {
    console.log('Server up and running!');

});

