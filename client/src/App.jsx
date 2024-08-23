import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import './App.css';
import './index.css';
import './components/WeatherSummary.css'
import WeatherSummary from './components/WeatherSummary';
import { useState, useEffect } from 'react';
import HourlyForecast from './components/HourlyForecast';
import SectionHeading from './components/SectionHeading';


function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  // Function to reverse geocode latitude and longitude to get the city name
  const reverseGeocode = async (lat, lon) => {
    try {
      const response = await fetch(`http://localhost:8080/api/reverse-geocode?lat=${lat}&lon=${lon}`);
      const data = await response.json();
      return data.city;
    } catch (error) {
      console.log("Error reverse geocoding: ", error);
      return null;
    }
  };

  // Function to fetch weather data
  const fetchWeather = async (cityName) => {
    try {
      const response = await fetch(`http://localhost:8080/api/weather?city=${cityName}`);
      const data = await response.json();
      setWeather(data.weatherData);
      console.log(data.weatherData);
    } catch (error) {
      console.log("Error retrieving data in the frontend: ", error);
    }
  };

  // Function to handle the search bar
  const handleSearch = async (cityName) => {
    setCity(cityName);
    fetchWeather(cityName);
  };

  // Get the current location and fetch weather on the first load
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const cityName = await reverseGeocode(latitude, longitude);
        if (cityName) {
          setCity(cityName);
          fetchWeather(cityName);
        }
      }, (error) => {
        console.log("Geolocation error: ", error);
      });
    }
  }, []);

  useEffect(() => {
    if (weather !== null) {
      console.log("Updated Weather Data:", weather);
    }
  }, [weather]);

  return (
    <div className='d-flex flex-column'>
      <Navbar />
      <SearchBar onSearch={handleSearch} />
      {weather && <SectionHeading title="Weather Details" />}
      {weather && (
        <WeatherSummary 
          city={weather.city}
          summary={weather.summary}
          icon={weather.icon}
          temp_min={weather.temp_minimum}
          temp_max={weather.temp_maximum}
          sunrise={weather.sunrise}
          sunset={weather.sunset}
        />
      )}
    </div>
  );
}

export default App;
