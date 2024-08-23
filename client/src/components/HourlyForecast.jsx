import React from "react";
import SectionHeading from "./SectionHeading";
import './WeatherSummary.css'
import '../index.css'

function HourlyForecast(){
    return(
        <div className="container-fluid hourly-forecast">
             <SectionHeading title="Hourly Forecast " />
             <hr className="blurry-line" />
        </div>
    
    )
}

export default HourlyForecast;