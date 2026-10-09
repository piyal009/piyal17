import { ExperienceItem, EducationItem, CertificationItem, SkillCategory, SimulationTask } from '../types/portfolio';

export const PERSONAL_INFO = {
  fullName: 'Anher uddin Piyal',
  preferredName: 'Piyal',
  title: 'Mechanical Engineer & Industrial Cybersecurity Specialist',
  tagline: 'Bridging 8+ Years of Industrial High-Speed Machinery Operations with Next-Gen OT/SCADA Cyber Resilience',
  email: 'novu969@gmail.com',
  phone: '+8801970648451',
  location: 'Gudaraghat, Badda, Dhaka, Bangladesh',
  cityCountry: 'Dhaka, Bangladesh',
  currentStatus: 'Specializing in OT Cybersecurity & Industrial Systems Engineering',
  bio: `Seasoned industrial mechanical technician with over 8 continuous years of mission-critical manufacturing leadership at British American Tobacco Bangladesh (BATB). Specialized in high-speed Gdx2 packaging machinery, mechanical diagnostics, preventative maintenance overhauls, pneumatic systems, and precision machine shop practices. Currently pursuing a Professional Diploma in Cyber Security at PeopleNTech to spearhead modern industrial control system (ICS/SCADA) cyber-physical protection.`,
  socialLinks: {
    email: 'mailto:novu969@gmail.com',
    phone: 'tel:+8801970648451',
    whatsapp: 'https://wa.me/8801970648451',
    linkedin: 'https://www.linkedin.com/in/anher-uddin-piyal',
  },
  stats: [
    { label: 'BATB Tenure', value: '8+ Years' },
    { label: 'Gdx2 Machine Uptime', value: '99.4%' },
    { label: 'Team Members Mentored', value: '25+' },
    { label: 'Safety Incidents', value: '0 Target' }
  ]
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-technician',
    role: 'Operator Technician',
    company: 'British American Tobacco Bangladesh',
    location: 'Dhaka, Bangladesh',
    period: 'Aug 2023 – Dec 2025',
    startDate: '2023-08',
    endDate: '2025-12',
    type: 'Full-time',
    summary: 'Directly oversaw operations, autonomous maintenance, mechanical overhaul, and cross-functional team coordination on the high-speed Gdx2 packaging line.',
    responsibilities: [
      'Operate and maintain the high-speed Gdx2 cigarette packaging machine, ensuring consistent production output, minimal wastage, and strict adherence to global BAT quality standards.',
      'Collaborate with cross-functional mechanical and electrical maintenance teams to diagnose and troubleshoot acute technical malfunctions, cutting micro-stoppages and maximizing line efficiency (OEE).',
      'Spearhead continuous improvement (Kaizen) initiatives, designing and executing process upgrades that boosted output yield and elevated workplace safety protocols.',
      'Lead practical training and technical mentoring of junior operatives and trainees, disseminating best practices in mechanical inspection and rapid fault clearance.',
      'Maintain comprehensive digital and physical records of machine performance metrics, predictive maintenance schedules, parts lifecycle, and daily production throughput.'
    ],
    keyHighlights: [
      'Delivered consistent target throughput across multi-shift high-volume runs on Gdx2 packaging lines.',
      'Formulated standard operating procedures (SOPs) for rapid mechanical changeovers.',
      'Championed zero-accident behavioral safety and 5S workplace ergonomics.'
    ],
    technologies: ['Gdx2 Packaging Machine', 'Pneumatic Actuators', 'Mechanical Overhaul', 'Autonomous Maintenance', 'Kaizen / TPM', 'OEE Tracking', 'Industrial Safety Protocols'],
    metrics: [
      { label: 'Production Uptime', value: '99.4%' },
      { label: 'Team Mentoring', value: '15+ Technicians' },
      { label: 'Waste Reduction', value: '-12%' }
    ]
  },
  {
    id: 'exp-operator',
    role: 'Machine Operator',
    company: 'British American Tobacco Bangladesh',
    location: 'Dhaka, Bangladesh',
    period: 'Mar 2018 – Jul 2023',
    startDate: '2018-03',
    endDate: '2023-07',
    type: 'Full-time',
    summary: 'Mastered production stability, sensor alignment, and quality inspection across high-speed Gdx2 automated packing systems.',
    responsibilities: [
      'Demonstrated high technical proficiency in operating the Gdx2 cigarette packaging machinery and sustaining optimal operating parameters.',
      'Assisted in diagnosing mechanical jams, feeder misalignments, and sensor faults, partnering with engineering teams for rapid resolution.',
      'Conducted rigorous in-line quality assurance procedures, performing dimensional and seal-integrity checks to satisfy stringent specifications.',
      'Actively participated in hazard identification drills and fostered a proactive safety culture across the plant floor.'
    ],
    keyHighlights: [
      'Recognized for exceptional attendance and consistent shift production targets.',
      'Reduced packaging stamp misalignments through calibrated mechanical adjustments.'
    ],
    technologies: ['Gdx2 Machinery', 'Sensors & Interlocks', 'Quality Control Gauges', 'Shift Handovers', 'Safety Drills', 'Preventative Inspection'],
    metrics: [
      { label: 'Shift Output', value: 'Peak Achiever' },
      { label: 'Defect Rate', value: '<0.05%' }
    ]
  },
  {
    id: 'exp-trainee',
    role: 'Trainee Operative',
    company: 'British American Tobacco Bangladesh',
    location: 'Dhaka, Bangladesh',
    period: 'Jan 2017 – Feb 2018',
    startDate: '2017-01',
    endDate: '2018-02',
    type: 'Full-time Apprenticeship',
    summary: 'Comprehensive hands-on induction into industrial packaging systems, mechanical drives, and plant-wide safety frameworks.',
    responsibilities: [
      'Completed intensive training in high-speed Gdx2 packaging machine mechanics, timing gears, cam drives, and pneumatic circuits.',
      'Assisted senior master technicians in scheduled preventative maintenance overhauls and component replacements.',
      'Developed foundational hands-on troubleshooting instincts for mechanical wear, belt tensions, and lubrication protocols.'
    ],
    keyHighlights: [
      'Completed rigorous training syllabus ahead of schedule and promoted to full Machine Operator status.'
    ],
    technologies: ['Packaging Basics', 'Machine Timing', 'Pneumatics', 'Industrial Lubrication', 'Workshop Safety']
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'edu-cyber',
    degree: 'Professional Diploma in Cyber Security',
    institution: 'Peoplentech Institute of IT',
    location: 'Dhaka, Bangladesh',
    period: 'Nov 2025 – Present (Running)',
    duration: '2 Years Comprehensive Program',
    status: 'In Progress',
    description: 'Advanced curriculum focusing on enterprise and industrial network defense, threat intelligence, industrial control system (ICS/SCADA) security, ethical hacking, and vulnerability management.',
    coreModules: [
      'Network Security & Protocol Analysis',
      'Industrial Control Systems (ICS/SCADA) Security',
      'Operational Technology (OT) Network Defense',
      'Ethical Hacking & Vulnerability Assessment',
      'Incident Response & Digital Forensics',
      'Security Operations Center (SOC) Telemetry',
      'Compliance & ISO/IEC 27001 Standards'
    ]
  },
  {
    id: 'edu-mech',
    degree: 'Diploma in Mechanical Engineering',
    institution: 'Dhaka Polytechnic Institute',
    location: 'Dhaka, Bangladesh',
    period: 'Oct 2012 – Jan 2017',
    duration: '4 Years Engineering Diploma',
    status: 'Completed',
    description: 'Rigorous engineering diploma covering thermodynamics, fluid mechanics, industrial automation, machine design, metallurgy, and workshop technology.',
    coreModules: [
      'Theory of Machines & Kinematics',
      'Hydraulics & Pneumatics Systems',
      'Machine Design & Engineering Mechanics',
      'Manufacturing Processes & CNC Machining',
      'Industrial Management & Plant Engineering',
      'Strength of Materials & Metallurgy'
    ],
    credentialCode: 'BTEB-DPI-ME-2017'
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'cert-machine-shop',
    title: 'Machine Shop Practice Certification',
    issuer: 'Bangladesh-Korea Technical Training Centre (BKTTC)',
    location: 'Dhaka, Bangladesh',
    period: 'Jul 2015 – Dec 2015',
    duration: '6 Months Intensive Practical Training',
    skillsAcquired: [
      'Precision Lathe & Milling Operations',
      'Micrometer, Caliper & Dial Gauge Calibration',
      'Tool Grinding & Metal Shaping',
      'Blueprinting & Mechanical Tolerance Adherence',
      'Industrial Safety & Machine Shop Housekeeping'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Industrial Packaging & Machinery',
    description: 'Expertise in high-speed automated packaging machinery and plant operations.',
    skills: [
      { name: 'Gdx2 Cigarette Packaging Machine', level: 96, experience: '8+ Years', practicalApplication: 'Full cycle operation, fine timing synchronization, and rapid clearing of micro-stoppages at BAT Bangladesh.' },
      { name: 'Mechanical Troubleshooting', level: 94, experience: '8+ Years', practicalApplication: 'Diagnosing cam misalignments, gearbox acoustics, bearing wear, and drive belt tensions.' },
      { name: 'Pneumatics & Solenoid Actuation', level: 90, experience: '7+ Years', practicalApplication: 'Tuning pneumatic cylinders, pressure regulators, air filter-lubricators, and vacuum suction arms.' },
      { name: 'Autonomous & Preventative Maintenance (TPM)', level: 92, experience: '8+ Years', practicalApplication: 'Executing scheduled 100-hour and 500-hour mechanical service checklists and parts lifecycle tracking.' }
    ]
  },
  {
    category: 'Cyber Security & Industrial OT Defense',
    description: 'Modern cyber-physical protection for critical infrastructure and factory automation.',
    skills: [
      { name: 'Industrial OT & SCADA Security', level: 82, experience: 'Current Focus', practicalApplication: 'Analyzing vulnerabilities in programmable logic controllers (PLCs), HMIs, and plant network segmentation.' },
      { name: 'Network Security & Protocol Analysis', level: 85, experience: 'PeopleNTech Diploma', practicalApplication: 'Traffic inspection using Wireshark, identifying abnormal ARP/Modbus/TCP packets and anomaly detection.' },
      { name: 'Vulnerability Assessment & Hardening', level: 80, experience: 'Labs & Practice', practicalApplication: 'Scanning system weaknesses, patching legacy operating systems, and air-gapped network design.' },
      { name: 'Incident Response & Threat Mitigation', level: 78, experience: 'Current Studies', practicalApplication: 'Forensic event logging, triage procedures, and cyber-physical failsafe interlocks.' }
    ]
  },
  {
    category: 'Workshop & Precision Engineering',
    description: 'Hands-on mechanical machining and physical fabrication capability.',
    skills: [
      { name: 'Precision Lathe & Milling', level: 88, experience: 'BKTTC Certified', practicalApplication: 'Fabricating custom pins, bushings, shafts, and brackets within strict millimetric tolerances.' },
      { name: 'Measurement & Metrology Instruments', level: 92, experience: '8+ Years', practicalApplication: 'Operating micrometers, vernier calipers, dial test indicators, and pitch gauges.' },
      { name: 'Technical Blueprint & Schematics Reading', level: 89, experience: 'Dhaka Polytechnic', practicalApplication: 'Interpreting mechanical exploded views, pneumatic circuit schematics, and wiring diagrams.' }
    ]
  },
  {
    category: 'Operational Excellence & Quality',
    description: 'Plant management standards, safety regulations, and team leadership.',
    skills: [
      { name: 'Continuous Improvement (Kaizen / Lean)', level: 91, experience: '8+ Years', practicalApplication: 'Suggested and implemented packaging line ergonomics and feed chute modifications reducing scrap by 12%.' },
      { name: 'Quality Control & Non-Conformance Analysis', level: 93, experience: '8+ Years', practicalApplication: 'Strict sampling procedures to enforce zero tolerance for fold defects and stamp misprints.' },
      { name: 'Safety Protocols & EHS Leadership', level: 95, experience: '8+ Years', practicalApplication: 'Zero reportable safety incidents across 8-year tenure; conducted shift safety briefings.' },
      { name: 'Team Training & Technical Knowledge Sharing', level: 90, experience: '8+ Years', practicalApplication: 'Mentored over 25 junior operatives and apprentices into certified independent operators.' }
    ]
  }
];

export const SIMULATION_TASKS: SimulationTask[] = [
  {
    id: 'sim-1',
    title: 'Gdx2 Infeed Foil Misalignment',
    system: 'Mechanical',
    description: 'High-speed packaging line sensors detect a 1.8mm lateral drift on the inner aluminum foil wrap roll at 420 packs/minute.',
    symptom: 'Intermittent foil tear and micro-stoppage warning triggered on Station 2.',
    solution: 'Recalibrate tension dancer roller, clean optical edge sensor, and realign pneumatic guide pin with 0.5mm tolerance.',
    impact: 'Restores continuous 420 packs/min flow; prevents roll shredding and saves 45 minutes of scheduled downtime.'
  },
  {
    id: 'sim-2',
    title: 'SCADA Telemetry Rate Anomaly (OT Threat)',
    system: 'Cyber-OT',
    description: 'Plant telemetry detects unexpected Modbus TCP polling requests directed to PLC Node 04 from an unauthenticated IP address.',
    symptom: 'Telemetry buffer saturation and sporadic latency in HMI temperature telemetry feed.',
    solution: 'Enforce VLAN isolation, update firewall ACL rule to drop unauthorized subnets, and initiate packet capture.',
    impact: 'Shields automated packaging line from remote unauthorized tampering; establishes OT cyber perimeter integrity.'
  },
  {
    id: 'sim-3',
    title: 'Pneumatic Ejector Pressure Drop',
    system: 'Pneumatic',
    description: 'Quality rejection cylinder pressure drops below 5.2 bar during peak multi-lane sort cycle.',
    symptom: 'Defective test packets failing to eject into reject hopper in required 40ms window.',
    solution: 'Inspect main pneumatic regulator valve, purge moisture trap, and reseal quick-connect pneumatic coupling.',
    impact: 'Guarantees 100% ejection fidelity of out-of-spec packages, maintaining zero-defect outbound supply.'
  },
  {
    id: 'sim-4',
    title: 'High-Speed Packet Seal Temperature Fluctuation',
    system: 'Quality',
    description: 'Heater bar thermocouple reading fluctuates between 135°C and 158°C, risking burn marks or open seals.',
    symptom: 'Polypropylene outer wrap showing micro-wrinkling under in-line optical QA check.',
    solution: 'Replace worn thermocouple probe, recalibrate PID temperature controller, and clean Teflon heater shoe.',
    impact: 'Enforces hermetic package sealing according to international export specifications.'
  }
];
