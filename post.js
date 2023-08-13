const express = require('express');
const bodyParser=require('body-parser');

const app=express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/saludo', function(request, response){
    response.send(`Hola ${request.query.name}`);
});

app.post('/', function(request,response){
    response.send(`Hola ${request.body.name}`);
   
});

app.listen(3000);
