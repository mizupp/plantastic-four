// Not found page

import React from 'react';
import './styles.css'
import Grass from "../../components/Grass"

const NotFound = () => {
  return (
    <div className='errorpage'>
      <h1>404</h1>
      <h2> Page not found</h2>
      <div class="wrap">
      {/* <div class="base">
          <div class="flowerpot"></div>
          <div class="blade blade-center"></div>
          <div class="blade blade-left-s"></div>
          <div class="blade blade-right-s"></div>
          <div class="blade blade-left-l"></div>
          <div class="blade blade-right-l"></div>
        </div> */}
        <Grass />

      </div>
    </div>
  )
}

export default NotFound;