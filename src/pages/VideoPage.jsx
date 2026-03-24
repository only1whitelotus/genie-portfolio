import React, { useEffect } from 'react';
import { ArrowLeft, Play, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const VIDEO_SECTIONS = [
  {
    heading: "Reckless Era",
    subtitle: "Fashion Brand – Collection Launch Videos",
    videos: [
      {
        type: "self",
        title: "Reckless Era Collection Launch",
        description: "A bold, high-energy launch trailer built to introduce the Reckless Era collection with attitude and edge. My role: Director & Video Editor",
        src: "/videos/reck.MOV",
        poster: "/thumbnails/reck1.jpeg",
      },
      {
        type: "ig",
        title: "Reckless Era – Launch Reel",
        description: "A short video explaining what it means to be reckless showcasing visuals that express the brand's ideas and values (boldness and confidence). Credits: Shot by Techboy, Directed and Editied by me",
        link: "https://www.instagram.com/reel/DDU6I57NMIG/?igsh=MWpwcWhkZXJsNXFkcA==",
        thumbnail: "/thumbnails/reck2.jpeg",
      },
      {
        type: "ig",
        title: "Reckless Era – Reel 02",
        description: "A playfully structured video showcasing different personalities that wear the brand. Credits: Shot by Techboy, Directed and Editied by me",
        link: "https://www.instagram.com/reel/DGQvlGzNw4-/?igsh=MXFvNDN3dWoxemNiYQ==",
        thumbnail: "/thumbnails/reck3.jpeg",
      },
    ],
  },
  {
    heading: "YouTube Channel Opener",
    subtitle: "Channel Identity & Motion",
    videos: [
      {
        type: "self",
        title: "Channel Opener Animation",
        description: "A short-form opener designed to instantly set tone, energy, and brand personality.",
        src: "/videos/yte.mp4",
        poster: "/thumbnails/yte.jpeg",
      },
    ],
  },
  {
    heading: "Ciddy Fashion House",
    subtitle: "Fashion Brand – Collection Launch Videos",
    videos: [
      {
        type: "self",
        title: "Ciddy Collection Launch Film",
        description: "Short social cut built for reach while maintaining brand elegance.",
        src: "/videos/ciddy.MP4",
        poster: "/thumbnails/ciddy.jpeg",
      },
      {
        type: "ig",
        title: "Ciddy – Instagram Reel",
        description: "A clean, cinematic launch video crafted to position Ciddy as a premium fashion brand. Credits: Shot by Techboy, Directed by me, Edited by Uthman Olapade",
        link: "https://www.instagram.com/reel/C0a5dmbISmW/?igsh=bXhyd3R4dHQ1Z3c2",
        thumbnail: "/thumbnails/ciddy2.jpeg",
      },
    ],
  },
  {
    heading: "Fruision",
    subtitle: "Product Visualizer",
    videos: [
      {
        type: "self",
        title: "Fruision – Product Visualizer",
        description: "A stylized visualizer displaying a fruit drink product in different flavours (This video is one of many from a joint project). Credits: Uthman Olapade & Akinola Akinjide",
        src: "/videos/fruison.MOV",
        poster: "/thumbnails/fruison.jpeg",
      },
    ],
  },
  {
    heading: "BUSEC Spotlight Awards",
    subtitle: "Announcement Video",
    videos: [
      {
        type: "ig",
        title: "BUSEC Spotlight Awards Announcement",
        description: "Announcement reel designed for clarity, excitement, and shareability. Shot and Directed by me, edited by Uthman Olapade & Daniel Adekoya",
        link: "https://www.instagram.com/reel/C6XJEyroJ74/?igsh=ZWZ3M244OG92dzVr",
        thumbnail: "/thumbnails/busec.jpeg",
      },
    ],
  },
];

export default function VideoPage() {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen relative z-10">
      <Link to="/#work" className="text-gray-400 hover:text-[#F5B041] flex items-center gap-2 mb-12 w-fit transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Portfolio
      </Link>

      <div className="mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          Video <span className="bg-gradient-to-r from-[#FDE047] via-[#F5B041] to-[#E67E22] bg-clip-text text-transparent">Portfolio.</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl">
          A curated selection of video work across fashion, branding, and social campaigns.
        </p>
      </div>

      <div className="space-y-24">
        {VIDEO_SECTIONS.map((section, idx) => (
          <section key={idx} className="relative">
            <header className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">{section.heading}</h2>
              <p className="text-[#F5B041] text-sm font-semibold tracking-wider uppercase">{section.subtitle}</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.videos.map((video, vIdx) => (
                <article key={vIdx} className="group flex flex-col bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden hover:border-[#F5B041]/40 transition-all duration-300 hover:-translate-y-1">
                  
                  {/* Media Area */}
                  <div className="relative aspect-[4/5] sm:aspect-video md:aspect-[4/5] overflow-hidden bg-black">
                    {video.type === "self" ? (
                      <video
                        src={video.src}
                        poster={video.poster}
                        controls
                        preload="metadata"
                        playsInline
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <a href={video.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative cursor-pointer">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                            <Play className="w-5 h-5 text-white fill-white ml-1" />
                          </div>
                        </div>
                        <div className="absolute bottom-4 right-4 bg-black/90 text-[#F5B041] px-4 py-1.5 rounded-full text-xs font-bold tracking-wide border border-white/10 flex items-center gap-2">
                          Watch on IG <ExternalLink className="w-3 h-3" />
                        </div>
                      </a>
                    )}
                  </div>

                  {/* Text Area */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#F5B041] transition-colors">{video.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{video.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
      
      {/* Playful Footer Link */}
      <div className="mt-32 flex flex-col items-center group text-center">
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