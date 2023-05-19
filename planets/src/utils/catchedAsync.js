module.exports = (callback) => {
    return (req, res, next)=>{
        callback(req, res).catch((error)=>{
            next(error);
        });
    };
};