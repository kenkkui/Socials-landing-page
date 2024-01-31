import React from 'react';

import Pic from './Profile-pic';
import Identify from './Identify';
import Bio from './Bio';
import Links from './Links';

function Card() {
  return <div id="card">
    <Pic />    
    <Identify />
    <Bio />
    <Links />
    <div className="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="#">Kenzo Bunyi</a>.
    </div>
  </div>;
};

export default Card;