const express = require('express');
const router = express.Router();
const arcanusController = require('../controllers/arcanus.controller');

router.post('/getArcanus', arcanusController.getArcanus);
router.post('/setArcanus', arcanusController.setArcanus);
router.post('/getSkills', arcanusController.getSkills);
router.post('/setSkills', arcanusController.setSkills);
router.post('/getOthers', arcanusController.getOthers);
router.post('/setOthers', arcanusController.setOthers);
router.post('/changed', arcanusController.changed);
router.post('/getGrimoire', arcanusController.getGrimoire);
router.post('/setGrimoire', arcanusController.setGrimoire);
router.post('/getNotes', arcanusController.getNotes);
router.post('/setNotes', arcanusController.setNotes);
router.post('/getMagicaes', arcanusController.getMagicaes);
router.post('/setMagicaes', arcanusController.setMagicaes);

module.exports = router;