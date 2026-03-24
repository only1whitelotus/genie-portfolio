import React from 'react';
import { Camera, Code2, PenTool, Play, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 relative z-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-[#FDE047]/80 mb-4">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#FDE047] to-[#E67E22] animate-pulse"></span>
            <span>Available for new projects (and good vibes)</span>
          </div>
          
          {/* SCALED DOWN TEXT SIZES HERE */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1] text-white">
            Your friendly neighborhood <br />
            <span className="bg-gradient-to-r from-[#FEF08A] via-[#F5B041] to-[#E67E22] bg-clip-text text-transparent">
              Creative Genie.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">
            I design interfaces, write code, and direct videos. Basically, I got tired of picking just one career. If you need something to look illegally good and actually work flawlessly, you're in the right place. 
            <br className="hidden md:block" /><br className="hidden md:block" />
            <span className="text-sm italic text-[#F5B041]">(No rubbing of lamps required, just send an email.)</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#work" className="group flex items-center justify-center space-x-2 bg-gradient-to-r from-[#FDE047] via-[#F5B041] to-[#E67E22] hover:brightness-110 text-black px-8 py-4 rounded-full font-semibold transition-all duration-300">
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="flex items-center justify-center space-x-2 bg-transparent border border-white/20 hover:border-white/40 hover:bg-white/5 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300">
              <span>Let's Talk</span>
            </a>
          </div>
        </div>

        <div className="relative hidden lg:block h-[600px] w-full perspective-1000">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute w-[400px] h-[400px] border border-[#F5B041]/20 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute w-[300px] h-[300px] border border-orange-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute w-[200px] h-[200px] bg-gradient-to-br from-[#FDE047]/10 via-orange-900/10 to-transparent border border-[#F5B041]/40 rounded-full backdrop-blur-sm flex items-center justify-center shadow-[0_0_50px_rgba(245,176,65,0.1)]">
               <div className="grid grid-cols-2 gap-4 opacity-50">
                  <Code2 className="w-8 h-8 text-[#F5B041]" />
                  <PenTool className="w-8 h-8 text-[#F5B041]" />
                  <Camera className="w-8 h-8 text-[#F5B041]" />
                  <Play className="w-8 h-8 text-[#F5B041]" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}