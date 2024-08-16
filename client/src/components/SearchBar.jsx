import React, {useState} from 'react';

function SearchBar({onSearch}) {
  const [input, setInput] = useState('');
  // store in what user types in the state variable
  const handleInputChange = (event) =>{
    setInput(event.target.value);
  };
  // function to pass the user typed input into the app component using props
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(input);
  }

  return (
   <div className="d-flex justify-content-center align-items-center w-100  searchbar-container ">
    <form className='d-flex' onSubmit={handleSubmit}>
      <input 
        className="d-flex justify-content-center align-items-center text-center 
        form-control input-search py-2" 
        type="text" 
        placeholder="Search your city"
        value={input}
        onChange={handleInputChange}
        ></input>
      <button type='submit' className='btn btn-secondary find-button px-5' > Find </button>
    </form>

   </div>
  );
}

export default SearchBar;