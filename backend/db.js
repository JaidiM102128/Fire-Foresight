const { Client } = require('pg');
require('dotenv').config();  // Load environment variables

// Using the DATABASE_URL from .env
const client = new Client({
  connectionString: process.env.DATABASE_URL,  // Use the full connection string from .env
});

client.connect()
  .then(() => {
    console.log("Connected to the database successfully!");
  })
  .catch(err => {
    console.error("Error connecting to the database:", err.stack);
  });

// Gracefully handle termination and close the connection
process.on('exit', () => {
  client.end(() => {
    console.log("Disconnected from the database.");
  });
});

module.exports = client;
