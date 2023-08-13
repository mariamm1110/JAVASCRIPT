const express=require('express');

const app = express();

app.use('/assets',express.static('assets'));

app.get('/', function(request,response){
    response.sendFile('index.html',{
        root: __dirname
    }); 

    //response.send(__dirname)
});

app.listen(3000);