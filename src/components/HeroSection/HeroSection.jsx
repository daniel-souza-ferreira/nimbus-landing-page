import React from 'react';
import { Element } from 'react-scroll';

import NavbarButton from '../Navbar/NavbarButton';

import { emitAlert } from '../../utils/emitAlert';

import './HeroSection.css';

import ilustration from '/hero-section-ilustration.png';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <Element name="hero-section">
        <section>
          <div className="descriptions">
            <h1>Leve sua infraestrutura para o próximo nível</h1>
            <p>Acelere seus processos e foque no que realmente importa: o crescimento do seu negócio.</p>
          </div>
          <img src={ilustration} alt="cloud-infraestructure" />
          <div className="hero-buttons">
            <NavbarButton 
                linkTo="pricing-plans-section"
                label="Começar agora"
            />
            <NavbarButton 
                linkTo=""
                label="Saiba Mais"
                onClickFunction={emitAlert}
            />
          </div>
        </section>
      </Element>
    </div>
  )
}

export default HeroSection