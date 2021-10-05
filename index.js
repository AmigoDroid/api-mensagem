const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const Rota = require('./Routes');

const App= express();

const porta = process.env.PORT || 8080;

App.use(morgan('dev'));
App.use(bodyParser.urlencoded({extended:false}));
App.use(express.json());
App.use(cors());
App.use(Rota)






App.listen(porta,()=>{

    console.log('servidor funcionando na porta:'+porta);
    
})