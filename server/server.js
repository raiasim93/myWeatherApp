const express = require("express");
const cors = require("cors");
const axios = require("axios"); // Ensure axios is required
const app = express();

const corsOptions = {
    origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));

app.get("/api/weather", async (req, res) => {
    const API_KEY = "475b00c6c2bba75fa1d229c6aaebe11f";
    const city = req.query.city;

    try {
        const weatherResponse = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        // converting sunrise and sunset
        const sunriseUnix = weatherResponse.data.sys.sunrise;
        const sunsetUnix = weatherResponse.data.sys.sunset;
        const sunriseTime = new Date(sunriseUnix * 1000).toLocaleTimeString();
        const sunsetTime = new Date(sunsetUnix * 1000).toLocaleTimeString();
        const weatherData ={
            temperature: weatherResponse.data.main.humidity,
            temp_minimum: weatherResponse.data.main.temp_min,
            temp_maximum: weatherResponse.data.main.temp_max,
            humidity: weatherResponse.data.main.humidity,
            icon: weatherResponse.data.weather[0].description,
            sunrise: sunriseTime,
            sunset: sunsetTime
        };
        res.json({weatherData});
    } catch (error) {
        console.log("Error fetching data:", error);
        res.status(500).json({ error: "Failed to fetch weather data in backend" });
    }
});

app.listen(8080, () => {
    console.log("Server started on port 8080");
});
