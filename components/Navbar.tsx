// components/Navbar.tsx

'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = navLinks.map((link) => link.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 w-full z-50"
      style={{
        background: scrolled
          ? 'rgba(5, 5, 5, 0.85)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(255, 255, 255, 0.06)'
          : '1px solid transparent',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <div className="container-custom">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '72px',
          }}
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleClick('#home');
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
            }}
          >
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: '1.1rem',
                color: 'white',
              }}
            >
              A
            </div>
            <span
              style={{
                fontWeight: 700,
                fontSize: '1.15rem',
                letterSpacing: '-0.02em',
              }}
            >
              cipheraman
            </span>
          </a>

          {/* Desktop Links */}
          <div
            style={{
              alignItems: 'center',
              gap: '8px',
            }}
            className="hidden md:flex"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(link.href);
                }}
                style={{
                  position: 'relative',
                  padding: '8px 16px',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color:
                    activeSection === link.href.replace('#', '')
                      ? '#fee2e2'
                      : '#a1a1aa',
                  transition: 'color 0.3s ease',
                  borderRadius: '8px',
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = '#fee2e2';
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== link.href.replace('#', '')) {
                    (e.target as HTMLElement).style.color = '#a1a1aa';
                  }
                }}
              >
                {link.label}
                {activeSection === link.href.replace('#', '') && (
                  <motion.div
                    layoutId="activeNav"
                    style={{
                      position: 'absolute',
                      bottom: '2px',
                      left: '16px',
                      right: '16px',
                      height: '2px',
                      borderRadius: '1px',
                      background: 'linear-gradient(90deg, #ef4444, #dc2626)',
                    }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  />
                )}
              </a>
            ))}

            {/* Resume Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginLeft: '8px',
                padding: '8px 20px',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'white',
                background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                borderRadius: '9999px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.transform = 'translateY(-1px)';
                (e.target as HTMLElement).style.boxShadow =
                  '0 4px 20px rgba(239,68,68,0.4)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.transform = 'translateY(0)';
                (e.target as HTMLElement).style.boxShadow = 'none';
              }}
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            style={{
              color: '#a1a1aa',
              padding: '8px',
              borderRadius: '8px',
              transition: 'color 0.3s ease',
              display: undefined,
            }}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              background: 'rgba(5, 5, 5, 0.95)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '16px 24px 24px',
                gap: '4px',
              }}
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(link.href);
                  }}
                  style={{
                    padding: '12px 16px',
                    fontSize: '1rem',
                    fontWeight: 500,
                    color:
                      activeSection === link.href.replace('#', '')
                        ? '#fecaca'
                        : '#a1a1aa',
                    borderRadius: '8px',
                    transition: 'all 0.2s ease',
                    background:
                      activeSection === link.href.replace('#', '')
                        ? 'rgba(239, 68, 68, 0.1)'
                        : 'transparent',
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginTop: '8px',
                  padding: '12px 20px',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: 'white',
                  background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                  borderRadius: '9999px',
                  textAlign: 'center',
                }}
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
