require('dotenv').config();

const express = require('express');
const app = express();

const dbUrl = process.env.DATABASE_URL;
const weatherApiKey = process.env.WEATHER_API_KEY;

app.get('/', (req, res) => {
  res.send('Backend is working!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Database URL: ${dbUrl}`);
  console.log(`Weather API Key: ${weatherApiKey}`);
});