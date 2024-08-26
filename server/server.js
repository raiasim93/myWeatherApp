const express = require("express");
const cors = require("cors");
const axios = require("axios"); // Ensure axios is required
const app = express();
const { DateTime } = require("luxon");
const port = process.env.PORT || 8080;
require('dotenv').config();

const API_KEY = "475b00c6c2bba75fa1d229c6aaebe11f";
const corsOptions = {
    origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));
app.get("/api/reverse-geocode", async (req, res) => {
    const { lat, lon } = req.query;
    const API_KEY = "475b00c6c2bba75fa1d229c6aaebe11f";
  
    try {
      const geocodingResponse = await axios.get(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${API_KEY}`);
      if (!geocodingResponse.data || geocodingResponse.data.length === 0) {
        throw new Error("Location not found.");
      }
      const city = geocodingResponse.data[0].name;
      res.json({ city });
    } catch (error) {
      console.log("Error reverse geocoding:", error);
      res.status(500).json({ error: "Failed to reverse geocode" });
    }
  });
  
app.get("/api/weather", async (req, res) => {
   
    const city = req.query.city;
try {
   // Getting longitude and latitude using geocoding API
   const geocodingResponse = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`);
   if (!geocodingResponse.data || geocodingResponse.data.length === 0) {
       throw new Error("City not found.");
   }
   const { lat, lon } = geocodingResponse.data[0];
   const currentWeatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);
    // Fetching weather data using One Call API
    const oneCallResponse = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=metric&appid=${API_KEY}`);
    
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

    // prepare the hourly forecast data to be sent to the weatherData object which is later passed down to our frontend(app.jsx)
    // store the number of response in a variable
    const oneCallResponseHourly = oneCallResponse.data.hourly.slice(0,30);
    const hourlyForecast = oneCallResponseHourly.map(hour => ({
        time : DateTime.fromSeconds(hour.dt).setZone(timezone).toFormat('h: mm a'),
        temp: Math.round(hour.temp),
        icon: hour.weather[0].icon,
    })) ;


    // weeklyforecast
    const oneCallResponseWeekly = oneCallResponse.data.daily.slice(1,15);
    const weeklyForecast = oneCallResponseWeekly.map(day => ({
        date: DateTime.fromSeconds(day.dt).setZone(timezone).toFormat('ccc'),
        temp_min: Math.round(day.temp.min),
        temp_max: Math.round(day.temp.max),
        icon: day.weather[0].icon,
    }));


    const weatherData = {
        city: geocodingResponse.data[0].name,
        weather_main: todayWeather.weather[0].main,
        summary: todayWeather.summary,
        icon: todayWeather.weather[0].icon,
        temp_now: Math.round(currentWeatherResponse.data.main.temp),
        temp_minimum: Math.round(todayWeather.temp.min),
        temp_maximum: Math.round(todayWeather.temp.max),
        feels_like: Math.round(todayWeather.feels_like.day),
        sunrise: sunriseTimeLocal,
        sunset: sunsetTimeLocal,
        //if needed, decomment out the data below:
        // wind_speed: todayWeather.wind_speed.toFixed(),
        // rainfall: todayWeather.rain || 0,  
        // humidity: todayWeather.humidity,
        hourlyForecast,
        weeklyForecast
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
