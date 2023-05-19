const {Schema} = require('mongoose');

const characterSchema = new Schema({
    _id: String,
    name: String,
    height: String,
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_year: String,
    gender: String,
    homeworld: {type: String, ref: "Planet"},
    films: [{type: String, ref: "Film"}]
});

characterSchema.statics.list = async function(){
    return await this.find()
        .populate('films', ['_id', 'name'])
        .populate('homeworld', ['_id', 'name']);
};

characterSchema.statics.getById = async function(id){
    return await this.findById(id)
        .populate('films', ['_id', 'title'])
        .populate('homeworld', ['_id', 'name']);
};

characterSchema.statics.input = async function(character){
    return await this.create(character);
};

characterSchema.statics.deleteById = async function(_id){
    return await this.deleteOne({_id});
}
module.exports = characterSchema;