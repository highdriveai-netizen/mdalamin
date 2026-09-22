import React from 'react';
import { profileData } from '../data/profile';
import { Award, Users, Radio, Presentation, CheckCircle2 } from 'lucide-react';

export const LeadershipSection: React.FC = () => {
  return (
    <section id="leadership" className="py-20 sm:py-28 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#5CC8FF] block mb-2">
              Community & Academic Involvement
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F5F7FA] font-heading tracking-tight">
              Leadership & Organizing Experience
            </h2>
            <p className="text-sm sm:text-base text-[#A7AFBA] mt-3 leading-relaxed">
              Leading teams, managing technological infrastructure, and orchestrating university and national-level conferences.
            </p>
          </div>

          <div className="text-xs font-mono text-[#A7AFBA] bg-[#151A20] px-3 py-1.5 rounded-lg border border-white/8 self-start lg:self-auto">
            <span>Executive & Technical Roles</span>
          </div>
        </div>

        {/* Editorial Asymmetric Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {profileData.leadership.map((item, idx) => {
            // First item (Vice President CURHS) gets prominent width
            const isFeatured = idx === 0;
            const colSpan = isFeatured ? 'md:col-span-12 lg:col-span-7' : 'md:col-span-6 lg:col-span-5';

            return (
              <div
                key={item.id}
                id={`leadership-card-${item.id}`}
                className={`${colSpan} group rounded-2xl bg-[#151A20] border border-white/8 p-6 sm:p-7 transition-all duration-300 hover:border-[#4DA3FF]/30 hover:shadow-xl hover:shadow-[#4DA3FF]/5 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#5CC8FF] px-2.5 py-0.5 rounded bg-[#4DA3FF]/10 border border-[#4DA3FF]/20">
                      {item.period}
                    </span>
                    <span className="text-[11px] font-mono text-[#A7AFBA]/60">
                      L-0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#F5F7FA] font-heading group-hover:text-[#5CC8FF] transition-colors mb-1">
                    {item.role}
                  </h3>

                  <div className="text-xs sm:text-sm font-semibold text-[#CBD5E1] mb-3">
                    {item.organization}
                  </div>

                  {item.highlight && (
                    <div className="inline-block text-xs text-[#5CC8FF] bg-white/5 px-2.5 py-1 rounded-md mb-3 font-medium">
                      {item.highlight}
                    </div>
                  )}

                  {item.details && (
                    <p className="text-xs sm:text-sm text-[#A7AFBA] leading-relaxed">
                      {item.details}
                    </p>
                  )}
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex items-center gap-2 text-xs text-[#E2E8F0]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4DA3FF]" />
                  <span className="font-mono text-[11px] text-[#A7AFBA]">Verified Institutional Role</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
