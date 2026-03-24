import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Expertise from '../components/Expertise';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main className="relative z-10">
      <Hero />
      <About />
      <Expertise />
      <Portfolio />
      <Contact />
    </main>
  );
}