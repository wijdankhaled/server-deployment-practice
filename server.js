'use strict '

const express=require('express');
const server =express();

const notFoundHandler=require('./handler/404.js');
const errorHandler=require('./handler/500.js');

function start(port){
    server.listen(port,() => console.log(`Server started on port 👍 ${port}`));
}

//http://localhost:3001/
server.get('/',(req,res)=>{
res.status(200).send('Iam working');
})

server.get('/bad', (req, res, next) => {
    next('error from bad end point');
});

//http://localhost:3001/data
server.get('/data',(req,res)=>{
    let aboutMe={
        name:'wijdan',
        age:23,
        magore:'cs'
    }
    res.status(200).json(aboutMe);
})

server.use('*', notFoundHandler);
server.use(errorHandler);

module.exports={
    start,
    server
}
