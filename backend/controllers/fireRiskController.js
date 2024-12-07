const fireRiskModel = require('../models/fireRiskModel');
const notificationsController = require('../controllers/notificationController');

exports.calculateRisk = async (req, res) => {
  try {
    const { location } = req.body;
    
    // Get weather data and calculate fire risk
    const fireRisk = await fireRiskModel.calculateFireRisk(location);

    // If risk is high, send a notification
    if (fireRisk === 'high') {
      const userId = req.user.id;
      const message = `High fire risk in your area: ${location}`;
      await notificationsController.sendNotification(userId, message);
    }

    res.status(200).json({ fireRisk });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
