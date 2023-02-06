// List plant search result component

import React from 'react'
import Plant from '../Plant/Plant';

const ListPlants = ({ searchResults }) => {

const result = searchResults.map(plant => <Plant key={plant.id} plant={plant} return />)

const content = result?.length ? result: <article><p>No matching Plants, soz</p></article>


  return (
    <div>
      <h3>{ content }</h3>
    </div>
  )
}

export default ListPlants;
