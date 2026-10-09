import React, { useState, useEffect, useRef } from 'react';
import { animate } from 'animejs';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { ShieldCheck, Cog, Wrench, Award, CheckCircle } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);
  const [selectedSkillIndex, setSelectedSkillIndex] = useState<number>(0);
  const skillBarsRef = useRef<HTMLDivElement>(null);

  const activeCategory = SKILL_CATEGORIES[activeCategoryIndex];
  const activeSkill = activeCategory.skills[selectedSkillIndex] || activeCategory.skills[0];

  // Animate skill progress bars with Anime.js whenever category changes
  useEffect(() => {
    if (!skillBarsRef.current) return;
    const progressBars = skillBarsRef.current.querySelectorAll<HTMLElement>('.skill-bar-fill');

    progressBars.forEach((bar, i) => {
      const targetWidth = bar.getAttribute('data-target-width') || '0%';
      animate(bar, {
        width: targetWidth,
        ease: 'outExpo',
        duration: 900,
        delay: i * 80,
      });
    });
  }, [activeCategoryIndex]);

  const categoryIcons = [
    <Cog key="0" className="w-4 h-4 text-cyan-400" />,
    <ShieldCheck key="1" className="w-4 h-4 text-purple-400" />,
    <Wrench key="2" className="w-4 h-4 text-amber-400" />,
    <Award key="3" className="w-4 h-4 text-emerald-400" />,
  ];

  return (
    <section id="skills" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
            <span>03</span>
            <span>·</span>
            <span>Core Competencies</span>
            <span>·</span>
            <span>Mechanical & OT Security Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Dual-Discipline Technical Capabilities
          </h2>
          <p className="mt-3 text-slate-400 text-base leading-relaxed">
            Bridging heavy industrial machine shop and high-speed packaging floor operations with
            modern operational technology (OT) cybersecurity engineering.
          </p>
        </div>

        {/* Category Filter Tabs (Interactive Segmented Control) */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-900/90 border border-slate-800 rounded-2xl mb-8">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const isActive = idx === activeCategoryIndex;
            return (
              <button
                key={cat.category}
                onClick={() => {
                  setActiveCategoryIndex(idx);
                  setSelectedSkillIndex(0);
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-slate-800 text-white shadow-sm border border-slate-700/80'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-850/50'
                }`}
              >
                {categoryIcons[idx]}
                <span className="whitespace-nowrap">{cat.category}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Skill List with Animated Anime.js Bars */}
          <div ref={skillBarsRef} className="lg:col-span-7 space-y-4">
            <div className="text-xs text-slate-400 mb-1">
              {activeCategory.description}
            </div>

            {activeCategory.skills.map((skill, idx) => {
              const isSelected = idx === selectedSkillIndex;
              return (
                <div
                  key={skill.name}
                  onClick={() => setSelectedSkillIndex(idx)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 border-cyan-500/80 shadow-md shadow-cyan-500/10'
                      : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/40 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-semibold ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                        {skill.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-xs font-mono">
                      <span className="text-slate-400">{skill.experience}</span>
                      <span className="text-cyan-400 font-bold tabular-nums">{skill.level}%</span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-slate-800/80 h-2 rounded-full overflow-hidden">
                    <div
                      className="skill-bar-fill h-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 rounded-full"
                      style={{ width: '0%' }}
                      data-target-width={`${skill.level}%`}
                    />
                  </div>

                  {/* Clean unboxed metadata (anti-slop rule) */}
                  <div className="mt-2.5 flex items-center gap-2 text-xs text-slate-400">
                    <span>Click to inspect plant case application</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-cyan-400 font-medium">View Practice Details</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Deep Dive Spotlight on Selected Skill */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-5">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                Skill in Real Plant Action
              </span>
              <span className="text-xs font-mono text-slate-400">
                Proficiency: <strong className="text-white">{activeSkill.level}%</strong>
              </span>
            </div>

            <div>
              <h3 className="text-xl font-display font-bold text-white">{activeSkill.name}</h3>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mt-1">
                <span>Domain: {activeCategory.category}</span>
                <span>·</span>
                <span>Experience: {activeSkill.experience}</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-2">
              <div className="text-xs font-semibold text-cyan-400 flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Real-World Implementation Record</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {activeSkill.practicalApplication}
              </p>
            </div>

            {/* Showcase Visual: OT or Workshop depending on category */}
            <div className="rounded-xl border border-slate-800 overflow-hidden relative h-40">
              <img
                src={
                  activeCategoryIndex === 1
                    ? '/src/assets/images/industrial_cybersecurity_ot_1791538258187.jpg'
                    : '/src/assets/images/precision_mechanical_workshop_1791538272245.jpg'
                }
                alt="Industrial facility engineering background"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-2.5 left-3 right-3 text-[11px] text-slate-300 font-mono">
                {activeCategoryIndex === 1
                  ? 'ICS / SCADA Security & OT Network Segmentation'
                  : 'Precision Mechanical Tooling & Tolerance Machining'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
