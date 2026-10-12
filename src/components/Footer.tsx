import React from 'react';
import { Mail, Phone, ArrowUpRight, MessageSquare, Instagram, ShieldCheck, RefreshCw, FileText, Lock } from 'lucide-react';
import { SERVICES_DATA, OFFICIAL_CONTACT } from '../data/content';
import { useRouter } from '../router/Router';

export const Footer: React.FC = () => {
  const { navigate } = useRouter();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Work', href: '/#work' },
    { name: 'Packages', href: '/#packages' },
    { name: 'About', href: '/about' },
    { name: 'Process', href: '/#process' },
    { name: 'Contact', href: '/#contact' }
  ];

  const policyLinks = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Payment & Refund Policy', href: '/payment-refund-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
    { name: 'Cookie Policy', href: '/cookie-policy' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigate(href);
  };

  return (
    <footer className="relative bg-[#050507] border-t border-white/10 pt-20 pb-12 px-4 sm:px-6 lg:px-8 z-10 text-neutral-400">
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

            {/* Founder Reference */}
            <div className="pt-2 text-xs text-neutral-400 flex items-center gap-2">
              <span className="text-neutral-500 font-mono">Founded by:</span>
              <strong className="text-neutral-200">Angatdeep Singh</strong>
              <span className="text-neutral-500 font-mono">&middot; Founder &amp; CEO</span>
            </div>

            <div className="text-xs text-neutral-500 font-mono tracking-wider pt-1">
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
              Services &amp; Policies
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES_DATA.slice(0, 4).map((service) => (
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
            <div className="pt-2 border-t border-white/5">
              <div className="text-[11px] font-mono text-[#d4af37] uppercase tracking-wider mb-2">
                Client Policies
              </div>
              <ul className="space-y-1.5 text-xs">
                <li>
                  <a
                    href="/payment-refund-policy"
                    onClick={(e) => handleNavClick(e, '/payment-refund-policy')}
                    className="text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <RefreshCw className="w-3 h-3 text-[#d4af37]" />
                    <span>Payment &amp; Refund Policy</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/terms-of-service"
                    onClick={(e) => handleNavClick(e, '/terms-of-service')}
                    className="text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <FileText className="w-3 h-3 text-[#d4af37]" />
                    <span>Terms of Service</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy-policy"
                    onClick={(e) => handleNavClick(e, '/privacy-policy')}
                    className="text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <Lock className="w-3 h-3 text-[#d4af37]" />
                    <span>Privacy Policy</span>
                  </a>
                </li>
              </ul>
            </div>
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

        {/* Bottom Bar with Distinct Policy Links */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            &copy; {new Date().getFullYear()} PRIRAJ GROUP &middot; Founder &amp; CEO: Angatdeep Singh &middot; All rights reserved.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {policyLinks.map((p, idx) => (
              <React.Fragment key={p.href}>
                <a
                  href={p.href}
                  onClick={(e) => handleNavClick(e, p.href)}
                  className="hover:text-white transition-colors"
                >
                  {p.name}
                </a>
                {idx < policyLinks.length - 1 && <span>&middot;</span>}
              </React.Fragment>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Back to Top &uarr;
          </button>
        </div>
      </div>
    </footer>
  );
};
