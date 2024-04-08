import React, { useState, useEffect } from 'react';
import './SearchBar.css'

const SearchBar = ({ counties, onSearch }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if(query.trim() !== ''){
        const filteredCounties = counties.filter(county =>
          `${county.county_name}, ${county.state}`.toLowerCase().includes(query.toLowerCase())
          );
          setSuggestions(filteredCounties);
      }
      else {
        setSuggestions([]);
      }
  }, [query, counties]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSelectCounty = (county) => {
    onSearch({ county: county.county_name, state: county.state });
    setQuery('');
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for county, state..."
      />
      <div className="suggestion-box">
        <ul className="suggestion-list">
          {suggestions.map((county, index) => (
            <li key={index} onClick={() => handleSelectCounty(county)}>
              {county.county_name}, {county.state}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;
