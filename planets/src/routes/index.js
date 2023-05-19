const {Router} = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', controllers.getPlanets);
router.get('/:id', controllers.getPlanetById);
router.post('/', controllers.createPlanet);
router.delete('/:id', controllers.deletePlanetById);

module.exports = router;