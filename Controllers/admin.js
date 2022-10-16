const path=require('path');
const pathDir=require('../util/path.js');

exports.AdminAddProduct= (req,res,next)=>{
    res.sendFile(path.join(pathDir,'Views','Admin.html'));
    
}
exports.AdminAddProductPost=(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
}