const express = require('express');
const router = express.Router();
const arcanusController = require('../controllers/arcanus.controller');

router.post('/getArcanus', arcanusController.getArcanus);
router.post('/setArcanus', arcanusController.setArcanus);
router.post('/getSkills', arcanusController.getSkills);
router.post('/setSkills', arcanusController.setSkills);

module.exports = router;