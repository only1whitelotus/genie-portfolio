import React, { useState, useEffect } from 'react';
import { 
  Camera, 
  Code2, 
  PenTool, 
  Play, 
  Mail, 
  ArrowRight, 
  ExternalLink,
  MonitorPlay,
  Layers,
  FileText,
  Menu,
  X
} from 'lucide-react';

// Custom Social Icons
const InstagramIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const XIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.95H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
);

const LinkedinIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
// Mock Data
const SERVICES = [
  {
    title: 'Design & UI/UX',
    description: 'Crafting intuitive, pixel-perfect interfaces and compelling brand identities that resonate with users.',
    icon: <PenTool className="w-8 h-8 text-[#F5B041]" />,
    skills: ['Figma', 'Adobe CC', 'Brand Identity', 'Prototyping'],
    accent: 'from-orange-500/10'
  },
  {
    title: 'Video & Motion',
    description: 'Directing, producing, and editing high-impact visual stories. From concept to final cut.',
    icon: <MonitorPlay className="w-8 h-8 text-[#F5B041]" />,
    skills: ['Premiere Pro', 'After Effects', 'Directing', 'Color Grading'],
    accent: 'from-rose-500/10'
  },
  {
    title: 'Web Development',
    description: 'Building responsive, modern, and performant web applications using cutting-edge technologies.',
    icon: <Code2 className="w-8 h-8 text-[#F5B041]" />,
    skills: ['React', 'JavaScript', 'Tailwind CSS', 'Three.js'],
    accent: 'from-yellow-500/10'
  }
];

const PORTFOLIO_ITEMS = [
  { id: 1, title: 'Neon Nights', category: 'Video', role: 'Director & Editor', color: 'from-purple-900/80 to-black' },
  { id: 2, title: 'Aura FinTech', category: 'Web', role: 'Frontend Developer', color: 'from-amber-900/80 to-black' },
  { id: 3, title: 'Lumina Brand', category: 'Design', role: 'Lead Designer', color: 'from-neutral-800 to-black' },
  { id: 4, title: 'Echoes Doc', category: 'Video', role: 'Producer', color: 'from-blue-900/80 to-black' },
  { id: 5, title: 'Nexus E-Commerce', category: 'Web', role: 'Fullstack Developer', color: 'from-emerald-900/80 to-black' },
  { id: 6, title: 'Vanguard UI Kit', category: 'Design', role: 'Product Designer', color: 'from-amber-800/60 to-black' },
];

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

  const filteredItems = activeFilter === 'All' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 font-sans selection:bg-[#F5B041]/30 selection:text-[#FDE047]">
      
      {/* Custom Animations for Background */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 10s ease-in-out infinite;
          animation-delay: -5s;
        }
      `}</style>

      {/* Dynamic Background Gradients & Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[#050505] overflow-hidden">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`, backgroundSize: '40px 40px' }} />

        {/* Animated Glowing Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#F5B041]/10 blur-[120px] animate-float" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-rose-900/15 blur-[120px] animate-float-delayed" />
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-orange-900/10 blur-[120px] animate-float" style={{ animationDelay: '-2s' }} />
        <div className="absolute top-[30%] left-[40%] w-[40%] h-[40%] rounded-full bg-[#FDE047]/5 blur-[120px] animate-[pulse_8s_ease-in-out_infinite]" />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-[#050505]/80 backdrop-blur-md border-white/5 py-4' : 'bg-transparent border-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center space-x-3 relative z-50">
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/20 overflow-hidden">
              <span className="text-xs font-bold bg-gradient-to-r from-[#FDE047] to-[#F5B041] bg-clip-text text-transparent tracking-widest">LOGO</span>
            </div>
            <div className="text-xl font-bold tracking-tighter text-white hidden sm:block">
              Genie<span className="bg-gradient-to-r from-[#FDE047] to-[#F5B041] bg-clip-text text-transparent">.</span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#about" className="hover:text-[#F5B041] transition-colors">About</a>
            <a href="#expertise" className="hover:text-[#F5B041] transition-colors">Expertise</a>
            <a href="#work" className="hover:text-[#F5B041] transition-colors">Work</a>
            <a href="#contact" className="hover:text-[#F5B041] transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white relative z-50 p-2 -mr-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl transition-all duration-500 flex flex-col items-center justify-center space-y-8 md:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
         <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold text-white hover:text-[#F5B041] transition-colors">About</a>
         <a href="#expertise" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold text-white hover:text-[#F5B041] transition-colors">Expertise</a>
         <a href="#work" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold text-white hover:text-[#F5B041] transition-colors">Work</a>
         <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold text-white hover:text-[#F5B041] transition-colors">Contact</a>
      </div>

      <main className="relative z-10">
        
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 md:px-12 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 relative z-10">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-[#FDE047]/80 mb-4">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#FDE047] to-[#E67E22] animate-pulse"></span>
                <span>Available for new projects</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] text-white">
                Visionary <br />
                <span className="bg-gradient-to-r from-[#FEF08A] via-[#F5B041] to-[#E67E22] bg-clip-text text-transparent">
                  Digital Maker.
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">
                Bridging the gap between aesthetics and functionality. I am a multidisciplinary creative specializing in design, video direction, and web development.
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

            {/* Abstract Hero Graphic */}
            <div className="relative hidden lg:block h-[600px] w-full perspective-1000">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Decorative overlapping circles */}
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

        {/* About Section */}
        <section id="about" className="py-24 px-6 md:px-12 relative border-t border-white/5">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/10 group">
               <div className="absolute inset-0 bg-gradient-to-tr from-[#E67E22]/30 via-orange-900/20 to-rose-900/20 group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium">
                  [Profile Photo Placeholder]
               </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-sm font-bold tracking-widest bg-gradient-to-r from-[#FDE047] via-[#F5B041] to-[#E67E22] bg-clip-text text-transparent uppercase mb-4 inline-block">About Me</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Crafting experiences through code and lens.</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                I'm a multidisciplinary creator with a background blending technical development and visual arts. I approach every project with a dual lens: how does it look, and how does it function seamlessly?
              </p>
              <p className="text-gray-400 leading-relaxed text-lg">
                Whether I'm directing a brand film, designing a user interface, or writing clean React code, my goal is always to build immersive digital experiences that leave a lasting impact.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                 <div className="flex flex-col">
                   <span className="text-3xl font-bold text-white">5+</span>
                   <span className="text-sm text-gray-500">Years Experience</span>
                 </div>
                 <div className="w-px h-12 bg-white/10 mx-4 hidden sm:block"></div>
                 <div className="flex flex-col">
                   <span className="text-3xl font-bold text-white">50+</span>
                   <span className="text-sm text-gray-500">Projects Delivered</span>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section id="expertise" className="py-24 px-6 md:px-12 bg-black/50 border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 md:mb-24">
              <h2 className="text-sm font-bold tracking-widest bg-gradient-to-r from-[#FDE047] via-[#F5B041] to-[#E67E22] bg-clip-text text-transparent uppercase mb-4 inline-block">My Arsenal</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Triple Threat Creative.</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {SERVICES.map((service, index) => (
                <div key={index} className="group relative bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 hover:border-[#F5B041]/30 transition-all duration-500 hover:-translate-y-2">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                      {service.icon}
                    </div>
                    <h4 className="text-xl font-bold text-white mb-4">{service.title}</h4>
                    <p className="text-gray-400 mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.skills.map((skill, i) => (
                        <span key={i} className="text-xs font-medium px-3 py-1 bg-white/5 text-gray-300 rounded-full border border-white/10">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Selected Work Section */}
        <section id="work" className="py-24 md:py-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
              <div>
                <h2 className="text-sm font-bold tracking-widest bg-gradient-to-r from-[#FDE047] via-[#F5B041] to-[#E67E22] bg-clip-text text-transparent uppercase mb-4 inline-block">Portfolio</h2>
                <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Selected Works.</h3>
              </div>
              
              {/* Filters */}
              <div className="flex flex-wrap gap-2">
                {['All', 'Design', 'Video', 'Web'].map(filter => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeFilter === filter 
                        ? 'bg-gradient-to-r from-[#FDE047] via-[#F5B041] to-[#E67E22] text-black border border-transparent' 
                        : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <div key={item.id} className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#0a0a0a] border border-white/5 cursor-pointer">
                  {/* Mock Image Area (Gradient) */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-in-out`} />
                  
                  {/* Overlay texture */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20" />

                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex items-center justify-between mb-3">
                        <span className="bg-gradient-to-r from-[#FDE047] to-[#F5B041] bg-clip-text text-transparent text-xs font-bold tracking-wider uppercase">
                          {item.category}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                          <ExternalLink className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View More Button */}
            {activeFilter !== 'All' && (
              <div className="mt-16 text-center">
                <a href="#" className="relative inline-flex items-center space-x-3 bg-transparent border border-white/20 hover:border-transparent px-8 py-4 rounded-full font-semibold transition-all duration-300 group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FDE047] via-[#F5B041] to-[#E67E22] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 group-hover:text-black transition-colors duration-300">View more {activeFilter} projects</span>
                  <ArrowRight className="relative z-10 w-4 h-4 group-hover:text-black transition-colors duration-300" />
                </a>
              </div>
            )}
          </div>
        </section>

        {/* CTA / Contact Section */}
        <section id="contact" className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
          {/* Subtle background element */}
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

      </main>

     {/* Footer */}
      <footer className="border-t border-white/10 bg-black py-12 px-6 md:px-12 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center border border-white/20">
              <span className="text-[10px] font-bold bg-gradient-to-r from-[#FDE047] to-[#F5B041] bg-clip-text text-transparent tracking-widest">LOGO</span>
            </div>
            <div className="text-2xl font-bold tracking-tighter text-white">
              Genie<span className="bg-gradient-to-r from-[#FDE047] to-[#F5B041] bg-clip-text text-transparent">.</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            <a href="#" className="text-gray-400 hover:text-[#F5B041] transition-colors flex items-center gap-1.5">
              <FileText className="w-4 h-4" /> Resume
            </a>
            <a href="#" className="text-gray-400 hover:text-[#F5B041] transition-colors">Behance</a>
            <a href="#" className="text-gray-400 hover:text-[#F5B041] transition-colors flex items-center gap-1.5">
              <InstagramIcon className="w-4 h-4" /> Instagram
            </a>
            <a href="#" className="text-gray-400 hover:text-[#F5B041] transition-colors flex items-center gap-1.5">
              <XIcon className="w-4 h-4" /> X
            </a>
            <a href="#" className="text-gray-400 hover:text-[#F5B041] transition-colors flex items-center gap-1.5">
              <LinkedinIcon className="w-4 h-4" /> LinkedIn
            </a>
          </div>

          <div className="text-gray-600 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
