import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data';

export default function CategoryPage() {
  const { category } = useParams(); // gets 'design', 'video', or 'web' from URL
  
  // Scroll to top when loading the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  const items = PORTFOLIO_ITEMS.filter(item => item.category.toLowerCase() === category);

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen relative z-10">
       <Link to="/#work" className="text-gray-400 hover:text-[#F5B041] flex items-center gap-2 mb-12 w-fit transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
       </Link>

       <h1 className="text-4xl md:text-6xl font-bold text-white mb-12 capitalize">{category} Projects</h1>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <a href={item.projectUrl} target="_blank" rel="noopener noreferrer" key={item.id} className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#0a0a0a] border border-white/5 cursor-pointer block">
              
              {/* Actual Thumbnail Image */}
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient Overlay (Tinted at the top, dark at the bottom for text readability) */}
              <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-80 group-hover:opacity-60 transition-all duration-700 ease-in-out`} />
              
              {/* Overlay texture */}
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
            </a>
          ))}
       </div>
    </div>
  );
}