const express=require('express');
const morgan=require('morgan');
const http = require('http');
const bodyParser= require('body-parser');

const dishRouter = require('./routes/dishRouter');
const promotionRouter = require('./routes/promotionRoute');
const leaderRouter = require('./routes/leaderRoute');

const hostname='localhost';
const port=3000;

const app=express();

app.use(morgan('dev'));

app.use('/dishes', dishRouter);
app.use('/promotions', promotionRouter);
app.use('/leaders', leaderRouter);

app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());

app.use((req,res,next)=> {
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1>Express server</h1></body></html>');
});

const server=http.createServer(app);
server.listen(port,hostname,()=>{
    console.log(`server at http://${hostname}:${port}`)
});