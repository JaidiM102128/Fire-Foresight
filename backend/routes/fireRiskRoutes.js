// Import necessary modules
const express = require('express');
const router = express.Router();

// Import the controller
const fireRiskController = require('../controllers/fireRiskController');

// Define routes

/**
 * @route GET /api/fire-risk
 * @description Search fire risk for a specific location
 * @queryParam location (string) - The name of the location
 * @access Public
 */
router.get('/', fireRiskController.searchFireRisk);

module.exports = router;
