
import { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import { FaAngleDoubleUp  } from "react-icons/fa";

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HeroSection from './components/HeroSection/HeroSection';
import Features from './components/Features/Features';
import Testimonials from './components/Testimonials/Testimonials';
import PricingPlans from './components/PricingPlans/PricingPlans';
import Faq from './components/Faq/Faq';
import NavbarButton from './components/Navbar/NavbarButton';

import { emitAlert } from './utils/emitAlert';

import './App.css'

function App() {
  const [initialButtonVisibility, setInitialButtonVisibility] = useState(false);
  
  const toogleInitialButtonVisibility = () => {
    setInitialButtonVisibility(window.scrollY > window.innerHeight);
  }

  useEffect(() => {
    emitAlert();

    window.addEventListener("scroll", toogleInitialButtonVisibility)

    return () => {
      window.removeEventListener("scroll", toogleInitialButtonVisibility);
    }
  }, []);
  
  return (
    <div className="app-container">
      <Element name="initial-page">
        <Navbar />
        <HeroSection />
      </Element>
      <Features />
      <Testimonials />
      <PricingPlans />
      <Faq />
      <Footer />
      {
        initialButtonVisibility && (
        <div className="initial-button">
          <NavbarButton
            className="initial-button"
            linkTo={"initial-page"} 
            label={<FaAngleDoubleUp  />}
          />
        </div>
        )
      }
    </div>
  )
}

export default App
