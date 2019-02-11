const express = require('express');
const router = express.Router();

const ctrlFdata = require('../controllers/Fdata.control');

router.post('/FRegister', ctrlFdata.FRegister);

module.exports = router;