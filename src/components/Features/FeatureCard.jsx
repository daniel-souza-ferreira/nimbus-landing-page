import React from 'react'

import './FeatureCard.css';

const FeaturesCard = ({ name, description }) => {
  return (
    <div className='feature-container'>
      <p className="name">{name}</p>
      <p className="description">{description}</p>
    </div>
  )
}

export default FeaturesCard