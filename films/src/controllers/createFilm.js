const axios = require('../axios');

module.exports = async (req, res) => {
    const data = req.body;
    const response = await axios.post('http://database:8004/Film', data);
    res.status(200).json(response.data);
};