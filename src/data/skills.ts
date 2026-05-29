import type { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    category: 'Languages',
    skills: [
      { label: 'TypeScript', proficiency: 5 },
      { label: 'JavaScript', proficiency: 5 },
      { label: 'Python', proficiency: 4 },
      { label: 'HTML', proficiency: 5 },
      { label: 'CSS', proficiency: 4 },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    skills: [
      { label: 'React', proficiency: 5 },
      { label: 'Node.js', proficiency: 4 },
      { label: 'Tailwind CSS', proficiency: 4 },
      { label: 'Express', proficiency: 3 },
    ],
  },
  {
    category: 'Tools & Platforms',
    skills: [
      { label: 'Git', proficiency: 5 },
      { label: 'GitHub Actions', proficiency: 4 },
      { label: 'Docker', proficiency: 3 },
      { label: 'Vite', proficiency: 4 },
      { label: 'VS Code', proficiency: 5 },
    ],
  },
];
