import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Users, Database, Send, CalendarCheck, CheckCircle2, ChevronRight, Activity, ArrowRight } from 'lucide-react';

export const HeroWorkspaceVisual: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const workflowSteps = [
    {
      id: 'step-leads',
      title: 'Target Leads',
      sub: 'Prospect Research & Verification',
      tag: 'Stage 1',
      icon: Users,
      metricLabel: 'Sources',
      metricVal: 'Verified Records',
      color: 'text-[#4DA3FF]',
      borderHover: 'hover:border-[#4DA3FF]/50',
      activeRing: 'border-[#4DA3FF] shadow-[0_0_20px_rgba(77,163,255,0.25)]',
      details: [
        'Property & business registry verification',
        'Decision-maker identification & mapping',
        'Data cleaning & deduplication before upload'
      ]
    },
    {
      id: 'step-crm',
      title: 'GHL CRM Records',
      sub: 'Custom Fields & Pipeline Organization',
      tag: 'Stage 2',
      icon: Database,
      metricLabel: 'System',
      metricVal: 'GHL Workflows',
      color: 'text-[#5CC8FF]',
      borderHover: 'hover:border-[#5CC8FF]/50',
      activeRing: 'border-[#5CC8FF] shadow-[0_0_20px_rgba(92,200,255,0.25)]',
      details: [
        'Structured pipeline stages & custom tags',
        'System hygiene & standardized data entry',
        'Automated intake & stage triggers'
      ]
    },
    {
      id: 'step-outreach',
      title: 'Outreach & Follow-up',
      sub: 'LinkedIn & Structured Touchpoints',
      tag: 'Stage 3',
      icon: Send,
      metricLabel: 'Cadence',
      metricVal: 'Multi-touch',
      color: 'text-[#38BDF8]',
      borderHover: 'hover:border-[#38BDF8]/50',
      activeRing: 'border-[#38BDF8] shadow-[0_0_20px_rgba(56,189,248,0.25)]',
      details: [
        'Direct LinkedIn conversation starters',
        'Systematic follow-up schedule tracking',
        'Record updates on all prospect interactions'
      ]
    },
    {
      id: 'step-booking',
      title: 'Appointments Set',
      sub: 'Qualified Discovery & Calendar Handoff',
      tag: 'Stage 4',
      icon: CalendarCheck,
      metricLabel: 'Outcome',
      metricVal: 'Scheduled Call',
      color: 'text-[#60A5FA]',
      borderHover: 'hover:border-[#60A5FA]/50',
      activeRing: 'border-[#60A5FA] shadow-[0_0_20px_rgba(96,165,250,0.25)]',
      details: [
        'Qualification against business criteria',
        'Calendar coordination & meeting confirmations',
        'Complete context brief for account executive'
      ]
    }
  ];

  return (
    <div id="crm-workspace-visual" className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Outer ambient glow */}
      <div 
        className="absolute -inset-4 bg-gradient-to-tr from-[#4DA3FF]/10 via-[#5CC8FF]/5 to-transparent rounded-3xl blur-2xl -z-10 pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Main Workspace Frame */}
      <div className="relative rounded-2xl bg-[#11151A]/95 border border-white/10 p-5 sm:p-6 shadow-2xl backdrop-blur-xl">
        {/* Workspace Header Bar */}
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/8">
          <div className="flex items-center gap-2.5">
            <span className="flex gap-1.5" aria-hidden="true">
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#4DA3FF]/80 animate-pulse" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#A7AFBA] font-mono">
              GHL Operations Pipeline
            </span>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-mono text-[#5CC8FF] bg-[#4DA3FF]/10 px-2.5 py-1 rounded-full border border-[#4DA3FF]/20">
            <Activity className="w-3 h-3 animate-pulse" />
            <span>Active Workflow</span>
          </div>
        </div>

        {/* Workflow Progression Stepper (Visual Flow: Lead -> Contact -> Follow-up -> Appointment) */}
        <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-5" role="tablist" aria-label="Pipeline Stages">
          {workflowSteps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={step.id}
                id={`workflow-pill-${idx}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveStep(idx)}
                className={`relative text-left p-3 rounded-xl border transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#151A20] ' + step.activeRing
                    : 'bg-[#0B0D10]/60 border-white/5 hover:border-white/15'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`p-1.5 rounded-lg bg-white/5 ${step.color}`}>
                    <Icon className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-[10px] font-mono uppercase text-[#A7AFBA]/80">
                    {step.tag}
                  </span>
                </div>
                <div className="text-xs font-semibold text-[#F5F7FA] truncate">
                  {step.title.split(' ')[0]}
                </div>
                <div className="text-[10px] text-[#A7AFBA] truncate">
                  {step.metricVal}
                </div>

                {/* Sub-indicator line */}
                {isActive && (
                  <motion.div
                    layoutId="activePipelineIndicator"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#4DA3FF] rounded-full"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Card */}
        {(() => {
          const current = workflowSteps[activeStep];
          const Icon = current.icon;
          return (
            <div 
              id="active-stage-card" 
              className="rounded-xl bg-[#151A20] border border-white/8 p-4 sm:p-5 transition-all duration-200"
            >
              <div className="flex items-start justify-between gap-3 mb-3.5">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl bg-white/5 border border-white/10 ${current.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm sm:text-base font-bold text-[#F5F7FA]">
                        {current.title}
                      </h3>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#A7AFBA] border border-white/5">
                        {current.tag}
                      </span>
                    </div>
                    <p className="text-xs text-[#A7AFBA] mt-0.5">
                      {current.sub}
                    </p>
                  </div>
                </div>

                <div className="hidden sm:block text-right">
                  <span className="text-[10px] font-mono uppercase text-[#A7AFBA] block">Status</span>
                  <span className="text-xs font-medium text-[#5CC8FF]">Systemized</span>
                </div>
              </div>

              {/* Responsibilities / details within this stage */}
              <div className="space-y-2 mt-4 pt-3.5 border-t border-white/5">
                {current.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2.5 text-xs text-[#E2E8F0]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#4DA3FF] shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              {/* Stage Progression Flow Footer */}
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-[#A7AFBA]">
                <span className="flex items-center gap-1.5 font-mono">
                  <span>Cycle:</span>
                  <span className="text-[#F5F7FA]">Stage {activeStep + 1} of 4</span>
                </span>
                
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : 3))}
                    className="p-1 rounded hover:bg-white/5 hover:text-[#F5F7FA] transition-colors"
                    aria-label="Previous pipeline stage"
                  >
                    Prev
                  </button>
                  <span>•</span>
                  <button
                    type="button"
                    onClick={() => setActiveStep((prev) => (prev < 3 ? prev + 1 : 0))}
                    className="flex items-center gap-1 p-1 text-[#4DA3FF] hover:text-[#5CC8FF] transition-colors font-medium"
                    aria-label="Next pipeline stage"
                  >
                    <span>Next Stage</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          );
        })()}

        {/* Bottom Abstract Flow Connectivity Strip */}
        <div className="mt-4 p-3 rounded-lg bg-[#0B0D10]/50 border border-white/5 flex items-center justify-between text-xs text-[#A7AFBA]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#4DA3FF]" />
            <span className="text-[11px] font-mono">System Integrity: GHL CRM + Verified Data</span>
          </div>
          <span className="text-[10px] uppercase font-mono text-[#5CC8FF]/90">
            Remote Ready
          </span>
        </div>
      </div>
    </div>
  );
};
