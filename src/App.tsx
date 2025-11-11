import React from 'react';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { AnimatedBackground } from './components/AnimatedBackground';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10">
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Testimonials />
        <CTA />
      </div>
    </div>
  );
}
