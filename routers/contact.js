const express=require('express');

const routers=express.Router();
const contactC=require('../Controllers/contactCont')
routers.get('/',contactC.contactUsController);

routers.post('/',contactC.contactUsControllerPost);

module.exports=routers;