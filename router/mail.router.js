const express = require('express');
const router = express.Router();
const mailController = require('../controller/mail.controller');

router.post('/sendmail', mailController.sendmail);


module.exports = router;