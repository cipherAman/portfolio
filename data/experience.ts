// data/experience.ts

import { Experience, Education } from '@/types';

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Tech Startup',
    role: 'Frontend Developer Intern',
    period: 'May 2025 – Present',
    description:
      'Contributing to the development of customer-facing web applications using React and TypeScript.',
    highlights: [
      'Built responsive UI components reducing page load time by 30%',
      'Collaborated with design and backend teams in an agile workflow',
      'Implemented unit tests with Jest achieving 85% code coverage',
    ],
    type: 'internship',
  },
  {
    id: '2',
    company: 'Freelance',
    role: 'Full Stack Developer',
    period: 'Jan 2025 – Apr 2025',
    description:
      'Delivered web solutions for small businesses, handling end-to-end development.',
    highlights: [
      'Developed 3 production websites with Next.js and Tailwind CSS',
      'Integrated payment gateways and CMS solutions',
      'Managed client communication and project timelines independently',
    ],
    type: 'freelance',
  },
  {
    id: '3',
    company: 'University Tech Club',
    role: 'Web Development Lead',
    period: 'Aug 2024 – Dec 2024',
    description:
      'Led a team of 5 developers to build and maintain the club\'s web presence and internal tools.',
    highlights: [
      'Mentored junior developers on React and Git workflows',
      'Organized 4 workshops on modern web development',
      'Built event management system used by 500+ students',
    ],
    type: 'academic',
  },
];

export const education: Education[] = [
  {
    id: '1',
    institution: 'Ramgarh Engineering College',
    degree: 'Bachelor of Technology',
    field: 'Computer Science & Engineering',
    period: '2024 – 2028',
    grade: 'CGPA: 7.1',
    highlights: [
      'Member of Team Udaan'
    ],
  },
];
