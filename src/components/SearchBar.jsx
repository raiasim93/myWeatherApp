import React from 'react';
import './SearchBar.css'
import ThermostatRoundedIcon from '@mui/icons-material/ThermostatRounded';
function SearchBar() {
  return (
  <div class="input-group mt-1 ">
    < ThermostatRoundedIcon  />
    <input type="search" class="form-control " placeholder="Find your city" aria-label="Search" aria-describedby="search-addon" />
    <button type="button" class="search-bar-button btn-dark rounded" data-mdb-ripple-init>Search</button>
</div>
  );
}

export default SearchBar;