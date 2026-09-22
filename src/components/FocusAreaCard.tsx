import React from 'react';
import { Database, Users, Send, CalendarCheck, Mail, CheckCircle2, LucideIcon } from 'lucide-react';
import { FocusArea } from '../types';

interface FocusAreaCardProps {
  area: FocusArea;
  index: number;
}

const iconMap: Record<string, LucideIcon> = {
  Database,
  Users,
  Send,
  CalendarCheck,
  Mail,
};

export const FocusAreaCard: React.FC<FocusAreaCardProps> = ({ area, index }) => {
  const IconComponent = iconMap[area.icon] || Database;

  return (
    <div
      id={`focus-card-${area.id}`}
      className="group relative rounded-2xl bg-[#151A20] border border-white/8 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#4DA3FF]/30 hover:shadow-xl hover:shadow-[#4DA3FF]/5 flex flex-col justify-between"
    >
      {/* Top section */}
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-[#11151A] border border-white/10 flex items-center justify-center text-[#4DA3FF] group-hover:text-[#5CC8FF] group-hover:border-[#4DA3FF]/40 transition-colors">
            <IconComponent className="w-6 h-6" />
          </div>
          <span className="font-mono text-xs text-[#A7AFBA]/60">
            0{index + 1}
          </span>
        </div>

        <h3 className="text-lg font-bold text-[#F5F7FA] group-hover:text-[#5CC8FF] transition-colors mb-2 font-heading">
          {area.title}
        </h3>

        <p className="text-sm text-[#A7AFBA] leading-relaxed mb-5">
          {area.description}
        </p>
      </div>

      {/* Highlights list */}
      <div className="pt-4 border-t border-white/5 space-y-2">
        {area.highlights.map((highlight, hIdx) => (
          <div key={hIdx} className="flex items-start gap-2 text-xs text-[#E2E8F0]">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#4DA3FF] shrink-0 mt-0.5" />
            <span>{highlight}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
