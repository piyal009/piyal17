import React, { useState } from 'react';
import { EDUCATION, CERTIFICATIONS } from '../data/portfolioData';
import { GraduationCap, Shield, Award, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

export const EducationSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('edu-cyber');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="education" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
            <span>04</span>
            <span>·</span>
            <span>Academic Qualifications</span>
            <span>·</span>
            <span>Diplomas & Certifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Education & Specialized Training
          </h2>
          <p className="mt-3 text-slate-400 text-base leading-relaxed">
            Formal engineering foundations in mechanical design combined with rigorous post-graduate
            specialization in cybersecurity and precision machine shop fabrication.
          </p>
        </div>

        {/* 3-Column Educational Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Item 1: Professional Diploma in Cyber Security */}
          {EDUCATION.map((edu) => {
            const isExpanded = expandedId === edu.id;
            const isCyber = edu.id === 'edu-cyber';

            return (
              <div
                key={edu.id}
                className={`p-6 rounded-2xl border transition-all flex flex-col justify-between ${
                  isCyber
                    ? 'bg-gradient-to-b from-slate-900 to-slate-950 border-purple-500/40 shadow-xl shadow-purple-500/5'
                    : 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  {/* Card Header & Unboxed Metadata */}
                  <div className="flex items-center justify-between text-xs font-mono mb-3">
                    <span className={isCyber ? 'text-purple-400 font-semibold' : 'text-cyan-400'}>
                      {edu.status}
                    </span>
                    <span className="text-slate-400">{edu.period}</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div
                      className={`p-2.5 rounded-xl shrink-0 ${
                        isCyber ? 'bg-purple-950/80 text-purple-400 border border-purple-800' : 'bg-cyan-950/80 text-cyan-400 border border-cyan-800'
                      }`}
                    >
                      {isCyber ? <Shield className="w-5 h-5" /> : <GraduationCap className="w-5 h-5" />}
                    </div>
                    <div>
                      <h3 className="text-lg font-display font-bold text-white leading-snug">
                        {edu.degree}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">
                        {edu.institution} · {edu.location}
                      </p>
                    </div>
                  </div>

                  {/* Clean unboxed duration tag */}
                  <div className="mt-4 text-xs font-mono text-slate-400 flex items-center gap-2">
                    <span>Program Duration</span>
                    <span>·</span>
                    <span className="text-slate-200 font-medium">{edu.duration}</span>
                  </div>

                  {/* Summary */}
                  <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Expandable Module Syllabus */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-2">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                        Curriculum Highlights:
                      </div>
                      <ul className="space-y-1.5">
                        {edu.coreModules.map((module, i) => (
                          <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{module}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800">
                  <button
                    onClick={() => toggleExpand(edu.id)}
                    className="w-full py-2 px-3 rounded-lg text-xs font-mono text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors flex items-center justify-between"
                  >
                    <span>{isExpanded ? 'Hide Course Syllabus' : 'Inspect Course Modules'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            );
          })}

          {/* Item 3: Certification Card (Machine Shop Practice) */}
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-2xl border bg-slate-900/70 border-slate-800 hover:border-slate-700 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-3">
                  <span className="text-amber-400 font-semibold">Certified</span>
                  <span className="text-slate-400">{cert.period}</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl shrink-0 bg-amber-950/80 text-amber-400 border border-amber-800">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-white leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <div className="mt-4 text-xs font-mono text-slate-400 flex items-center gap-2">
                  <span>Training Duration</span>
                  <span>·</span>
                  <span className="text-slate-200 font-medium">{cert.duration}</span>
                </div>

                <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                  Rigorous vocational training focused on physical metalworking, precision machining,
                  lathe turning, milling, and calibration of measuring tools.
                </p>

                <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-2">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    Acquired Capabilities:
                  </div>
                  <ul className="space-y-1.5">
                    {cert.skillsAcquired.map((skill, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800 text-center">
                <span className="text-xs font-mono text-slate-400">
                  Dhaka, Bangladesh · Technical Training Centre
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
