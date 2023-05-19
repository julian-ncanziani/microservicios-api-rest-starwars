const server = require('./src/server');

server.listen(8004, ()=>{
    console.log('Database listen on port 8004');
});