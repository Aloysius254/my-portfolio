import type { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    category: 'IT Support & Hardware',
    skills: [
      { label: 'Hardware Troubleshooting & Repairs', proficiency: 4 },
      { label: 'Software Installation & Maintenance', proficiency: 5 },
      { label: 'Antivirus Management (ESET)', proficiency: 4 },
      { label: 'Computer Lab Management', proficiency: 4 },
    ],
  },
  {
    category: 'Networking',
    skills: [
      { label: 'LAN Structuring & Configuration', proficiency: 4 },
      { label: 'Ethernet Cable Installation & Repair', proficiency: 4 },
      { label: 'TCP/IP & Subnetting', proficiency: 4 },
      { label: 'Network Troubleshooting', proficiency: 4 },
      { label: 'Router & Switch Setup', proficiency: 3 },
      { label: 'Wi-Fi / Guest Network Management', proficiency: 4 },
    ],
  },
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
    category: 'Tools & Platforms',
    skills: [
      { label: 'Git & GitHub', proficiency: 4 },
      { label: 'VS Code', proficiency: 5 },
      { label: 'XAMPP', proficiency: 3 },
      { label: 'Linux', proficiency: 3 },
    ],
  },
];
