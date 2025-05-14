import React from 'react';

import NavbarButton from './NavbarButton';

import { emitAlert } from '../../utils/emitAlert';

import "./Navbar.css";

const Navbar = () => {
    return (
        <div id="header-navbar">
            <div id="title">
                <img src="/cloud-logo.png" alt="cloud-logo" />
                <p>Nimbus Cloud Services</p>
            </div>
            <div id="navbar">
                <ul>
                    <li>
                        <NavbarButton 
                            linkTo="features-section"
                            label="Recursos"
                        />
                    </li>
                    <li>
                        <NavbarButton 
                            linkTo="pricing-plans-section"
                            label="Planos"
                        />
                    </li>
                    <li>
                        <NavbarButton 
                            linkTo="testimonals-section"
                            label="Depoimentos"
                        />
                    </li>
                    <li>
                        <NavbarButton 
                            linkTo="faq-section"
                            label="FAQ"
                        />
                    </li>
                </ul>
            </div>
            <div id="try-now">
                <NavbarButton 
                    linkTo=""
                    label="Experimente Gratuitamente"
                    onClickFunction={emitAlert}
                />
            </div>
        </div>
    )
}

export default Navbar