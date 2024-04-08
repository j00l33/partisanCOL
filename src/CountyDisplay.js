import React, { useState } from 'react';

const CountyDisplay = ({ countyName, state, demVotes, repVotes, fmr1 }) => {
  return (
    <div>
      <h2>County: {countyName}</h2>
      <p>State: {state}</p>
      <p>Democratic Votes: {demVotes}</p>
      <p>Republican Votes: {repVotes}</p>
      <p>Fair Market Rate: {fmr1}</p>
    </div>
  );
};

export default CountyDisplay;
