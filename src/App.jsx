import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components
import BackgroundEffects from './components/BackgroundEffects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import Pages
import Home from './pages/Home';
import ChopCentralCaseStudy from './pages/ChopCentralCaseStudy';
import FBLCaseStudy from './pages/FBLCaseStudy';
import EcoloopCaseStudy from './pages/EcoloopCaseStudy';
import Foodify from './pages/Foodify';
import VideoPage from './pages/VideoPage';
import CategoryPage from './pages/CategoryPage';

export default function App() {
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

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#050505] text-gray-300 font-sans selection:bg-[#F5B041]/30 selection:text-[#FDE047]">
        <BackgroundEffects />
        
        <Navbar 
          scrolled={scrolled} 
          isMobileMenuOpen={isMobileMenuOpen} 
          setIsMobileMenuOpen={setIsMobileMenuOpen} 
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/fbl" element={<FBLCaseStudy />} /> 
          <Route path="/project/foodify" element={<Foodify />} /> 
          <Route path="/project/chop-central" element={<ChopCentralCaseStudy />} />
          <Route path="/project/ecoloop" element={<EcoloopCaseStudy />} />
          <Route path="/category/video" element={<VideoPage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}