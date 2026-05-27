// components/Hero.tsx

'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiArrowRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiTwitter,
} from 'react-icons/fi';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  const socials = [
    {
      icon: FiGithub,
      href: 'https://github.com/cipheraman',
      label: 'GitHub',
    },
    {
      icon: FiLinkedin,
      href: 'https://linkedin.com/in/cipheraman',
      label: 'LinkedIn',
    },
    {
      icon: FiTwitter,
      href: 'https://x.com/cipheraman',
      label: 'Twitter',
    },
    {
      icon: FiMail,
      href: 'mailto:aman.enthusiast@gmail.com',
      label: 'Email',
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: isMobile ? 'flex-start' : 'center',
        justifyContent: 'center',
        paddingTop: isMobile ? '120px' : '0px',
        paddingBottom: isMobile ? '60px' : '0px',
      }}
    >
      {/* Background Orbs */}
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />

      {/* 3D After-Effects Particle Constellation Background */}
      <HeroBackground3D />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1200px',
          width: '100%',
          padding: '0 24px',
          marginTop: isMobile ? '40px' : '0px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '48px',
            textAlign: isMobile ? 'center' : 'left',
          }}
        >
          {/* Left Column: Bio Details */}
          <div
            style={{
              flex: '1.2',
              maxWidth: '650px',
            }}
          >
            {/* Status Badge */}
            {/* <motion.div
              variants={itemVariants}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '8px 20px',
                borderRadius: '9999px',
                background: 'rgba(239, 68, 68, 0.05)',
                border: '1px solid rgba(239, 68, 68, 0.2)',
                marginBottom: '32px',
                fontSize: '0.85rem',
                fontWeight: 500,
                color: '#fca5a5',
                backdropFilter: 'blur(10px)',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#10b981',
                  boxShadow: '0 0 10px #10b981',
                  display: 'inline-block',
                }}
              />
              <span>Available for Frontend & Full-Stack Internships</span>
            </motion.div> */}

            {/* Main Title */}
            <motion.h1
              variants={itemVariants}
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.2rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                marginBottom: '24px',
              }}
            >
              Hi, I&apos;m{' '}
              <span className="gradient-text">Aman Kumar</span>
            </motion.h1>

            {/* Subtitle with typing effect feel */}
            <motion.p
              variants={itemVariants}
              style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
                fontWeight: 400,
                color: '#a1a1aa',
                marginBottom: '16px',
                lineHeight: 1.5,
              }}
            >
              <span style={{ color: '#fecaca', fontWeight: 500 }}>
                Full Stack Developer
              </span>{' '}
              crafting modern web experiences
            </motion.p>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              style={{
                fontSize: '1.05rem',
                color: '#a1a1aa',
                margin: '0 auto 40px',
                lineHeight: 1.8,
                letterSpacing: '0.01em',
              }}
              className="lg:mx-0 mx-auto max-w-[650px] lg:max-w-none"
            >
              Engineering high-performance frontend architectures and robust backend services with React, Next.js, and TypeScript.
              Currently pursuing Computer Science & Engineering, dedicated to turning complex problems into elegant, production-ready applications.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                marginBottom: '48px',
              }}
              className="justify-center lg:justify-start"
            >
              <a
                href="#projects"
                className="btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector('#projects')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>View My Work</span>
                <FiArrowRight style={{ position: 'relative', zIndex: 1 }} />
              </a>
              <a
                href="#contact"
                className="btn-outline"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector('#contact')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get in Touch
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              style={{
                display: 'flex',
                gap: '16px',
              }}
              className="justify-center lg:justify-start"
            >
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      width: '44px',
                      height: '44px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      color: '#a1a1aa',
                      fontSize: '1.2rem',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = 'rgba(239, 68, 68, 0.5)';
                      el.style.color = '#fecaca';
                      el.style.background = 'rgba(239, 68, 68, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                      el.style.color = '#a1a1aa';
                      el.style.background = 'rgba(255, 255, 255, 0.04)';
                    }}
                  >
                    <Icon />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column: 3D Developer Sculpture Artifact */}
          <motion.div
            variants={itemVariants}
            style={{
              flex: '0.8',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              maxWidth: '420px',
              width: '100%',
            }}
            className="lg:mt-0 mt-8"
          >
            {/* Glowing red aura */}
            <div
              style={{
                position: 'absolute',
                width: '320px',
                height: '320px',
                borderRadius: '50%',
                background: 'rgba(239, 68, 68, 0.15)',
                filter: 'blur(80px)',
                zIndex: -1,
              }}
            />
            {/* Interactive 3D Apple-Style Tilt Card */}
            <Interactive3DCard />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <div
          style={{
            width: '24px',
            height: '40px',
            border: '2px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '12px',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '8px',
          }}
        >
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              width: '3px',
              height: '8px',
              borderRadius: '2px',
              background: 'linear-gradient(to bottom, #ef4444, #dc2626)',
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}

function HeroBackground3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Array<{
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
    }> = [];

    const numParticles = 75;
    const maxDistance = 140;

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width - width / 2,
        y: Math.random() * height - height / 2,
        z: Math.random() * 800 - 400,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        vz: (Math.random() - 0.5) * 0.3,
      });
    }

    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX - width / 2) * 0.25;
      targetMouseY = (e.clientY - height / 2) * 0.25;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      const fov = 450;
      const cx = width / 2;
      const cy = height / 2;

      const projected = particles.map((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        const rangeX = width / 2 + 100;
        const rangeY = height / 2 + 100;
        if (Math.abs(p.x) > rangeX) p.vx *= -1;
        if (Math.abs(p.y) > rangeY) p.vy *= -1;
        if (p.z > 400 || p.z < -400) p.vz *= -1;

        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let offsetX = 0;
        let offsetY = 0;
        if (dist < 250) {
          const force = (250 - dist) * 0.06;
          offsetX = (dx / dist) * force;
          offsetY = (dy / dist) * force;
        }

        const scale = fov / (fov + p.z);
        const projX = (p.x + offsetX) * scale + cx;
        const projY = (p.y + offsetY) * scale + cy;

        return { x: projX, y: projY, scale, z: p.z };
      });

      for (let i = 0; i < projected.length; i++) {
        const p1 = projected[i];
        for (let j = i + 1; j < projected.length; j++) {
          const p2 = projected[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.12;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(239, 68, 68, ${alpha})`;
            ctx.lineWidth = p1.scale * 0.6;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      projected.forEach((p) => {
        if (p.x < 0 || p.x > width || p.y < 0 || p.y > height) return;
        const radius = Math.max(0.8, p.scale * 1.6);
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(239, 68, 68, ${0.2 + (1 - (p.z + 400) / 800) * 0.5})`;
        ctx.fill();

        if (p.scale > 0.8) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, radius * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(239, 68, 68, 0.05)`;
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        opacity: 0.5,
        zIndex: 1,
      }}
    />
  );
}

function Interactive3DCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ rotateX: 0, rotateY: 0, shineX: 50, shineY: 50, isHovered: false });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = -(y / (rect.height / 2)) * 12; // Max 12 degrees tilt
    const rotateY = (x / (rect.width / 2)) * 12;

    const shineX = ((e.clientX - rect.left) / rect.width) * 100;
    const shineY = ((e.clientY - rect.top) / rect.height) * 100;

    setCoords({
      rotateX,
      rotateY,
      shineX,
      shineY,
      isHovered: true,
    });
  };

  const handleMouseLeave = () => {
    setCoords((prev) => ({
      ...prev,
      rotateX: 0,
      rotateY: 0,
      isHovered: false,
    }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        width: '100%',
        aspectRatio: '1',
        borderRadius: '24px',
        position: 'relative',
        transformStyle: 'preserve-3d',
        perspective: '1000px',
        cursor: 'pointer',
        transition: coords.isHovered ? 'none' : 'transform 0.5s ease',
        transform: `perspective(1000px) rotateX(${coords.rotateX}deg) rotateY(${coords.rotateY}deg) scale(${coords.isHovered ? 1.02 : 1})`,
      }}
    >
      {/* Glossy Glass Face & Glowing Border */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '24px',
          border: '1px solid rgba(239, 68, 68, 0.25)',
          background: 'rgba(5, 5, 5, 0.55)',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.6), inset 0 0 25px rgba(239, 68, 68, 0.08)',
          padding: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: 'translateZ(10px)',
          transformStyle: 'preserve-3d',
          overflow: 'hidden',
        }}
      >
        {/* Dynamic Light Shine Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `radial-gradient(circle at ${coords.shineX}% ${coords.shineY}%, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 60%)`,
            pointerEvents: 'none',
            zIndex: 3,
          }}
        />

        {/* 3D Pop-out Image Element with parallax and infinite 360 degree Y rotation on hover only */}
        <motion.div
          animate={coords.isHovered ? { rotateY: 360 } : { rotateY: 0 }}
          transition={
            coords.isHovered
              ? {
                  duration: 10,
                  repeat: Infinity,
                  ease: 'linear',
                }
              : {
                  duration: 0.8,
                  ease: 'easeOut',
                }
          }
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: 'translateZ(40px) scale(0.9)',
            transformStyle: 'preserve-3d',
          }}
        >
          <img
            src="/images/docker_3d.png"
            alt="3D Docker Logo"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              borderRadius: '16px',
              filter: 'drop-shadow(0 15px 35px rgba(239, 68, 68, 0.45))',
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}