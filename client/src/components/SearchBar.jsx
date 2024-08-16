import React from 'react';

function SearchBar() {
  return (
   <div className="d-flex justify-content-center align-items-center w-100  searchbar-container ">
    <input className=" d-flex justify-content-center align-items-center text-center text-light
           form-control search-input py-2" type="text" placeholder="Enter your city"></input>
   </div>
  );
}

export default SearchBar;