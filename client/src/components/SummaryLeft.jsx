import React from 'react';

function SummaryLeft({city, summary, temp_min, temp_max}) {
  return (
    <div className="summary-left d-flex justify-content-center align-items-center flex-grow-1 ">
      {city && <h2>{city}</h2>}
      {summary && <p>{summary}</p>}
      {temp_min && <p>Min Temp: {temp_min}°C</p>}
      {temp_max && <p>Max Temp: {temp_max}°C</p>}
    </div>
  );
}

export default SummaryLeft;