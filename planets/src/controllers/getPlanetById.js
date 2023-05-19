const axios = require('../axios');

module.exports = async(req, res) => {
    const { id } = req.params;
    const planet = await axios.get(`http://database:8004/Planet/${id}`);
    res.status(200).json(planet.data);
};