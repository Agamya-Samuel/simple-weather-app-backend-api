// importing express
const express = require('express');

// importing .env
require('dotenv').config();

PORT = process.env.PORT;

// initializing express app
const app = express();

// make sever accept payload in json format, using middleware
app.use(express.json());

// weatherRouter, to route all incoming requests coming to / endpoint ==> weatherRouter
const weatherRouter = require('./routes/weather');

// use weatherRouter for all incoming requests to / endpoint
app.use('/', weatherRouter);

// make express app to listen on PORT for incoming requests
app.listen(PORT, () => {
	console.log(`Server Started on PORT: ${PORT}`);
});
