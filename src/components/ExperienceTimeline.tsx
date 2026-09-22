import React from 'react';
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { ExperienceItem } from '../types';

interface ExperienceTimelineProps {
  items: ExperienceItem[];
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ items }) => {
  return (
    <div id="experience-timeline" className="relative">
      {/* Central/Left Vertical Line */}
      <div 
        className="absolute top-2 bottom-6 left-4 md:left-1/2 -ml-[1px] w-0.5 bg-gradient-to-b from-[#4DA3FF] via-[#4DA3FF]/30 to-white/10" 
        aria-hidden="true" 
      />

      <div className="space-y-8 md:space-y-12">
        {items.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={item.id}
              id={`experience-node-${item.id}`}
              className="relative flex flex-col md:flex-row items-start"
            >
              {/* Timeline Indicator Dot */}
              <div 
                className="absolute left-4 md:left-1/2 -translate-x-1/2 mt-1.5 z-20 flex items-center justify-center"
              >
                <div className="w-5 h-5 rounded-full bg-[#0B0D10] border-2 border-[#4DA3FF] flex items-center justify-center shadow-[0_0_12px_#4DA3FF]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#5CC8FF]" />
                </div>
              </div>

              {/* Left Column (Desktop) */}
              <div
                className={`w-full pl-12 md:pl-0 md:w-1/2 ${
                  isEven ? 'md:pr-10 md:text-right' : 'md:hidden'
                }`}
              >
                {isEven && (
                  <ExperienceCard item={item} isEven={true} />
                )}
              </div>

              {/* Right Column (Desktop) */}
              <div
                className={`w-full pl-12 md:pl-0 md:w-1/2 ${
                  !isEven ? 'md:pl-10 md:text-left' : 'hidden md:block'
                }`}
              >
                {!isEven && (
                  <ExperienceCard item={item} isEven={false} />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

interface ExperienceCardProps {
  item: ExperienceItem;
  isEven: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ item, isEven }) => {
  return (
    <div
      id={`experience-card-${item.id}`}
      className="group rounded-2xl bg-[#151A20] border border-white/8 p-5 sm:p-6 transition-all duration-300 hover:border-[#4DA3FF]/30 hover:shadow-xl hover:shadow-[#4DA3FF]/5 hover:-translate-y-1 text-left"
    >
      {/* Header Info */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
        <span className="text-xs font-mono uppercase tracking-wider text-[#5CC8FF] px-2.5 py-1 rounded bg-[#4DA3FF]/10 border border-[#4DA3FF]/20">
          {item.period}
        </span>
        {item.type && (
          <span className="text-[11px] font-mono text-[#A7AFBA] bg-white/5 px-2 py-0.5 rounded">
            {item.type}
          </span>
        )}
      </div>

      <h3 className="text-lg sm:text-xl font-bold text-[#F5F7FA] font-heading group-hover:text-[#5CC8FF] transition-colors">
        {item.role}
      </h3>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#A7AFBA] mt-1 mb-4">
        <span className="font-semibold text-[#E2E8F0] flex items-center gap-1.5">
          <Briefcase className="w-3.5 h-3.5 text-[#4DA3FF]" />
          <span>{item.company}</span>
        </span>
        <span className="flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-white/40" />
          <span>{item.location}</span>
        </span>
      </div>

      {/* Responsibilities list from CV */}
      <div className="space-y-2 mb-4 pt-3 border-t border-white/5">
        {item.responsibilities.map((resp, rIdx) => (
          <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#4DA3FF] shrink-0 mt-1" />
            <span>{resp}</span>
          </div>
        ))}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
        {item.tags.map((tag, tIdx) => (
          <span
            key={tIdx}
            className="text-[11px] font-mono text-[#A7AFBA] bg-[#11151A] px-2 py-0.5 rounded border border-white/5"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};
