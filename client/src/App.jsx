import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import './App.css';
import './index.css';
import './components/WeatherSummary.css'
import WeatherSummary from './components/WeatherSummary';
import { useState, useEffect } from 'react';


function App() {
  const [city, setCity] = useState('');
  // const [weather, setWeather] = useState({
  //   summary: 'Clear Sky',
  //   icon: '01d',
  //   temp_minimum: '18',
  //   temp_maximum: '28',
  //   sunrise: '5:45 AM',
  //   sunset: '6:30 PM',
  // });
  const[weather, setWeather] = useState(null);
  // const staticWeatherData = {
  //   city: 'Kathmandu',
  //   summary: 'Clear Sky',
  //   icon: '01d', // Example icon code from OpenWeatherMap
  //   temp_minimum: '18',
  //   temp_maximum: '28',
  //   sunrise: '5:45 AM',
  //   sunset: '6:30 PM',
  // };

  const handleSearch = async (cityName) => {
    setCity(cityName);

  try {
    const response = await fetch(`http://localhost:8080/api/weather?city=${cityName}`);
    const data = await response.json();
    setWeather(data.weatherData);
    console.log(data.weatherData);
  } catch (error) {
      console.log("Error retrieving data in the frontend: ", error);
  }
};

useEffect(()=> {
  if(weather!== null){
    console.log("Updated Weather Data:", weather);
  }
},[weather]);

  return ( 
    <div className='d-flex flex-column'>
    
      <Navbar />
      <SearchBar onSearch={handleSearch}/>
      {
        weather &&
        <WeatherSummary 
          city={city}
          summary={weather.summary}
          icon={weather.icon}
          temp_min={weather.temp_minimum}
          temp_max={weather.temp_maximum}
          sunrise={weather.sunrise}
          sunset={weather.sunset}
          // city={staticWeatherData.city}
          // summary={staticWeatherData.summary}
          // icon={staticWeatherData.icon}
          // temp_min={staticWeatherData.temp_minimum}
          // temp_max={staticWeatherData.temp_maximum}
          // sunrise={staticWeatherData.sunrise}
          // sunset={staticWeatherData.sunset}
        /> 
      }
    
    </div>
   
  );
}

export default App;
