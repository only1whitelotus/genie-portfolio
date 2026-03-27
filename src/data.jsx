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
    skills: ['Davinci Resolve', 'After Effects', 'Directing', 'Storyboarding', 'Motion Design', ],
    accent: 'from-rose-500/10'
  },
  {
    title: 'Web Development',
    description: 'Building responsive, modern, and performant web applications using cutting-edge technologies.',
    icon: <Code2 className="w-8 h-8 text-[#F5B041]" />,
    skills: ['React', 'JavaScript', 'Tailwind CSS', 'Astro', 'Framer Motion', 'Firebase', 'Python'],
    accent: 'from-yellow-500/10'
  }
];

export const PORTFOLIO_ITEMS = [
  { 
    id: 1, 
    title: 'Reckless Era Launch', 
    category: 'Video', 
    role: 'Director & Editor', 
    color: 'from-red-900/80 to-black',
    image: '/thumbnails/reck1.jpeg',
    projectUrl: '/category/video#reckless-era-collection-launch' 
  },
  { 
    id: 2, 
    title: 'Chop Central ERMS', 
    category: 'Web', 
    role: 'Fullstack Developer', 
    color: 'from-amber-900/80 to-black',
    image: '/thumbnails/chop-central.png',
    projectUrl: '/project/chop-central'
  },
  { 
    id: 3, 
    title: 'Ecoloop Brand', 
    category: 'Design', 
    role: 'Brand Architect & Product Designer', 
    color: 'from-neutral-800 to-black',
    image: '/thumbnails/ecoloop-main.png',
    projectUrl: '/project/ecoloop' 
  },
  { 
    id: 4, 
    title: 'Channel Opener Animation', 
    category: 'Video', 
    role: 'Motion Designer', 
    color: 'from-purple-900/80 to-black',
    image: '/thumbnails/yte.jpeg',
    projectUrl: '/category/video#channel-opener-animation' 
  },
  { 
    id: 5, 
    title: 'Fantasy BUSA League', 
    category: 'Web', 
    role: 'Lead Software Designer & Developer', 
    color: 'from-emerald-900/80 to-black',
    image: '/thumbnails/fbl.png',
    projectUrl: '/project/fbl' 
  },
  { 
    id: 6, 
    title: 'Swiftlink UI Kit', 
    category: 'Design', 
    role: 'Product Designer', 
    color: 'from-amber-800/60 to-black',
    image: '/thumbnails/swiftlink.png',
    projectUrl: 'https://ecoloop-chi.vercel.app' 
  },
  { 
    id: 7, 
    title: 'Foodify Branding', 
    category: 'Design', 
    role: 'Brand Designer', 
    color: 'from-blue-900/80 to-black',
    image: '/thumbnails/foodify.jpeg',
    projectUrl: 'https://www.behance.net/gallery/205022403/Foodify-%28Brand-Identity%29' 
  },
  { 
    id: 8, 
    title: 'Fruision – Visualizer', 
    category: 'Video', 
    role: 'Editor & Motion', 
    color: 'from-orange-900/80 to-black',
    image: '/thumbnails/fruison.jpeg',
    projectUrl: '/category/video#fruision-product-visualizer' 
  },
];