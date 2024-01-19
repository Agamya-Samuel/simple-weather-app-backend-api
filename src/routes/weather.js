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

// GET /:id
router.get('/:id', async (req, res) => {
	const city = req.params.id;
	try {
		console.log(`Fetching weather data for: ${city} city`);
		const weatherData = await getWeatherData(city);
		// console.log(weatherData)
		res.status(200).json(weatherData);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

// exporting router
module.exports = router;
