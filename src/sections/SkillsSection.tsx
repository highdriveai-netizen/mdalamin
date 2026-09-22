import React from 'react';
import { profileData } from '../data/profile';
import { Wrench, CheckCircle2, Globe2 } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 sm:py-28 border-t border-white/5 bg-[#0B0D10]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151A20] border border-white/10 text-xs font-mono tracking-wider text-[#5CC8FF] mb-3">
            <Wrench className="w-3.5 h-3.5 text-[#4DA3FF]" />
            <span>Tools & Methodologies</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F5F7FA] font-heading tracking-tight">
            Skills & Software
          </h2>
          <p className="text-sm sm:text-base text-[#A7AFBA] mt-3 leading-relaxed">
            Proficiencies organized by operational domain without arbitrary percentage ratings.
          </p>
        </div>

        {/* 3 Skill Groups */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {profileData.skills.map((group, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#151A20] border border-white/8 p-6 transition-all duration-300 hover:border-[#4DA3FF]/30 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base sm:text-lg font-bold text-[#F5F7FA] font-heading">
                    {group.category}
                  </h3>
                  <span className="text-[11px] font-mono text-[#5CC8FF] px-2 py-0.5 rounded bg-[#4DA3FF]/10">
                    {group.skills.length} Items
                  </span>
                </div>
                <p className="text-xs text-[#A7AFBA] leading-normal mb-5">
                  {group.description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium text-[#E2E8F0] bg-[#11151A] border border-white/8 hover:border-[#4DA3FF]/30 hover:text-[#5CC8FF] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Languages Strip (Section 16: Bangla - Native, English - Professional Working Proficiency) */}
        <div className="rounded-2xl bg-[#11151A] border border-white/8 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-white/5 text-[#5CC8FF]">
              <Globe2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#F5F7FA] font-heading">
                Language Proficiencies
              </h4>
              <p className="text-xs text-[#A7AFBA]">
                Clear international communication across time zones.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {profileData.languages.map((lang, lIdx) => (
              <div
                key={lIdx}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#151A20] border border-white/10"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#4DA3FF]" />
                <span className="text-xs font-bold text-[#F5F7FA]">{lang.language}</span>
                <span className="text-[11px] font-mono text-[#A7AFBA] border-l border-white/10 pl-2">
                  {lang.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
