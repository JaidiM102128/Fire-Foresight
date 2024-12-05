// Import necessary modules
const axios = require('axios'); // For sending HTTP requests (if needed for APIs)
const { sendPushNotification } = require('../services/notificationService'); // Push notification service
const db = require('../models'); // Assuming you have a database model for storing notifications

/**
 * Fetch all notifications for a specific user
 * @route GET /api/notifications/:userId
 */
const getUserNotifications = async (req, res) => {
  const { userId } = req.params;

  try {
    const notifications = await db.Notification.findAll({
      where: { userId },
      order: [['createdAt', 'DESC']], // Latest notifications first
    });

    res.status(200).json({ success: true, data: notifications });
  } catch (error) {
    console.error('Error fetching notifications:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch notifications' });
  }
};

/**
 * Create a new notification for a specific user
 * @route POST /api/notifications
 */
const createNotification = async (req, res) => {
  const { userId, message, riskLevel } = req.body;

  try {
    const newNotification = await db.Notification.create({
      userId,
      message,
      riskLevel,
      sentAt: new Date(),
    });

    // Optionally send a push notification
    await sendPushNotification(userId, message);

    res.status(201).json({ success: true, data: newNotification });
  } catch (error) {
    console.error('Error creating notification:', error);
    res.status(500).json({ success: false, message: 'Failed to create notification' });
  }
};

/**
 * Send a notification to a user (real-time alerts)
 * @route POST /api/notifications/send
 */
const sendNotification = async (req, res) => {
  const { userId, message } = req.body;

  try {
    await sendPushNotification(userId, message);

    res.status(200).json({ success: true, message: 'Notification sent successfully' });
  } catch (error) {
    console.error('Error sending notification:', error);
    res.status(500).json({ success: false, message: 'Failed to send notification' });
  }
};

/**
 * Delete a specific notification
 * @route DELETE /api/notifications/:id
 */
const deleteNotification = async (req, res) => {
  const { id } = req.params;

  try {
    const notification = await db.Notification.findByPk(id);

    if (!notification) {
      return res.status(404).json({ success: false, message: 'Notification not found' });
    }

    await notification.destroy();

    res.status(200).json({ success: true, message: 'Notification deleted successfully' });
  } catch (error) {
    console.error('Error deleting notification:', error);
    res.status(500).json({ success: false, message: 'Failed to delete notification' });
  }
};

module.exports = {
  getUserNotifications,
  createNotification,
  sendNotification,
  deleteNotification,
};
