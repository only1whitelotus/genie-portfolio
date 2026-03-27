import React, { useEffect } from 'react';
import { 
  ArrowLeft, Palette, Type, Shield, 
  TrendingUp, Crown, Briefcase, Grid, 
  Compass, Building2, Image as ImageIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RexSartorialCaseStudy() {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen relative z-10 font-sans">
      
      {/* Back Navigation */}
      <Link to="/#work" className="text-gray-500 hover:text-[#FFC700] flex items-center gap-2 mb-16 w-fit transition-colors uppercase tracking-widest text-xs font-bold">
        <ArrowLeft className="w-4 h-4" /> Back to Portfolio
      </Link>

      {/* Hero Section */}
      <header className="mb-24 md:mb-32">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#162832]/50 border border-[#FFC700]/20 text-xs font-bold text-[#FFC700] mb-8 uppercase tracking-widest">
          Corporate Identity & Brand Architecture
        </div>
        <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter leading-[0.9]">
          Rex Sartorial <br />
          <span className="bg-gradient-to-r from-[#C60404] via-[#FFC700] to-[#FFFFFF] bg-clip-text text-transparent">
            Engineered Prestige.
          </span>
        </h1>
        <p className="text-xl md:text-3xl text-gray-400 max-w-4xl leading-snug mb-10 font-light tracking-tight">
          Architecting legacy through geometric precision. A commanding corporate identity designed for a multifaceted real estate and holdings conglomerate.
        </p>
      </header>

      {/* Quick Stats Grid - 5 Columns */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mb-32 border-y border-white/10 py-16">
        <div>
          <h4 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-3">Role</h4>
          <p className="text-white font-medium text-lg leading-snug">Brand Designer <br/>& Architect</p>
        </div>
        <div>
          <h4 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-3">Scope</h4>
          <p className="text-white font-medium text-lg leading-snug">Visual Identity, Strategy, <br/>Corporate Collateral</p>
        </div>
        <div>
          <h4 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-3">Timeframe</h4>
          <p className="text-white font-medium text-lg leading-snug">June — August <br/>2025</p>
        </div>
        <div>
          <h4 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-3">Sector</h4>
          <p className="text-white font-medium text-lg leading-snug">Real Estate <br/>& Corporate Holdings</p>
        </div>
        <div>
          <h4 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-3">The Thesis</h4>
          <p className="text-[#FFC700] font-medium text-lg leading-snug">Heritage anchored in <br/>forward momentum.</p>
        </div>
      </div>

      {/* Main Feature Image - The Metallic Logo or Signage */}
      <div className="w-full aspect-[4/3] md:aspect-[21/9] bg-[#162832] rounded-[2rem] border border-[#FFC700]/20 mb-32 relative overflow-hidden group shadow-[0_30px_60px_rgba(22,40,50,0.5)]">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#162832]/90 via-black/40 to-transparent z-0" />
        <img 
          src="/rex/hero-signage.png" 
          alt="Rex Sartorial Corporate Signage" 
          className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-[1.5s] ease-out"
        />
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div className="bg-[#162832]/80 backdrop-blur-xl border border-white/10 px-8 py-4 rounded-full text-[#FFC700] font-bold tracking-wide flex items-center gap-3 shadow-[0_0_40px_rgba(255,199,0,0.15)]">
            <Building2 className="w-5 h-5" /> Elite B2B Identity System
          </div>
        </div>
      </div>

      {/* STRATEGY & THE BRIEF SECTION */}
      <section className="mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-sm font-bold tracking-widest text-[#FFC700] uppercase mb-4 flex items-center gap-2">
              <Compass className="w-4 h-4" /> The Corporate Challenge
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Authority without stagnation.
            </h3>
            <p className="text-gray-400 leading-relaxed text-lg font-light">
              Rex Sartorial operates as a single entity with diverse, interconnected subsidiaries. They required a master-brand identity that could umbrella various industries (like high-end Real Estate) while maintaining a singular, uncompromising voice of prestige.
            </p>
            <p className="text-gray-400 leading-relaxed text-lg font-light">
              The friction lay in the balance: How do you design an emblem that evokes deep heritage and "regality," yet simultaneously communicates relentless innovation and upward trajectory?
            </p>
          </div>

          <div className="lg:col-span-6 space-y-6 bg-[#162832]/30 border border-white/10 p-10 md:p-16 rounded-[2rem] relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
               <Shield className="w-32 h-32 text-white" />
            </div>
            <h2 className="text-sm font-bold tracking-widest text-[#C60404] uppercase mb-4 flex items-center gap-2 relative z-10">
              <Briefcase className="w-4 h-4" /> The Strategic Pivot
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-6 relative z-10">
              A structural monogram.
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg mb-6 relative z-10">
              We engineered a mark that is fundamentally architectural. The "R" (from Rex, Latin for King) establishes the authority. The upward-pointing arrow embedded in the negative space dictates progress.
            </p>
            <p className="text-gray-400 leading-relaxed text-lg relative z-10">
              By housing these elements within a shield-like crest, we sealed the identity in established prestige. It is not a trendy tech logo; it is a timeless corporate seal.
            </p>
          </div>
        </div>
      </section>

      {/* THE GRID & CONSTRUCTION SECTION (EXPANDED DUAL-IMAGE LAYOUT) */}
      <section className="mb-32 bg-white/5 border border-white/10 p-8 md:p-16 rounded-[2.5rem]">
        <div className="mb-16">
          <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4 inline-block">Phase 01 — Visual Architecture</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-8">Mathematical Precision.</h3>
          
          {/* Conceptual Breakdown List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/10">
            <div>
              <Crown className="w-6 h-6 text-[#FFC700] mb-4" />
              <h5 className="text-white font-bold mb-2 text-lg">The 'Rex' Foundation</h5>
              <p className="text-gray-400 text-sm leading-relaxed">The stylized 'R' acts as the primary pillar, conveying royalty and elite positioning without relying on cliché crowns.</p>
            </div>
            <div>
              <TrendingUp className="w-6 h-6 text-[#C60404] mb-4" />
              <h5 className="text-white font-bold mb-2 text-lg">Embedded Trajectory</h5>
              <p className="text-gray-400 text-sm leading-relaxed">A prominent upward arrow emerges from the core of the 'R', symbolizing continuous advancement across all ventures.</p>
            </div>
            <div>
              <Shield className="w-6 h-6 text-white mb-4" />
              <h5 className="text-white font-bold mb-2 text-lg">The Heritage Shield</h5>
              <p className="text-gray-400 text-sm leading-relaxed">The outer boundary forms a crest. This guarantees the logo will remain timeless and resist transient design trends.</p>
            </div>
          </div>
        </div>

        {/* 2-Column Image Grid for Logo Construction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Image 1: The Math/Blueprint Grid */}
          <div className="aspect-square bg-white rounded-3xl flex items-center justify-center p-8 border border-white/20 shadow-2xl relative overflow-hidden group">
              <img src="/rex/grid-blueprint.png" alt="Logo Construction Grid" className="w-full h-full object-contain relative z-10 transform group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-6 left-6 z-20 pointer-events-none">
                <span className="text-[10px] text-black uppercase tracking-widest font-bold bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-black/10 shadow-lg">
                  01 / Geometric Blueprint
                </span>
              </div>
          </div>

          {/* Image 2: The Highlighted Elements */}
          <div className="aspect-square bg-white rounded-3xl flex items-center justify-center p-8 border border-white/20 shadow-2xl relative overflow-hidden group">
              <img src="/rex/grid-elements.png" alt="Logo Elements Highlighted" className="w-full h-full object-contain relative z-10 transform group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-6 left-6 z-20 pointer-events-none">
                <span className="text-[10px] text-black uppercase tracking-widest font-bold bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-black/10 shadow-lg">
                  02 / Component Synthesis
                </span>
              </div>
          </div>

        </div>
      </section>

      {/* SYSTEM VERSATILITY & PATTERN */}
      <section className="mb-32">
        <div className="flex items-center justify-between mb-12">
          <h3 className="text-3xl font-bold text-white tracking-tight">Monogram & Pattern.</h3>
          <div className="h-px bg-white/10 flex-grow ml-8"></div>
        </div>
        
        <div className="w-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] relative group bg-white">
           <img src="/rex/monogram-pattern.png" alt="Rex Sartorial Monogram Pattern" className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-1000" />
           <div className="absolute bottom-8 left-8 z-20 pointer-events-none">
             <p className="text-[11px] text-black uppercase tracking-widest font-bold bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-xl">
               Corporate Monogram Extension
             </p>
           </div>
        </div>
      </section>

     {/* COLORS & TYPOGRAPHY */}
      <section className="mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Color Palette (Expanded to all 6 brand colors) */}
          <div className="bg-white/5 border border-white/10 p-10 md:p-12 rounded-[2.5rem]">
            <div className="flex items-center gap-3 mb-10">
              <Palette className="w-6 h-6 text-[#FFC700]" />
              <h4 className="text-2xl font-bold text-white tracking-tight">Chromatic Strategy</h4>
            </div>
            
            {/* Changed to a 3-column grid for the 6 colors */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-8">
              <div className="space-y-3">
                <div className="h-20 w-full bg-[#162832] rounded-2xl border border-white/5 shadow-inner"></div>
                <div>
                  <p className="text-white font-bold text-sm">Executive Slate</p>
                  <p className="text-xs text-gray-500 font-mono mt-1">#162832</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-20 w-full bg-[#C60404] rounded-2xl border border-white/5 shadow-inner"></div>
                <div>
                  <p className="text-white font-bold text-sm">Crimson Seal</p>
                  <p className="text-xs text-gray-500 font-mono mt-1">#C60404</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-20 w-full bg-[#FFC700] rounded-2xl border border-white/5 shadow-inner"></div>
                <div>
                  <p className="text-white font-bold text-sm">Heritage Gold</p>
                  <p className="text-xs text-gray-500 font-mono mt-1">#FFC700</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-20 w-full bg-[#AACCCB] rounded-2xl border border-white/5 shadow-inner"></div>
                <div>
                  <p className="text-gray-300 font-bold text-sm">Muted Glacier</p>
                  <p className="text-xs text-gray-500 font-mono mt-1">#AACCCB</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-20 w-full bg-[#FFFFFF] rounded-2xl border border-white/20 shadow-inner"></div>
                <div>
                  <p className="text-gray-300 font-bold text-sm">Pristine White</p>
                  <p className="text-xs text-gray-500 font-mono mt-1">#FFFFFF</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-20 w-full bg-[#000000] rounded-2xl border border-white/10 shadow-inner"></div>
                <div>
                  <p className="text-gray-300 font-bold text-sm">Absolute Black</p>
                  <p className="text-xs text-gray-500 font-mono mt-1">#000000</p>
                </div>
              </div>
            </div>
          </div>

          {/* Typography */}
          <div className="bg-white/5 border border-white/10 p-10 md:p-12 rounded-[2.5rem] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-10">
                <Type className="w-6 h-6 text-[#FFC700]" />
                <h4 className="text-2xl font-bold text-white tracking-tight">Typographic Hierarchy</h4>
              </div>
              
              <div className="mb-10 border-l-2 border-[#162832] pl-6">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">Primary Brand Font</p>
                <h5 className="text-5xl text-white font-bold tracking-tighter mb-2">Bifocals</h5>
                <p className="text-gray-400 text-sm">A highly structured, geometric sans-serif that mirrors the architectural integrity of the master logo.</p>
              </div>

              <div className="border-l-2 border-[#C60404] pl-6">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">Secondary / Body Text</p>
                <h5 className="text-3xl text-white font-sans tracking-tight mb-2">Arial</h5>
                <p className="text-gray-400 text-sm">Selected for its universal corporate accessibility and supreme legibility across dense legal and real estate documents.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CORPORATE COLLATERAL (EXPANDED BENTO MOCKUP GRID) */}
      <section className="mb-32">
        <div className="mb-16 md:w-2/3">
          <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4 inline-block">Phase 02 — Real World Application</h2>
          <h3 className="text-5xl md:text-6xl font-bold text-white tracking-tighter">Corporate Touchpoints.</h3>
          <p className="text-gray-400 mt-6 text-xl font-light leading-relaxed">
            A corporate identity is only as strong as its execution across physical mediums. We translated the digital brand into high-fidelity tactile assets, applying the monogram and chromatic strategy to create a seamlessly unified corporate ecosystem.
          </p>
        </div>

        {/* 9-Image Editorial Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
          
          {/* Image 1 (Large - Spans 2 columns) */}
          <div className="rounded-[2rem] overflow-hidden border border-white/10 group relative shadow-[0_20px_40px_rgba(0,0,0,0.5)] md:col-span-2">
            <img src="/rex/mockup-1.png" alt="Corporate Asset 1" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="absolute bottom-6 left-6 z-20">
              <p className="text-white font-bold tracking-widest uppercase text-[10px] bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">01 / Brand Overview</p>
            </div>
          </div>

          {/* Image 2 (Square) */}
          <div className="rounded-[2rem] overflow-hidden border border-white/10 group relative shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
            <img src="/rex/mockup-2.png" alt="Corporate Asset 2" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute bottom-6 left-6 z-20">
              <p className="text-white font-bold tracking-widest uppercase text-[10px] bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">02 / Identity Cards</p>
            </div>
          </div>

          {/* Image 3 (Square) */}
          <div className="rounded-[2rem] overflow-hidden border border-white/10 group relative shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
            <img src="/rex/mockup-3.png" alt="Corporate Asset 3" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute bottom-6 left-6 z-20">
              <p className="text-white font-bold tracking-widest uppercase text-[10px] bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">03 / Executive Business Cards</p>
            </div>
          </div>

          {/* Image 4 (Square) */}
          <div className="rounded-[2rem] overflow-hidden border border-white/10 group relative shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
            <img src="/rex/mockup-4.png" alt="Corporate Asset 4" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute bottom-6 left-6 z-20">
              <p className="text-white font-bold tracking-widest uppercase text-[10px] bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">04 / Premium Packaging</p>
            </div>
          </div>

          {/* Image 5 (Square) */}
          <div className="rounded-[2rem] overflow-hidden border border-white/10 group relative shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
            <img src="/rex/mockup-5.png" alt="Corporate Asset 5" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute bottom-6 left-6 z-20">
              <p className="text-white font-bold tracking-widest uppercase text-[10px] bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">05 / Property Tags</p>
            </div>
          </div>

          {/* Image 6 (Large - Spans 2 columns) */}
          <div className="rounded-[2rem] overflow-hidden border border-white/10 group relative shadow-[0_20px_40px_rgba(0,0,0,0.5)] md:col-span-2">
            <img src="/rex/mockup-6.png" alt="Corporate Asset 6" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="absolute bottom-6 left-6 z-20">
              <p className="text-white font-bold tracking-widest uppercase text-[10px] bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">06 / Icons </p>
            </div>
          </div>

          {/* Image 7 (Square) */}
          <div className="rounded-[2rem] overflow-hidden border border-white/10 group relative shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
            <img src="/rex/mockup-7.png" alt="Corporate Asset 7" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute bottom-6 left-6 z-20">
              <p className="text-white font-bold tracking-widest uppercase text-[10px] bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">07 / Clothing Tags </p>
            </div>
          </div>

          {/* Image 8 (Square) */}
          <div className="rounded-[2rem] overflow-hidden border border-white/10 group relative shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
            <img src="/rex/mockup-8.png" alt="Corporate Asset 8" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute bottom-6 left-6 z-20">
              <p className="text-white font-bold tracking-widest uppercase text-[10px] bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">08 / Merchandise Integration</p>
            </div>
          </div>

          {/* Image 9 (Square) */}
          <div className="rounded-[2rem] overflow-hidden border border-white/10 group relative shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
            <img src="/rex/mockup-9.png" alt="Corporate Asset 9" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute bottom-6 left-6 z-20">
              <p className="text-white font-bold tracking-widest uppercase text-[10px] bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">09 / Letterhead </p>
            </div>
          </div>

        </div>
      </section>

      {/* Conclusion */}
      <section className="max-w-4xl mx-auto text-center mb-16 pt-24 border-t border-white/10">
        <Grid className="w-12 h-12 text-[#162832] mx-auto mb-8 bg-white/10 p-3 rounded-full" />
        <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-8">A Timeless Asset.</h3>
        <p className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-16 font-light">
          Rex Sartorial now possesses an identity that commands respect in the boardroom and translates flawlessly across global real estate portfolios. It is an identity built not for the next design cycle, but for the next century.
        </p>
      </section>

      {/* Playful Footer Link */}
      <div className="mt-12 flex flex-col items-center group text-center">
        <Link to="/" className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-[#FFC700] hover:text-black hover:border-transparent hover:-translate-y-1">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <span className="mt-4 block text-xs text-gray-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 italic">
          I’ll get you home faster than Google Maps 😉
        </span>
      </div>

    </div>
  );
}