import React from 'react';
import { profileData } from '../data/profile';
import { ExperienceTimeline } from '../components/ExperienceTimeline';
import { Briefcase } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151A20] border border-white/10 text-xs font-mono tracking-wider text-[#5CC8FF] mb-3">
            <Briefcase className="w-3.5 h-3.5 text-[#4DA3FF]" />
            <span>Employment History</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F5F7FA] font-heading tracking-tight">
            Work Experience
          </h2>
          <p className="text-sm sm:text-base text-[#A7AFBA] mt-3 leading-relaxed">
            Hands-on remote roles with US-based organizations, delivering reliable data management, pipeline configurations, prospect research, and appointment setting.
          </p>
        </div>

        {/* Timeline */}
        <ExperienceTimeline items={profileData.experience} />
      </div>
    </section>
  );
};
