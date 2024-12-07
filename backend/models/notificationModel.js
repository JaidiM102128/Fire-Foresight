const db = require('../config/db');

// Method to create a new notification for a user
exports.createNotification = async (userId, message) => {
  const query = `
    INSERT INTO notifications (user_id, message)
    VALUES ($1, $2) RETURNING *;
  `;
  const values = [userId, message];
  try {
    const result = await db.query(query, values);
    return result.rows[0]; // Returns the created notification
  } catch (err) {
    throw new Error('Error creating notification: ' + err.message);
  }
};

// Method to get notifications for a specific user by userId
exports.getNotificationsByUserId = async (userId) => {
  const query = 'SELECT * FROM notifications WHERE user_id = $1';
  try {
    const result = await db.query(query, [userId]);
    return result.rows; // Returns an array of notifications
  } catch (err) {
    throw new Error('Error retrieving notifications: ' + err.message);
  }
};