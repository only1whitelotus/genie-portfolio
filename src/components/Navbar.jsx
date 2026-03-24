import React from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ scrolled, isMobileMenuOpen, setIsMobileMenuOpen }) {
  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-[#050505]/80 backdrop-blur-md border-white/5 py-4' : 'bg-transparent border-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center space-x-3 relative z-50">
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/20 overflow-hidden">
            <img src="/logo.png" alt="Genie Logo" className="w-full h-full object-cover" />
            </div>
            <div className="text-xl font-bold tracking-tighter text-white hidden sm:block">
              Genie<span className="bg-gradient-to-r from-[#FDE047] to-[#F5B041] bg-clip-text text-transparent">.</span>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#about" className="hover:text-[#F5B041] transition-colors">About</a>
            <a href="#expertise" className="hover:text-[#F5B041] transition-colors">Expertise</a>
            <a href="#work" className="hover:text-[#F5B041] transition-colors">Work</a>
            <a href="#contact" className="hover:text-[#F5B041] transition-colors">Contact</a>
          </div>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white relative z-50 p-2 -mr-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl transition-all duration-500 flex flex-col items-center justify-center space-y-8 md:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
         <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold text-white hover:text-[#F5B041] transition-colors">About</a>
         <a href="#expertise" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold text-white hover:text-[#F5B041] transition-colors">Expertise</a>
         <a href="#work" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold text-white hover:text-[#F5B041] transition-colors">Work</a>
         <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold text-white hover:text-[#F5B041] transition-colors">Contact</a>
      </div>
    </>
  );
}
