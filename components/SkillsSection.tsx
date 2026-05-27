// components/SkillsSection.tsx

'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data/skills';

export default function SkillsSection() {
  return (
    <section id="skills" className="section" style={{ position: 'relative' }}>
      {/* Background orb */}
      <div
        className="bg-orb"
        style={{
          width: '400px',
          height: '400px',
          background: 'var(--accent-red)',
          top: '20%',
          right: '-100px',
          opacity: 0.08,
          animation: 'orb-float-2 22s ease-in-out infinite',
        }}
      />

      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
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
              color: 'var(--accent-red)',
              marginBottom: '12px',
            }}
          >
            Technical Skills
          </p>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              marginBottom: '16px',
            }}
          >
            What I Work With
          </h2>
          <div
            style={{
              width: '60px',
              height: '3px',
              borderRadius: '2px',
              background: 'linear-gradient(90deg, var(--accent-red), var(--accent-crimson))',
            }}
          />
        </motion.div>

        {/* Skills Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {skills.map((group, groupIndex) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: groupIndex * 0.1, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="glass-card"
              style={{ padding: '28px' }}
            >
              {/* Category Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '24px',
                }}
              >
                <span style={{ fontSize: '1.5rem' }}>{group.icon}</span>
                <h3
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {group.category}
                </h3>
              </div>

              {/* Skill Items with Progress */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {group.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: groupIndex * 0.1 + skillIndex * 0.05,
                      duration: 0.4,
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '6px',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '0.88rem',
                          fontWeight: 500,
                          color: '#d4d4d8',
                        }}
                      >
                        {skill.name}
                      </span>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 500,
                          color: '#52525b',
                        }}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    {/* Progress Bar */}
                    <div
                      style={{
                        width: '100%',
                        height: '4px',
                        borderRadius: '2px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        overflow: 'hidden',
                      }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          delay: groupIndex * 0.15 + skillIndex * 0.08,
                          duration: 1,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                        style={{
                          height: '100%',
                          borderRadius: '2px',
                          background: 'linear-gradient(90deg, #991b1b, #ef4444, #fee2e2, #ef4444, #991b1b)',
                          backgroundSize: '200% 100%',
                          animation: 'flowing-gradient 2.5s linear infinite',
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
