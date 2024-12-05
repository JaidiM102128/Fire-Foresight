// Import necessary modules
const express = require('express');
const router = express.Router();

// Import the notification controller
const notificationController = require('../controllers/notificationController');

// Define routes

/**
 * @route GET /api/notifications/:userId
 * @description Get all notifications for a specific user
 * @access Public
 */
router.get('/:userId', notificationController.getUserNotifications);

/**
 * @route POST /api/notifications
 * @description Create a new notification for a specific user
 * @access Public
 */
router.post('/', notificationController.createNotification);

/**
 * @route POST /api/notifications/send
 * @description Send a notification to a specific user in real-time
 * @access Public
 */
router.post('/send', notificationController.sendNotification);

/**
 * @route DELETE /api/notifications/:id
 * @description Delete a specific notification
 * @access Public
 */
router.delete('/:id', notificationController.deleteNotification);

// Export the router
module.exports = router;
