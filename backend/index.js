// Load environment variables from .env file
require('dotenv').config();

// Import necessary modules
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Import routes
const userRoutes = require('./routes/userRoutes');
const fireRiskRoutes = require('./routes/fireRiskRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const safetyGuidelinesRoutes = require('./routes/safetyGuidelinesRoutes');

// Initialize Express app
const app = express();

// Middleware setup
app.use(cors()); // Enable Cross-Origin Resource Sharing for frontend-backend communication
app.use(bodyParser.json()); // Parse incoming JSON request bodies

// Base route for testing if the server is up
app.get('/', (req, res) => {
  res.send('Fire Foresight Backend is running!');
});

// Use the routes for different functionalities

// User routes (for user management)
app.use('/api/users', userRoutes); // Route for user operations like creating, fetching, updating, and deleting users

// Fire risk routes (for calculating and fetching fire risk data)
app.use('/api/fire-risk', fireRiskRoutes); // Route for handling fire risk calculations and related actions

// Notification routes (for creating and managing notifications)
app.use('/api/notifications', notificationRoutes); // Route for managing notifications for users

// Safety guidelines routes (for providing safety-related information)
app.use('/api/safety-guidelines', safetyGuidelinesRoutes); // Route for safety tips and emergency contacts

// 404 Error handler for unknown routes
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

// Global error handler for internal server errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Database URL: ${process.env.DATABASE_URL}`);
  console.log(`Weather API Key: ${process.env.WEATHER_API_KEY}`);
});
