// importing express
const express = require('express');

// importing 'cors' for 'strict-origin-when-cross-origin'
const cors = require('cors');

// importing .env
require('dotenv').config();

PORT = process.env.PORT;
CORS_ALLOWED_ORIGINS = process.env.CORS_ALLOWED_ORIGINS;

// initializing express app
const app = express();

// use cors middleware
const allowedOrigins = CORS_ALLOWED_ORIGINS;

// use cors middleware
app.use(
	cors({
		origin: function (origin, callback) {
			if (!origin || allowedOrigins.includes(origin)) {
				callback(null, true);
			} else {
				callback(new Error('Not allowed by CORS'));
			}
		},
	})
);

// make sever accept payload in json format, using middleware
app.use(express.json());

// importing weatherRouter, to route all incoming requests coming to "/" endpoint ==> weatherRouter
const weatherRouter = require('./routes/weather');

// send all incoming requests to "/" endpoint to ==> weatherRouter
app.use('/', weatherRouter);

// make express app to listen on PORT for incoming requests
app.listen(PORT, () => {
	console.log(`Server Started on PORT: ${PORT}`);
});

// exporting app: for Vercel deployment
module.exports = app;
