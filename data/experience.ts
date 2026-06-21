// data/experience.ts

import { Experience, Education } from '@/types';

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'TechXquad',
    role: 'Frontend Developer Intern',
    period: 'June 2025 – July 2025',
    description:
      'Contributing to the development of customer-facing web applications using React .',
    highlights: [
      'Built responsive UI components reducing page load time by 30%',
      'Collaborated with design and backend teams in an agile workflow',
      'Implemented unit tests with Jest achieving 85% code coverage',
    ],
    type: 'internship',
  },
  {
    id: '3',
    company: 'Team Udaan',
    role: 'Web Development member',
    period: 'Aug 2024 – ongoing',
    description:
      'Contributing to the development and maintenance of web projects as part of the team.',
    highlights: [
      'Collaborated with team members on React-based web applications',
      'Participated in workshops and hackathons on modern web development',
      'Helped build and maintain web tools used by 500+ students',
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
      'Student Coordinator of Team Udaan'
    ],
  },
];
