import SummaryLeft from './SummaryLeft';
import SummaryIcon from './SummaryIcon';
import SummaryRight from './SummaryRight';

function WeatherSummary({city, summary, icon, temp_min, temp_max, sunrise, sunset}){
    
    return(
        <div className='weather-summary d-flex justify-content-around align-items-center p-4' > 
            <SummaryLeft
                city={city}
                summary={summary}
                temp_min={temp_min}
                temp_max={temp_max}
            />
            <SummaryIcon 
                icon={icon}
            />
            <SummaryRight
                sunrise={sunrise}
                sunset={sunset}
            />
        </div>
    )
}

export default WeatherSummary;