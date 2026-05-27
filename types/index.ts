// types/index.ts

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  github?: string;
  live?: string;
  featured: boolean;
  category: string;
}

export interface Skill {
  id: string;
  category: string;
  icon: string;
  items: SkillItem[];
}

export interface SkillItem {
  name: string;
  level: number; // 0–100
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  type: 'work' | 'internship' | 'freelance' | 'academic';
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  grade?: string;
  highlights?: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}