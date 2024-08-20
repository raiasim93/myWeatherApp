import SummaryLeft from './SummaryLeft';
import SummaryIcon from './SummaryIcon';
import SummaryRight from './SummaryRight';

function WeatherSummary({city, summary, icon, temp_min, temp_max, sunrise, sunset}){
    
    return(
        <div className='weather-summary container-fluid p-4' > 
            <div className="row  mb-5">
                {/* 1st column */}
                    <SummaryLeft
                    city={city}
                    temp_min={temp_min}
                    temp_max={temp_max}
                />
                {/* 2nd column */}
                
                    <SummaryIcon 
                    icon={icon}
                    summary={summary}
                />
            
                {/* 3rd column */}
                
                      
                <SummaryRight
                    sunrise={sunrise}
                    sunset={sunset}
                />    
            </div>   
            <hr className="blurry-line" />
        </div>
    )
}

export default WeatherSummary;