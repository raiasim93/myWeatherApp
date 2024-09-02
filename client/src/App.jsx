import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import './App.css';
import './index.css';
import './components/WeatherSummary.css'
import WeatherSummary from './components/WeatherSummary';
import { useState, useEffect } from 'react';
import HourlyForecast from './components/HourlyForecast';
import WeeklyForecast from './components/WeeklyForecast';
import ErrorCity from './components/CItyError';


function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [hourlydata, setHourlydata] = useState([]);
  const [loading, setLoading] = useState(true);
  

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
    setLoading(true)
    try {
      const response = await fetch(`http://localhost:8080/api/weather?city=${cityName}`);
      const data = await response.json();
      setWeather(data.weatherData); //data is stored in here from backend
      setHourlydata(data.weatherData.hourlyForecast);
      console.log(data.weatherData);
    } catch (error) {
      console.log("Error retrieving data in the frontend: ", error);
    } finally{
      setLoading(false);
    }
  };

  // Function to handle the search bar
  const handleSearch = async (cityName) => {
    fetchWeather(cityName);
  };

  // Get the current location and fetch weather on the first load
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const cityName = await reverseGeocode(latitude, longitude);
        if (cityName) {
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
    <div className='d-flex flex-column px-3'>
      <Navbar />
      <SearchBar onSearch={handleSearch} />
      
      {/* Loading State */}
      {loading ? (
        <div className="text-center text-white">
          <p>Loading...</p>
        </div>
      ) : (
        // Conditional Rendering for Weather or ErrorCity
        weather ? (
          <>
            <WeatherSummary 
              temp={weather.temp_now}
              feels={weather.feels_like}
              city={weather.city}
              summary={weather.summary}
              icon={weather.icon}
              temp_min={weather.temp_minimum}
              temp_max={weather.temp_maximum}
              sunrise={weather.sunrise}
              sunset={weather.sunset}
            />
            <HourlyForecast hourly={weather.hourlyForecast} />
            <WeeklyForecast weekly={weather.weeklyForecast} />
          </>
        ) : (
          <ErrorCity /> // Render ErrorCity if no weather data is available
        )
      )}
    </div>
  );
}

export default App;
