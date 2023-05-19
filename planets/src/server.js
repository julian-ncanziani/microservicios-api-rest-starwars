const express = require('express');
const morgan = require('morgan');
const planetsRouter = require('./routes');

const server = express();

server.use(morgan('dev'));
server.use(express.json());
server.use('/planets', planetsRouter);

server.use((error, req, res, next)=>{
    res.status(error.statusCode || 500).send({
        error: true,
        message: error.message});
});

module.exports = server;