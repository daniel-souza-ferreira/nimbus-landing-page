import React from 'react'

import { Element } from 'react-scroll';

import FeatureCard from './FeatureCard';

import './Features.css';

import featuresData from '../assets/features.json';

const Features = () => {
  return (
    <Element name="features-section">
      <div className="features-section">
          <section>
            <h2>Conheça as vantagens</h2>
            <div className="features-options">
              {featuresData && Object.entries(featuresData).map(([key, value]) => (
                <FeatureCard 
                  name={value.name}
                  description={value.description}
                  key={key}
                />
              ))}
            </div>
          </section>
      </div>
    </Element>
  )
}

export default Features