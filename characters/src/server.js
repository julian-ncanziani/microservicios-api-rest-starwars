const express = require('express');
const morgan = require('morgan');
const characterRouter = require('./routes');


const server = express();

server.use(morgan('dev'));
server.use(express.json());
server.use('/characters', characterRouter);

//aca reemplazo el middleware de manejo de errores por defecto de express
server.use((error, req, res, next)=>{
    res.status(error.statusCode || 500).send({
        error: true,
        message: error.message});
});


module.exports = server;