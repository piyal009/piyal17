export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  startDate: string;
  endDate: string;
  type: string;
  summary: string;
  responsibilities: string[];
  keyHighlights: string[];
  technologies: string[];
  metrics?: { label: string; value: string }[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  duration: string;
  status: 'Completed' | 'In Progress';
  description: string;
  coreModules: string[];
  credentialCode?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  location: string;
  period: string;
  duration: string;
  skillsAcquired: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: number; // 0 - 100
    experience: string;
    practicalApplication: string;
  }[];
}

export interface SimulationTask {
  id: string;
  title: string;
  system: 'Mechanical' | 'Pneumatic' | 'Cyber-OT' | 'Quality';
  description: string;
  symptom: string;
  solution: string;
  impact: string;
}
