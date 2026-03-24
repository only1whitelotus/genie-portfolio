import React from 'react';
import { SERVICES } from '../data';

export default function Expertise() {
  return (
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
  );
}