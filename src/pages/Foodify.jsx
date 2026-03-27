import React, { useEffect } from 'react';
import { 
  ArrowLeft, Palette, Flame, Clock, 
  Bike, Type, CircleDot, Target, Zap, Utensils,
  FileText, LayoutGrid
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FoodifyCaseStudy() {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen relative z-10 font-sans">
      
      {/* Back Navigation */}
      <Link to="/#work" className="text-gray-500 hover:text-[#FAA307] flex items-center gap-2 mb-16 w-fit transition-colors uppercase tracking-widest text-xs font-bold">
        <ArrowLeft className="w-4 h-4" /> Back to Portfolio
      </Link>

      {/* Hero Section */}
      <header className="mb-24 md:mb-32">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FAA307]/10 border border-[#FAA307]/20 text-xs font-bold text-[#FAA307] mb-8 uppercase tracking-widest">
          Brand Identity & Digital Product
        </div>
        <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter leading-[0.9]">
          Foodify <br />
          <span className="bg-gradient-to-r from-[#FAA307] via-[#DC2F02] to-[#FAA307] bg-clip-text text-transparent">
            Kinetic Delivery.
          </span>
        </h1>
        <p className="text-xl md:text-3xl text-gray-400 max-w-4xl leading-snug mb-10 font-light tracking-tight">
          Delivering freshness at the speed of life. A comprehensive brand and product ecosystem for Lagos' premier lightning-fast food delivery service.
        </p>
      </header>

      {/* Quick Stats Grid - 5 Columns */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mb-32 border-y border-white/10 py-16">
        <div>
          <h4 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-3">Role</h4>
          <p className="text-white font-medium text-lg leading-snug">Brand Architect <br/>& UI/UX Designer</p>
        </div>
        <div>
          <h4 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-3">Scope</h4>
          <p className="text-white font-medium text-lg leading-snug">Visual Identity, App UI, <br/>Merch, Packaging</p>
        </div>
        <div>
          <h4 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-3">Timeframe</h4>
          <p className="text-white font-medium text-lg leading-snug">May — June <br/>2024</p>
        </div>
        <div>
          <h4 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-3">Location</h4>
          <p className="text-white font-medium text-lg leading-snug">Lagos, Nigeria <br/>(Hyper-Local)</p>
        </div>
        <div>
          <h4 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-3">The Thesis</h4>
          <p className="text-[#FAA307] font-medium text-lg leading-snug">Visualizing velocity <br/>and thermal retention.</p>
        </div>
      </div>

      {/* Main Feature Image (1.png) */}
      <div className="w-full aspect-[4/3] md:aspect-[21/9] bg-[#03071E] rounded-[2rem] border border-[#FAA307]/20 mb-32 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#03071E]/90 via-black/50 to-[#FAA307]/20 z-0" />
        <img 
          src="/foodify/1.png" 
          alt="Foodify Brand Moodboard" 
          className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-[1.5s] ease-out"
        />
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div className="bg-black/80 backdrop-blur-xl border border-white/10 px-8 py-4 rounded-full text-[#FAA307] font-bold tracking-wide flex items-center gap-3 shadow-[0_0_40px_rgba(250,163,7,0.2)]">
            <Utensils className="w-5 h-5" /> Comprehensive Brand System
          </div>
        </div>
      </div>

      {/* STRATEGY & THE BRIEF SECTION (Using 3.png) */}
      <section className="mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-sm font-bold tracking-widest text-[#FAA307] uppercase mb-4 flex items-center gap-2">
              <FileText className="w-4 h-4" /> Strategic Foundation
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Cold food, broken trust.
            </h3>
            <p className="text-gray-400 leading-relaxed text-lg font-light">
              In a hyper-dense urban center like Lagos, food delivery isn't just about logistics; it's about preserving the culinary experience. Users were fatigued by services that treated meals like standard cargo, resulting in cold food and unpredictable wait times. 
            </p>
            <p className="text-gray-400 leading-relaxed text-lg font-light">
              We started with a rigorous brief: To win market share, Foodify couldn't just say they were fast; they had to *look* fast. We rejected standard food delivery tropes—generic map pins or forks—and engineered an identity built entirely around kinetic energy and temperature.
            </p>
          </div>

          <div className="lg:col-span-7 group">
            <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] transform transition-transform duration-700 group-hover:-translate-y-2">
              <img src="/foodify/3.png" alt="Foodify Design Brief and Concept Strategy" className="w-full h-auto object-cover" />
            </div>
            <p className="text-left text-sm font-bold text-gray-500 uppercase tracking-widest pt-6 pl-2">00 / The Project Blueprint & Semiotics</p>
          </div>

        </div>
      </section>

      {/* BRAND IDENTITY SECTION */}
      <section className="mb-32">
        <div className="mb-16 md:w-2/3">
          <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4 inline-block">Phase 01 — Visual Architecture</h2>
          <h3 className="text-5xl md:text-6xl font-bold text-white tracking-tighter">Iconography & Mechanics.</h3>
        </div>

        {/* Logo Ideology (2.png) */}
        <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 p-8 md:p-16 rounded-[2.5rem] mb-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h4 className="text-3xl font-bold text-white mb-6 tracking-tight">The Kinetic Mark</h4>
              <p className="text-gray-400 leading-relaxed text-lg mb-10 font-light">
                The Foodify logo is a visual synthesis of four distinct vectors, communicating speed, convenience, and deliciousness in a single glance.
              </p>
              <ul className="space-y-8">
                <li className="flex items-start gap-5">
                  <div className="p-3 bg-[#FAA307]/10 border border-[#FAA307]/20 rounded-2xl mt-1"><Bike className="w-6 h-6 text-[#FAA307]" /></div>
                  <div>
                    <h5 className="text-white font-bold mb-2 text-lg">Slanted Wheels & Motion Lines</h5>
                    <p className="text-gray-400 leading-relaxed text-sm">Translating the physical momentum of a dispatch bike into vector graphics. The forward lean implies constant progress.</p>
                  </div>
                </li>
                <li className="flex items-start gap-5">
                  <div className="p-3 bg-[#DC2F02]/10 border border-[#DC2F02]/20 rounded-2xl mt-1"><Flame className="w-6 h-6 text-[#DC2F02]" /></div>
                  <div>
                    <h5 className="text-white font-bold mb-2 text-lg">The Dome & Steam</h5>
                    <p className="text-gray-400 leading-relaxed text-sm">Visual cues that suggest premium care, heat retention, and absolute freshness upon arrival.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Visual Rep of Logo */}
            <div className="grid grid-cols-1 gap-6 h-full">
              <div className="aspect-square bg-[#FAA307] rounded-3xl flex items-center justify-center border border-white/10 shadow-[0_0_80px_rgba(250,163,7,0.1)] relative overflow-hidden group">
                 <img src="/foodify/2.png" alt="Foodify Logo Details" className="w-full h-full object-cover relative z-10 transform group-hover:scale-105 transition-transform duration-700" />
                 <div className="absolute bottom-5 left-5 z-20 pointer-events-none">
                   <span className="text-[10px] text-white uppercase tracking-widest font-bold bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                     01 / Primary Mark
                   </span>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* System Versatility (4.png) */}
        <div className="mb-12">
          <div className="group w-full">
            <div className="rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] transform transition-transform duration-1000 group-hover:scale-[1.01]">
              <img src="/foodify/4.png" alt="Logo Versions and Brand Pattern" className="w-full h-auto object-cover" />
            </div>
            <p className="text-left text-sm font-bold text-gray-400 uppercase tracking-widest pt-6 pl-2">02 / System Versatility: Light, Dark, and Pattern Modularity</p>
          </div>
        </div>

        {/* Brand Guidelines & Colors (5.png) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white/5 border border-white/10 p-10 md:p-12 rounded-[2.5rem]">
          
          <div className="flex flex-col justify-between h-full space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Palette className="w-6 h-6 text-[#FAA307]" />
                <h4 className="text-2xl font-bold text-white tracking-tight">Chromatic Strategy</h4>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                The palette is biologically optimized to trigger appetite and urgency. 
                <strong className="text-white"> Saffron Yellow</strong> (#FAA307) provides optimism and vibrancy, while 
                <strong className="text-white"> Flame Red</strong> (#DC2F02) evokes heat and lightning-fast delivery. 
                <strong className="text-white"> Midnight Navy</strong> (#03071E) grounds the brand in premium reliability.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-8">
                <Type className="w-6 h-6 text-[#FAA307]" />
                <h4 className="text-2xl font-bold text-white tracking-tight">Typographic Hierarchy</h4>
              </div>
              <div className="mb-6 border-l-2 border-[#FAA307] pl-6">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Interface</p>
                <h5 className="text-3xl text-white font-bold tracking-tighter italic">Poppins</h5>
                <p className="text-gray-400 text-sm mt-2">Maintains extreme legibility while its italic weight implies forward momentum.</p>
              </div>
              <div className="border-l-2 border-[#DC2F02] pl-6">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Accents</p>
                <h5 className="text-2xl text-[#FAA307] font-serif" style={{ fontFamily: 'cursive' }}>Lucinda Handwriting</h5>
                <p className="text-gray-400 text-sm mt-2">Injects an organic, human touch into a highly technical delivery ecosystem.</p>
              </div>
            </div>
          </div>

          <div className="group w-full h-full">
            <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] transform transition-transform duration-700 group-hover:-translate-y-2 h-full">
              <img src="/foodify/5.png" alt="Brand Colors and Typography Documentation" className="w-full h-full object-cover" />
            </div>
          </div>

        </div>
      </section>

      {/* PRODUCT UX & ARCHITECTURE */}
      <section className="mb-32">
        <div className="mb-16 md:w-2/3">
          <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4 inline-block">Phase 02 — Digital Experience</h2>
          <h3 className="text-5xl md:text-6xl font-bold text-white tracking-tighter">Streamlined Utility.</h3>
          <p className="text-gray-400 mt-6 text-xl font-light leading-relaxed">
            The mobile interface was stripped of unnecessary friction. Light mode aesthetics combined with high-visibility call-to-actions guide the user from hunger to checkout in minimal taps.
          </p>
        </div>

        {/* Detail Image (6.png) Isometric iPhone */}
        <div className="w-full aspect-[21/9] bg-[#FAA307]/10 rounded-[2rem] border border-[#FAA307]/20 mb-24 relative overflow-hidden group shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
          <img 
            src="/foodify/6.png" 
            alt="App Icon and Interface Pattern" 
            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1.5s]" 
          />
        </div>

        {/* UI Gallery - Full Width Single Column for Presentation Slides (7.png & 8.png) */}
        <div className="flex flex-col gap-24">
          
          {/* Slide 1: Auth/Splash (7.png) */}
          <div className="group w-full">
            <div className="flex items-center gap-6 mb-8 px-2 md:px-0">
              <span className="text-[#FAA307] font-bold text-xl tracking-tighter">01</span>
              <div className="h-px bg-white/10 flex-grow"></div>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Onboarding & Authentication</p>
            </div>
            <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] transform transition-transform duration-1000 group-hover:scale-[1.01]">
              <img src="/foodify/7.png" alt="App Splash Screen and Login" className="w-full h-auto object-cover" />
            </div>
          </div>

          {/* Slide 2: Dashboard/Tracking (8.png) */}
          <div className="group w-full">
            <div className="flex items-center gap-6 mb-8 px-2 md:px-0">
              <span className="text-[#DC2F02] font-bold text-xl tracking-tighter">02</span>
              <div className="h-px bg-white/10 flex-grow"></div>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Menu Selection & Live Tracking</p>
            </div>
            <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] transform transition-transform duration-1000 group-hover:scale-[1.01]">
              <img src="/foodify/8.png" alt="App Home Menu and Tracking Map" className="w-full h-auto object-cover" />
            </div>
          </div>

        </div>
      </section>

      {/* MARKETING & PHYSICAL TOUCHPOINTS GALLERY */}
      <section className="mb-32">
        <div className="mb-16 md:w-2/3">
          <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4 inline-block">Phase 03 — World Building</h2>
          <h3 className="text-5xl md:text-6xl font-bold text-white tracking-tighter">Physical Touchpoints.</h3>
          <p className="text-gray-400 mt-6 text-xl font-light leading-relaxed">
            The brand ecosystem extends beyond the screen. We applied the kinetic grid pattern to rider uniforms and eco-friendly packaging, ensuring Foodify is instantly recognizable on the streets of Lagos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* T-Shirt Merch (9.png) */}
          <div className="rounded-[2rem] overflow-hidden border border-white/10 group aspect-[4/3] relative shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
            <img src="/foodify/9.png" alt="Foodify Rider Apparel" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1.5s]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-[#FAA307] font-bold tracking-widest uppercase text-xs mb-2">Fleet Apparel</p>
              <p className="text-white font-medium text-xl">Rider Uniforms & Pattern Integration</p>
            </div>
          </div>

          {/* Paper Bag (10.png) */}
          <div className="rounded-[2rem] overflow-hidden border border-white/10 group aspect-[4/3] relative shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
            <img src="/foodify/10.png" alt="Foodify Delivery Packaging" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1.5s]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-[#DC2F02] font-bold tracking-widest uppercase text-xs mb-2">Packaging</p>
              <p className="text-white font-medium text-xl"> Delivery Bags</p>
            </div>
          </div>

        </div>
      </section>

      {/* Conclusion */}
      <section className="max-w-4xl mx-auto text-center mb-16 pt-24 border-t border-white/10">
        <Clock className="w-12 h-12 text-[#FAA307] mx-auto mb-8 opacity-50" />
        <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-8">Delivered on Time.</h3>
        <p className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-16 font-light">
          Foodify proves that utility doesn't have to be boring. By combining a highly functional user interface with a vibrant, kinetic visual identity, we created a brand that looks exactly how their service feels: hot, fresh, and exceptionally fast.
        </p>
      </section>

      {/* Playful Footer Link */}
      <div className="mt-12 flex flex-col items-center group text-center">
        <Link to="/" className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-[#F5B041] hover:text-black hover:border-transparent hover:-translate-y-1">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <span className="mt-4 block text-xs text-gray-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 italic">
          I’ll get you home faster than Google Maps 😉
        </span>
      </div>

    </div>
  );
}