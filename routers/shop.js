const express= require('express');

const routers=express.Router();

routers.get('/',(req,res,next)=>{
    res.send('<h1>Hello from express JS!</h1>')
});

module.exports=routers;