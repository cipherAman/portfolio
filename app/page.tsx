// app/page.tsx

import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="section-divider" />
      <AboutSection />
      <div className="section-divider" />
      <SkillsSection />
      <div className="section-divider" />
      <ProjectsSection />
      <div className="section-divider" />
      <ContactSection />
    </>
  );
}