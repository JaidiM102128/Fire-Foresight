// Import necessary modules
const axios = require('axios'); // For making HTTP requests

// Function to fetch weather data based on location
const getWeatherData = async (location) => {
    try {
        // Replace with your weather API's endpoint and key
        const apiKey = process.env.WEATHER_API_KEY;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

        const response = await axios.get(url);
        const { temp, humidity } = response.data.main;
        const windSpeed = response.data.wind.speed;

        return {
            temperature: temp,
            humidity,
            windSpeed,
        };
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw new Error('Failed to fetch weather data');
    }
};

// Function to calculate fire risk percentage based on weather and vegetation data
const calculateFireRisk = ({ temperature, humidity, windSpeed, vegetationDryness }) => {
    // Basic formula for fire risk calculation (you can customize this further)
    const tempFactor = temperature > 30 ? 0.4 : 0.2;
    const humidityFactor = humidity < 30 ? 0.3 : 0.1;
    const windFactor = windSpeed > 5 ? 0.3 : 0.2;
    const drynessFactor = vegetationDryness / 100;

    return (
        (tempFactor + humidityFactor + windFactor) * drynessFactor * 100 // Calculate percentage
    );
};

// Search location and calculate fire risk
exports.searchFireRisk = async (req, res) => {
    try {
        const { location } = req.query; // Get the location from the query parameters

        if (!location) {
            return res.status(400).json({
                success: false,
                message: 'Location is required',
            });
        }

        // Step 1: Fetch weather data for the location
        const weatherData = await getWeatherData(location);

        // Step 2: Assume vegetation dryness or fetch it dynamically
        const vegetationDryness = 70; // Example value, can be dynamic

        // Step 3: Calculate fire risk percentage
        const fireRiskPercentage = calculateFireRisk({
            ...weatherData,
            vegetationDryness,
        });

        // Step 4: Respond with calculated fire risk and weather details
        res.status(200).json({
            success: true,
            data: {
                location,
                riskLevel: `${fireRiskPercentage.toFixed(2)}%`,
                weatherData,
            },
        });
    } catch (error) {
        console.error('Error searching fire risk:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to search fire risk',
        });
    }
};
