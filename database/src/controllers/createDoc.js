const store = require('../database');

module.exports = async (req, res) => {
    const { model } = req.params;
    const data = req.body;
    const response = await store[model].input(data);
    res.status(200).json(response);
};