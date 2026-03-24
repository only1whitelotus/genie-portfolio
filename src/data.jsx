import React from 'react';
import { PenTool, MonitorPlay, Code2 } from 'lucide-react';

export const SERVICES = [
  {
    title: 'Design & UI/UX',
    description: 'Crafting intuitive, pixel-perfect interfaces and compelling brand identities that resonate with users.',
    icon: <PenTool className="w-8 h-8 text-[#F5B041]" />,
    skills: ['Adobe CC', 'Figma', 'Brand Identity', 'Illustrations', 'Prototyping'],
    accent: 'from-orange-500/10'
  },
  {
    title: 'Video & Motion',
    description: 'Directing, producing, and editing high-impact visual stories. From concept to final cut.',
    icon: <MonitorPlay className="w-8 h-8 text-[#F5B041]" />,
    skills: ['Davinci Resolve', 'After Effects', 'Directing', 'Storyboarding'],
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

export const PORTFOLIO_ITEMS = [
  { id: 1, title: 'Neon Nights', category: 'Video', role: 'Director & Editor', color: 'from-purple-900/80 to-black', projectUrl: 'https://youtube.com' },
  { id: 2, title: 'Chop Central ERMS', category: 'Web', role: 'Fullstack Developer', color: 'from-amber-900/80 to-black', projectUrl: 'https://only1whitelotus.github.io/chop-central-case-study' },
  { id: 3, title: 'Ecoloop Brand', category: 'Design', role: 'Lead Designer', color: 'from-neutral-800 to-black', projectUrl: 'https://ecoloop-chi.vercel.app' },
  { id: 4, title: 'Echoes Doc', category: 'Video', role: 'Producer', color: 'from-blue-900/80 to-black', projectUrl: 'https://ecoloop-chi.vercel.app' },
  { id: 5, title: 'Fantasy BUSA League', category: 'Web', role: 'Lead Software Designer & Developer', color: 'from-emerald-900/80 to-black', projectUrl: 'https://ecoloop-chi.vercel.app' },
  { id: 6, title: 'Swiftlink UI Kit', category: 'Design', role: 'Product Designer', color: 'from-amber-800/60 to-black', projectUrl: 'https://ecoloop-chi.vercel.app' },
  { 
    id: 7, 
    title: 'New Design Concept', 
    category: 'Design', 
    role: 'Visual Designer', 
    color: 'from-blue-900/80 to-black', 
    projectUrl: 'https://behance.net/your-new-project' 
  },
  { 
    id: 8, 
    title: 'Cool App Promo', 
    category: 'Video', 
    role: 'Director', 
    color: 'from-rose-900/80 to-black', 
    projectUrl: 'https://youtube.com/your-new-video' 
  },
];