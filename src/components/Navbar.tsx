import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { profileData } from '../data/profile';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Focus', href: '#focus', id: 'focus' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Leadership', href: '#leadership', id: 'leadership' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#0B0D10]/85 backdrop-blur-md border-b border-white/8 shadow-lg shadow-black/30'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <a
            href="#hero"
            id="nav-logo"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="group flex items-center gap-2.5 text-[#F5F7FA] font-bold tracking-wider text-base sm:text-lg uppercase"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#4DA3FF] shadow-[0_0_8px_#4DA3FF] group-hover:scale-125 transition-transform duration-200" />
            <span className="tracking-widest font-heading">{profileData.name}</span>
          </a>

          {/* Desktop Nav Links */}
          <nav id="desktop-nav" aria-label="Main Navigation" className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-[#5CC8FF] bg-[#4DA3FF]/10 border border-[#4DA3FF]/20 shadow-[0_0_12px_rgba(77,163,255,0.15)]'
                      : 'text-[#A7AFBA] hover:text-[#F5F7FA] hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Let's Talk */}
          <div className="hidden md:flex items-center gap-3">
            <a
              id="nav-cta-button"
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#0B0D10] bg-[#4DA3FF] hover:bg-[#5CC8FF] active:scale-95 transition-all duration-200 shadow-md shadow-[#4DA3FF]/20 hover:shadow-[0_0_16px_rgba(92,200,255,0.4)]"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#0B0D10] bg-[#4DA3FF] hover:bg-[#5CC8FF] transition-all"
            >
              Talk
            </a>
            <button
              id="mobile-menu-toggle"
              type="button"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#A7AFBA] hover:text-[#F5F7FA] hover:bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#4DA3FF]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#5CC8FF]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="md:hidden border-b border-white/10 bg-[#0B0D10]/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  id={`mobile-nav-${link.id}`}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-[#5CC8FF] bg-[#4DA3FF]/15 border border-[#4DA3FF]/25 font-semibold'
                      : 'text-[#A7AFBA] hover:text-[#F5F7FA] hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/10">
            <a
              id="mobile-contact-direct"
              href={`mailto:${profileData.contact.email}`}
              className="block w-full py-2.5 text-center rounded-lg text-xs font-semibold uppercase tracking-wider text-[#0B0D10] bg-[#4DA3FF] hover:bg-[#5CC8FF] transition-all"
            >
              Email Directly ({profileData.contact.email})
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
