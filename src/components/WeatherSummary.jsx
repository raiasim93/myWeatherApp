import SummaryLeft from './SummaryLeft';
import SummaryIcon from './SummaryIcon';
import SummaryRight from './SummaryRight';

function WeatherSummary(){
    
    return(
        <div className='weather-summary d-flex justify-content-around align-items-center p-4' > 
            <SummaryLeft />
            <SummaryIcon />
            <SummaryRight />
        </div>
    )
}

export default WeatherSummary;