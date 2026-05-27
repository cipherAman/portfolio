// components/ContactSection.tsx
'use client';

import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiSend, FiMapPin, FiArrowUpRight } from 'react-icons/fi';
import { useState } from 'react';

const contactLinks = [
  { icon: FiMail, label: 'Email', value: 'aman.enthusiast@gmail.com', href: 'mailto:aman.enthusiast@gmail.com' },
  { icon: FiGithub, label: 'GitHub', value: 'github.com/cipheraman', href: 'https://github.com/cipheraman' },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/cipheraman', href: 'https://linkedin.com/in/cipheraman' },
  { icon: FiMapPin, label: 'Location', value: 'Jharkhand, India', href: '#' },
];

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '14px 18px', fontSize: '0.95rem',
  background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '12px', color: '#f0f0f0', outline: 'none', transition: 'all 0.3s ease',
};

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

    if (endpoint) {
      try {
        const payload = endpoint.includes('web3forms')
          ? {
              access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
              ...formData,
            }
          : formData;

        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
          setSubmitted(true);
          setFormData({ name: '', email: '', message: '' });
          setTimeout(() => setSubmitted(false), 5000);
        } else {
          alert('Submission failed. Please check your form endpoint configuration.');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Network error. Please try again or contact me directly via email.');
      }
    } else {
      // Simulation/demo mode if no endpoint is configured
      await new Promise((r) => setTimeout(r, 1200));
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }

    setIsSubmitting(false);
  };

  const focusHandler = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.5)';
    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';
  };
  const blurHandler = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
    e.currentTarget.style.boxShadow = 'none';
  };

  return (
    <section id="contact" className="section" style={{ position: 'relative' }}>
      <div className="bg-orb" style={{ width: '450px', height: '450px', background: 'var(--accent-red)', top: '30%', right: '-100px', opacity: 0.06, animation: 'orb-float-3 20s ease-in-out infinite' }} />
      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} style={{ marginBottom: '64px', textAlign: 'center' }}>
          <p style={{ fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--accent-red)', marginBottom: '12px' }}>Get in Touch</p>
          <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '16px' }}>Let&apos;s Work Together</h2>
          <p style={{ fontSize: '1.05rem', color: '#71717a', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>Have a project in mind, an internship opportunity, or just want to say hi? I&apos;d love to hear from you.</p>
          <div style={{ width: '60px', height: '3px', borderRadius: '2px', background: 'linear-gradient(90deg,var(--accent-red),var(--accent-crimson))', margin: '24px auto 0' }} />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))', gap: '40px', maxWidth: '1000px', margin: '0 auto' }}>
          {/* Contact Links */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '8px' }}>Contact Information</h3>
            {contactLinks.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.a key={i} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ x: 4 }}
                  className="glass-card" style={{ padding: '18px 20px', display: 'flex', alignItems: 'center', gap: '16px', cursor: item.href === '#' ? 'default' : 'pointer' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fca5a5', flexShrink: 0 }}>
                    <Icon size={18} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontSize: '0.75rem', fontWeight: 500, color: '#52525b', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '2px' }}>{item.label}</p>
                    <p style={{ fontSize: '0.9rem', fontWeight: 500, color: '#d4d4d8', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.value}</p>
                  </div>
                  {item.href !== '#' && <FiArrowUpRight size={16} style={{ color: '#52525b', flexShrink: 0 }} />}
                </motion.a>
              );
            })}
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <form onSubmit={handleSubmit} className="glass-card" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your full name" style={inputStyle} onFocus={focusHandler} onBlur={blurHandler} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com" style={inputStyle} onFocus={focusHandler} onBlur={blurHandler} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="Tell me about your project or opportunity..." style={{ ...inputStyle, resize: 'none', lineHeight: 1.6 }} onFocus={focusHandler} onBlur={blurHandler} />
              </div>
              <motion.button type="submit" disabled={isSubmitting} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                style={{ width: '100%', padding: '14px 24px', fontSize: '0.95rem', fontWeight: 600, color: 'white', background: isSubmitting ? 'rgba(239, 68, 68, 0.3)' : 'linear-gradient(135deg,var(--accent-red),var(--accent-crimson))', borderRadius: '12px', border: 'none', cursor: isSubmitting ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', transition: 'all 0.3s ease' }}>
                {isSubmitting ? 'Sending...' : submitted ? '✓ Message Sent!' : <><span>Send Message</span><FiSend size={16} /></>}
              </motion.button>
              {submitted && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ fontSize: '0.85rem', color: '#6ee7b7', textAlign: 'center', fontWeight: 500 }}>Thanks for reaching out! I&apos;ll get back to you soon.</motion.p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
