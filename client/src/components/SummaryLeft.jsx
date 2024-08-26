import React from 'react';

function SummaryLeft({feels,temp, temp_min, temp_max}) {
  return (
    <div className="
        container-fluid
        col-4 col-md-4 col-lg-4
        summary-left d-flex flex-column justify-content-center align-items-center p-3 ">
          <div className="row mb-5 ">
            <div className="col-12 mb-3">
              {temp && <h2 className='display-4  text-center '>{temp}°C</h2>}
            </div>
            <div className="col-12 ">
              {feels && <h5 className='h6 text-center '>Feels like: {feels}°C</h5>}
            </div>
           
          </div>
          <div className="row container-fluid  ">
            <div className="row">
            <div className="h4 col-sm-12 col-md-6 col-lg-6 text-center">
              {temp_min && <p>Lowest: {temp_min}°C</p>}
            </div>
            <div className="h4 col-sm-12 col-md-6 col-lg-6 text-center">
              {temp_max && <p>Highest: {temp_max}°C</p>}
            </div>
            </div>
            
          </div>
     
    </div>
  );
}

export default SummaryLeft;