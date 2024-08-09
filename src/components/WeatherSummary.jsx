import SummaryLeft from './SummaryLeft';
import SummaryIcon from './SummaryIcon';
import SummaryRight from './SummaryRight';

function WeatherSummary(){
    
    return(
        <div className='weather-summary p-4' > 
            <SummaryLeft />
            <SummaryIcon />
            <SummaryRight />
        </div>
    )
}

export default WeatherSummary;