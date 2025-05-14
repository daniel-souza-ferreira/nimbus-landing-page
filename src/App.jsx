
import { useEffect } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import PricingPlans from './components/PricingPlans';
import Faq from './components/Faq';

import { emitAlert } from './utils/emitAlert';

import './App.css'

function App() {
  useEffect(() => {
    emitAlert();
  }, []);
  
  return (
    <div className="app-container">
      <Navbar />
      <HeroSection />
      <Features />
      <Testimonials />
      <PricingPlans />
      <Faq />
      <Footer />
    </div>
  )
}

export default App
