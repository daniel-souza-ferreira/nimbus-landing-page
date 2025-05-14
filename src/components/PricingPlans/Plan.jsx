import React from 'react'

import { emitAlert } from '../../utils/emitAlert';

import './Plan.css';

const Plan = ({ name, price, benefits, action }) => {
  return (
    <div className='plan-box'>
        <p id='plan-name'>{name}</p>
        <p id='plan-price'>{price}</p>
        <p id='plan-benefits'>{benefits}</p>
        <button onClick={() => emitAlert()}>
            <span>{action}</span>
        </button>
    </div>
  )
}

export default Plan