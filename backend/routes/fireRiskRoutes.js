const express = require('express');
const router = express.Router();
const fireRiskController = require('../controllers/fireRiskController');
const authMiddleware = require('../middleware/authMiddleware');

// Calculate fire risk based on the location (requires authentication)
router.post('/calculate', authMiddleware, fireRiskController.calculateRisk);

module.exports = router;
