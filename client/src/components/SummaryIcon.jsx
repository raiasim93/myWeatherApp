import React from 'react';

function SummaryIcon({icon}) {
  if(!icon){
    return null;
  }
  const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  return (
    <div className="summary-icon">
      <img className='img-fluid' src={iconUrl} alt="Weather icon" />
    </div>
  );

}

export default SummaryIcon;