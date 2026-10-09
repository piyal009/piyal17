/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { MachineSimulator } from './components/MachineSimulator';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleOpenResume = () => {
    setIsResumeModalOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeModalOpen(false);
  };

  const handleScrollToSimulation = () => {
    const el = document.getElementById('simulation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* 3-Zone Top Navigation Contract */}
      <Navbar onOpenResume={handleOpenResume} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Split Hero with GSAP, Three.js 3D Core, and KPI Strip */}
        <Hero
          onOpenResume={handleOpenResume}
          onSelectSimulation={handleScrollToSimulation}
        />

        {/* Professional About & Dual Discipline Focus */}
        <AboutSection onOpenResume={handleOpenResume} />

        {/* 8+ Years BAT Bangladesh Industrial Timeline */}
        <ExperienceSection />

        {/* Interactive Gdx2 & Cyber-OT Operations Lab Simulator */}
        <MachineSimulator />

        {/* Dual Competency Skills Matrix with Anime.js */}
        <SkillsSection />

        {/* Education, Diplomas & Certifications */}
        <EducationSection />

        {/* Direct Contact, Live Dhaka Time & Inquiries */}
        <ContactSection />
      </main>

      {/* Clean Footer */}
      <Footer onOpenResume={handleOpenResume} />

      {/* Printable / Downloadable Full Curriculum Vitae Modal */}
      <ResumeModal isOpen={isResumeModalOpen} onClose={handleCloseResume} />
    </div>
  );
}
