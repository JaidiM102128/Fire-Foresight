const { Client } = require('pg');
require('dotenv').config(); // Load environment variables

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: false, // Disable SSL for local development
});

const connectDB = async () => {
  if (!client._connected) { // Ensure the client is not already connected
    await client.connect();
    console.log('Connected to the database successfully!');
  }

  return client;
};

module.exports = connectDB;
