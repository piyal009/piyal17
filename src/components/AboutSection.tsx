import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Shield, Cog, Cpu, CheckCircle2, FileText, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenResume: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResume }) => {
  return (
    <section id="about" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Portrait & Credential Badge */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900 group">
              <div className="aspect-square relative overflow-hidden">
                <img
                  src="/src/assets/images/anher_piyal_avatar_1791538222115.jpg"
                  alt="Anher uddin Piyal - Mechanical Engineer & Cybersecurity Specialist"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              </div>

              {/* Overlay card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800">
                <div className="text-xs font-mono text-cyan-400">British American Tobacco Bangladesh</div>
                <div className="text-base font-bold text-white mt-0.5">{PERSONAL_INFO.fullName}</div>
                <div className="text-xs text-slate-400 mt-0.5">Operator Technician (2017–2025)</div>
              </div>
            </div>

            {/* Quick highlights card */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 grid grid-cols-2 gap-3 text-center">
              <div>
                <div className="text-xs text-slate-400 font-mono">Location</div>
                <div className="text-sm font-semibold text-white mt-0.5">Dhaka, Bangladesh</div>
              </div>
              <div>
                <div className="text-xs text-slate-400 font-mono">Current Focus</div>
                <div className="text-sm font-semibold text-purple-400 mt-0.5">OT Cyber Security</div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Prose & Dual Discipline Vision */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <span>00</span>
              <span>·</span>
              <span>Professional Overview</span>
              <span>·</span>
              <span>The Cyber-Mechanical Intersection</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Engineering Reliability Across the Physical & Digital Factory Floor
            </h2>

            <div className="space-y-4 text-slate-300 text-base leading-relaxed">
              <p>
                For over eight years at <strong className="text-white">British American Tobacco Bangladesh</strong>,
                I stood at the helm of the production floor, maintaining and optimizing high-speed{' '}
                <strong className="text-cyan-400">Gdx2 cigarette packaging machinery</strong>. My work required
                precision timing calibration, hydraulic and pneumatic circuit tuning, immediate mechanical fault diagnosis,
                and instilling rigorous Total Productive Maintenance (TPM) practices.
              </p>
              <p>
                Modern automated plants are no longer isolated mechanical islands. As programmable logic controllers (PLCs),
                supervisory control and data acquisition (SCADA) systems, and industrial IoT devices interconnect,
                the danger of cyber intrusions and physical disruption grows exponentially.
              </p>
              <p>
                To bridge this critical industry gap, I am completing a 2-year{' '}
                <strong className="text-purple-300">Professional Diploma in Cyber Security at PeopleNTech Institute of IT</strong>.
                My unique dual background—deep physical machinery intuition paired with enterprise & industrial network defense—enables me
                to secure industrial control systems with authentic understanding of physical plant realities.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-1.5">
                <Cog className="w-5 h-5 text-cyan-400" />
                <div className="text-sm font-bold text-white">Mechanical Mastery</div>
                <p className="text-xs text-slate-400">
                  Gdx2 high-speed synchronization, cam timing, autonomous overhauls, and zero micro-stoppages.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-1.5">
                <Shield className="w-5 h-5 text-purple-400" />
                <div className="text-sm font-bold text-white">OT / ICS Security</div>
                <p className="text-xs text-slate-400">
                  SCADA network segmentation, Modbus protocol analysis, and industrial threat mitigation.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-1.5">
                <Cpu className="w-5 h-5 text-amber-400" />
                <div className="text-sm font-bold text-white">Kaizen & Team Lead</div>
                <p className="text-xs text-slate-400">
                  Continuous process improvement, EHS safety compliance, and mentoring 25+ technicians.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={onOpenResume}
                className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Read Full CV Curriculum</span>
              </button>

              <a
                href="#experience"
                className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-850 border border-slate-800 transition-colors flex items-center gap-2"
              >
                <span>View 8-Year BATB Timeline</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
