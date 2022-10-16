const express= require('express');
const shopController=require('../Controllers/shopC')

const routers=express.Router();

routers.get('/',shopController.shopListOfProd);

module.exports=routers;