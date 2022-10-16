const path=require('path');
const pathDir=require('../util/path.js');

exports.contactUsController=(req,res,next)=>{
    res.sendFile(path.join(pathDir,'Views','contact.html'));
    
}

exports.contactUsControllerPost=(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
}