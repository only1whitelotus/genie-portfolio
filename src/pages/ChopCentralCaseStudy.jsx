import React, { useEffect } from 'react';
import { ArrowLeft, ExternalLink, WifiOff, Printer, ShieldCheck, PieChart, Store, ChefHat, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ChopCentralCaseStudy() {
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
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-sm font-bold text-amber-500 mb-6 uppercase tracking-wider">
          Enterprise Case Study
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
          Chop Central <br />
          <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
            ERMS Platform.
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed mb-10">
          A custom-built, cloud-native Enterprise Restaurant Management System (ERMS) unifying a POS, Kitchen Display System, and Analytics Dashboard into a single real-time ecosystem.
        </p>
        
        {/* Deployment Status Badge */}
        <div className="flex flex-wrap gap-4">
          <div className="inline-flex items-center space-x-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full font-medium text-gray-300">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span>Deployed at: <strong className="text-white">Bells University of Technology</strong></span>
          </div>
        </div>
      </header>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24 border-y border-white/10 py-12">
        <div>
          <h4 className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-2">Role</h4>
          <p className="text-white font-medium">Product Designer <br/> & Developer</p>
        </div>
        <div>
          <h4 className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-2">Platform</h4>
          <p className="text-white font-medium">PWA <br/> (Tablets & Mobile)</p>
        </div>
        <div>
          <h4 className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-2">Stack</h4>
          <p className="text-white font-medium">React, Tailwind, <br/> Firebase Cloud</p>
        </div>
        <div>
          <h4 className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-2">Timeline</h4>
          <p className="text-white font-medium">March 2026</p>
        </div>
      </div>

      {/* The Problem & Solution */}
      <section className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-white">The Operational Nightmare</h3>
          <p className="text-gray-400 leading-relaxed text-lg">
            Prior to implementation, the campus restaurant faced massive unstructured ordering queues, severe kitchen bottlenecks, and critical revenue leakage (shrinkage) because there was no reliable way to match dispensed inventory with physical cash collected.
          </p>
        </div>
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-white">The Cloud Solution</h3>
          <p className="text-gray-400 leading-relaxed text-lg">
            I engineered a strict "Pay-First, Ticket-Second" 3-tier architecture. Transactions log at the POS, physical receipts print via the device's spooler, and items requiring preparation instantly route to a Kitchen Display System (KDS), closing all revenue loopholes.
          </p>
        </div>
      </section>

      {/* Feature Image / Graphic Placeholder */}
      <div className="w-full aspect-video bg-[#0a0a0a] rounded-3xl border border-white/10 mb-24 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/20 via-black to-red-900/10 z-0" />
        <img 
          src="/thumbnails/chop-central.jpeg" 
          alt="Chop Central POS Interface" 
          className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
        />
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div className="bg-black/80 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full text-amber-500 font-semibold flex items-center gap-2 shadow-[0_0_30px_rgba(245,158,11,0.15)]">
            <Store className="w-4 h-4" /> Point of Sale (POS) Interface
          </div>
        </div>
      </div>

      {/* Engineering Spotlights */}
      <section className="mb-24">
        <div className="mb-12">
          <h2 className="text-sm font-bold tracking-widest bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent uppercase mb-4 inline-block">Architecture</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Enterprise Engineering.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
            <WifiOff className="w-10 h-10 text-amber-500 mb-6" />
            <h4 className="text-2xl font-bold text-white mb-4">Offline-First Caching</h4>
            <p className="text-gray-400 leading-relaxed">
              To combat highly unstable campus Wi-Fi, the POS checkout is decoupled from the cloud. If the network drops, the app clears the cart, prints the receipt locally, and queues the data in the background. Once restored, it silently syncs the payload to Firestore.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
            <Printer className="w-10 h-10 text-amber-500 mb-6" />
            <h4 className="text-2xl font-bold text-white mb-4">Native Hardware Spooling</h4>
            <p className="text-gray-400 leading-relaxed">
              Standard web apps struggle with hardware, so I engineered a solution that natively hooks into the tablet's print spooler. This generates formatted 80mm thermal receipts with precise timestamps and itemized breakdowns instantaneously.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
            <ChefHat className="w-10 h-10 text-amber-500 mb-6" />
            <h4 className="text-2xl font-bold text-white mb-4">Intelligent KDS Routing</h4>
            <p className="text-gray-400 leading-relaxed">
              To prevent kitchen screen clutter, the logic engine automatically intercepts orders and filters out "Ready-Made" items (like canned drinks). It only pushes items requiring active prep to the Kitchen Display System via millisecond real-time websockets.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
            <ShieldCheck className="w-10 h-10 text-amber-500 mb-6" />
            <h4 className="text-2xl font-bold text-white mb-4">Role-Based Access Control</h4>
            <p className="text-gray-400 leading-relaxed">
              Strict RBAC ensures Cashiers can only view today's ledger to protect "Blind Close" integrity. Kitchen staff can toggle items "Sold Out" to update the POS dynamically, while Admins get global oversight and CSV exports.
            </p>
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 flex flex-col gap-6">
          <div className="p-6 bg-slate-900 border border-emerald-500/30 rounded-2xl flex items-start gap-4 shadow-[0_0_20px_rgba(16,185,129,0.05)]">
            <Activity className="w-8 h-8 text-emerald-400 shrink-0 mt-1" />
            <div>
              <h5 className="text-white font-bold mb-1">Zero Unaccounted Inventory</h5>
              <p className="text-sm text-gray-400 leading-relaxed">By enforcing a strict digital ledger and physical receipt requirement, the system virtually eliminated employee shrinkage and revenue leakage on day one.</p>
            </div>
          </div>
          <div className="p-6 bg-slate-900 border border-blue-500/30 rounded-2xl flex items-start gap-4 shadow-[0_0_20px_rgba(59,130,246,0.05)]">
            <PieChart className="w-8 h-8 text-blue-400 shrink-0 mt-1" />
            <div>
              <h5 className="text-white font-bold mb-1">Data-Driven Management</h5>
              <p className="text-sm text-gray-400 leading-relaxed">The management team now relies on live analytic widgets to track peak campus hours, identify the most profitable menu items, and reconcile exact cash vs. bank transfer values instantly.</p>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2 space-y-6">
          <h2 className="text-sm font-bold tracking-widest bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent uppercase mb-2 inline-block">The Results</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Measurable Business Impact.</h3>
          <p className="text-gray-400 leading-relaxed text-lg">
            Chop Central ERMS isn't just a UI update; it is a fundamental shift in how the business operates. It transitioned an unstructured vendor model into a highly efficient, data-driven enterprise.
          </p>
        </div>
      </section>

      {/* Playful Footer Link */}
      <div className="mt-12 flex flex-col items-center group text-center">
        <Link to="/" className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:text-amber-500 hover:border-transparent hover:-translate-y-1 hover:bg-white/10">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <span className="mt-4 block text-xs text-gray-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 italic">
          I’ll get you home faster than Google Maps 😉
        </span>
      </div>

    </div>
  );
}