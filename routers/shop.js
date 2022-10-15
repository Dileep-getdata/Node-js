const express= require('express');
const path=require('path');
const pathDir=require('../util/path.js');

const routers=express.Router();

routers.get('/',(req,res,next)=>{
    res.sendFile(path.join(pathDir,'Views','shop.html'));
    
});

module.exports=routers;