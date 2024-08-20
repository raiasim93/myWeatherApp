import React from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
function SummaryRight({sunrise, sunset}) {
  return (
    <div className="
    container-fluid
    col-12 col-md-4 col-lg-4
    summary-right d-flex justify-content-center align-items-center">
  <div className="row ">
    {/* Row for Sunrise */}
    <div className="col-12 d-flex justify-content-center align-items-center mb-3">
      {sunrise && (
        <div className="row container-fluid">
          <div className="col-4 d-flex justify-content-end  align-items-center">
            <LightModeIcon style={{ fontSize: '50px' }} />
          </div>
          <div className="col-8 d-flex justify-content-center align-items-center display-6">
            <p>{sunrise}</p>
          </div>
        </div>
      )}
    </div>

    {/* Row for Sunset */}
    <div className="col-12 d-flex justify-content-center align-items-center">
      {sunset && (
        <div className="row container-fluid">
          <div className="col-4 d-flex justify-content-end align-items-center">
            <WbTwilightIcon style={{ fontSize: '48px' }} />
          </div>
          <div className="col-8 d-flex justify-content-center align-items-center display-6">
            <p>{sunset}</p>
          </div>
        </div>
      )}
    </div>
  </div>
</div>
);
}

export default SummaryRight;