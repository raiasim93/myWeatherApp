import React, {useEffect, useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({onSearch}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [debounceTimeout, setDebounceTimeout] = useState(null);

    // Debounced API call for city suggestions
    useEffect(() => {
      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
      }
  
      const timeout = setTimeout(() => {
        if (input.length >= 3) {
          fetch(`http://localhost:8080/api/city-suggestions?query=${input}`)
            .then((response) => response.json())
            .then((data) => setSuggestions(data))
            .catch((error) => console.log('Error fetching city suggestions:', error));
        } else {
          setSuggestions([]);
        }
      }, 300); // 300ms debounce delay
  
      setDebounceTimeout(timeout);
  
      return () => clearTimeout(timeout);
    }, [input]);
  
  // store in what user types in the state variable
  const handleInputChange = (event) =>{
    setInput(event.target.value);
  };
  // function to pass the user typed input into the app component using props
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(input);
    setInput('');
    setSuggestions([]);
    setIsExpanded(false);
  }

  const handleSuggestionClick = (suggestion) => {
    onSearch(suggestion.name);
    setInput('');
    setSuggestions([]);
    setIsExpanded(false);
  };

  function expand(){
    setIsExpanded(true);
  }

  function collapse(){
    if(input === ''){
      setIsExpanded(false);
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center w-100 searchbar-container">
      <form className="d-flex" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            onClick={expand}
            onBlur={collapse}
            className="form-control input-search py-2"
            type="text"
            placeholder="Search your city"
            value={input}
            onChange={handleInputChange}
          />
          {
            isExpanded && <button type="submit" className="input-group-text find-button">
            <SearchIcon style={{ fontSize: '1.5rem' }} />
          </button>
          }
        </div>
      </form>
            {/* Suggestions Dropdown */}
            {suggestions.length > 0 && (
        <ul className="list-group suggestions-dropdown w-50">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="list-group-item list-group-item-action"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion.name}, {suggestion.country}
            </li>
          ))}
        </ul>
      )}

    </div>
  );
}

export default SearchBar;