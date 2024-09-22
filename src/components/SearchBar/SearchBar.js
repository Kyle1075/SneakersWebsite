import React, { useState } from 'react';

function SearchBar() {
  const [showInput, setShowInput] = useState(false);
  const [searchQuery, setSearchQuery] = useState(''); // State to store the search input

  // Function to handle the button click
  const handleSearchClick = () => {
    setShowInput(!showInput); // Toggle input field visibility
  };

  // Function to handle input change
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value); // Update the search query state with user input
    // Here you would do something with the searchQuery, such as triggering a search function
  };

  return (
    <div className="search-bar">
      <button onClick={handleSearchClick}>Search</button>
      {showInput && (
        <input
          type="text"
          placeholder="Search sneakers..."
          value={searchQuery} // Bind the value to the input
          onChange={handleInputChange} // Handle the input change
        />
      )}
    </div>
  );
}

export default SearchBar;