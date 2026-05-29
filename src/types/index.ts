export interface Skill {
  label: string;
  proficiency?: number;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  thumbnailUrl: string;
  liveUrl?: string;
  repoUrl?: string;
  date: string;
}

export type Theme = 'light' | 'dark';

export interface HeroData {
  name: string;
  title: string;
  tagline: string;
}

export interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}
