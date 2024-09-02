import React from "react";
import SectionHeading from "./SectionHeading";
import './WeatherSummary.css'
import '../index.css'

function HourlyForecast({hourly}){
    return(
        <div className="container-fluid hourly-forecast">
             <SectionHeading title="Hourly Forecast " />
             <div className="hourly-scroll-container d-flex overflow-auto p-4 ps-0"> 
             {/* ps-0 sets padding start to 0 */}
                {hourly.map((hour, index) => (
                <div key={index} className="hourly-item text-center me-3">
                    <p className="mb-1">{hour.time}</p>
                    <img 
                    src={`http://openweathermap.org/img/wn/${hour.icon}.png`} 
                    alt={hour.description} 
                    className="hourly-icon mb-2" 
                    />
                    <p className="mb-0">{hour.temp}°C</p>
          </div>
        ))}
      </div>
        </div>
    
    )
}

export default HourlyForecast;