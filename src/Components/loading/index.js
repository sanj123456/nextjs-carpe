"use-client";

import React from 'react';
import "./loader.scss";
// import myGif from '../../../public/1488.gif';
const Loader = () => {
  return (
    <div className='loader'   >
      {/* <span class="loader"></span> */}
      <img className='img' src='/spinner-loader.svg'/>
       </div>
  )
}

export default Loader