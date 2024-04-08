import React, { useState } from 'react';
import SearchBar from './SearchBar.js';
import CountyDisplay from './CountyDisplay.js';
import countiesData from './CountyandState.js';
import fullCountyData from './CountyData.js'
import SVGMap from './SVGMap.js';
import './App.css';

const App = () => {
  const [searchResults, setSearchResults] = useState(null);

  const onSearch = (query) => {
    const countyDataFiltered = fullCountyData.filter((county) =>
      county.county_name.toLowerCase() === query.county.toLowerCase() &&
      county.state.toLowerCase() === query.state.toLowerCase()
    );
   
    if (countyDataFiltered.length > 0) {
        if (countyDataFiltered[0].isAVG === "yes") {
          console.log('hit');
          countyDataFiltered[0].county_name = countyDataFiltered[0].county_name + " *";
        }
      setSearchResults(countyDataFiltered[0]);
      console.log('found');
    } else {
      setSearchResults(null);
    }
  };

  return (
    <div className='container'>
      <div className='left-panel'>
        <h1>County Data Visualization</h1>
        <SearchBar counties={countiesData} onSearch={onSearch} />
        <CountyDisplay 
          countyName={searchResults?.county_name}
          state={searchResults?.state}
          demVotes={searchResults?.democratic_raw_votes}
          repVotes={searchResults?.republican_raw_votes}
          fmr1={searchResults?.fmr_1}
        />
      </div>
      <div className='right-panel'>
        <SVGMap searchResults={searchResults} onSearch={onSearch} />
      </div>
    </div>
  );
};

export default App;