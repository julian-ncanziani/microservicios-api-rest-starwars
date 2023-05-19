module.exports = (callback)=>{
    return function(req, res, next){
        callback(req, res).catch((error)=>{
            next(error);
        });
    };
};