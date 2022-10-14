const express=require('express');

const routers=express.Router();

routers.get('/add-product',(req,res,next)=>{
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><input type="text" name="title1"><button type="submit">Add product</button></form>')
});

routers.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/shop');
});

module.exports=routers;