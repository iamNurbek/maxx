// routes/dataRoutes.js
const express = require('express');
const { getData, createData } = require('../controllers/dataController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, getData);
router.post('/', authMiddleware, createData);

module.exports = router;
