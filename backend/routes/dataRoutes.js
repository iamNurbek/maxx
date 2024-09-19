const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

router.get('/solar-data', dataController.readCSVData);

module.exports = router;
