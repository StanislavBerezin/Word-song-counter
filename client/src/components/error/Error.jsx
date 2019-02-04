import React from "react";
import "./Error.css";

const Results = ({ errorText, isAlive }) => {
  
  if (!isAlive) return null;
  

  return (
    <React.Fragment>
      <div className="error_card">
        <h3>{errorText}</h3>
        
      </div>
    </React.Fragment>
  );
};

export default Results;
