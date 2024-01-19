// importing express
const express = require('express');

// importing .env
require('dotenv').config();

WEATHER_API = process.env.WEATHER_API;

// initializing express router
const router = express.Router();

// fetching weather data from openweathermap api
async function getWeatherData(city) {
	const response = await fetch(WEATHER_API + `&q=${city}`);
	const weatherData = await response.json();
	// console.log(weatherData)
	return weatherData;
}

// GET /:city
router.get('/:city', async (req, res) => {
	const cityName = req.params.city;
	try {
		console.log(`Fetching weather data for: ${cityName} city`);
		const weatherData = await getWeatherData(cityName);
		// console.log(weatherData)
		if (weatherData.cod === '404') {
			res.status(404).json({ message: 'City not found' });
		}
		res.status(200).json(weatherData);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

router.all('*', (req, res) => {
	res.status(401).json(
		'Route not found. Please check your request, and try again.'
	);
});

// exporting router
module.exports = router;
