import React from 'react';
import { Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 relative border-t border-white/5">
      {/* Changed 'items-center' to 'items-stretch' so both columns match heights! */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
        
        {/* Profile Image Wrapper - Now dynamically fills the height of the row on Desktop */}
        <div className="lg:col-span-5 relative w-full aspect-square lg:aspect-auto lg:h-full rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/10 group min-h-[400px]">
           <div className="absolute inset-0 bg-gradient-to-tr from-[#E67E22]/30 via-orange-900/20 to-rose-900/20 group-hover:scale-105 transition-transform duration-700 z-10 pointer-events-none" />
           <img 
             src="/profile.png" 
             alt="Akinola Akinjide - Profile" 
             className="absolute inset-0 w-full h-full object-cover opacity-80" 
           />
        </div>

        {/* Text Content */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6 lg:py-4">
          <div>
            <h2 className="text-sm font-bold tracking-widest bg-gradient-to-r from-[#FDE047] via-[#F5B041] to-[#E67E22] bg-clip-text text-transparent uppercase mb-4 inline-block">About Me</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Crafting experiences through code and lens.</h3>
          </div>
          
          <div className="space-y-4 text-gray-400 leading-relaxed text-lg">
            <p>
              Hi there, my name is <strong className="text-gray-200">Akinola Akinjide</strong>. To some people, I am known as <em>White Lotus</em> or the <em>Creative Genie</em>. I like to refer to myself as a multidisciplinary creator with a background blending technical development and visual arts. I approach every project with a dual lens: how does it look, and how does it function seamlessly?
            </p>
            <p>
              Whether I'm directing a brand film, designing a user interface, crafting illustrations for social media, or writing clean React code, my goal is always to build immersive digital experiences that leave a lasting impact.
            </p>
            <p>
              <strong className="text-gray-200">Why do I do what I do?</strong> Because I believe every brand has a unique story that deserves to be felt, not just seen. I thrive on the magic that happens when striking aesthetics meet flawless logic.
            </p>
          </div>

          {/* Interests & Hobbies */}
          <div className="pt-2 pb-2">
            <h4 className="text-white text-sm font-semibold mb-4 flex items-center gap-2 uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#F5B041]" /> When I'm off the clock
            </h4>
            <div className="flex flex-wrap gap-2">
              {['Listening to Music 🎧', 'Gaming 🎮', 'Content Creation 📸', 'Writing ✍️', 'Cooking 🍳', 'Fashion ✨', 'Football ⚽'].map((hobby, i) => (
                <span key={i} className="px-4 py-1.5 text-sm font-medium bg-white/5 border border-white/10 text-gray-300 rounded-full hover:border-[#F5B041]/50 hover:text-[#FDE047] transition-all cursor-default">
                  {hobby}
                </span>
              ))}
            </div>
          </div>
          
          {/* Stats */}
          <div className="pt-6 flex flex-wrap gap-6 border-t border-white/10 mt-6">
             <div className="flex flex-col">
               <span className="text-3xl font-bold text-white">5+</span>
               <span className="text-xs text-gray-500 uppercase tracking-wider mt-1 font-semibold">Years Experience</span>
             </div>
             <div className="w-px h-12 bg-white/10 mx-2 hidden sm:block"></div>
             <div className="flex flex-col">
               <span className="text-3xl font-bold text-white">50+</span>
               <span className="text-xs text-gray-500 uppercase tracking-wider mt-1 font-semibold">Projects Delivered</span>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}