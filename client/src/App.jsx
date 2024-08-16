import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import './App.css'
import './index.css'
import WeatherSummary from './components/WeatherSummary'
import { useState, useEffect } from 'react'
import axios from "axios";

function App() {
  const [count, setCount]= useState(0);
  
  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/api");
    console.log(response.data.fruits);
  };

  useEffect(()=> {
    fetchAPI();
  }, []);
  return ( 
    // <div className='d-flex flex-column'>
    //   <Navbar />
    //   <SearchBar />
    //   <WeatherSummary />
    // </div>
   <div>

   </div>
  );
}

export default App;
