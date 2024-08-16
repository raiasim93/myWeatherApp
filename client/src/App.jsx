import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import './App.css'
import './index.css'
import WeatherSummary from './components/WeatherSummary'
import { useState, useEffect } from 'react'


function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const handleSearch = async (cityName) => {
    setCity(cityName);

  try {
    const response = await fetch(`http://localhost:8080/api/weather?city=${cityName}`);
    const data = await response.json();
    setWeather(data.weatherData);
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
      {/* <WeatherSummary /> */}
      {weather && <WeatherSummary city={city} weather={weather} />}
    </div>
   
  );
}

export default App;
