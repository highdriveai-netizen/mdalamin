import React from 'react';
import { ArrowUp } from 'lucide-react';
import { profileData } from '../data/profile';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Focus', href: '#focus' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer id="portfolio-footer" className="mt-20 border-t border-white/8 bg-[#0B0D10] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Left Brand info */}
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4DA3FF]" />
              <span className="text-lg font-bold tracking-wider text-[#F5F7FA] font-heading uppercase">
                {profileData.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#A7AFBA] mt-1 font-mono">
              CRM • Lead Generation • Outreach
            </p>
          </div>

          {/* Right Navigation */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#A7AFBA]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#5CC8FF] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-xs text-[#5CC8FF] hover:text-white transition-colors ml-2"
              title="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </nav>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A7AFBA]/70">
          <div>
            © 2026 {profileData.name}. All rights reserved.
          </div>
          <div className="font-mono text-[11px] text-[#A7AFBA]/50">
            Chattogram, Bangladesh • Available for Global Remote Collaboration
          </div>
        </div>
      </div>
    </footer>
  );
};
