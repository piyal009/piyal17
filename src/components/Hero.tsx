import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Hero3DCanvas } from './Hero3DCanvas';
import { PERSONAL_INFO } from '../data/portfolioData';
import { FileText, Cpu, ChevronRight, MapPin, Mail, Phone } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
  onSelectSimulation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onSelectSimulation }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const kickerRef = useRef<HTMLDivElement>(null);
  const leadRef = useRef<HTMLParagraphElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);
  const metricsStripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP entrance animation
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        kickerRef.current,
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
        .fromTo(
          headlineRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.3'
        )
        .fromTo(
          leadRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.4'
        )
        .fromTo(
          ctaGroupRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.4'
        )
        .fromTo(
          metricsStripRef.current?.children || [],
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.12 },
          '-=0.3'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden">
      {/* Background radial atmosphere glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/10 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-gradient-to-bl from-amber-500/10 via-purple-600/10 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split-Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Kicker */}
            <div ref={kickerRef} className="flex flex-wrap items-center gap-2 text-xs font-mono text-cyan-400">
              <span className="font-semibold uppercase tracking-wider">BAT Bangladesh Technician</span>
              <span className="text-slate-600">·</span>
              <span className="text-emerald-400">Cybersecurity Scholar</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-400">Mechanical Diploma</span>
            </div>

            {/* Display Headline */}
            <h1
              ref={headlineRef}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.15]"
              style={{ textWrap: 'balance' }}
            >
              Mastering High-Speed Industrial Machinery with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-amber-300">
                Cyber-Physical Resilience
              </span>
            </h1>

            {/* Lead Copy */}
            <p ref={leadRef} className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Hello, I&apos;m <span className="font-semibold text-white">Anher uddin Piyal</span>. With 8+ continuous years
              as an Operator Technician at <strong className="text-white">British American Tobacco Bangladesh</strong>, I optimize
              complex Gdx2 packaging machinery, resolve high-stress mechanical bottlenecks, and train front-line teams.
              I am now expanding into <strong className="text-white">Industrial OT & SCADA Cybersecurity</strong> to safeguard critical automated manufacturing.
            </p>

            {/* Contact quick strip */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono text-slate-400 pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <a href="mailto:novu969@gmail.com" className="hover:text-cyan-300 transition-colors">
                  novu969@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href="tel:+8801970648451" className="hover:text-emerald-300 transition-colors">
                  +8801970648451
                </a>
              </div>
            </div>

            {/* CTA Group */}
            <div ref={ctaGroupRef} className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenResume}
                className="px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Inspect Full CV</span>
              </button>

              <button
                onClick={onSelectSimulation}
                className="px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>Launch Operations Lab</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Three.js 3D Viewport */}
          <div className="lg:col-span-5">
            <Hero3DCanvas />
          </div>
        </div>

        {/* 4-Column Key Metrics Strip below Hero Split */}
        <div
          ref={metricsStripRef}
          className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6"
        >
          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80">
            <div className="text-2xl sm:text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400 tabular-nums">
              8+ Years
            </div>
            <div className="text-xs font-semibold text-slate-300 mt-1">BAT Bangladesh Experience</div>
            <div className="text-[11px] text-slate-500 mt-0.5">High-speed packaging line technician</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80">
            <div className="text-2xl sm:text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 tabular-nums">
              Gdx2 Expert
            </div>
            <div className="text-xs font-semibold text-slate-300 mt-1">High-Speed Packaging</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Autonomous maintenance & cam timing</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80">
            <div className="text-2xl sm:text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 tabular-nums">
              2025–2027
            </div>
            <div className="text-xs font-semibold text-slate-300 mt-1">Cyber Security Diploma</div>
            <div className="text-[11px] text-slate-500 mt-0.5">PeopleNTech IT · OT & ICS defense</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80">
            <div className="text-2xl sm:text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 tabular-nums">
              100% Target
            </div>
            <div className="text-xs font-semibold text-slate-300 mt-1">Zero Defect & Safety Culture</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Kaizen, TPM & EHS protocols</div>
          </div>
        </div>
      </div>
    </section>
  );
};
