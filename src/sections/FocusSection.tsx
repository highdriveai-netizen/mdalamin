import React from 'react';
import { profileData } from '../data/profile';
import { FocusAreaCard } from '../components/FocusAreaCard';

export const FocusSection: React.FC = () => {
  return (
    <section id="focus" className="py-20 sm:py-28 border-t border-white/5 bg-[#0B0D10]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#5CC8FF] block mb-2">
            Core Competencies
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F5F7FA] font-heading tracking-tight">
            What I Work With
          </h2>
          <p className="text-sm sm:text-base text-[#A7AFBA] mt-3 leading-relaxed">
            Practical operational specializations across CRM setup, prospecting research, multi-touch outreach cadences, and discovery appointment booking.
          </p>
        </div>

        {/* 5-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profileData.focusAreas.map((area, index) => (
            <FocusAreaCard key={area.id} area={area} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
