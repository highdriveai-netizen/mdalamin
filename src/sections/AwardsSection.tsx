import React from 'react';
import { profileData } from '../data/profile';
import { Award, CheckCircle2 } from 'lucide-react';

export const AwardsSection: React.FC = () => {
  return (
    <section id="awards" className="py-20 sm:py-24 border-t border-white/5 bg-[#0B0D10]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151A20] border border-white/10 text-xs font-mono tracking-wider text-[#5CC8FF] mb-3">
            <Award className="w-3.5 h-3.5 text-[#4DA3FF]" />
            <span>Honors & Recognitions</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F5F7FA] font-heading tracking-tight">
            Awards & Recognition
          </h2>
          <p className="text-sm sm:text-base text-[#A7AFBA] mt-2">
            Formal recognitions for IT leadership, creative branding, and organizational performance.
          </p>
        </div>

        {/* Compact List / Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {profileData.awards.map((award, index) => (
            <div
              key={award.id}
              className="p-4 sm:p-5 rounded-xl bg-[#151A20] border border-white/8 hover:border-[#4DA3FF]/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-[#5CC8FF] px-2 py-0.5 rounded bg-[#4DA3FF]/10">
                    {award.year}
                  </span>
                  <Award className="w-4 h-4 text-white/30" />
                </div>
                <h3 className="text-sm font-bold text-[#F5F7FA] font-heading mt-1 mb-1">
                  {award.title}
                </h3>
              </div>
              <div className="text-xs text-[#A7AFBA] pt-2 border-t border-white/5 flex items-center justify-between">
                <span>{award.organization}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
