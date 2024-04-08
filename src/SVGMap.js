import React, { useState, useEffect } from 'react';
import MapData from './SVGData';

const SVGMap = ({ searchResults, onSearch }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [fips, setFips] = useState(null);

  const determineColor = (redVotes, blueVotes) => {
    const totalVotes = redVotes + blueVotes;
  
    const redPercentage = redVotes / totalVotes;
    const bluePercentage = blueVotes / totalVotes;
    
    const redComponent = Math.round(255 * redPercentage);
    const blueComponent = Math.round(255 * bluePercentage);
    const color = `rgb(${redComponent}, 0, ${blueComponent})`;
    console.log(color);
    setSelectedColor(color);
  }

  useEffect(() => {
    if (searchResults) {
      setFips(searchResults.fips);
      determineColor( searchResults.republican_raw_votes, searchResults.democratic_raw_votes);
    }
  }, [searchResults]);
  
  const handleClick = (countyId) => {
    const [county, state] = countyId.split(','); 
    console.log("county :" + county + "\nstate" + state + "\n")
    onSearch({ county: county.trim(), state: state.trim() });
  };
  
  const handleHover = (countyName) => {
    console.log(`Hovering over ${countyName}`);
  };

  return (
    <svg width={600} height={400}>
    {MapData.map(({ id, svg }) => (
      <path
        key={id}
        d={svg.path}
        id={id}
        fill={fips === parseInt(id) ? selectedColor : 'grey'}
        onClick={() => handleClick(svg.title)}
        onMouseEnter={() => handleHover(svg.title)}
        onMouseLeave={() => handleHover(null)}
      />
    ))}
    </svg>
  );
};

export default SVGMap;
