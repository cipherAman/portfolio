// components/ProjectCard.tsx

'use client';

import { Project } from '@/types';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all group"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-gray-800">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <p className="absolute inset-0 flex items-center justify-center text-gray-500">
          [Project Image]
        </p>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 bg-gray-800 text-blue-400 rounded border border-gray-700"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs px-2 py-1 bg-gray-800 text-gray-400">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-4 border-t border-gray-800">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-400 hover:text-blue-500 transition-colors"
            >
              <FiGithub size={16} />
              <span className="text-sm">Code</span>
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-400 hover:text-blue-500 transition-colors ml-auto"
            >
              <span className="text-sm">Live Demo</span>
              <FiExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}