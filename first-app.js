const http=require('http');

// Importing the exported file
const express=require('express');
const path=require('path');



const adminRouter=require('./routers/admin');
const shopRouter=require('./routers/shop');
const contactRouter=require('./routers/contact');

// const bodyparser=require('body-parser');
const { urlencoded } = require('body-parser');




const app=express();

app.use(urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminRouter);
app.use('/shop',shopRouter);
app.use('/contact',contactRouter);

app.use((req,res,next)=>{
res.status(404).sendFile(path.join(__dirname,'Views','404page.html'));
});


// const server=http.createServer(app); 
// // console.log(routes.text);

app.listen(4000);