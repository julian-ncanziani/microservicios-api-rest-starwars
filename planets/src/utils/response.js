module.exports = (req, res, data) => {
    res.status(200).json({
        error: false,
        data
    });
};