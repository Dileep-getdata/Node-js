const http=require(`http`);
const server=http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
// process.exit()
    res.setHeader('Content-type','text/html');
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>Welcome to my node JS project</h1></body>');
    res.end();
});
server.listen(3000)