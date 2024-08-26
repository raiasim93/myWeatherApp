import React from 'react';
import './WeatherSummary.css';
import SectionHeading from './SectionHeading';

function WeeklyForecast({ weekly }) {
    return (
      <div className="weekly-forecast container-fluid text-white mt-4">
        <SectionHeading title="Weekly Forecast" />
        <div className="row">
          {weekly.map((day, index) => (
            <div key={index} className="col-12 mb-3">
              <div className="d-flex justify-content-around align-items-center" >
                {/* Left-aligned date inside a div */}
                <div>
                  <p className="mb-1">{day.date}</p>
                </div>
                
                {/* Center-aligned icon inside a div */}
                <div className="icon-container">
                  <img
                    src={`http://openweathermap.org/img/wn/${day.icon}.png`}
                    alt={`Weather icon for ${day.date}`}
                    className="weekly-icon"
                  />
                </div>
                
                {/* Right-aligned temperature range inside a div */}
                <div>
                  <p className="mb-0">
                    {day.temp_min}°C - {day.temp_max}°C
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
export default WeeklyForecast;
