const http=require('http');

// Importing the exported file
const express=require('express');

const adminRouter=require('./routers/admin');
const shopRouter=require('./routers/shop');

// const bodyparser=require('body-parser');
const { urlencoded } = require('body-parser');


const app=express();

app.use(urlencoded({extended: false}));

app.use('/admin',adminRouter);
app.use('/shop',shopRouter);
app.use((req,res,next)=>{
res.status(404).send('<h1>Page not found</h1>');
});


// const server=http.createServer(app); 
// // console.log(routes.text);

app.listen(4000);