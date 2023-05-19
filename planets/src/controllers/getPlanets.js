//const Planets = require('../data');
const axios = require('../axios');
const { response } = require('../utils');

module.exports = async (req, res) => {
    const planets = await axios.get('http://database:8004/Planet');
    response(req, res, planets.data);
};