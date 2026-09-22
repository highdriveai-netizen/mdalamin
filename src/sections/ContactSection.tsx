import React from 'react';
import { ContactCard } from '../components/ContactCard';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactCard />
      </div>
    </section>
  );
};
