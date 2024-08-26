import React from 'react';
import './error.css'

const ErrorCity = () => {
    return (
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center error-city-container">
            <div className="text-center p-4">
                <h1 className="display-4 error-city-title">City Not Found, Try again</h1>
               
            </div>
        </div>
    );
};

export default ErrorCity;
