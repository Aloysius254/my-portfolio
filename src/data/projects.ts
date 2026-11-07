import type { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'project-1',
    title: 'Personal Portfolio Website',
    description:
      'A fully responsive portfolio built with React, TypeScript, and Tailwind CSS. Features dark/light mode, smooth navigation, project filtering, and a contact form. Deployed via GitHub Actions to GitHub Pages.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    thumbnailUrl: 'images/portfolio.png',
    liveUrl: 'https://aloysius254.github.io/my-portfolio/',
    repoUrl: 'https://github.com/Aloysius254/my-portfolio',
    date: '2024-12-01',
  },
  {
    id: 'project-2',
    title: 'Hotel Wi-Fi Isolation & Throttling System',
    description:
      'Designed and implemented a hotel Wi-Fi management system featuring guest network isolation and bandwidth throttling. The system ensures guests are kept on separate network segments for security while allowing administrators to control bandwidth allocation per user. Presented to Zetech University.',
    technologies: ['Networking', 'Wi-Fi', 'Access Control', 'Bandwidth Management'],
    thumbnailUrl: 'images/guest connected.png',
    date: '2025-06-01',
  },
  {
    id: 'project-3',
    title: 'Digital Clearance System for Graduating Students',
    description:
      'Built a digital clearance system to replace the manual paper-based clearance process for graduating students at Kiirua Technical Training Institute. The system streamlines department sign-offs and tracks clearance status in real time. Presented to the Kenya National Examinations Council.',
    technologies: ['PHP', 'HTML', 'CSS', 'MySQL'],
    thumbnailUrl: 'images/dashboard.png',
    date: '2024-10-01',
  },
  {
    id: 'project-4',
    title: 'Progressive Web App (PWA)',
    description:
      'A Progressive Web App with offline functionality using service workers and a web app manifest. Optimized for cross-device performance and fast loading times.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Service Workers'],
    thumbnailUrl: 'images/analysis.png',
    repoUrl: 'https://github.com/Aloysius254',
    date: '2024-08-01',
  },
  {
    id: 'project-5',
    title: 'Network Analysis & Monitoring',
    description:
      'Configured and monitored LAN environments, practiced IP addressing, subnetting, and router/switch setup. Used network analysis tools to troubleshoot real network issues during internship at Meru Central Dairy Cooperative Union.',
    technologies: ['TCP/IP', 'LAN', 'Subnetting', 'Network Analysis'],
    thumbnailUrl: 'images/networkmap.png',
    date: '2024-07-01',
  },
  {
    id: 'project-6',
    title: 'Analytics Dashboard',
    description:
      'Designed and built an analytics dashboard interface for visualizing data metrics, traffic patterns, and performance indicators.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Charts'],
    thumbnailUrl: 'images/Analytics.png',
    date: '2024-03-01',
  },
];
