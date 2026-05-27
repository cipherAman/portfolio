// app/layout.tsx

import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Aman Kumar | Full Stack Developer Portfolio',
  description:
    'Portfolio of a passionate full stack developer seeking internship opportunities. Built with Next.js, TypeScript, and modern web technologies.',
  keywords: ['developer', 'portfolio', 'full stack', 'React', 'Next.js', 'TypeScript', 'internship'],
  authors: [{ name: 'Aman Kumar' }],
  openGraph: {
    title: 'Aman Kumar | Full Stack Developer Portfolio',
    description: 'Explore my projects, skills, and experience in modern web development.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aman Kumar | Full Stack Developer Portfolio',
    description: 'Explore my projects, skills, and experience in modern web development.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body style={{ background: '#050505', color: '#f0f0f0' }}>
        {/* Noise Overlay */}
        <div className="noise-overlay" />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}