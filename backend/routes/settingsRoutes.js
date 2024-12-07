const express = require('express');
const router = express.Router();
const settingsController = require('../controllers/settingsController');
const authMiddleware = require('../middleware/authMiddleware');

// Get the settings of the logged-in user
router.get('/', authMiddleware, settingsController.getSettings);

// Update the settings of the logged-in user
router.put('/', authMiddleware, settingsController.updateSettings);

module.exports = router;
