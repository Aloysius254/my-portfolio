import type { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'project-1',
    title: 'Personal Portfolio Website',
    description:
      'A fully responsive personal portfolio built and deployed to GitHub Pages. Features dark/light mode, smooth navigation, project filtering, and a contact form.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    thumbnailUrl: 'images/portfolio.png',
    liveUrl: 'https://aloysius254.github.io/my-portfolio/',
    repoUrl: 'https://github.com/Aloysius254/my-portfolio',
    date: '2024-12-01',
  },
  {
    id: 'project-2',
    title: 'Sentinel Security System',
    description:
      'An endpoint security monitoring platform for Windows laptops and Android phones. Monitors logins, USB activity, running processes, network changes, and device location, with remote lock and wipe. Backed by a REST and WebSocket server with JWT authentication, role-based access control, signed commands, and tamper-evident audit logs.',
    technologies: ['Python', 'Node.js', 'TypeScript', 'React', 'Kotlin', 'MySQL', 'WebSocket', 'Firebase FCM'],
    thumbnailUrl: 'images/Sentinel security.png',
    date: '2025-09-01',
  },
  {
    id: 'project-3',
    title: 'ChatCart — WhatsApp Order Management Platform',
    description:
      'A multi-tenant SaaS platform where small businesses run online stores and customers send orders directly to WhatsApp. Features JWT authentication with HttpOnly cookies, role-based access, login rate limiting, a superadmin dashboard, M-Pesa and bank transfer payments, and automatic deployment from GitHub to Render with a cloud-hosted database.',
    technologies: ['React', 'Node.js', 'Express', 'SQLite', 'JWT', 'Render'],
    thumbnailUrl: 'images/chatcart.png',
    date: '2025-08-01',
  },
  {
    id: 'project-4',
    title: 'Hotel Wi-Fi Isolation & Throttling System',
    description:
      'A hotel Wi-Fi management system with guest network isolation and bandwidth throttling controls. Developed as a graduation project and presented to the Zetech University examination panel.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'SQL'],
    thumbnailUrl: 'images/guest connected.png',
    date: '2025-06-01',
  },
  {
    id: 'project-5',
    title: 'Digital Clearance System for Graduating Students',
    description:
      'A digital clearance system that replaces the manual paper-based clearance process for graduating students. Streamlines department sign-offs and tracks clearance status in real time. Developed as a course completion project and presented to the Kenya National Examinations Council (KNEC).',
    technologies: ['PHP', 'HTML', 'CSS', 'MySQL'],
    thumbnailUrl: 'images/dashboard.png',
    date: '2024-10-01',
  },
  {
    id: 'project-6',
    title: 'Digital Forensic Analysis Tool',
    description:
      'A forensic analysis tool for investigating digital evidence, supporting file carving, metadata extraction, and disk image analysis while maintaining chain of custody.',
    technologies: ['Python'],
    thumbnailUrl: 'images/Sentinel Forensics.png',
    date: '2025-10-01',
  },
  {
    id: 'project-7',
    title: 'Progressive Web App (PWA)',
    description:
      'A Progressive Web App with offline functionality using service workers and a web app manifest. Optimised for cross-device performance and fast loading times.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Service Workers'],
    thumbnailUrl: 'images/analysis.png',
    repoUrl: 'https://github.com/Aloysius254',
    date: '2024-08-01',
  },
  {
    id: 'project-8',
    title: 'Network Analysis & Monitoring',
    description:
      'Configured and monitored LAN environments including IP addressing, subnetting, and router/switch setup. Used network analysis tools to troubleshoot real network issues during internship at Meru Central Dairy Cooperative Union.',
    technologies: ['TCP/IP', 'LAN', 'Subnetting', 'Network Analysis'],
    thumbnailUrl: 'images/networkmap.png',
    date: '2024-07-01',
  },
];
