// data/projects.ts

import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description:
      'Full-stack e-commerce solution with secure payment processing, real-time inventory management, and an admin analytics dashboard.',
    longDescription:
      'Built a complete e-commerce platform with Next.js, PostgreSQL, and Stripe. Features include product filtering, cart management, user authentication, and admin dashboard.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    image: '/images/ecommerce.jpg',
    github: 'https://github.com/yourusername/ecommerce',
    live: 'https://ecommerce-demo.vercel.app',
    featured: true,
    category: 'Full Stack',
  },
  {
    id: '2',
    title: 'Task Management App',
    description:
      'Real-time collaborative task management application with drag-and-drop Kanban boards and team synchronization.',
    longDescription:
      'Developed a real-time task management app with Firebase, allowing teams to collaborate seamlessly. Features drag-and-drop, notifications, and data sync.',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
    image: '/images/taskapp.jpg',
    github: 'https://github.com/yourusername/taskapp',
    live: 'https://taskapp-demo.vercel.app',
    featured: true,
    category: 'Frontend',
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description:
      'Interactive weather dashboard with location search, 7-day forecasts, and beautiful data visualizations.',
    longDescription:
      'Interactive weather dashboard using OpenWeather API. Shows current conditions, 7-day forecast, and location-based weather with beautiful UI.',
    technologies: ['Next.js', 'TypeScript', 'OpenWeather API', 'Chart.js'],
    image: '/images/weather.jpg',
    github: 'https://github.com/yourusername/weather',
    live: 'https://weather-dashboard.vercel.app',
    featured: false,
    category: 'Frontend',
  },
  {
    id: '4',
    title: 'Student Portal App',
    description:
      'Android application for college students with PDF viewer, API integration, and dynamic academic data fetching.',
    longDescription:
      'Built a native Android app using Kotlin and Jetpack Compose with Retrofit for API calls, DownloadManager for PDFs, and Material 3 design.',
    technologies: ['Kotlin', 'Jetpack Compose', 'Retrofit', 'Material 3'],
    image: '/images/portal.jpg',
    github: 'https://github.com/yourusername/student-portal',
    featured: false,
    category: 'Mobile',
  },
];