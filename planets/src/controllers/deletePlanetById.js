const axios = require('../axios');

module.exports = async(req, res) => {
    const { id } = req.params;
    const planetDeleted = await axios.delete(`http://database:8004/Planet/${id}`);
    res.status(200).json(planetDeleted.data);
};