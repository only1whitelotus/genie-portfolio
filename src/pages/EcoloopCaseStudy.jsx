import React, { useEffect } from 'react';
import { 
  ArrowLeft, ExternalLink, Palette, Scan, MapPin, Wallet, 
  Recycle, Leaf, Smartphone, Fingerprint, Type, CircleDot, 
  Image as ImageIcon, Target, Layers, Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EcoloopCaseStudy() {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen relative z-10 font-sans">
      
      {/* Back Navigation */}
      <Link to="/#work" className="text-gray-500 hover:text-[#A3E635] flex items-center gap-2 mb-16 w-fit transition-colors uppercase tracking-widest text-xs font-bold">
        <ArrowLeft className="w-4 h-4" /> Back to Portfolio
      </Link>

      {/* Hero Section */}
      <header className="mb-24 md:mb-32">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#A3E635]/10 border border-[#A3E635]/20 text-xs font-bold text-[#A3E635] mb-8 uppercase tracking-widest">
           Brand Identity & Architecture
        </div>
        <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter leading-[0.9]">
          Ecoloop <br />
          <span className="bg-gradient-to-r from-[#A3E635] via-[#22c55e] to-[#06B6D4] bg-clip-text text-transparent">
            Circular Economy.
          </span>
        </h1>
        <p className="text-xl md:text-3xl text-gray-400 max-w-4xl leading-snug mb-10 font-light tracking-tight">
          A mobile ecosystem utilizing AI Computer Vision and FinTech to address the global plastic waste crisis. Ecoloop incentivizes recycling through immediate financial rewards, gamification, and transparent impact tracking.
        </p>
      </header>

     {/* Quick Stats Grid - Editorial Style */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32 border-y border-white/10 py-16">
        <div>
          <h4 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-3">Role</h4>
          <p className="text-white font-medium text-lg leading-snug">Lead Product Designer <br/>& Brand Architect</p>
        </div>
        <div>
          <h4 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-3">Scope</h4>
          <p className="text-white font-medium text-lg leading-snug">Brand Identity, UI/UX, <br/>Marketing, Hardware</p>
        </div>
        <div>
          <h4 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-3">Tools</h4>
          <p className="text-white font-medium text-lg leading-snug">Figma, Adobe CC, <br/>Prototyping</p>
        </div>
        <div>
          <h4 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-3">Mission</h4>
          <p className="text-[#A3E635] font-medium text-lg leading-snug">Turning Plastic Waste <br/>into Digital Wealth.</p>
        </div>
      </div>

      {/* The Narrative Arc: Problem, Insight, Solution */}
      <section className="mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-sm font-bold tracking-widest text-[#A3E635] uppercase mb-4 flex items-center gap-2">
              <Target className="w-4 h-4" /> The Friction
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Altruism doesn't scale.
            </h3>
            <p className="text-gray-400 leading-relaxed text-lg font-light">
              Traditional recycling relies on altruism, which is often not enough to change long-term habits. Users find the process of sorting and finding recycling centers confusing and unrewarding. Current waste management systems lack direct incentives for individual participation, leading to a break in the "loop" between consumption and recycling.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-6 bg-white/5 border border-white/10 p-10 md:p-16 rounded-[2rem]">
            <h2 className="text-sm font-bold tracking-widest text-[#06B6D4] uppercase mb-4 flex items-center gap-2">
              <Zap className="w-4 h-4" /> The Strategic Pivot
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-6">
              Value over virtue.
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              Our research revealed a harsh truth: users needed a tangible ROI for their time. We pivoted the product strategy from a "green app" to a "micro-wealth platform."
            </p>
            <p className="text-gray-400 leading-relaxed text-lg">
              We bridge the gap by integrating a financial reward system directly into the recycling habit. By combining AI material verification with digital wallets and real-time IoT smart-bin mapping, Ecoloop transforms the chore of recycling into a rewarding, frictionless, and tangible financial habit. 
            </p>
          </div>

        </div>
      </section>

      {/* Main Feature Image */}
      <div className="w-full aspect-[21/9] bg-[#0a0a0a] rounded-[2rem] border border-[#A3E635]/20 mb-32 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#022C22]/90 via-black to-[#06B6D4]/10 z-0" />
        <img 
          src="/ecoloop-main.png" 
          alt="Ecoloop Brand Presentation" 
          className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-[1.5s] ease-out"
        />
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div className="bg-black/80 backdrop-blur-xl border border-white/10 px-8 py-4 rounded-full text-[#A3E635] font-bold tracking-wide flex items-center gap-3 shadow-[0_0_40px_rgba(163,230,53,0.15)]">
            <Leaf className="w-5 h-5" /> The Ecoloop Ecosystem
          </div>
        </div>
      </div>

      {/* BRAND IDENTITY SECTION */}
      <section className="mb-32">
        <div className="mb-16 md:w-2/3">
          <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4 inline-block">Phase 01 — Visual Architecture</h2>
          <h3 className="text-5xl md:text-6xl font-bold text-white tracking-tighter">Identity & Design Language.</h3>
        </div>

        {/* Logo Ideology */}
        <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 p-8 md:p-16 rounded-[2.5rem] mb-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h4 className="text-3xl font-bold text-white mb-6 tracking-tight">The Geometric Foundation</h4>
              <p className="text-gray-400 leading-relaxed text-lg mb-10 font-light">
                The mark is a precise, mathematically driven construction. It rejects the overly organic clichés of environmental brands in favor of sharp, tech-forward precision.
              </p>
              <ul className="space-y-8">
                <li className="flex items-start gap-5">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-2xl mt-1"><Recycle className="w-6 h-6 text-[#A3E635]" /></div>
                  <div>
                    <h5 className="text-white font-bold mb-2 text-lg">The Triskelion Loop</h5>
                    <p className="text-gray-400 leading-relaxed">Encoding the three-step circular journey: Scan, Verify, Reward. A perpetual engine for sustainable habits.</p>
                  </div>
                </li>
                <li className="flex items-start gap-5">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-2xl mt-1"><ArrowLeft className="w-6 h-6 text-[#A3E635] rotate-90" /></div>
                  <div>
                    <h5 className="text-white font-bold mb-2 text-lg">The Equity Arrow</h5>
                    <p className="text-gray-400 leading-relaxed">An upward trajectory symbolizing fintech innovation and the conversion of physical waste into progressive digital equity.</p>
                  </div>
                </li>
              </ul>
            </div>
            
           {/* Visual Rep of Logo: Grid vs Final */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
              
              {/* Box 1: Logo Construction */}
              <div className="aspect-square bg-[#022C22] rounded-3xl flex items-center justify-center p-8 border border-[#A3E635]/20 shadow-[0_0_40px_rgba(163,230,53,0.05)] relative overflow-hidden group">
                 
                 {/* Your existing grid image (no extra overlays) */}
                 <img src="/ecoloop-logo-grid.png" alt="Logo Construction Grid" className="w-full h-full object-contain relative z-10 transform group-hover:scale-105 transition-transform duration-700" />
                 
                 {/* Tech Label */}
                 <div className="absolute bottom-5 left-5 z-20 pointer-events-none">
                   <span className="text-[10px] text-[#A3E635] uppercase tracking-widest font-bold bg-[#022C22]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#A3E635]/30">
                     01 / Grid
                   </span>
                 </div>
              </div>

              {/* Box 2: Final Logo */}
              <div className="aspect-square bg-white/5 rounded-3xl flex items-center justify-center p-8 border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.02)] relative overflow-hidden group">
                 
                 <img src="/ecoloop-logo-final.png" alt="Final Brand Mark" className="w-full h-full object-contain relative z-10 transform group-hover:scale-105 transition-transform duration-700 drop-shadow-2xl" />
                 
                 {/* Tech Label */}
                 <div className="absolute bottom-5 left-5 z-20 pointer-events-none">
                   <span className="text-[10px] text-white uppercase tracking-widest font-bold bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                     02 / Mark
                   </span>
                 </div>
              </div>

            </div>
          </div>
        </div>

        {/* Colors & Typography Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Color Palette */}
          <div className="bg-white/5 border border-white/10 p-10 md:p-12 rounded-[2.5rem]">
            <div className="flex items-center gap-3 mb-10">
              <Palette className="w-6 h-6 text-[#A3E635]" />
              <h4 className="text-2xl font-bold text-white tracking-tight">Chromatic Strategy</h4>
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-8">
              <div className="space-y-3">
                <div className="h-24 w-full bg-[#022C22] rounded-2xl border border-white/5 shadow-inner"></div>
                <div>
                  <p className="text-white font-bold">Deep Pine</p>
                  <p className="text-xs text-gray-500 mt-1">Anchors the brand in natural authority and premium trust.</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-24 w-full bg-[#A3E635] rounded-2xl border border-white/5 shadow-inner"></div>
                <div>
                  <p className="text-white font-bold">Volt Lime</p>
                  <p className="text-xs text-gray-500 mt-1">The pulse of digital transactions and immediate action.</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-24 w-full bg-[#06B6D4] rounded-2xl border border-white/5 shadow-inner"></div>
                <div>
                  <p className="text-white font-bold">Electric Cyan</p>
                  <p className="text-xs text-gray-500 mt-1">Highlights fintech functionality and interactive UI states.</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-24 w-full bg-[#ECFDF5] rounded-2xl border border-white/5 shadow-inner"></div>
                <div>
                  <p className="text-gray-300 font-bold">Pale Mint</p>
                  <p className="text-xs text-gray-500 mt-1">Provides a breathable, high-contrast canvas for dense data.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Typography & System */}
          <div className="bg-white/5 border border-white/10 p-10 md:p-12 rounded-[2.5rem] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-10">
                <Type className="w-6 h-6 text-[#A3E635]" />
                <h4 className="text-2xl font-bold text-white tracking-tight">Typographic Hierarchy</h4>
              </div>
              
              <div className="mb-10 border-l-2 border-[#A3E635] pl-6">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">Display / H1</p>
                <h5 className="text-5xl text-white font-medium tracking-tighter mb-2">Clash Display</h5>
                <p className="text-gray-400 text-sm">Engineered for high-impact marketing and bold structural statements.</p>
              </div>

              <div className="border-l-2 border-[#06B6D4] pl-6">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">Interface / Body</p>
                <h5 className="text-3xl text-white font-sans tracking-tight mb-2">DM Sans</h5>
                <p className="text-gray-400 text-sm">Highly legible at micro-scales. Optimized for financial dashboards and dense data visualization across WCAG 3.0 standards.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT UX & ARCHITECTURE */}
      <section className="mb-32">
        <div className="mb-16 md:w-2/3">
          <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4 inline-block">Phase 02 — Digital Experience</h2>
          <h3 className="text-5xl md:text-6xl font-bold text-white tracking-tighter">Zero-Friction Architecture.</h3>
          <p className="text-gray-400 mt-6 text-xl font-light leading-relaxed">
            We systematically removed every barrier between the user and their reward. The interface is designed not to demand attention, but to facilitate rapid, invisible transactions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-b from-[#022C22]/40 to-transparent border border-[#A3E635]/20 p-10 rounded-[2rem] hover:-translate-y-2 transition-transform duration-500">
            <Scan className="w-8 h-8 text-[#A3E635] mb-8" />
            <h4 className="text-2xl font-bold text-white mb-4 tracking-tight">AI Neural Verification</h4>
            <p className="text-gray-400 leading-relaxed font-light">
              By utilizing edge-computing computer vision, the app identifies polymer types in milliseconds, providing an exact financial yield before the item is even dropped in the bin.
            </p>
          </div>

          <div className="bg-gradient-to-b from-[#022C22]/40 to-transparent border border-[#A3E635]/20 p-10 rounded-[2rem] hover:-translate-y-2 transition-transform duration-500">
            <Wallet className="w-8 h-8 text-[#A3E635] mb-8" />
            <h4 className="text-2xl font-bold text-white mb-4 tracking-tight">Dopamine Wallets</h4>
            <p className="text-gray-400 leading-relaxed font-light">
              A bespoke micro-transaction UI updates the user's balance with kinetic, satisfying animations immediately upon deposit, forging a powerful psychological reward loop.
            </p>
          </div>

          <div className="bg-gradient-to-b from-[#022C22]/40 to-transparent border border-[#A3E635]/20 p-10 rounded-[2rem] hover:-translate-y-2 transition-transform duration-500">
            <MapPin className="w-8 h-8 text-[#A3E635] mb-8" />
            <h4 className="text-2xl font-bold text-white mb-4 tracking-tight">Predictive Routing</h4>
            <p className="text-gray-400 leading-relaxed font-light">
              Integrated with hardware sensors, the map predicts smart-bin capacity trends, routing users only to locations with guaranteed space, eliminating dead-end trips.
            </p>
          </div>
        </div>
      </section>

      {/* MOBILE APP SHOWCASE GALLERY - FULL WIDTH */}
      <section className="mb-40">
        <div className="mb-20 md:w-2/3">
          <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4 inline-block">Phase 02.5 — Interface Details</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">System Flows.</h3>
        </div>

        {/* Single Column Layout for Maximum Legibility */}
        <div className="flex flex-col gap-24">
          
          {/* Slide 1: Auth/Entry (18.png) */}
          <div className="group w-full">
            <div className="flex items-center gap-6 mb-8 px-2 md:px-0">
              <span className="text-[#A3E635] font-bold text-xl tracking-tighter">01</span>
              <div className="h-px bg-white/10 flex-grow"></div>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Frictionless Entry</p>
            </div>
            <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] transform transition-transform duration-1000 group-hover:scale-[1.02]">
              <img src="/18.png" alt="App Interface Auth Flow" className="w-full h-auto object-cover" />
            </div>
          </div>

          {/* Slide 2: Onboarding (19.png) */}
          <div className="group w-full">
            <div className="flex items-center gap-6 mb-8 px-2 md:px-0">
              <span className="text-[#06B6D4] font-bold text-xl tracking-tighter">02</span>
              <div className="h-px bg-white/10 flex-grow"></div>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">System Onboarding</p>
            </div>
            <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] transform transition-transform duration-1000 group-hover:scale-[1.02]">
              <img src="/19.png" alt="App Interface Onboarding Flow" className="w-full h-auto object-cover" />
            </div>
          </div>

          {/* Slide 3: Dashboard */}
          <div className="group w-full">
            <div className="flex items-center gap-6 mb-8 px-2 md:px-0">
              <span className="text-[#A3E635] font-bold text-xl tracking-tighter">03</span>
              <div className="h-px bg-white/10 flex-grow"></div>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Wealth Dashboard</p>
            </div>
            <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] transform transition-transform duration-1000 group-hover:scale-[1.02]">
              {/* Update this src to your 3rd slide image */}
              <img src="/20.png" alt="User Wealth Dashboard" className="w-full h-auto object-cover" />
            </div>
          </div>

          {/* Slide 4: Vision Scanner */}
          <div className="group w-full">
            <div className="flex items-center gap-6 mb-8 px-2 md:px-0">
              <span className="text-[#06B6D4] font-bold text-xl tracking-tighter">04</span>
              <div className="h-px bg-white/10 flex-grow"></div>
              <p className="text-sm font-bold text-[#A3E635] uppercase tracking-widest">AI Vision Scanner</p>
            </div>
            <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_30px_60px_rgba(163,230,53,0.15)] transform transition-transform duration-1000 group-hover:scale-[1.02]">
              {/* Update this src to your 4th slide image */}
              <img src="/21.png" alt="AI Vision Interface" className="w-full h-auto object-cover" />
            </div>
          </div>

          {/* Slide 5: Spatial Mapping */}
          <div className="group w-full">
            <div className="flex items-center gap-6 mb-8 px-2 md:px-0">
              <span className="text-[#A3E635] font-bold text-xl tracking-tighter">05</span>
              <div className="h-px bg-white/10 flex-grow"></div>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">IoT Spatial Mapping</p>
            </div>
            <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_30px_60px_rgba(6,182,212,0.15)] transform transition-transform duration-1000 group-hover:scale-[1.02]">
              {/* Update this src to your 5th slide image */}
              <img src="/22.png" alt="Smart-Bin Locator Map" className="w-full h-auto object-cover" />
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
            A brand must survive the real world. We translated the digital system into robust physical hardware protocols, tactical apparel, and high-contrast out-of-home campaigns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="rounded-[2rem] overflow-hidden bg-[#022C22]/30 border border-white/10 group aspect-[4/3] relative">
            <img src="/ecoloop-bins.png" alt="IoT Smart Bins" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1.5s]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-[#A3E635] font-bold tracking-widest uppercase text-xs mb-2">Hardware Design</p>
              <p className="text-white font-medium text-xl">IoT Collection Kiosks</p>
            </div>
          </div>

          <div className="rounded-[2rem] overflow-hidden bg-[#022C22]/30 border border-white/10 group aspect-[4/3] relative">
            <img src="/ecoloop-billboard.png" alt="Marketing Billboard" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1.5s]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-[#A3E635] font-bold tracking-widest uppercase text-xs mb-2">Campaign</p>
              <p className="text-white font-medium text-xl">OOH Urban Takeover</p>
            </div>
          </div>

          <div className="rounded-[2rem] overflow-hidden bg-[#022C22]/30 border border-white/10 group aspect-[4/3] relative">
            <img src="/ecoloop-id.png" alt="Employee ID Cards" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1.5s]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-[#A3E635] font-bold tracking-widest uppercase text-xs mb-2">Internal Culture</p>
              <p className="text-white font-medium text-xl">Tactical Lanyards & Access</p>
            </div>
          </div>

          <div className="rounded-[2rem] overflow-hidden bg-[#022C22]/30 border border-white/10 group aspect-[4/3] relative">
            <img src="/ecoloop-polo.png" alt="Branded Polo Shirt" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1.5s]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-[#A3E635] font-bold tracking-widest uppercase text-xs mb-2">Apparel</p>
              <p className="text-white font-medium text-xl">Field Agent Uniforms</p>
            </div>
          </div>

        </div>
      </section>

     {/* EXTENDED MOCKUP GALLERY */}
      <section className="mb-32">
        <div className="flex items-center justify-between mb-12">
          <h3 className="text-3xl font-bold text-white tracking-tight">Expanded Archive.</h3>
          <div className="h-px bg-white/10 flex-grow ml-8"></div>
        </div>
        
        {/* Changed to a perfect 2x2 grid for 4 images to keep them large and premium */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          
          <div className="rounded-[1.5rem] overflow-hidden bg-white/5 border border-white/10 group aspect-square">
            <img src="/ecoloop-extra-1.png" alt="Archive Artifact 1" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0" />
          </div>
          
          <div className="rounded-[1.5rem] overflow-hidden bg-white/5 border border-white/10 group aspect-square">
            <img src="/ecoloop-extra-2.png" alt="Archive Artifact 2" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0" />
          </div>
          
          <div className="rounded-[1.5rem] overflow-hidden bg-white/5 border border-white/10 group aspect-square">
            <img src="/ecoloop-extra-3.png" alt="Archive Artifact 3" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0" />
          </div>

          <div className="rounded-[1.5rem] overflow-hidden bg-white/5 border border-white/10 group aspect-square">
            <img src="/ecoloop-extra-4.png" alt="Archive Artifact 4" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0" />
          </div>

        </div>
      </section>

      {/* Conclusion & Big CTA */}
      <section className="max-w-4xl mx-auto text-center mb-16 pt-24 border-t border-white/10">
        <Layers className="w-12 h-12 text-[#A3E635] mx-auto mb-8 opacity-50" />
        <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-8">The New Paradigm.</h3>
        <p className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-16 font-light">
          Ecoloop proves that exceptional design is fundamentally about human behavior. By building a flawless bridge between complex fintech and daily sustainability, we established a new standard for circular economy products.
        </p>

        {/* MASSIVE PROTOTYPE BUTTON CTA */}
        <div className="flex justify-center">
          <a 
            href="https://ecoloop-chi.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center space-x-4 bg-white hover:bg-[#A3E635] text-black px-12 py-6 rounded-full font-bold text-xl transition-all duration-500 group"
          >
            <span>Interact with the Live Prototype</span>
            <span className="bg-black text-white p-2 rounded-full group-hover:rotate-45 transition-transform duration-300">
              <ExternalLink className="w-5 h-5" />
            </span>
          </a>
        </div>
      </section>

        {/* Playful Footer Link */}

       <div className="mt-24 flex flex-col items-center group text-center">

        <Link to="/" className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-[#A3E635] hover:text-black hover:border-transparent hover:-translate-y-1">

          <ArrowLeft className="w-4 h-4" /> Back to Home

        </Link>

        <span className="mt-4 block text-xs text-gray-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 italic">

          End of the adventure (for now)

        </span>

      </div>

    </div>
  );
}