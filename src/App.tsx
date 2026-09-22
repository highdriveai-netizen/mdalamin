import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { FocusSection } from './sections/FocusSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { SkillsSection } from './sections/SkillsSection';
import { LeadershipSection } from './sections/LeadershipSection';
import { AwardsSection } from './sections/AwardsSection';
import { EducationSection } from './sections/EducationSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const sectionIds = [
      'hero',
      'about',
      'focus',
      'experience',
      'skills',
      'leadership',
      'awards',
      'education',
      'contact',
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0D10] text-[#F5F7FA] font-sans antialiased selection:bg-[#4DA3FF]/20 selection:text-[#5CC8FF]">
      {/* Top Fixed Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Semantic Page Content */}
      <main id="main-content" className="relative">
        <HeroSection />
        <AboutSection />
        <FocusSection />
        <ExperienceSection />
        <SkillsSection />
        <LeadershipSection />
        <AwardsSection />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

