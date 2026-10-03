import React, { useState } from 'react';
import { ArrowUpRight, Mail, Phone, Instagram, MessageSquare, X } from 'lucide-react';
import { SERVICES_DATA, OFFICIAL_CONTACT } from '../data/content';
import { useRouter } from '../router/Router';

export const Footer: React.FC = () => {
  const [legalModal, setLegalModal] = useState<string | null>(null);
  const { navigate } = useRouter();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Work', href: '/#work' },
    { name: 'Packages', href: '/#packages' },
    { name: 'About', href: '/#about' },
    { name: 'Process', href: '/#process' },
    { name: 'Contact', href: '/#contact' }
  ];

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    navigate(href);
  };

  return (
    <footer className="relative bg-[#070709] border-t border-white/10 pt-16 pb-12 px-4 sm:px-6 lg:px-8 z-10 text-neutral-400">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <a
              href="/"
              onClick={(e) => handleNavClick(e, '/')}
              className="inline-block hover:opacity-95 transition-opacity"
            >
              <img
                src="/assets/priraj-logo.png"
                alt="PRIRAJ GROUP"
                className="h-[32px] sm:h-[38px] w-auto object-contain block"
              />
            </a>
            <p className="text-sm text-neutral-300 font-medium">
              Digital products. Built with purpose.
            </p>
            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed">
              We design and engineer websites, applications, and digital products for businesses and ambitious brands.
            </p>
            <div className="text-xs text-neutral-500 font-mono tracking-wider pt-2">
              Engineering &middot; Architecture &middot; Design
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <a
                    href={service.route}
                    onClick={(e) => handleNavClick(e, service.route)}
                    className="hover:text-white transition-colors"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Official Contact
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href={`mailto:${OFFICIAL_CONTACT.email}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors group"
                title="Send email to PRIRAJ GROUP"
              >
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#d4af37] group-hover:border-[#d4af37]/40 transition-colors shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="truncate">{OFFICIAL_CONTACT.email}</span>
              </a>

              <a
                href={OFFICIAL_CONTACT.phoneTel}
                className="flex items-center gap-2.5 hover:text-white transition-colors group"
                title="Call PRIRAJ GROUP"
              >
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#d4af37] group-hover:border-[#d4af37]/40 transition-colors shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>{OFFICIAL_CONTACT.phone}</span>
              </a>

              <a
                href={OFFICIAL_CONTACT.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 hover:text-white transition-colors group"
                title="Connect on WhatsApp"
              >
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#d4af37] group-hover:border-[#d4af37]/40 transition-colors shrink-0">
                  <MessageSquare className="w-3.5 h-3.5" />
                </div>
                <span className="inline-flex items-center gap-1">
                  <span>WhatsApp Direct</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-500 group-hover:text-[#d4af37]" />
                </span>
              </a>

              <a
                href={OFFICIAL_CONTACT.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 hover:text-white transition-colors group"
                title="Follow PRIRAJ GROUP on Instagram"
              >
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#d4af37] group-hover:border-[#d4af37]/40 transition-colors shrink-0">
                  <Instagram className="w-3.5 h-3.5" />
                </div>
                <span className="inline-flex items-center gap-1">
                  <span>{OFFICIAL_CONTACT.instagramHandle}</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-500 group-hover:text-[#d4af37]" />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            &copy; {new Date().getFullYear()} PRIRAJ GROUP. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setLegalModal('Privacy Policy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>&middot;</span>
            <button
              onClick={() => setLegalModal('Terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms
            </button>
            <span>&middot;</span>
            <button
              onClick={() => setLegalModal('Cookie Policy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Cookie Policy
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Back to Top &uarr;
          </button>
        </div>
      </div>

      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="bg-[#0f0f15] border border-white/15 p-6 rounded-2xl max-w-md w-full shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
              <h4 className="text-base font-bold text-white font-display">
                {legalModal}
              </h4>
              <button
                onClick={() => setLegalModal(null)}
                className="text-neutral-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed">
              PRIRAJ GROUP is committed to respecting your privacy, protecting project intellectual property, and adhering to strict mutual confidentiality agreements. For legal inquiries or customized contracts, contact us at {OFFICIAL_CONTACT.email}.
            </p>
            <div className="mt-5 text-right">
              <button
                onClick={() => setLegalModal(null)}
                className="px-4 py-2 rounded-lg bg-[#d4af37] text-black text-xs font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
