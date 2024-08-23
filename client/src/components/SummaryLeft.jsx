import React from 'react';

function SummaryLeft({city, temp_min, temp_max}) {
  return (
    <div className="
        container-fluid
        col-8 col-md-4 col-lg-4
        summary-left d-flex flex-column justify-content-center align-items-center p-3 ">
          <div className="row mb-5 ">
            <div className="col-12 ">
              {city && <h2 className='display-4  text-center '>{city}</h2>}
            </div>
           
          </div>
          <div className="row container-fluid  ">
            <div className="row">
            <div className="h4 col-sm-12 col-md-6 col-lg-6 text-center">
              {temp_min && <p>Min Temp: {temp_min}°C</p>}
            </div>
            <div className="h4 col-sm-12 col-md-6 col-lg-6 text-center">
              {temp_max && <p>Max Temp: {temp_max}°C</p>}
            </div>
            </div>
            
          </div>
     
    </div>
  );
}

export default SummaryLeft;