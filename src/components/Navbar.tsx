import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand title wordmark, single text element */}
        <a
          href="#"
          className="text-xl font-display font-bold tracking-tight text-white hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0"
        >
          Anher uddin Piyal
        </a>

        {/* Zone 2: 4–5 clean single-line nav links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a
            href="#about"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            About
          </a>
          <a
            href="#experience"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Experience
          </a>
          <a
            href="#skills"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Skills
          </a>
          <a
            href="#simulation"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Operations Lab
          </a>
          <a
            href="#education"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Education
          </a>
          <a
            href="#contact"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 rounded-lg shadow-sm hover:shadow-cyan-500/20 transition-all whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>View CV</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950 px-5 py-4 space-y-3">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-200 hover:text-cyan-400 py-1.5"
          >
            About
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-200 hover:text-cyan-400 py-1.5"
          >
            Experience (BATB)
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-200 hover:text-cyan-400 py-1.5"
          >
            Technical Skills
          </a>
          <a
            href="#simulation"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-200 hover:text-cyan-400 py-1.5"
          >
            Operations Lab Simulator
          </a>
          <a
            href="#education"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-200 hover:text-cyan-400 py-1.5"
          >
            Education & Certifications
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-200 hover:text-cyan-400 py-1.5"
          >
            Contact & Availability
          </a>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2.5 px-4 text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg text-center"
            >
              View Full Curriculum Vitae
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
