import React from 'react';
import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#E67E22]/10 via-orange-900/10 to-[#E67E22]/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-8">
          Let's build something <br/> 
          <span className="bg-gradient-to-r from-[#FDE047] via-[#F5B041] to-[#E67E22] bg-clip-text text-transparent italic">extraordinary.</span>
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Open for freelance opportunities, collaborations, and full-time roles. 
          Drop a message to discuss your next big idea.
        </p>
        
        <a 
          href="mailto:hello@example.com" 
          className="relative inline-flex items-center space-x-3 bg-white text-black hover:text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 group overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#FDE047] via-[#F5B041] to-[#E67E22] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Mail className="w-5 h-5 relative z-10 group-hover:text-black transition-colors duration-300" />
          <span className="relative z-10 group-hover:text-black transition-colors duration-300">Get in Touch</span>
        </a>
      </div>
    </section>
  );
}
