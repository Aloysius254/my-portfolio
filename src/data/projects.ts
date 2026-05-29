import type { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'project-1',
    title: 'Personal Portfolio Website',
    description:
      'A fully responsive portfolio built with React, TypeScript, and Tailwind CSS. Features dark/light mode, smooth navigation, project filtering, and a contact form. Deployed via GitHub Actions to GitHub Pages.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    thumbnailUrl: '/images/placeholder.webp',
    liveUrl: 'https://aloysius254.github.io/my-portfolio/',
    repoUrl: 'https://github.com/Aloysius254/my-portfolio',
    date: '2024-12-01',
  },
  {
    id: 'project-2',
    title: 'Progressive Web App (PWA)',
    description:
      'A Progressive Web App with offline functionality using service workers and a web app manifest. Optimized for cross-device performance and fast loading times.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Service Workers'],
    thumbnailUrl: '/images/placeholder.webp',
    repoUrl: 'https://github.com/Aloysius254',
    date: '2024-08-01',
  },
  {
    id: 'project-3',
    title: 'Networking Lab Projects',
    description:
      'Configured LAN environments, practiced IP addressing, subnetting, and router/switch setup as part of university coursework at Zetech University. Troubleshot real network issues in a lab setting.',
    technologies: ['TCP/IP', 'LAN', 'Subnetting', 'Cisco'],
    thumbnailUrl: '/images/placeholder.webp',
    date: '2023-06-01',
  },
];
