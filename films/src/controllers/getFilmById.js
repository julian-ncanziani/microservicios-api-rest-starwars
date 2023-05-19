const axios = require('../axios');

module.exports = async (req, res) => {
    const { id } = req.params;
    const response = await axios.get(`http://database:8004/Film/${id}`);
    res.status(200).json(response.data);
};