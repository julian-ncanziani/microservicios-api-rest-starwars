const server =require('./src/server');

PORT = 8003;

server.listen(PORT, ()=>{
    console.log(`Planets service listening on port ${PORT}`);
});