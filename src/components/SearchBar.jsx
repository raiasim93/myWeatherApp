import React from 'react';

function SearchBar() {
  return (
   <div className="searchbar-container ">
    <input className="form-control search-input py-2" type="text" placeholder="Enter your city"></input>
   </div>
  );
}

export default SearchBar;