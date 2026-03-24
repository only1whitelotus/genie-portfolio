import React, { useState, useEffect } from 'react';

// Import Data
import { PORTFOLIO_ITEMS } from './data';

// Import Components
import BackgroundEffects from './components/BackgroundEffects';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter logic
  const filteredItems = activeFilter === 'All' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 font-sans selection:bg-[#F5B041]/30 selection:text-[#FDE047]">
      <BackgroundEffects />
      
      <Navbar 
        scrolled={scrolled} 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />

      <main className="relative z-10">
        <Hero />
        <About />
        <Expertise />
        <Portfolio 
          activeFilter={activeFilter} 
          setActiveFilter={setActiveFilter} 
          filteredItems={filteredItems} 
        />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
