// data/skills.ts

import { Skill } from '@/types';

export const skills: Skill[] = [
  {
    id: '1',
    category: 'Frontend',
    icon: '🎨',
    items: [
      { name: 'React', level: 90 },
      // { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 85 },
      { name: 'JavaScript', level: 92 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'Framer Motion', level: 75 },
    ],
  },
  {
    id: '2',
    category: 'Backend',
    icon: '⚙️',
    items: [
      { name: 'Node.js', level: 82 },
      { name: 'Express', level: 80 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'MongoDB', level: 78 },
      { name: 'Firebase', level: 80 },
      { name: 'REST APIs', level: 88 },
    ],
  },
  // {
  //   id: '3',
  //   category: 'Mobile',
  //   icon: '📱',
  //   items: [
  //     { name: 'Kotlin', level: 75 },
  //     { name: 'Jetpack Compose', level: 70 },
  //     { name: 'React Native', level: 65 },
  //     { name: 'Material Design', level: 78 },
  //   ],
  // },
  {
    id: '4',
    category: 'Tools & DevOps',
    icon: '🛠️',
    items: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'VS Code', level: 92 },
      { name: 'Docker', level: 60 },
      { name: 'Vercel', level: 85 },
      { name: 'Linux', level: 78 },
    ],
  },
];