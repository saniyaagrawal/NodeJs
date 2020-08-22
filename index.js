const express=require('express');
const morgan=require('morgan');
const http = require('http');
const bodyParser= require('body-parser');

const dishRouter = require('./routes/dishRouter');

const hostname='localhost';
const port=3000;

const app=express();

app.use(morgan('dev'));


app.use('/dishes', dishRouter);
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());
// app.get('/dishes/:dishId', (req,res,next)=> {
//     res.end('get dish'+ req.params.dishId);
// });

// app.put('/dishes/:dishId', (req,res,next)=> {
//     res.write('put dish'+ req.params.dishId);
//     res.end('with details'+req.body.name+ 'and' +req.body.description)
// });

// app.post('/dishes/:dishId', (req,res,next)=> {
//     res.statusCode=403;
//     res.end('Not supported post');
// });

// app.delete('/dishes/:dishId', (req,res,next)=> {
//     res.end('delete');
// });

app.use((req,res,next)=> {
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1>Express server</h1></body></html>');
});

const server=http.createServer(app);
server.listen(port,hostname,()=>{
    console.log(`server at http://${hostname}:${port}`)
});