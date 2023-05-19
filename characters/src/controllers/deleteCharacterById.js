const axios = require('../axios');

module.exports = async(req, res) => {
    const {id} = req.params;
    const charDeleted = await axios.delete(`http://database:8004/Character/${id}`);
    res.status(200).json(charDeleted.data);
};