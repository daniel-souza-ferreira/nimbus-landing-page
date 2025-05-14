import React from 'react'

import './CustomerTestimonial.css';

const CustomerTestimonial = ({ name, position, company, message }) => {
  return (
    <div className='customer-testimonial'>
        <div className="testimonial-content">
            <p>{message}</p>
        </div>
        <div className="testimonial-author">
            <p id="author-name">{name}</p>
            <p>{position}</p>
            <p>{company}</p>
        </div>
    </div>
  )
}

export default CustomerTestimonial