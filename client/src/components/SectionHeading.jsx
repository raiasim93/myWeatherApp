import React from "react";
import PropTypes from 'prop-types';
import './WeatherSummary.css'


function SectionHeading({ title }){
    return (
        <div className=" section-heading">
          <h2 className="section-title fw-bold display-6  my-3">{title}</h2>
          <hr className="section-divider " />
        </div>
      );
    }
    
    
    SectionHeading.propTypes = {
      title: PropTypes.string.isRequired,
    };
    

    export default SectionHeading;