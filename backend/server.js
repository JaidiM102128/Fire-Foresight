const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// Import routes
const userRoutes = require('./routes/userRoutes');
const settingsRoutes = require('./routes/settingsRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const fireRiskRoutes = require('./routes/fireRiskRoutes');

// Import database connection
const connectDB = require('./config/db'); // Import connectDB function from db.js

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());  // Parse JSON data from request bodies

// Routes setup
app.use('/api/users', userRoutes);  // Routes for user sign up and login
app.use('/api/settings', settingsRoutes);  // Routes for user settings (get, update)
app.use('/api/notifications', notificationRoutes);  // Routes for notifications
app.use('/api/fire-risk', fireRiskRoutes);  // Routes for fire risk calculation

// Default route (test)
app.get('/', (req, res) => {
  res.send('Fire Foresight API is running');
});

// Start the server and connect to the database
const PORT = process.env.PORT || 3000;

// Connect to the database and start the server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err.message);
    process.exit(1); // Exit the process if DB connection fails
  });
