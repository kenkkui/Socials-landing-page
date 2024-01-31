import React from 'react';
import Image from '../assets/images/avatar-jessica.jpeg'

function Pic() {
  return <div>
  <img className="pfp" src={Image} alt='Profile Picture'/>
</div>
}

export default Pic;