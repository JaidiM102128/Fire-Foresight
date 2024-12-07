const axios = require('axios');

exports.calculateFireRisk = async (location) => {
  const weatherApiKey = process.env.WEATHER_API_KEY;
  const weatherData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${weatherApiKey}`);
  
  const { temperature, humidity, wind_speed } = weatherData.data.main;
  let fireRisk = 'low';

  if (temperature > 30 && humidity < 20 && wind_speed > 15) {
    fireRisk = 'high';
  } else if (temperature > 25 && humidity < 40) {
    fireRisk = 'medium';
  }

  return fireRisk; // Fire risk calculation based on weather conditions
};
