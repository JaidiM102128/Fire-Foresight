const notificationModel = require('../models/notificationModel');

// Get all notifications for the logged-in user
exports.getNotifications = async (req, res) => {
  try {
    const userId = req.user.id; // Extract user ID from the JWT token
    const notifications = await notificationModel.getNotificationsByUserId(userId);
    res.status(200).json(notifications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Send a new notification to the logged-in user
exports.sendNotification = async (req, res) => {
  try {
    const userId = req.user.id; // Extract user ID from the JWT token
    const { message } = req.body; // The message from the request body
    const notification = await notificationModel.createNotification(userId, message);
    res.status(200).json({ message: 'Notification sent successfully', notification });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
