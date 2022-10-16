const express=require('express');

const routers=express.Router();
const adminController=require('../Controllers/admin');
routers.get('/add-product',adminController.AdminAddProduct);

routers.post('/add-product',adminController.AdminAddProductPost);

module.exports=routers;