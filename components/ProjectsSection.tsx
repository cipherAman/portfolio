// components/ProjectsSection.tsx

'use client';

import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';
import { useState } from 'react';

const categories = ['All', 'Full Stack', 'Frontend', 'Mobile'];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section" style={{ position: 'relative' }}>
      {/* Background orb */}
      <div
        className="bg-orb"
        style={{
          width: '500px',
          height: '500px',
          background: 'var(--accent-red)',
          bottom: '10%',
          left: '-150px',
          opacity: 0.06,
          animation: 'orb-float-1 24s ease-in-out infinite',
        }}
      />

      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '48px' }}
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
            Portfolio
          </p>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              marginBottom: '16px',
            }}
          >
            Featured Projects
          </h2>
          <div
            style={{
              width: '60px',
              height: '3px',
              borderRadius: '2px',
              background: 'linear-gradient(90deg, var(--accent-red), var(--accent-crimson))',
              marginBottom: '24px',
            }}
          />

          {/* Filter Tabs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  padding: '8px 20px',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  borderRadius: '9999px',
                  border: '1px solid',
                  borderColor:
                    activeFilter === cat
                      ? 'rgba(239, 68, 68, 0.5)'
                      : 'rgba(255, 255, 255, 0.08)',
                  background:
                    activeFilter === cat
                      ? 'rgba(239, 68, 68, 0.15)'
                      : 'rgba(255, 255, 255, 0.03)',
                  color: activeFilter === cat ? '#fca5a5' : '#71717a',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '20px',
          }}
        >
          {filtered.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="glass-card"
              style={{
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Image Placeholder / Gradient */}
              <div
                style={{
                  height: '200px',
                  background: `linear-gradient(135deg, 
                    ${index % 3 === 0 ? 'rgba(239,68,68,0.12)' : index % 3 === 1 ? 'rgba(220,38,38,0.12)' : 'rgba(185,28,28,0.12)'}, 
                    rgba(0,0,0,0.3))`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Pattern Overlay */}
                <div
                  className="grid-bg"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: 0.6,
                  }}
                />
                <FiFolder
                  style={{
                    fontSize: '3rem',
                    color: 'rgba(255, 255, 255, 0.1)',
                    position: 'relative',
                    zIndex: 1,
                  }}
                />

                {/* Featured Badge */}
                {project.featured && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      padding: '4px 12px',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      borderRadius: '9999px',
                      background: 'rgba(239, 68, 68, 0.2)',
                      color: '#fca5a5',
                      border: '1px solid rgba(239, 68, 68, 0.3)',
                      backdropFilter: 'blur(10px)',
                      zIndex: 2,
                    }}
                  >
                    Featured
                  </div>
                )}

                {/* Category tag */}
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    padding: '4px 12px',
                    fontSize: '0.7rem',
                    fontWeight: 500,
                    borderRadius: '9999px',
                    background: 'rgba(0, 0, 0, 0.5)',
                    color: '#a1a1aa',
                    backdropFilter: 'blur(10px)',
                    zIndex: 2,
                  }}
                >
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div
                style={{
                  padding: '24px',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <h3
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    marginBottom: '10px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.9rem',
                    color: '#71717a',
                    lineHeight: 1.7,
                    marginBottom: '16px',
                    flex: 1,
                  }}
                >
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px',
                    marginBottom: '20px',
                  }}
                >
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div
                  style={{
                    display: 'flex',
                    gap: '12px',
                    paddingTop: '16px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  }}
                >
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        color: '#71717a',
                        padding: '6px 14px',
                        borderRadius: '8px',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                        transition: 'all 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.4)';
                        e.currentTarget.style.color = '#fca5a5';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                        e.currentTarget.style.color = '#71717a';
                      }}
                    >
                      <FiGithub size={15} />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        color: '#71717a',
                        padding: '6px 14px',
                        borderRadius: '8px',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                        transition: 'all 0.3s ease',
                        marginLeft: 'auto',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.4)';
                        e.currentTarget.style.color = '#fca5a5';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                        e.currentTarget.style.color = '#71717a';
                      }}
                    >
                      Live Demo
                      <FiExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
