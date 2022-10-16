const path=require('path');
const pathDir=require('../util/path.js');

exports.shopListOfProd=(req,res,next)=>{
    res.sendFile(path.join(pathDir,'Views','shop.html'));
    
}