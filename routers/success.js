const express=require('express');
const routers=express.Router();
const successPage=require('../Controllers/successC')

routers.post('/success',successPage.successController);

module.exports=routers