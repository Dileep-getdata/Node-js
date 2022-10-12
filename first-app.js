const http=require('http');

// Importing the exported file
const routes=require('./routes');
const express=require('express');
// const bodyparser=require('body-parser');
const { urlencoded } = require('body-parser');
const app=express();

app.use(urlencoded({extended: false}));

app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="text" name="title1"><button type="submit">Add product</button></form>')
});

app.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});

app.use('/',(req,res,next)=>{
    res.send('<h1>Hello from express JS!</h1>')
});

// const server=http.createServer(app); 
// // console.log(routes.text);

app.listen(4000);