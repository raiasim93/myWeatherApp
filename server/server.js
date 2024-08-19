const express = require("express");
const cors = require("cors");
const axios = require("axios"); // Ensure axios is required
const app = express();
const { DateTime } = require("luxon");
const port = process.env.PORT || 8080;
require('dotenv').config();

const corsOptions = {
    origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));

app.get("/api/weather", async (req, res) => {
    const API_KEY = "475b00c6c2bba75fa1d229c6aaebe11f";
    const city = req.query.city;

try {
   // Getting longitude and latitude using geocoding API
   const geocodingResponse = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`);
   if (!geocodingResponse.data || geocodingResponse.data.length === 0) {
       throw new Error("City not found.");
   }
   const { lat, lon } = geocodingResponse.data[0];
    // Fetching weather data using One Call API
    const oneCallResponse = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&appid=${API_KEY}`);
    
    // Extracting the necessary information
    const todayWeather = oneCallResponse.data.daily[0];
    const timezone = oneCallResponse.data.timezone; // e.g., "Asia/Kathmandu"

    // Convert UTC times to local time using Luxon
    const sunriseTimeLocal = DateTime.fromSeconds(todayWeather.sunrise)
        .setZone(timezone)
        .toLocaleString(DateTime.TIME_SIMPLE);
    const sunsetTimeLocal = DateTime.fromSeconds(todayWeather.sunset)
        .setZone(timezone)
        .toLocaleString(DateTime.TIME_SIMPLE);

    const weatherData = {
        weather_main: todayWeather.weather[0].main,
        summary: todayWeather.summary,
        icon: todayWeather.weather[0].icon,
        temp_minimum: todayWeather.temp.min.toFixed(),
        temp_maximum: todayWeather.temp.max.toFixed(),
        humidity: todayWeather.humidity,
        sunrise: sunriseTimeLocal,
        sunset: sunsetTimeLocal,
        wind_speed: todayWeather.wind_speed.toFixed(),
        rainfall: todayWeather.rain || 0,  
    };

    res.json({ weatherData });
} catch (error) {
    console.log("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch weather data in backend" });
}
});


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
