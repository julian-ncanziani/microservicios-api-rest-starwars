const { catchedAsync } = require('../utils');

module.exports = {
    getCharacters: catchedAsync(require('./getCharacters')),
    getCharacterById: catchedAsync(require('./getCharaterById')),
    createCharacters: catchedAsync(require('./createCharacter')),
    deleteCharacterById: catchedAsync(require('./deleteCharacterById')),
};