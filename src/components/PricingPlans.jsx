import React from 'react'

import { Element } from 'react-scroll';

import Plan from './Plan';

import './PricingPlans.css';

import pricesDatas from '../assets/prices.json';

const PricingPlans = () => {
  return (
    <Element name="pricing-plans-section">
      <div className='pricing-plans-section'>
          <section>
            <h2>Conheça nossos planos</h2>
            <div className="plans-container">
              {pricesDatas && Object.entries(pricesDatas).map(([key, value]) => (
                <Plan
                  key={key}
                  name={value.name}
                  price={value.price}
                  benefits={value.benefits}
                  action={value.action}
                />
              ))}
            </div>
          </section>
      </div>
    </Element>
  )
}

export default PricingPlans