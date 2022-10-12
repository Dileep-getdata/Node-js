const http=require('http');

// Importing the exported file
const routes=require('./routes');
const express=require('express');
const app=express();

app.use((req,res,next)=>{
    console.log('In the middleware');
    next();
});

app.use((req,res,next)=>{
    res.send('<h1> Hello Express JS</h1>');
});

// const server=http.createServer(app); 
// // console.log(routes.text);

app.listen(4000);