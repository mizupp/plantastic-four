// Not found page

import React from 'react';
import './styles.css'
import Grass from "../../components/Grass"

const NotFound = () => {
  return (
    <div className='errorpage'>
      <h1>404</h1>
      <h2> Page not found</h2>
        <Grass />
      </div>
  )
}

export default NotFound;