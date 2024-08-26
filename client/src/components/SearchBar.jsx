import React, {useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({onSearch}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [input, setInput] = useState('');
  // store in what user types in the state variable
  const handleInputChange = (event) =>{
    setInput(event.target.value);
  };
  // function to pass the user typed input into the app component using props
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(input);
    setInput('');
    setIsExpanded(false);
  }
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
    </div>
  );
}

export default SearchBar;