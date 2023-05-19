const {Schema} = require('mongoose');

const planetSchema = new Schema({
    _id: String,
    name: String,
    rotation_period: String,
    orbital_period: String,
    diameter: String,
    climate: String,
    gravity: String,
    terrain: String,
    surface_water: String,
    residents: [{type: String, ref: 'Character'}],
    films: [{type: String, ref: 'Film'}]
});

planetSchema.statics.list = async function(){
    return await this.find()
        .populate('residents', ['_id', 'name'])
        .populate('films', ['_id', 'title']);
};

planetSchema.statics.getById = async function(id){
    return await this.findById(id)
        .populate('films', ['_id', 'title']);
};

planetSchema.statics.input = async function(film){
    return await this.create(film);
};

planetSchema.statics.deleteById = async function(_id){
    return await this.deleteOne({_id});
};

module.exports = planetSchema;