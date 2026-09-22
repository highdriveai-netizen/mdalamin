import React from 'react';
import { profileData } from '../data/profile';
import { GraduationCap, BookOpen, Award } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 sm:py-28 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151A20] border border-white/10 text-xs font-mono tracking-wider text-[#5CC8FF] mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-[#4DA3FF]" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F5F7FA] font-heading tracking-tight">
            Education & Degrees
          </h2>
          <p className="text-sm sm:text-base text-[#A7AFBA] mt-3 leading-relaxed">
            Graduated in Philosophy with training in analytical reasoning and formal logic, grounded in a strong science foundation.
          </p>
        </div>

        {/* Academic Timeline / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {profileData.education.map((edu) => (
            <div
              key={edu.id}
              className="p-6 rounded-2xl bg-[#151A20] border border-white/8 hover:border-[#4DA3FF]/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#5CC8FF] px-2.5 py-0.5 rounded bg-[#4DA3FF]/10 border border-[#4DA3FF]/20">
                    {edu.period}
                  </span>
                  <div className="text-xs font-mono text-[#F5F7FA] bg-[#11151A] px-2.5 py-1 rounded border border-white/10">
                    <span className="text-[#A7AFBA]">GPA/CGPA: </span>
                    <span className="font-bold text-[#5CC8FF]">{edu.gpa}</span>
                    <span className="text-white/40"> / {edu.maxGpa}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#F5F7FA] font-heading mb-1">
                  {edu.degree}
                </h3>

                {edu.department && (
                  <div className="text-xs text-[#CBD5E1] font-medium mb-1 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-[#4DA3FF]" />
                    <span>{edu.department}</span>
                  </div>
                )}

                <div className="text-sm text-[#A7AFBA] mb-3">
                  {edu.institution}
                </div>

                {edu.note && (
                  <p className="text-xs text-[#A7AFBA]/90 leading-relaxed italic">
                    {edu.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
