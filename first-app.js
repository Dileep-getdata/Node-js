const http=require('http');

// Importing the exported file
const routes=require('./routes');

const server=http.createServer(routes.handler); 
console.log(routes.text);

server.listen(4000);