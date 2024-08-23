import SummaryLeft from './SummaryLeft';
import SummaryIcon from './SummaryIcon';
import SummaryRight from './SummaryRight';
import SectionHeading from './SectionHeading'

function WeatherSummary({city, summary, icon, temp_min, temp_max, sunrise, sunset}){
    
    return(
        <div className='weather-summary container-fluid p-4 ' > 
            <div className="row d-flex justify-content-center align-items-stretch mb-5">
                    <SummaryLeft
                    city={city}
                    temp_min={temp_min}
                    temp_max={temp_max}
                />
                    <SummaryIcon 
                    icon={icon}
                    summary={summary}
                />    
                <SummaryRight
                    sunrise={sunrise}
                    sunset={sunset}
                />    
            </div>   
        </div>
    )
}

export default WeatherSummary;