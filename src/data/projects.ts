import type { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'project-1',
    title: 'Personal Portfolio Website',
    description:
      'A fully responsive portfolio built with React, TypeScript, and Tailwind CSS. Features dark/light mode, smooth navigation, project filtering, and a contact form. Deployed via GitHub Actions to GitHub Pages.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    thumbnailUrl: 'images/dashboard.png',
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
    thumbnailUrl: 'images/analysis.png',
    repoUrl: 'https://github.com/Aloysius254',
    date: '2024-08-01',
  },
  {
    id: 'project-3',
    title: 'Network Analysis & Monitoring',
    description:
      'Configured and monitored LAN environments, practiced IP addressing, subnetting, and router/switch setup. Used network analysis tools to troubleshoot real network issues.',
    technologies: ['TCP/IP', 'LAN', 'Subnetting', 'Network Analysis'],
    thumbnailUrl: 'images/networkmap.png',
    date: '2023-06-01',
  },
  {
    id: 'project-4',
    title: 'Guest Network Management',
    description:
      'Set up and managed guest network connectivity, configuring access points and monitoring connected devices for a secure and reliable guest experience.',
    technologies: ['Networking', 'Wi-Fi', 'Access Control'],
    thumbnailUrl: 'images/guest connected.png',
    date: '2023-09-01',
  },
  {
    id: 'project-5',
    title: 'Analytics Dashboard',
    description:
      'Designed and built an analytics dashboard interface for visualizing data metrics, traffic patterns, and performance indicators.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Charts'],
    thumbnailUrl: 'images/Analytics.png',
    date: '2024-03-01',
  },
];
