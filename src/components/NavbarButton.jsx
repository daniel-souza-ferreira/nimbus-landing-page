import React from 'react';
import { Link } from 'react-scroll';

import './NavbarButton.css';

const NavbarButton = ({ linkTo, label, onClickFunction }) => {
  return (
    <>
      {onClickFunction
        ? (
          <div className="nav-button" onClick={() => onClickFunction()}>
            {label}
          </div>
        )
        : (
          <Link 
            className="nav-button"
            to={linkTo} 
            smooth={true} 
            duration={500}
          >
            {label}
          </Link>
        )
      }
      
    </>
  )
}

export default NavbarButton