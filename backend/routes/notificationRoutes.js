const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController'); // Ensure correct path
const authMiddleware = require('../middleware/authMiddleware');

// Get all notifications for the authenticated user
router.get('/', authMiddleware, notificationController.getNotifications);

// Send a notification to the authenticated user
router.post('/', authMiddleware, notificationController.sendNotification);

module.exports = router;
