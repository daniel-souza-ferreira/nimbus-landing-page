import React from 'react'
import { Element } from 'react-scroll';

import CustomerTestimonial from './CustomerTestimonial';

import './Testimonials.css';

import testimonalsData from '../../assets/testimonials.json';

const Testimonials = () => {
  return (
    <Element name="testimonals-section">
      <div className='testimonals-container'>
          <section>
            <h2>Veja o que os clientes da Nimbus estão falando</h2>
            <div className="customers-testimonials">
              {testimonalsData && Object.entries(testimonalsData).map(([key, value]) => (
                <CustomerTestimonial 
                  name={value.name}
                  position={value.position}
                  company={value.company}
                  message={value.message}
                  key={key}
                />
              ))}
            </div>
          </section>
      </div>
    </Element>
  )
}

export default Testimonials