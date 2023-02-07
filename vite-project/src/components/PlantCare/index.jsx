// This is the plant care information box when user click on a plant on their shelf
import React from 'react'

const PlantCare = ({plant}) => {
  const {nickname, water_freq, purchase_date  } = plant

  return (
    <div>
      <h2>{nickname}</h2>
      <p>Purchased: {purchase_date}</p>
      <p>{water_freq}</p>
    </div>
  )
}

export default PlantCare;
