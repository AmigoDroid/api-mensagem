const express = require('express');
const Rota = express.Router();
const lista = require('./usuarios_lista');

Rota.use(lista)


Rota.get('/user',(req,res)=>{
    let te =teste();
    console.log(te);
   return res.send("ok")
})


module.exports= Rota;