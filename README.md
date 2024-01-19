# Weather Backend API

This Node.js application provides a simple backend API for retrieving weather information based on city names.

# simple-weather-app-backend-api
Backend API for SimpleWeatherApp 🌦️  A lightweight, user-friendly weather app.

# Frontend App
[Frontend App: Source Code](https://github.com/Agamya-Samuel/simple-weather-app)

# Deploy to Vercel
```bash
vercel --prod
```

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/weather-backend-api.git
```

2. Navigate to the project directory:

```bash
cd weather-backend-api
```

3. Install dependencies:

```bash
npm install
```

4. Start the server:

```bash
npm start
```

The server will be running at http://localhost:PORT, where PORT is the port number you have configured.

## Usage

The API is designed to provide weather information for specific cities. Make HTTP requests to the relevant endpoint to get the weather details.

## API Endpoints
### Get Weather by City Name

##### Request

```http
GET /city_name

Parameters:
    city_name: The name of the city for which you want to retrieve weather information.
```

##### Response

Success:
```
Status Code: 200 OK
Body: JSON object containing weather information.
```

```json

{
  "city": "City Name",
  "temperature": 25,
  "conditions": "Clear Sky",
  "humidity": 60,
  "wind_speed": 5
}
```
Error:
```
Status Code: 404 Not Found
Body: JSON object with an error message.
```

```json

{
  "error": "City not found"
}
```

## Contributing

Feel free to contribute by opening issues or pull requests. Make sure to follow the code of conduct.

## License

This project is licensed under the MIT License - see the LICENSE file for details.