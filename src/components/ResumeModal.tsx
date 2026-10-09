import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION, CERTIFICATIONS } from '../data/portfolioData';
import { X, Printer, Copy, Check, Download, Mail, Phone, MapPin } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textCV = `
CURRICULUM VITAE
OF
${PERSONAL_INFO.fullName.toUpperCase()}

Mailing Address: ${PERSONAL_INFO.location}
Cell No: ${PERSONAL_INFO.phone}
E-mail: ${PERSONAL_INFO.email}

EDUCATION:
- Professional Diploma in Cyber Security [Peoplentech Institute of IT]
  [November, 2025 - Running] (2 years)
- Diploma in Mechanical Engineering [Dhaka Polytechnic Institute], Dhaka, Bangladesh
  [October, 2012 - January, 2017] (4 years)

WORK EXPERIENCE:
1. Operator Technician
   British American Tobacco Bangladesh, Dhaka Bangladesh [August, 2023 - December, 2025]
   - Operate and maintain the Gdx2 cigarette packaging machine, ensuring consistent production output and adherence to quality standards.
   - Collaborate with cross-functional teams to troubleshoot and resolve technical issues, minimizing downtime and maximizing efficiency.
   - Participate in continuous improvement initiatives, suggesting and implementing process enhancements that positively impact productivity and safety.
   - Contribute to the training and development of junior team members, sharing best practices and technical knowledge.
   - Maintain comprehensive records of machine performance, maintenance activities, and production data.

2. Machine Operator
   British American Tobacco Bangladesh, Dhaka Bangladesh [March, 2018 - July, 2023]
   - Demonstrated proficiency in operating the Gdx2 cigarette packaging machine and maintaining optimal production conditions.
   - Assisted in diagnosing and addressing technical malfunctions, working closely with maintenance teams to ensure timely resolution.
   - Participated in quality control procedures, conducting inspections and tests to meet product specifications.
   - Supported the implementation of safety protocols, fostering a culture of safety awareness among colleagues.

3. Trainee Operative
   British American Tobacco Bangladesh, Dhaka Bangladesh [January, 2017 - February, 2018]
   - Received comprehensive training in machine operation and maintenance, quickly grasping the intricacies of the Gdx2 cigarette packaging machine.
   - Assisted senior team members in routine maintenance tasks and operational procedures.
   - Gained hands-on experience in troubleshooting minor issues and assisting in repairs.

CERTIFICATIONS:
- Machine Shop Practice [Bangladesh-Korea Technical Training Centre, Dhaka Bangladesh]
  [July, 2015 - December, 2015] (6 months)

SKILLS:
- Proficient in operating and maintaining complex machinery
- Technical troubleshooting and problem-solving
- Process optimization and continuous improvement
- Quality control and adherence to safety protocols
- Strong teamwork and collaboration
- Effective communication and training abilities
    `.trim();

    navigator.clipboard.writeText(textCV);
    setCopied(true);
    confetti({ particleCount: 35, spread: 50, origin: { y: 0.6 } });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Top Bar */}
        <div className="p-4 sm:px-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
              Document Viewer
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-xs text-slate-300 font-medium">Curriculum Vitae</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 transition-colors flex items-center gap-1.5"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition-colors flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-2"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Container */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-slate-950 font-sans text-slate-200 print:bg-white print:text-black">
          {/* Header of CV */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 pb-6 border-b border-slate-800 print:border-black">
            <div className="text-center sm:text-left space-y-1">
              <div className="text-xs font-mono text-cyan-400 print:text-gray-600 uppercase tracking-widest">
                Curriculum Vitae
              </div>
              <h1 className="text-2xl sm:text-3xl font-display font-bold text-white print:text-black tracking-tight">
                {PERSONAL_INFO.fullName}
              </h1>
              <p className="text-xs font-mono text-slate-400 print:text-gray-700">
                Operator Technician · Mechanical Engineer · Cybersecurity Specialist
              </p>

              {/* Contact meta */}
              <div className="pt-2 text-xs text-slate-300 print:text-black space-y-1">
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400 print:text-black shrink-0" />
                  <span>Mailing Address: {PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <Phone className="w-3.5 h-3.5 text-emerald-400 print:text-black shrink-0" />
                  <span>Cell No: {PERSONAL_INFO.phone}</span>
                </div>
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <Mail className="w-3.5 h-3.5 text-sky-400 print:text-black shrink-0" />
                  <span>E-mail: {PERSONAL_INFO.email}</span>
                </div>
              </div>
            </div>

            {/* Profile Avatar */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden border-2 border-cyan-500/50 print:border-black shadow-lg shrink-0">
              <img
                src="/src/assets/images/anher_piyal_avatar_1791538222115.jpg"
                alt="Anher uddin Piyal"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Education Section */}
          <div className="py-6 border-b border-slate-800 print:border-black">
            <h2 className="text-sm font-mono uppercase tracking-wider text-cyan-400 print:text-black font-bold mb-4">
              Education:
            </h2>
            <div className="space-y-4">
              {EDUCATION.map((edu) => (
                <div key={edu.id} className="text-xs leading-relaxed">
                  <div className="font-semibold text-white print:text-black flex items-center gap-2">
                    <span className="text-cyan-400 print:text-black">➢</span>
                    <span>{edu.degree} [{edu.institution}]</span>
                  </div>
                  <div className="text-slate-400 print:text-gray-700 pl-4 font-mono">
                    [{edu.period}] ({edu.duration})
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience Section */}
          <div className="py-6 border-b border-slate-800 print:border-black">
            <h2 className="text-sm font-mono uppercase tracking-wider text-cyan-400 print:text-black font-bold mb-4">
              Work Experience:
            </h2>
            <div className="space-y-6">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div>
                    <h3 className="text-sm font-bold text-white print:text-black">
                      {exp.role}
                    </h3>
                    <div className="text-xs font-mono text-cyan-300 print:text-gray-800">
                      {exp.company}, {exp.location} [{exp.period}]
                    </div>
                  </div>
                  <ul className="space-y-1.5 pl-2 text-xs text-slate-300 print:text-black">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-cyan-400 print:text-black shrink-0">➢</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="py-6 border-b border-slate-800 print:border-black">
            <h2 className="text-sm font-mono uppercase tracking-wider text-cyan-400 print:text-black font-bold mb-4">
              Certifications:
            </h2>
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.id} className="text-xs space-y-1 pl-2">
                <div className="font-semibold text-white print:text-black flex items-center gap-2">
                  <span className="text-cyan-400 print:text-black">➢</span>
                  <span>{cert.title} [{cert.issuer}, {cert.location}]</span>
                </div>
                <div className="text-slate-400 print:text-gray-700 pl-4 font-mono">
                  [{cert.period}] ({cert.duration})
                </div>
              </div>
            ))}
          </div>

          {/* Skills Section from CV */}
          <div className="pt-6">
            <h2 className="text-sm font-mono uppercase tracking-wider text-cyan-400 print:text-black font-bold mb-4">
              Skills:
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 print:text-black pl-2">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 print:text-black">➢</span>
                <span>Proficient in operating and maintaining complex machinery</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 print:text-black">➢</span>
                <span>Technical troubleshooting and problem-solving</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 print:text-black">➢</span>
                <span>Process optimization and continuous improvement</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 print:text-black">➢</span>
                <span>Quality control and adherence to safety protocols</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 print:text-black">➢</span>
                <span>Strong teamwork and collaboration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 print:text-black">➢</span>
                <span>Effective communication and training abilities</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
