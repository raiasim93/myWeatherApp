import React from 'react';

function SummaryIcon({icon, summary}) {
  if(!icon){
    return null;
  }
  const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  return (
    <div className="
    container-fluid
    col-12 col-md-4 col-lg-4
    summary-icon
    d-flex justify-content-center align-items-center
    ">
      <div className="row py-3 d-flex justify-content-center align-items-center">
        <div className="col-8 text-center ">
          <img className='custom-image' src={iconUrl} alt="Weather icon" />
        </div>
        <div className="col-8 text-center h4">
          {summary && <p>{summary}</p>}
        </div>
      </div>
     
    </div>
  );

}

export default SummaryIcon;