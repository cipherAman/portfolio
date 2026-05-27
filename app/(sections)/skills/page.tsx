// app/(sections)/skills/page.tsx

'use client';

import { skills } from '@/data/skills';
import { motion } from 'framer-motion';

export default function SkillsPage() {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <main className="min-h-screen pt-28 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-blue-500">Skills</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Technologies and tools I work with to build amazing products.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skills.map((skillGroup) => (
            <motion.div
              key={skillGroup.id}
              variants={itemVariants}
              className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-all"
            >
              <h2 className="text-2xl font-bold mb-4 text-blue-400">
                {skillGroup.category}
              </h2>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700 hover:border-blue-500/50 hover:text-blue-400 transition-all cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { label: 'Years of Experience', value: '2+' },
            { label: 'Projects Completed', value: '20+' },
            { label: 'Happy Clients', value: '15+' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gray-900/50 border border-gray-800 rounded-xl"
            >
              <div className="text-3xl font-bold text-blue-500 mb-2">
                {stat.value}
              </div>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}