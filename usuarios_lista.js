const express = require('express')
const lista = express.Router();




const usuarios =[
    {id:0,nome:'Luciano'}
]



const msg =[
    {id:0,msg:'para ver se tem novas mensagens recarregue a pagina'}
]


function abrirconversa(id_conversa){
    let id = id_conversa;
    let usuario_em_conversa = usuarios[id].nome;  
    let body = {
        usuario_em_conversa,msg  
    }
    return body;

}
function mandar_msg(mensagem){
    let texto = mensagem;
    let id = msg.length;
    let body ={
        id:id,msg:texto
    }
    msg.push(body);
    return true;
}













//function User

lista.get('/user',(req,res)=>{
    //listar usuarios
   let  body={
       usuarios,msg
    }
    return res.json(body);
})







//function GetUser

lista.get('/getuser/userid=:id',(req,res)=>{
    let id = req.params.id;
    let resposta = abrirconversa(id);
    return res.json(resposta); 
})

//function enviar mensagem

lista.post('/enviar/mensagem',(req,res)=>{
    let body = req.body;
    let msg_text = body.msg;
   let resposta = mandar_msg(msg_text);
   if(resposta){
       return res.send('mensagem enviada')
   }

})




module.exports=lista;