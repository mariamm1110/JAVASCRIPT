const express = require('express');

const app=express();

app.get('/saludo', function(request, response){
    response.send(`Hola ${request.query.name}`);
});

app.listen(3000)