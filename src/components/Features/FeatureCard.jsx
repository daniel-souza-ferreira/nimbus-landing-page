import React from 'react'

import './FeatureCard.css';

const FeaturesCard = ({ name, description }) => {
  return (
    <div className='feature-container'>
      <p id="name">{name}</p>
      <p id="description">{description}</p>
    </div>
  )
}

export default FeaturesCard