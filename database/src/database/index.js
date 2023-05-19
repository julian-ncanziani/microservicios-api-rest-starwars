const mongoose = require('mongoose');
const {MONGO_URI} = require('../config/envs');

const conn = mongoose.createConnection(MONGO_URI);

//Film.list().then((res)=>console.log(res));
//Planet.getById('3').then((res)=>console.log(res));
//Film.input({_id: '2001', name: 'julianopolis'}).then((res)=>console.log(res));
//Film.deleteById('2001').then((res)=>console.log(res));

module.exports = {
    Character: conn.model('Character', require('./schemas/characterSchema')),
    Film: conn.model('Film', require('./schemas/filmSchema')),
    Planet: conn.model('Planet', require('./schemas/planetSchema'))
};


