/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CustomCursor } from './components/CustomCursor.tsx';
import { BreathingBackground } from './components/BreathingBackground.tsx';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { ManifestoSection } from './components/ManifestoSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { ApproachSection } from './components/ApproachSection.tsx';
import { ClinicSection } from './components/ClinicSection.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { SensoryIndicator } from './components/SensoryIndicator.tsx';
import { useSmoothScroll } from './hooks/useSmoothScroll.ts';

export default function App() {
  // Activate buttery smooth momentum scrolling
  useSmoothScroll();

  return (
    <div className="relative min-h-screen text-[#2C302E] selection:bg-[#8A9A86]/25 selection:text-[#2C302E] overflow-x-hidden">
      {/* 1. Interactive Custom Cursor with Magnetic Follow */}
      <CustomCursor />

      {/* 2. Fluid Breathing Background with Sage & Sand Gradients */}
      <BreathingBackground />

      {/* 3. Navigation Bar (Top Bar Contract) */}
      <Navbar />

      {/* 4. Main Sensory Journey Content */}
      <main className="relative z-10">
        {/* Hero Section with Cascading Typography & Parallax Image */}
        <HeroSection />

        {/* Sensory Breathing Pause & Reflective Manifesto */}
        <ManifestoSection />

        {/* About Susan Moraes with 3D Tilt Portrait & Ethical Pillars */}
        <AboutSection />

        {/* Clinical Approach & Modalities (Presencial & Online) */}
        <ApproachSection />

        {/* Sanctuary Atmosphere: Full-Width Consultorio Parallax Showcase */}
        <ClinicSection />

        {/* Interactive FAQ Accordion */}
        <FaqSection />

        {/* Minimalist Contact Form with Animated Expanding Underlines */}
        <ContactSection />
      </main>

      {/* 5. Ethical & Serene Footer with Crisis Hotline Notices */}
      <Footer />

      {/* 6. Discreet Sensory Journey Status Pill */}
      <SensoryIndicator />
    </div>
  );
}
