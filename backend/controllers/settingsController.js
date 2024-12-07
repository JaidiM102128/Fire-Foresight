const settingsModel = require('../models/settingsModel');

exports.getSettings = async (req, res) => {
  try {
    const userId = req.user.id; // Get user ID from authenticated request
    const settings = await settingsModel.getSettingsByUserId(userId);
    if (!settings) {
      return res.status(404).json({ message: 'Settings not found' });
    }
    res.status(200).json(settings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateSettings = async (req, res) => {
  try {
    const userId = req.user.id; // Get user ID from authenticated request
    const { notificationPreferences, language, theme } = req.body;

    const updatedSettings = await settingsModel.updateSettings(userId, {
      notificationPreferences,
      language,
      theme,
    });

    res.status(200).json({ message: 'Settings updated successfully!', updatedSettings });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
