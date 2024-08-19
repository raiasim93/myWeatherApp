import React from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
function SummaryRight({sunrise, sunset}) {
  return (
    <div className="summary-right d-flex justify-content-center align-items-center flex-grow-1 ">
        {sunrise && <p>Sunrise: {sunrise} <LightModeIcon/> </p>}
        {sunset && <p>Sunset: {sunset} <WbTwilightIcon/></p>}
    </div>
  );
}

export default SummaryRight;