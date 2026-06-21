// data/projects.ts

import { Project } from '@/types';

export const projects: Project[] = [
  // {
  //   id: '1',
  //   title: 'E-Commerce Platform',
  //   description:
  //     'Full-stack e-commerce solution with secure payment processing, real-time inventory management, and an admin analytics dashboard.',
  //   longDescription:
  //     'Built a complete e-commerce platform with Next.js, PostgreSQL, and Stripe. Features include product filtering, cart management, user authentication, and admin dashboard.',
  //   technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
  //   image: '/images/ecommerce.jpg',
  //   github: 'https://github.com/yourusername/ecommerce',
  //   live: 'https://ecommerce-demo.vercel.app',
  //   featured: true,
  //   category: 'Full Stack',
  // },
  {
    id: '1',
    title: 'CipherXDev',
    description:
      'A full stack engineering studio platform featuring 3D experiences, authentication, and dynamic content.',
    longDescription:
      'Architected a full stack engineering studio platform using Next.js App Router, TypeScript, and MongoDB. Engineered an immersive UI with Tailwind CSS, integrating Three.js/React Three Fiber and Framer Motion for interactive 3D experiences and animations. Implemented secure authentication with Next-Auth, global state management via Zustand, and achieved a 95+ Lighthouse score. Deployed via Vercel with optimized SEO.',
    technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Next-Auth', 'Three.js', 'Framer Motion', 'Tailwind CSS'],
    image: '/images/cipherxdev.jpg',
    github: '',
    live: 'https://new.cipherxdev.in',
    featured: true,
    category: 'Full Stack',
  },
  {
    id: '2',
    title: 'Link Vault',
    description:
      'A full stack web app to save, organize, and revisit your important links — with JWT authentication and tag-based organization.',
    longDescription:
      'Architected and built a full stack CRUD application with React and Tailwind CSS frontend, Node.js/Express REST API, and MongoDB database. Implemented user authentication with JWT, protected routes, and full CRUD operations for link management with tag-based organization. Deployed on Render (backend) and Vercel (frontend) with CORS, environment config, and secure API endpoints.',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    image: '/images/linkvault.jpg',
    github: 'https://github.com/cipherAman/link-vault',
    live: 'https://link-vault.amanx.in',
    featured: true,
    category: 'Full Stack',
  },
  // {
  //   id: '3',
  //   title: 'Weather Dashboard',
  //   description:
  //     'Interactive weather dashboard with location search, 7-day forecasts, and beautiful data visualizations.',
  //   longDescription:
  //     'Interactive weather dashboard using OpenWeather API. Shows current conditions, 7-day forecast, and location-based weather with beautiful UI.',
  //   technologies: ['Next.js', 'TypeScript', 'OpenWeather API', 'Chart.js'],
  //   image: '/images/weather.jpg',
  //   github: 'https://github.com/yourusername/weather',
  //   live: 'https://weather-dashboard.vercel.app',
  //   featured: false,
  //   category: 'Frontend',
  // },
  // {
  //   id: '4',
  //   title: 'Student Portal App',
  //   description:
  //     'Android application for college students with PDF viewer, API integration, and dynamic academic data fetching.',
  //   longDescription:
  //     'Built a native Android app using Kotlin and Jetpack Compose with Retrofit for API calls, DownloadManager for PDFs, and Material 3 design.',
  //   technologies: ['Kotlin', 'Jetpack Compose', 'Retrofit', 'Material 3'],
  //   image: '/images/portal.jpg',
  //   github: 'https://github.com/yourusername/student-portal',
  //   featured: false,
  //   category: 'Mobile',
  // },
  
  
];