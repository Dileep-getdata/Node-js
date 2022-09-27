const fs=require('fs');

const requireHandler=((req,res)=>
{
    const url=req.url;
    const method=req.method;

    if(url==='/')
    {        
        fs.readFile('message.txt',{encoding:"utf-8"},(err,data)=>{
            if(err){
                console.log(err);
            }        
        res.write('<html>');
        res.write('<head><title>My message page</title></head>');
        res.write(`<body><p id="fromFile">${data}</p></body>`)
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');        
        return  res.end();
    });
    }

    if(url==='/message' && method==='POST')
    {
        const body=[];
        req.on('data',(chunk)=>
        {
            // console.log(chunk);
            body.push(chunk);        

        });
        return req.on('end',()=>
        {
                const parseBody=Buffer.concat(body).toString();
                const message=parseBody.split('=')[1];
                fs.writeFile('message.txt',message,err=>
                {
                    if(err){
                        console.log(err);
                    }
                    res.statusCode=302;
                    res.setHeader('Location','/');            
                    return res.end();
                
                });
                
        });         
    
    }
});

// -----*****------
// Ways to Export 
// ----------------
// module.exports=requireHandler;

// ..........OR..........

// module.exports={
//     handler:requireHandler,
//     text:"some important info",
// }
// ...........OR...............

// module.exports.handler=requireHandler;
// module.exports.text="some important Info";

// .............OR.................

exports.handler=requireHandler;
exports.text="Some important Info";