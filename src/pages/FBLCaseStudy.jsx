import React, { useEffect } from 'react';
import { ArrowLeft, ExternalLink, Code2, Database, ShieldAlert, Zap, Clock, Layout, Server, Smartphone, Lock, Map, MonitorSmartphone, Gamepad2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FBLCaseStudy() {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen relative z-10">
      
      {/* Back Navigation */}
      <Link to="/#work" className="text-gray-400 hover:text-[#F5B041] flex items-center gap-2 mb-12 w-fit transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Portfolio
      </Link>

      {/* Hero Section */}
      <header className="mb-20">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#F5B041]/10 border border-[#F5B041]/20 text-sm font-bold text-[#F5B041] mb-6 uppercase tracking-wider">
          Case Study
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
          Fantasy BUSA League <br />
          <span className="bg-gradient-to-r from-[#FDE047] via-[#F5B041] to-[#E67E22] bg-clip-text text-transparent">
            Web Application.
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed mb-10">
          A highly engaging, real-time Fantasy Football web application tailored specifically to gamify the campus sports experience, increasing viewership and student interaction.
        </p>
        
        {/* Launch Status Badge */}
        <div className="flex flex-wrap gap-4">
          <div className="inline-flex items-center space-x-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full font-medium text-gray-300">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F5B041] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#F5B041]"></span>
            </span>
            <span>Public Launch: <strong className="text-white">September 2026</strong></span>
          </div>
        </div>
      </header>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-24 border-y border-white/10 py-12">
        <div>
          <h4 className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-2">Role</h4>
          <p className="text-white font-medium">Lead Software Designer <br/> & Developer</p>
        </div>
        <div>
          <h4 className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-2">Platform</h4>
          <p className="text-white font-medium">Serverless SPA <br/> (Web & Mobile)</p>
        </div>
        <div>
          <h4 className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-2">Stack</h4>
          <p className="text-white font-medium leading-relaxed">
            React 18, JavaScript, <br/> Tailwind, Firebase, <br/> FCM & Google cloud <span className="text-[#F5B041] text-xs font-bold ml-1 px-2 py-0.5 rounded bg-[#F5B041]/10">+ more</span>
          </p>
        </div>
        <div>
          <h4 className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-2">Duration</h4>
          <p className="text-white font-medium">Oct 2024 - Present</p>
        </div>
        <div>
          <h4 className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-2">Status</h4>
          <p className="text-[#F5B041] font-medium">In Active Development</p>
        </div>
      </div>

      {/* The Problem & Solution */}
      <section className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-white">The Challenge</h3>
          <p className="text-gray-400 leading-relaxed text-lg">
            University football tournaments generate massive on-campus excitement, but fan engagement usually ends when the final whistle blows. There was no digital platform to sustain interaction, debate, and competition among fans throughout the week.
          </p>
        </div>
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-white">The Solution</h3>
          <p className="text-gray-400 leading-relaxed text-lg">
            I architected and developed a full-scale Fantasy Football platform. By allowing students to act as virtual managers with a ₦100.0m virtual budget, we gamified the campus football experience. It bridges the gap between casual fans and hardcore tacticians.
          </p>
        </div>
      </section>

      {/* Feature Image / Graphic Placeholder */}
      <div className="w-full aspect-video bg-[#0a0a0a] rounded-3xl border border-white/10 mb-24 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/20 via-black to-emerald-900/10 z-0" />
        <img 
          src="/thumbnails/fbl.png" 
          alt="Fantasy BUSA League Interface" 
          className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
        />
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div className="bg-black/80 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full text-[#F5B041] font-semibold flex items-center gap-2 shadow-[0_0_30px_rgba(245,176,65,0.15)]">
            <Smartphone className="w-4 h-4" /> Sports Broadcast Premium UI
          </div>
        </div>
      </div>

      {/* Engineering Spotlights */}
      <section className="mb-24">
        <div className="mb-12">
          <h2 className="text-sm font-bold tracking-widest bg-gradient-to-r from-[#FDE047] via-[#F5B041] to-[#E67E22] bg-clip-text text-transparent uppercase mb-4 inline-block">Architecture</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Engineering Spotlights.</h3>
        </div>

        {/* Phase 2 Spotlight - Full Width */}
        <div className="bg-gradient-to-br from-white/5 to-transparent border border-[#F5B041]/20 p-8 md:p-10 rounded-3xl mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F5B041]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
            <div className="p-4 bg-black/50 rounded-2xl border border-white/10">
              <Gamepad2 className="w-12 h-12 text-[#F5B041]" />
            </div>
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-[#F5B041]/20 text-[#F5B041] text-xs font-bold uppercase tracking-wider mb-3">Phase 2 Delivery</div>
              <h4 className="text-3xl font-bold text-white mb-4">Tactical Game Chips Engine</h4>
              <p className="text-gray-400 leading-relaxed text-lg max-w-3xl">
                To deepen tactical strategy and drive Weekly Active User (WAU) engagement, I engineered advanced one-time multipliers. The scoring engine handles complex isolated state evaluations for <strong>Triple Captain</strong> (3x points), <strong>Bench Boost</strong> (15-player scoring), and <strong>Wildcard</strong> (Unlimited budget-constrained transfers), fundamentally altering how the database parses a user's locked snapshot for that specific Gameweek.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
            <Clock className="w-10 h-10 text-[#F5B041] mb-6" />
            <h4 className="text-2xl font-bold text-white mb-4">Time-Machine Snapshots</h4>
            <p className="text-gray-400 leading-relaxed">
              To prevent users from transferring players who already scored points, I built a dual-state architecture. At the deadline, the system safely clones the user's "Live Team" into a permanent, read-only snapshot. The scoring engine calculates points strictly based on these locked snapshots.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
            <Zap className="w-10 h-10 text-[#F5B041] mb-6" />
            <h4 className="text-2xl font-bold text-white mb-4">Greedy Smart-Fill Algorithm</h4>
            <p className="text-gray-400 leading-relaxed">
              For casual players, I engineered an O(N log N) Auto-Pick algorithm. It calculates baseline survival costs, reserves budget for empty slots, and iterates slot-by-slot to draft the highest-scoring players possible without breaking the strict ₦100.0m cap or 4-player team limits.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
            <Server className="w-10 h-10 text-[#F5B041] mb-6" />
            <h4 className="text-2xl font-bold text-white mb-4">Safe Batch Chunking</h4>
            <p className="text-gray-400 leading-relaxed">
              Firebase imposes a strict limit of 500 document writes per transaction. To handle Gameweek lockouts and point calculations for thousands of users simultaneously, the Admin engine automatically splits payload arrays into chunks of 400, bypassing database quota crashes.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
            <ShieldAlert className="w-10 h-10 text-[#F5B041] mb-6" />
            <h4 className="text-2xl font-bold text-white mb-4">Time-Sync Anti-Cheat</h4>
            <p className="text-gray-400 leading-relaxed">
              To prevent malicious users from changing their device's local clock to bypass the Gameweek deadline, the app fetches true UTC network time via API on initialization, calculating a tamper-proof offset used for all lockout logic.
            </p>
          </div>
        </div>
      </section>

      {/* The Admin God-Mode */}
      <section className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 flex flex-col gap-6">
          <div className="p-6 bg-slate-900 border border-purple-500/30 rounded-2xl flex items-start gap-4 shadow-[0_0_20px_rgba(168,85,247,0.1)]">
            <Database className="w-8 h-8 text-purple-400 shrink-0 mt-1" />
            <div>
              <h5 className="text-white font-bold mb-1">Bulk CSV Data Ingestion</h5>
              <p className="text-sm text-gray-400 leading-relaxed">Admins can upload massive player and fixture datasets instantly via CSV. The system cross-references database IDs and zero-fills invalid stats in real-time to prevent mathematical corruption.</p>
            </div>
          </div>
          <div className="p-6 bg-slate-900 border border-red-500/30 rounded-2xl flex items-start gap-4 shadow-[0_0_20px_rgba(239,68,68,0.05)]">
            <Lock className="w-8 h-8 text-red-400 shrink-0 mt-1" />
            <div>
              <h5 className="text-white font-bold mb-1">DANGER ZONES & Auto-Healing</h5>
              <p className="text-sm text-gray-400 leading-relaxed">Destructive tasks (like wiping the DB or calculating points) require exact string-match confirmation. Built-in healing scripts automatically repair broken player ID references across thousands of user accounts.</p>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2 space-y-6">
          <h2 className="text-sm font-bold tracking-widest bg-gradient-to-r from-[#FDE047] via-[#F5B041] to-[#E67E22] bg-clip-text text-transparent uppercase mb-2 inline-block">Backend Management</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">The "God-Mode" Admin Dashboard.</h3>
          <p className="text-gray-400 leading-relaxed text-lg">
            Building the user-facing app was only half the challenge. I developed a secure, role-based administrative dashboard that allows league organizers to manage the entire ecosystem without touching a single line of code.
          </p>
        </div>
      </section>

      {/* NEW SECTION: Mobile System Showcase Gallery */}
      <section className="mb-32">
        <div className="mb-12">
          <h2 className="text-sm font-bold tracking-widest bg-gradient-to-r from-[#FDE047] via-[#F5B041] to-[#E67E22] bg-clip-text text-transparent uppercase mb-4 inline-block flex items-center gap-2">
            <MonitorSmartphone className="w-4 h-4" /> User Interface
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Mobile App Showcase.</h3>
          <p className="text-gray-400 mt-4 text-lg max-w-2xl">
            A comprehensive look at the custom-designed PWA mobile interfaces. The app features a high-contrast "Sports Broadcast Premium" aesthetic for players, and a rigorous, data-dense layout for Administrators.
          </p>
        </div>

        {/* 10-Image Mobile Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          
          {/* User Side */}
          <div className="group flex flex-col gap-3">
            <div className="rounded-[2rem] overflow-hidden bg-[#0a0a0a] border-[6px] border-[#1a1a1a] shadow-2xl">
              <img src="/Userhome.jpeg" alt="Player Dashboard" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
            </div>
            <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest">Dashboard</p>
          </div>

          <div className="group flex flex-col gap-3">
            <div className="rounded-[2rem] overflow-hidden bg-[#0a0a0a] border-[6px] border-[#1a1a1a] shadow-2xl">
              <img src="/Transfertab.jpeg" alt="Team Pitch" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
            </div>
            <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest">15-Man Pitch</p>
          </div>

          <div className="group flex flex-col gap-3">
            <div className="rounded-[2rem] overflow-hidden bg-[#0a0a0a] border-[6px] border-[#1a1a1a] shadow-2xl">
              <img src="/Statscenter.jpeg" alt="Global Leaderboard" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
            </div>
            <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest">Leaderboards</p>
          </div>

          <div className="group flex flex-col gap-3">
            <div className="rounded-[2rem] overflow-hidden bg-[#0a0a0a] border-[6px] border-[#1a1a1a] shadow-2xl">
              <img src="/Playermodal.jpeg" alt="Player Stats" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
            </div>
            <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest">Deep Analytics</p>
          </div>

          <div className="group flex flex-col gap-3">
            <div className="rounded-[2rem] overflow-hidden bg-[#0a0a0a] border-[6px] border-[#1a1a1a] shadow-2xl">
              <img src="/Usersettings.jpeg" alt="Manager Settings" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
            </div>
            <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest">Manager Settings</p>
          </div>

          <div className="group flex flex-col gap-3">
            <div className="rounded-[2rem] overflow-hidden bg-[#0a0a0a] border-[6px] border-[#1a1a1a] shadow-2xl">
              <img src="/Rules.jpeg" alt="Game Rules" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
            </div>
            <p className="text-center text-xs font-bold text-purple-400 uppercase tracking-widest">Global Rules</p>
          </div>

          {/* Admin Side */}
          <div className="group flex flex-col gap-3">
            <div className="rounded-[2rem] overflow-hidden bg-[#0a0a0a] border-[6px] border-purple-900/30 shadow-2xl">
              <img src="/Adminhome.jpeg" alt="Admin Upload" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
            </div>
            <p className="text-center text-xs font-bold text-purple-400 uppercase tracking-widest">CSV Upload</p>
          </div>

          <div className="group flex flex-col gap-3">
            <div className="rounded-[2rem] overflow-hidden bg-[#0a0a0a] border-[6px] border-purple-900/30 shadow-2xl">
              <img src="/Adminprofile.jpeg" alt="Admin Database" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
            </div>
            <p className="text-center text-xs font-bold text-purple-400 uppercase tracking-widest">DB Setup</p>
          </div>

          <div className="group flex flex-col gap-3">
            <div className="rounded-[2rem] overflow-hidden bg-[#0a0a0a] border-[6px] border-purple-900/30 shadow-2xl">
              <img src="/Adminsettings.jpeg" alt="Admin Season Config" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
            </div>
            <p className="text-center text-xs font-bold text-purple-400 uppercase tracking-widest">Season Config</p>
          </div>

          <div className="group flex flex-col gap-3">
            <div className="rounded-[2rem] overflow-hidden bg-[#0a0a0a] border-[6px] border-purple-900/30 shadow-2xl">
              <img src="/News.jpeg" alt="Admin News Editor" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
            </div>
            <p className="text-center text-xs font-bold text-purple-400 uppercase tracking-widest">News Editor</p>
          </div>

        </div>
      </section>

      {/* Product Roadmap */}
      <section className="mb-16 text-center max-w-4xl mx-auto border-t border-white/10 pt-24">
        <Map className="w-12 h-12 text-[#F5B041] mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-white mb-6">Product Vision & Roadmap</h2>
        <p className="text-gray-400 leading-relaxed text-lg mb-8">
          The launch in 2026 is just the foundation. I architected the codebase with modularity in mind to support massive future scaling, including shifting the focus to community competition and B2B SaaS solutions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <div className="bg-white/5 border border-white/10 px-6 py-4 rounded-xl flex-1 text-left">
            <span className="text-[#F5B041] font-bold text-sm uppercase tracking-wider block mb-2">Phase 3</span>
            <span className="text-white font-medium block">P2P Mini-Leagues & Dynamic Pricing</span>
          </div>
          <div className="bg-white/5 border border-white/10 px-6 py-4 rounded-xl flex-1 text-left">
            <span className="text-[#F5B041] font-bold text-sm uppercase tracking-wider block mb-2">Phase 4</span>
            <span className="text-white font-medium block">B2B SaaS White-Labeling Platform</span>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Conclusion */}
      <section className="max-w-4xl mx-auto text-center mb-16 px-4">
        <div className="bg-gradient-to-r from-transparent via-[#F5B041]/10 to-transparent h-px w-full mb-12"></div>
        <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">More Than Just a Game.</h3>
        <p className="text-xl text-gray-400 leading-relaxed">
          Fantasy BUSA League represents the intersection of complex systems engineering and human-centric design. By merging predictive algorithms with a premium aesthetic, I built an ecosystem that doesn't just display sports data—it turns casual campus viewers into deeply invested tacticians.
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