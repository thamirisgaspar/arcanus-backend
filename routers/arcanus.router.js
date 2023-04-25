const express = require('express');
const router = express.Router();
const arcanusController = require('../controllers/arcanus.controller');

router.post('/getArcanus', arcanusController.getArcanus);
router.post('/setArcanus', arcanusController.setArcanus);

module.exports = router;