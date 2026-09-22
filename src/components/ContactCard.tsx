import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send, ArrowUpRight, MessageSquare } from 'lucide-react';
import { profileData } from '../data/profile';

export const ContactCard: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Quick message builder state
  const [subject, setSubject] = useState('Project Inquiry: GoHighLevel & CRM Operations');
  const [senderName, setSenderName] = useState('');
  const [message, setMessage] = useState('');

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleComposeMailto = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${profileData.contact.email}?subject=${encodeURIComponent(
      subject || 'Inquiry for Md Alamin'
    )}&body=${encodeURIComponent(
      `Hello Md Alamin,\n\n${message || 'I would like to discuss a potential CRM / lead generation opportunity.'}\n\nBest regards,\n${senderName || 'Your Name'}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div id="contact-wrapper" className="relative rounded-3xl bg-[#151A20] border border-white/10 p-6 sm:p-10 shadow-2xl overflow-hidden">
      {/* Background radial accent glow */}
      <div 
        className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-[#4DA3FF]/10 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Direct Info & CTAs */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4DA3FF]/10 border border-[#4DA3FF]/20 text-[#5CC8FF] text-xs font-mono uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4DA3FF] animate-pulse" />
              <span>Direct Communication</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F5F7FA] font-heading tracking-tight">
              Let's build something useful.
            </h2>
            <p className="text-sm sm:text-base text-[#A7AFBA] mt-3 leading-relaxed">
              Whether you need to configure GoHighLevel pipelines, streamline CRM data, organize target prospect research, or initiate outreach and appointment setting, I am ready to collaborate.
            </p>
          </div>

          {/* Contact Details List */}
          <div className="space-y-3 pt-2">
            {/* Email Card */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl bg-[#11151A] border border-white/5 hover:border-white/10 gap-3 transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#4DA3FF]/10 text-[#4DA3FF]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-[#A7AFBA] uppercase">Email</div>
                  <a
                    href={`mailto:${profileData.contact.email}`}
                    className="text-sm font-semibold text-[#F5F7FA] hover:text-[#5CC8FF] transition-colors break-all"
                  >
                    {profileData.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-center">
                <button
                  type="button"
                  onClick={() => copyToClipboard(profileData.contact.email, 'email')}
                  className="px-2.5 py-1.5 rounded-lg text-xs font-medium text-[#A7AFBA] hover:text-[#F5F7FA] bg-white/5 hover:bg-white/10 transition-colors flex items-center gap-1.5"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
                <a
                  href={`mailto:${profileData.contact.email}`}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold text-[#0B0D10] bg-[#4DA3FF] hover:bg-[#5CC8FF] transition-colors flex items-center gap-1"
                >
                  <span>Send</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl bg-[#11151A] border border-white/5 hover:border-white/10 gap-3 transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#5CC8FF]/10 text-[#5CC8FF]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-[#A7AFBA] uppercase">Phone / WhatsApp</div>
                  <a
                    href={`tel:${profileData.contact.phone}`}
                    className="text-sm font-semibold text-[#F5F7FA] hover:text-[#5CC8FF] transition-colors"
                  >
                    {profileData.contact.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-center">
                <button
                  type="button"
                  onClick={() => copyToClipboard(profileData.contact.phone, 'phone')}
                  className="px-2.5 py-1.5 rounded-lg text-xs font-medium text-[#A7AFBA] hover:text-[#F5F7FA] bg-white/5 hover:bg-white/10 transition-colors flex items-center gap-1.5"
                  title="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                </button>
                <a
                  href={`tel:${profileData.contact.phone}`}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold text-[#F5F7FA] bg-white/10 hover:bg-white/15 transition-colors flex items-center gap-1"
                >
                  <span>Call</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#11151A] border border-white/5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-white/5 text-[#A7AFBA]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-[#A7AFBA] uppercase">Base Location</div>
                  <div className="text-sm font-medium text-[#F5F7FA]">
                    {profileData.contact.location}
                  </div>
                </div>
              </div>
              <span className="text-[11px] font-mono text-[#5CC8FF] px-2.5 py-1 rounded bg-[#4DA3FF]/10">
                Remote Available
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Fast Email Draft Helper */}
        <div className="lg:col-span-6 bg-[#11151A] rounded-2xl border border-white/8 p-5 sm:p-6">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/8">
            <MessageSquare className="w-4 h-4 text-[#4DA3FF]" />
            <h3 className="text-sm font-bold text-[#F5F7FA] uppercase tracking-wider font-mono">
              Quick Email Message
            </h3>
          </div>

          <form onSubmit={handleComposeMailto} className="space-y-4">
            <div>
              <label htmlFor="contact-sender-name" className="block text-xs font-medium text-[#A7AFBA] mb-1.5">
                Your Name / Organization
              </label>
              <input
                id="contact-sender-name"
                type="text"
                placeholder="e.g. John Doe, Solar Growth Partners"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#151A20] border border-white/10 text-sm text-[#F5F7FA] placeholder:text-white/20 focus:outline-none focus:border-[#4DA3FF] focus:ring-1 focus:ring-[#4DA3FF] transition-all"
              />
            </div>

            <div>
              <label htmlFor="contact-subject" className="block text-xs font-medium text-[#A7AFBA] mb-1.5">
                Topic / Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#151A20] border border-white/10 text-sm text-[#F5F7FA] placeholder:text-white/20 focus:outline-none focus:border-[#4DA3FF] focus:ring-1 focus:ring-[#4DA3FF] transition-all"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs font-medium text-[#A7AFBA] mb-1.5">
                Message Brief
              </label>
              <textarea
                id="contact-message"
                rows={3}
                placeholder="Describe what you are looking for (GHL setup, lead generation, outreach cadences)..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#151A20] border border-white/10 text-sm text-[#F5F7FA] placeholder:text-white/20 focus:outline-none focus:border-[#4DA3FF] focus:ring-1 focus:ring-[#4DA3FF] transition-all resize-none"
              />
            </div>

            <button
              id="submit-contact-email-btn"
              type="submit"
              className="w-full py-3 px-5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#0B0D10] bg-[#4DA3FF] hover:bg-[#5CC8FF] active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#4DA3FF]/20"
            >
              <span>Open Email with Message</span>
              <Send className="w-3.5 h-3.5" />
            </button>
            <p className="text-[11px] text-[#A7AFBA]/80 text-center font-mono">
              Pre-populates your local email app addressed to {profileData.contact.email}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
