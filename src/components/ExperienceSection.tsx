import React, { useState } from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Wrench, CheckCircle2, ChevronRight, Award, Clock, Activity } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [selectedExpId, setSelectedExpId] = useState<string>(EXPERIENCES[0].id);

  const activeExp = EXPERIENCES.find((exp) => exp.id === selectedExpId) || EXPERIENCES[0];

  return (
    <section id="experience" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
            <span>01</span>
            <span>·</span>
            <span>Career Trajectory</span>
            <span>·</span>
            <span>British American Tobacco</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            8+ Years of Industrial High-Speed Packaging Mastery
          </h2>
          <p className="mt-3 text-slate-400 text-base leading-relaxed">
            Progressing from Trainee Operative to Operator Technician across 8 continuous years at
            British American Tobacco Bangladesh (Dhaka plant). Direct hands-on expertise in Gdx2 high-speed cigarette packaging,
            micro-stoppage prevention, and multi-disciplinary shift leadership.
          </p>
        </div>

        {/* Interactive Experience Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Timeline Navigation Buttons */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 px-1">
              Select Role Timeline
            </div>
            {EXPERIENCES.map((exp, idx) => {
              const isActive = exp.id === selectedExpId;
              return (
                <button
                  key={exp.id}
                  onClick={() => setSelectedExpId(exp.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all border ${
                    isActive
                      ? 'bg-slate-900 border-cyan-500/80 shadow-lg shadow-cyan-500/10'
                      : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/60 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-400">{exp.period}</span>
                    <span className="text-[11px] font-mono text-cyan-400">BATB Dhaka</span>
                  </div>
                  <div className="text-base font-semibold text-white mt-1">{exp.role}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{exp.company}</div>

                  <div className="mt-3 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-mono">Stage 0{3 - idx}</span>
                    <span className={`flex items-center gap-1 font-medium ${isActive ? 'text-cyan-400' : 'text-slate-500'}`}>
                      <span>Inspect</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </button>
              );
            })}

            {/* Industrial Plant Snapshot Card */}
            <div className="mt-6 rounded-xl border border-slate-800 overflow-hidden bg-slate-900/70">
              <div className="relative h-44 overflow-hidden">
                <img
                  src="/src/assets/images/gdx2_industrial_machinery_1791538241130.jpg"
                  alt="High speed Gdx2 industrial packaging machine at BAT Bangladesh"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-xs">
                  <div className="font-semibold text-white">Gdx2 High-Speed Line</div>
                  <div className="text-[11px] text-slate-300">Continuous precision packaging automation</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Selected Role Breakdown */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800">
            {/* Header of Active Role */}
            <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-slate-800">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
                  <span>{activeExp.period}</span>
                  <span>·</span>
                  <span>{activeExp.type}</span>
                  <span>·</span>
                  <span>{activeExp.location}</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-white">{activeExp.role}</h3>
                <p className="text-sm text-cyan-300 font-medium mt-0.5">{activeExp.company}</p>
              </div>

              {activeExp.metrics && (
                <div className="flex gap-3">
                  {activeExp.metrics.map((metric, i) => (
                    <div
                      key={i}
                      className="px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-center"
                    >
                      <div className="text-sm font-bold text-cyan-400 font-mono tabular-nums">
                        {metric.value}
                      </div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Role Executive Summary */}
            <div className="py-5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Operational Scope
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">{activeExp.summary}</p>
            </div>

            {/* Core Responsibilities as detailed in CV */}
            <div className="py-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <Wrench className="w-3.5 h-3.5 text-cyan-400" />
                <span>Primary Operational Responsibilities</span>
              </h4>
              <ul className="space-y-3">
                {activeExp.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Highlights */}
            {activeExp.keyHighlights && activeExp.keyHighlights.length > 0 && (
              <div className="pt-5 mt-4 border-t border-slate-800">
                <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-2">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>Key Plant Highlights & Contributions</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeExp.keyHighlights.map((hl, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-lg bg-slate-950/70 border border-slate-800/80 text-xs text-slate-300 flex items-center gap-2"
                    >
                      <Activity className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies & Protocols */}
            <div className="pt-6 mt-4 border-t border-slate-800">
              <div className="text-xs font-mono text-slate-400 mb-2 flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                <span>Machinery & Engineering Competencies</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {activeExp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-xs font-medium text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
