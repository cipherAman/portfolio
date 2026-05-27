// app/(sections)/projects/page.tsx

'use client';

import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import { motion } from 'framer-motion';

export default function ProjectsPage() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <main className="min-h-screen pt-28 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-blue-500">Projects</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            A collection of projects I've built showcasing my skills in web development,
            problem-solving, and design.
          </p>
        </motion.div>

        {/* Featured Projects */}
        {featured.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-gray-300">Featured</h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            >
              {featured.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          </div>
        )}

        {/* Other Projects */}
        {others.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-8 text-gray-300">More Projects</h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {others.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          </div>
        )}
      </div>
    </main>
  );
}