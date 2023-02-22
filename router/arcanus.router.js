const express = require('express');
const router = express.Router();
const arcanusController = require('../controller/arcanus.controller');

router.post('/validate', arcanusController.validate);
router.post('/getArcanus', arcanusController.getArcanus);
router.post('/setArcanus', arcanusController.setArcanus);
router.post('/getSkills', arcanusController.getSkills);
router.post('/setSkills', arcanusController.setSkills);

module.exports = router;