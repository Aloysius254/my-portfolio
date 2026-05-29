import type { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'project-1',
    title: 'Personal Finance Dashboard',
    description:
      'A responsive web app for tracking income, expenses, and savings goals. Features interactive charts, category breakdowns, and CSV export.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts'],
    thumbnailUrl: '/images/projects/finance-dashboard.webp',
    liveUrl: 'https://finance-dashboard.example.com',
    repoUrl: 'https://github.com/owner/finance-dashboard',
    date: '2024-09-15',
  },
  {
    id: 'project-2',
    title: 'Task Management API',
    description:
      'A RESTful API for managing tasks and projects with user authentication, role-based access control, and real-time notifications via WebSockets.',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'TypeScript', 'Docker'],
    thumbnailUrl: '/images/projects/task-api.webp',
    repoUrl: 'https://github.com/owner/task-api',
    date: '2024-05-20',
  },
  {
    id: 'project-3',
    title: 'Weather Forecast App',
    description:
      'A mobile-first weather application that displays current conditions and a 7-day forecast using the OpenWeatherMap API, with location search and geolocation support.',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    thumbnailUrl: '/images/projects/weather-app.webp',
    liveUrl: 'https://weather.example.com',
    repoUrl: 'https://github.com/owner/weather-app',
    date: '2024-02-10',
  },
];
