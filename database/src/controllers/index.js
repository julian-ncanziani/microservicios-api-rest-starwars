const { catchedAsync } = require('../utils');

module.exports = {
    getAllDocs : catchedAsync(require('./getAllDocs')),
    getDocById: catchedAsync(require('./getDocById')),
    createDoc: catchedAsync(require('./createDoc')),
    deleteDocById: catchedAsync(require('./deleteDocById')),
};