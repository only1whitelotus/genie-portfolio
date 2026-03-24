import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

export default function Portfolio({ activeFilter, setActiveFilter, filteredItems }) {
  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-sm font-bold tracking-widest bg-gradient-to-r from-[#FDE047] via-[#F5B041] to-[#E67E22] bg-clip-text text-transparent uppercase mb-4 inline-block">Portfolio</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Selected Works.</h3>
          </div>
          
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#0a0a0a] border border-white/5 cursor-pointer">
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-in-out`} />
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20" />

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
  );
}