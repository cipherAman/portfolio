// components/AboutSection.tsx

'use client';

import { motion } from 'framer-motion';
import { FiCode, FiUsers, FiTarget, FiBook, FiAward, FiCalendar } from 'react-icons/fi';
import { experiences, education } from '@/data/experience';

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  const values = [
    {
      icon: FiCode,
      title: 'Clean Code',
      description: 'Writing readable, maintainable code that follows best practices and scales.',
    },
    {
      icon: FiUsers,
      title: 'Collaboration',
      description: 'Working effectively in teams with clear communication and shared goals.',
    },
    {
      icon: FiTarget,
      title: 'Problem Solving',
      description: 'Breaking down complex challenges into elegant, efficient solutions.',
    },
    {
      icon: FiBook,
      title: 'Continuous Learning',
      description: 'Always exploring new technologies, frameworks, and design patterns.',
    },
  ];

  const typeColors: Record<string, { bg: string; text: string; border: string }> = {
    internship: {
      bg: 'rgba(239, 68, 68, 0.1)',
      text: '#fca5a5',
      border: 'rgba(239, 68, 68, 0.3)',
    },
    freelance: {
      bg: 'rgba(16, 185, 129, 0.1)',
      text: '#6ee7b7',
      border: 'rgba(16, 185, 129, 0.3)',
    },
    academic: {
      bg: 'rgba(251, 191, 36, 0.1)',
      text: '#fcd34d',
      border: 'rgba(251, 191, 36, 0.3)',
    },
    work: {
      bg: 'rgba(239, 68, 68, 0.08)',
      text: '#67e8f9',
      border: 'rgba(239, 68, 68, 0.25)',
    },
  };

  return (
    <section id="about" className="section">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '64px' }}
        >
          <p
            style={{
              fontSize: '0.85rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: '#ef4444',
              marginBottom: '12px',
            }}
          >
            About Me
          </p>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              marginBottom: '16px',
            }}
          >
            Who I Am
          </h2>
          <div
            style={{
              width: '60px',
              height: '3px',
              borderRadius: '2px',
              background: 'linear-gradient(90deg, #ef4444, #dc2626)',
            }}
          />
        </motion.div>

        {/* Bio */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '48px',
          }}
        >
          <motion.div variants={itemVariants} style={{ maxWidth: '800px' }}>
            <p
              style={{
                fontSize: '1.15rem',
                color: '#d4d4d8',
                lineHeight: 1.8,
                marginBottom: '20px',
              }}
            >
              I&apos;m a passionate full-stack developer and Computer Science student with a drive to
              build impactful digital products. I specialize in modern web technologies like{' '}
              <span style={{ color: '#fecaca', fontWeight: 500 }}>React</span>,{' '}
              <span style={{ color: '#fecaca', fontWeight: 500 }}>Next.js</span>, and{' '}
              <span style={{ color: '#fecaca', fontWeight: 500 }}>TypeScript</span>, and I&apos;m always
              exploring new tools to expand my skill set.
            </p>
            <p
              style={{
                fontSize: '1.05rem',
                color: '#a1a1aa',
                lineHeight: 1.8,
              }}
            >
              When I&apos;m not coding, I enjoy contributing to open-source projects, participating in
              hackathons, and writing technical articles. I&apos;m actively seeking internship opportunities
              where I can contribute to meaningful projects while growing as an engineer.
            </p>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            variants={itemVariants}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '16px',
            }}
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -4 }}
                  className="glass-card"
                  style={{ padding: '24px' }}
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: 'rgba(239, 68, 68, 0.1)',
                      border: '1px solid rgba(239, 68, 68, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px',
                      color: '#fca5a5',
                      fontSize: '1.1rem',
                    }}
                  >
                    <Icon />
                  </div>
                  <h3
                    style={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      marginBottom: '8px',
                    }}
                  >
                    {value.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: '#71717a',
                      lineHeight: 1.6,
                    }}
                  >
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div style={{ margin: '64px 0' }} className="section-divider" />

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '48px' }}
        >
          <h3
            style={{
              fontSize: '1.6rem',
              fontWeight: 700,
              letterSpacing: '-0.01em',
              marginBottom: '32px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <FiAward style={{ color: '#ef4444' }} />
            Experience
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {experiences.map((exp, index) => {
              const colors = typeColors[exp.type] || typeColors.work;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="glass-card"
                  style={{ padding: '24px' }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      gap: '12px',
                      marginBottom: '12px',
                    }}
                  >
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 600 }}>
                      {exp.role}
                    </h4>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '16px',
                      marginBottom: '12px',
                      fontSize: '0.9rem',
                    }}
                  >
                    <span style={{ color: '#fca5a5', fontWeight: 500 }}>
                      {exp.company}
                    </span>
                    <span
                      style={{
                        color: '#52525b',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      <FiCalendar size={13} />
                      {exp.period}
                    </span>
                  </div>
                  <p
                    style={{
                      color: '#a1a1aa',
                      fontSize: '0.9rem',
                      marginBottom: '12px',
                      lineHeight: 1.6,
                    }}
                  >
                    {exp.description}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {exp.highlights.map((h, i) => (
                      <li
                        key={i}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '10px',
                          fontSize: '0.85rem',
                          color: '#71717a',
                          marginBottom: '6px',
                          lineHeight: 1.6,
                        }}
                      >
                        <span
                          style={{
                            color: '#ef4444',
                            marginTop: '6px',
                            flexShrink: 0,
                            fontSize: '0.5rem',
                          }}
                        >
                          ◆
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <h3
            style={{
              fontSize: '1.6rem',
              fontWeight: 700,
              letterSpacing: '-0.01em',
              marginBottom: '32px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <FiBook style={{ color: '#ef4444' }} />
            Education
          </h3>

          {education.map((edu) => (
            <motion.div
              key={edu.id}
              whileHover={{ y: -2 }}
              className="glass-card"
              style={{ padding: '28px' }}
            >
              <h4 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '6px' }}>
                {edu.degree} in {edu.field}
              </h4>
              <p style={{ color: '#fca5a5', fontWeight: 500, marginBottom: '4px' }}>
                {edu.institution}
              </p>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '16px',
                  color: '#71717a',
                  fontSize: '0.9rem',
                  marginBottom: edu.highlights ? '16px' : '0',
                }}
              >
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <FiCalendar size={13} />
                  {edu.period}
                </span>
                {edu.grade && (
                  <span
                    style={{
                      padding: '2px 10px',
                      borderRadius: '9999px',
                      background: 'rgba(16, 185, 129, 0.1)',
                      color: '#6ee7b7',
                      border: '1px solid rgba(16, 185, 129, 0.2)',
                      fontSize: '0.8rem',
                      fontWeight: 500,
                    }}
                  >
                    {edu.grade}
                  </span>
                )}
              </div>
              {edu.highlights && (
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {edu.highlights.map((h, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        fontSize: '0.85rem',
                        color: '#71717a',
                        marginBottom: '4px',
                        lineHeight: 1.6,
                      }}
                    >
                      <span
                        style={{
                          color: '#ef4444',
                          marginTop: '6px',
                          flexShrink: 0,
                          fontSize: '0.5rem',
                        }}
                      >
                        ◆
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
