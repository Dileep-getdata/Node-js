const express=require('express');
const path=require('path');
const pathDir=require('../util/path.js');
const routers=express.Router();

routers.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(pathDir,'Views','Admin.html'));
    
});

routers.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/shop');
});

module.exports=routers;