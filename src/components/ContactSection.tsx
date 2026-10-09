import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, Copy, Check, Clock, MessageSquare, ExternalLink } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [dhakaTime, setDhakaTime] = useState<string>('');

  // Contact form state
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('Industrial Opportunity / Technical Consultation');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Live Dhaka Time clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Dhaka is UTC+6
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Dhaka',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setDhakaTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    confetti({ particleCount: 40, spread: 60, origin: { y: 0.85 } });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    confetti({ particleCount: 40, spread: 60, origin: { y: 0.85 } });
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName || !senderEmail || !message) return;

    // Trigger celebratory confetti and simulate transmission
    confetti({ particleCount: 50, spread: 70, origin: { y: 0.7 } });
    setFormSubmitted(true);

    // Open prefilled mail client as fallback
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${subject}`
    )}&body=${encodeURIComponent(
      `Name: ${senderName}\nEmail: ${senderEmail}\n\nMessage:\n${message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-800/80 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
            <span>05</span>
            <span>·</span>
            <span>Connect & Inquire</span>
            <span>·</span>
            <span>Dhaka, Bangladesh</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Let&apos;s Build Resilient Industrial Operations
          </h2>
          <p className="mt-3 text-slate-400 text-base leading-relaxed">
            Available for industrial packaging technical management, high-speed machinery optimization,
            and OT/SCADA cybersecurity engineering consultations.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Credentials & Live Time */}
          <div className="lg:col-span-5 space-y-6">
            {/* Live Dhaka Time & Availability card */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Location & Timezone
                </span>
                <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Open for Opportunities</span>
                </span>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div>
                  <div className="text-sm font-semibold text-white">Dhaka, Bangladesh</div>
                  <div className="text-xs text-slate-400 font-mono">Asia/Dhaka (GMT+6)</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-mono font-bold text-cyan-400 tabular-nums">
                    {dhakaTime || '06:00:00 PM'}
                  </div>
                  <div className="text-[11px] text-slate-500 font-mono flex items-center gap-1 justify-end">
                    <Clock className="w-3 h-3" />
                    <span>Local Time</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Direct Contact Channels
              </div>

              {/* Email */}
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 truncate">
                  <div className="p-2 rounded-lg bg-sky-950 text-sky-400 border border-sky-800 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <div className="text-[11px] font-mono text-slate-500">Email Address</div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-cyan-400 transition-colors truncate block"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 truncate">
                  <div className="p-2 rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-800 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <div className="text-[11px] font-mono text-slate-500">Cell / WhatsApp</div>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-emerald-400 transition-colors truncate block font-mono"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0"
                  title="Copy phone to clipboard"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Mailing Address */}
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-amber-950 text-amber-400 border border-amber-800 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-500">Mailing Address</div>
                  <div className="text-xs text-slate-300 font-medium">
                    {PERSONAL_INFO.location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Composer */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800">
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare className="w-5 h-5 text-cyan-400" />
              <h3 className="text-xl font-display font-bold text-white">
                Send a Direct Message
              </h3>
            </div>

            {formSubmitted ? (
              <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3">
                <div className="inline-flex p-3 rounded-full bg-emerald-900/60 text-emerald-400">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">Inquiry Initialized!</h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Your mail client has been opened with your composed message addressed to{' '}
                  <strong className="text-cyan-300">{PERSONAL_INFO.email}</strong>. Piyal will respond promptly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 transition-colors"
                >
                  Compose Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe / HR Manager"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Your Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Inquiry Subject</label>
                  <input
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Message & Project Scope</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your manufacturing plant setup, high-speed packaging challenges, or industrial cybersecurity project..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-cyan-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-5 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 text-sm shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Inquiry to Anher uddin Piyal</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
