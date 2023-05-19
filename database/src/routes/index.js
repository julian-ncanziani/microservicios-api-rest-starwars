const { Router } = require('express');
const store = require('../database');
const controllers = require('../controllers');

const router = Router();

router.get('/:model', controllers.getAllDocs);

router.get('/:model/:id', controllers.getDocById);

router.post('/:model', controllers.createDoc);

router.delete('/:model/:id', controllers.deleteDocById);

module.exports = router;