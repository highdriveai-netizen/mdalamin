import React from 'react';
import { ProfilePhoto } from '../components/ProfilePhoto';
import { profileData } from '../data/profile';
import { BookOpen, Globe2, ShieldCheck, Cpu } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#5CC8FF] block mb-2">
            Background & Mindset
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F5F7FA] font-heading tracking-tight">
            A little about me
          </h2>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Profile Photo Card */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <ProfilePhoto />
          </div>

          {/* Right Column: Editorial Narrative & Principles */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-4 text-base sm:text-lg text-[#CBD5E1] leading-relaxed">
              {profileData.aboutText.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/8">
              <div className="p-4 rounded-xl bg-[#151A20] border border-white/5">
                <div className="flex items-center gap-2.5 text-[#4DA3FF] mb-2">
                  <Cpu className="w-4 h-4" />
                  <span className="text-sm font-bold text-[#F5F7FA] font-heading">
                    GoHighLevel & CRM Systems
                  </span>
                </div>
                <p className="text-xs text-[#A7AFBA] leading-normal">
                  Configuring clean pipelines, custom fields, tags, triggers, and automated appointment reminders.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#151A20] border border-white/5">
                <div className="flex items-center gap-2.5 text-[#5CC8FF] mb-2">
                  <Globe2 className="w-4 h-4" />
                  <span className="text-sm font-bold text-[#F5F7FA] font-heading">
                    Remote International Work
                  </span>
                </div>
                <p className="text-xs text-[#A7AFBA] leading-normal">
                  Collaborated with organizations across California, Arizona, Connecticut, and Illinois on sales operations.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#151A20] border border-white/5">
                <div className="flex items-center gap-2.5 text-[#38BDF8] mb-2">
                  <BookOpen className="w-4 h-4" />
                  <span className="text-sm font-bold text-[#F5F7FA] font-heading">
                    Philosophical Logic & Inquiry
                  </span>
                </div>
                <p className="text-xs text-[#A7AFBA] leading-normal">
                  MA & BA in Philosophy from University of Chittagong; brings formal reasoning and analytical precision.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#151A20] border border-white/5">
                <div className="flex items-center gap-2.5 text-[#60A5FA] mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-sm font-bold text-[#F5F7FA] font-heading">
                    Leadership & Operations
                  </span>
                </div>
                <p className="text-xs text-[#A7AFBA] leading-normal">
                  Vice President at CURHS and TEDx Co-Organizer; experienced in steering teams and technical conference infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
