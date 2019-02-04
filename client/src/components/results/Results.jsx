import React from "react";
import "./Results.css";

const Results = ({ songname, repeatedWords, isAlive }) => {
  
  if (!isAlive) return null;
  let elementLI = Object.entries(repeatedWords).map(([key, value], index) => (
    <li key={index}>
      Word: "{key}" repeats: {value} times
    </li>
  ));

  return (
    <React.Fragment>
      <div className="result_card">
        <h3>{songname}</h3>
        <ul>{elementLI}</ul>
      </div>
    </React.Fragment>
  );
};

export default Results;
