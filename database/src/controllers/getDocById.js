const store = require('../database');

module.exports = async (req, res) => {
    const { model, id } = req.params;
    const response = await store[model].getById(id);
    res.status(200).json(response);
};