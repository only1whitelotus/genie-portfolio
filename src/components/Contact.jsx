import React from 'react';
import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 relative overflow-hidden border-t border-white/5">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F5B041]/5 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-8">
          Let's build something <br/> 
          <span className="bg-gradient-to-r from-[#FDE047] via-[#F5B041] to-[#E67E22] bg-clip-text text-transparent italic">ridiculously good.</span>
        </h2>
        
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Open for freelance gigs, epic collaborations, and full-time roles. 
          Skip the lamp-rubbing—just drop a message and let's turn those chaotic 3 AM ideas into a masterpiece.
        </p>

        <a 
          href="mailto:only1whitelotus@gmail.com" 
          className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#FDE047] via-[#F5B041] to-[#E67E22] hover:brightness-110 text-black px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 group hover:-translate-y-1 shadow-[0_0_40px_rgba(245,176,65,0.2)]"
        >
          <span>Summon the Genie</span>
          <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
        </a>
      </div>
    </section>
  );
}