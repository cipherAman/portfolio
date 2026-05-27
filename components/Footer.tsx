// components/Footer.tsx
'use client';

import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart } from 'react-icons/fi';

const socials = [
  { icon: FiGithub, href: 'https://github.com/yourusername', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
  { icon: FiTwitter, href: 'https://twitter.com/yourhandle', label: 'Twitter' },
  { icon: FiMail, href: 'mailto:your.email@example.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '48px 0 32px', position: 'relative' }}>
      <div className="container-custom">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
          {/* Social Links */}
          <div style={{ display: 'flex', gap: '12px' }}>
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', color: '#52525b', fontSize: '1.1rem', transition: 'all 0.3s ease' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.4)'; e.currentTarget.style.color = '#fca5a5'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = '#52525b'; }}>
                  <Icon />
                </a>
              );
            })}
          </div>

          {/* Nav links */}
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} style={{ fontSize: '0.85rem', color: '#52525b', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#fca5a5'; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#52525b'; }}>
                {item}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p style={{ fontSize: '0.8rem', color: '#3f3f46', display: 'flex', alignItems: 'center', gap: '6px' }}>
            © {new Date().getFullYear()} Aman Kumar. Built with <FiHeart size={12} style={{ color: 'var(--accent-red)' }} /> using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
