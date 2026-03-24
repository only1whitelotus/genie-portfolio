import React from 'react';
import { FileText } from 'lucide-react';
import { InstagramIcon, XIcon, LinkedinIcon } from './Icons';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center border border-white/20 overflow-hidden">
            <img src="/logo.png" alt="Genie Logo" className="w-full h-full object-cover" />
          </div>
          <div className="text-2xl font-bold tracking-tighter text-white">
            Genie<span className="bg-gradient-to-r from-[#FDE047] to-[#F5B041] bg-clip-text text-transparent">.</span>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <a href="https://drive.google.com/drive/folders/1-n_6FIrqUOfvWUQgJmepnYtKQOTHpniw" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#F5B041] transition-colors flex items-center gap-1.5">
            <FileText className="w-4 h-4" /> Resume
          </a>
          <a href="https://www.behance.net/whitelotus9" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#F5B041] transition-colors">Behance</a>
          <a href="https://www.instagram.com/creativegenie1?igsh=c2ZhaTk3NGR2YmZh" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#F5B041] transition-colors flex items-center gap-1.5">
            <InstagramIcon className="w-4 h-4" /> Instagram
          </a>
          <a href="https://x.com/only1whitelotus" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#F5B041] transition-colors flex items-center gap-1.5">
            <XIcon className="w-4 h-4" /> X
          </a>
          <a href="https://www.linkedin.com/in/only1whitelotus?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#F5B041] transition-colors flex items-center gap-1.5">
            <LinkedinIcon className="w-4 h-4" /> LinkedIn
          </a>
        </div>

        <div className="text-gray-600 text-sm">
          © {new Date().getFullYear()} The Creative Genie. All rights reserved.
        </div>
      </div>
    </footer>
  );
}