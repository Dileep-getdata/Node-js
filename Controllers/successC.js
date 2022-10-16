const path=require('path');
const pathDir=require('../util/path');

exports.successController=(req,res)=>{
    res.sendFile(path.join(pathDir,'Views','success.html'));
}