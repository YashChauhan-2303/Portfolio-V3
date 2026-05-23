export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  github: string;
  githubUsername: string;
  linkedin: string;
  linkedinUsername: string;
  resume: string;
  readCv?: string;
}

export interface HeroInfo {
  heading: string;
  subheading: string;
  ctaText: string;
  location: string;
}

export interface Project {
  year: string;
  title: string;
  description: string;
  stack: string[];
  link: string;
}

export interface Experience {
  period: string;
  role: string;
  org: string;
  detail: string;
}

export interface Achievement {
  year: string;
  title: string;
  detail: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface EducationInfo {
  period: string;
  institution: string;
  degree: string;
  gpa: string;
  coursework: string;
}

export interface NowInfo {
  prompt: string;
  learning: string;
  reading: string;
  building: string;
  listening: string;
  coffee: string;
  status: string;
}

export interface FooterInfo {
  tagline: string;
  colophon: string;
  lastUpdated: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  hero: HeroInfo;
  experience: Experience[];
  achievements: Achievement[];
  projects: Project[];
  education: EducationInfo;
  skills: SkillGroup[];
  now: NowInfo;
  footer: FooterInfo;
}
