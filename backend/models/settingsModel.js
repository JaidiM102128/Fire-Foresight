const db = require('../config/db');

// Get settings by user ID
exports.getSettingsByUserId = async (userId) => {
  const query = 'SELECT * FROM settings WHERE user_id = $1';
  const result = await db.query(query, [userId]);
  return result.rows[0];
};

// Update user settings
exports.updateSettings = async (userId, settings) => {
  const { notificationPreferences, language, theme } = settings;
  const query = `
    UPDATE settings
    SET notification_preferences = $1, language = $2, theme = $3
    WHERE user_id = $4
    RETURNING *;
  `;
  const values = [notificationPreferences, language, theme, userId];
  const result = await db.query(query, values);
  return result.rows[0];
};

// Create default settings for new users
exports.createDefaultSettings = async (userId) => {
  const query = `
    INSERT INTO settings (user_id, notification_preferences, language, theme)
    VALUES ($1, $2, $3, $4) RETURNING *;
  `;
  const values = [userId, true, 'English', 'light']; // Default settings
  const result = await db.query(query, values);
  return result.rows[0];
};
