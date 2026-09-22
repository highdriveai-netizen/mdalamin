import React from 'react';
import { ArrowDown, ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { profileData } from '../data/profile';
import { HeroWorkspaceVisual } from '../components/HeroWorkspaceVisual';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-28 sm:pt-36 pb-16 sm:pb-24 flex items-center overflow-hidden"
    >
      {/* Abstract Background Tech Canvas */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />

        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#4DA3FF]/12 via-[#5CC8FF]/5 to-transparent rounded-full blur-3xl" />

        {/* Soft Side Nodes */}
        <div className="absolute top-1/3 -left-48 w-96 h-96 bg-[#4DA3FF]/8 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#5CC8FF]/6 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#151A20] border border-white/10 text-xs font-mono tracking-wider text-[#5CC8FF]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4DA3FF] animate-pulse" />
              <span>{profileData.eyebrow}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-[#F5F7FA] font-heading tracking-tight leading-[1.12]">
              I build organized systems for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F7FA] via-[#5CC8FF] to-[#4DA3FF]">
                leads, CRM, and follow-up.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#A7AFBA] leading-relaxed max-w-xl">
              {profileData.subheadline}
            </p>

            {/* Quick credibility bullet tags */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 pt-1 text-xs text-[#CBD5E1]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#4DA3FF]" />
                <span>GoHighLevel Systems</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#4DA3FF]" />
                <span>Data Research & Hygiene</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#4DA3FF]" />
                <span>Remote US Experience</span>
              </span>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                id="hero-primary-cta"
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold uppercase tracking-wider text-[#0B0D10] bg-[#4DA3FF] hover:bg-[#5CC8FF] active:scale-95 transition-all duration-200 shadow-lg shadow-[#4DA3FF]/25 hover:shadow-[0_0_20px_rgba(92,200,255,0.45)]"
              >
                <span>Let's Work Together</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                id="hero-secondary-cta"
                href="#experience"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold tracking-wide text-[#F5F7FA] bg-[#151A20] hover:bg-[#1A222B] border border-white/10 hover:border-white/20 active:scale-95 transition-all duration-200"
              >
                <span>View My Experience</span>
                <ArrowDown className="w-4 h-4 text-[#A7AFBA]" />
              </a>
            </div>

            {/* Status Pill */}
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#A7AFBA]">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Available for freelance, contract, or full-time remote operations</span>
            </div>
          </div>

          {/* Right Hero Visual: Floating CRM Workspace */}
          <div className="lg:col-span-6 w-full">
            <HeroWorkspaceVisual />
          </div>
        </div>
      </div>
    </section>
  );
};
