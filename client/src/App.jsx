import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import './App.css'
import './index.css'
import WeatherSummary from './components/WeatherSummary'
function App() {
  return ( 
    <div className='d-flex flex-column'>
      <Navbar />
      <SearchBar />
      <WeatherSummary />
    </div>
   
  )
}

export default App
