import type { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    category: 'Web Development',
    skills: [
      { label: 'HTML', proficiency: 5 },
      { label: 'CSS', proficiency: 5 },
      { label: 'JavaScript', proficiency: 4 },
      { label: 'Progressive Web Apps', proficiency: 4 },
      { label: 'Responsive Design', proficiency: 4 },
    ],
  },
  {
    category: 'Programming & Scripting',
    skills: [
      { label: 'PHP', proficiency: 3 },
      { label: 'Python', proficiency: 3 },
    ],
  },
  {
    category: 'Networking',
    skills: [
      { label: 'TCP/IP', proficiency: 4 },
      { label: 'LAN Configuration', proficiency: 4 },
      { label: 'IP Addressing & Subnetting', proficiency: 4 },
      { label: 'Router & Switch Setup', proficiency: 3 },
    ],
  },
  {
    category: 'Tools & Platforms',
    skills: [
      { label: 'Git & GitHub', proficiency: 4 },
      { label: 'VS Code', proficiency: 5 },
      { label: 'XAMPP', proficiency: 3 },
      { label: 'Linux', proficiency: 3 },
    ],
  },
];
