// app/(sections)/about/page.tsx

'use client';

import { motion } from 'framer-motion';
import { FiCode, FiUsers, FiTarget, FiBook } from 'react-icons/fi';

export default function AboutPage() {
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

  const values = [
    {
      icon: FiCode,
      title: 'Clean Code',
      description: 'Writing maintainable, readable code that scales.',
    },
    {
      icon: FiUsers,
      title: 'Collaboration',
      description: 'Working effectively with teams to deliver great products.',
    },
    {
      icon: FiTarget,
      title: 'Problem Solving',
      description: 'Finding elegant solutions to complex challenges.',
    },
    {
      icon: FiBook,
      title: 'Continuous Learning',
      description: 'Always exploring new technologies and best practices.',
    },
  ];

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
            About <span className="text-blue-500">Me</span>
          </h1>
        </motion.div>

        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Bio Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <p className="text-lg text-gray-300 leading-relaxed">
              Hi! I'm a passionate full-stack developer with a keen interest in building
              beautiful and functional web applications. With expertise in modern web
              technologies, I love transforming ideas into reality through clean code and
              thoughtful design.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I started my journey in web development with curiosity about how websites work,
              and it evolved into a deep passion for creating user-friendly applications. Today,
              I focus on building scalable solutions using modern technologies like Next.js,
              TypeScript, and Node.js.
            </p>
          </motion.div>

          {/* Experience Section */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-bold mb-6">Experience</h2>
            <div className="space-y-4">
              {[
                {
                  role: 'Full Stack Developer',
                  company: 'Tech Company',
                  period: '2023 - Present',
                  description: 'Building scalable web applications and mentoring junior developers.',
                },
                {
                  role: 'Frontend Developer',
                  company: 'Startup Inc',
                  period: '2022 - 2023',
                  description: 'Developed responsive web interfaces with React and TypeScript.',
                },
              ].map((exp, index) => (
                <div
                  key={index}
                  className="border-l-2 border-blue-500 pl-4 py-2"
                >
                  <h3 className="font-bold text-white">{exp.role}</h3>
                  <p className="text-blue-400 text-sm">{exp.company}</p>
                  <p className="text-gray-500 text-sm mb-2">{exp.period}</p>
                  <p className="text-gray-400">{exp.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Values Section */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-bold mb-6">What I Value</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-4 hover:border-blue-500/50 transition-all"
                  >
                    <Icon className="text-blue-500 text-2xl mb-3" />
                    <h3 className="font-bold mb-2">{value.title}</h3>
                    <p className="text-gray-400 text-sm">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-bold mb-6">Education</h2>
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2">
                Bachelor of Technology in Information Technology
              </h3>
              <p className="text-blue-400 mb-2">University Name</p>
              <p className="text-gray-400">Graduated: 2022</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}