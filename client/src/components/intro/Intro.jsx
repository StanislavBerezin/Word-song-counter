import "./Intro.css";
import React from 'react';
import Particles from 'react-particles-js';

const Intro = ()=>(
  
    <React.Fragment>
      <div className="coloured_image">
      <Particles />
          <div className="coloured_image_text">
          <h1>App for fugro interview</h1>
          <h3>Counting words in a song</h3>
          </div>
      </div>
    </React.Fragment>
   
)

export default Intro;