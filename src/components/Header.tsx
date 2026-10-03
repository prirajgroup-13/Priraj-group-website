import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Mail, Phone } from 'lucide-react';
import { OFFICIAL_CONTACT } from '../data/content';
import { useRouter } from '../router/Router';

interface HeaderProps {
  onOpenProjectModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenProjectModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentPath, navigate } = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Work', href: '/#work' },
    { name: 'Packages', href: '/#packages' },
    { name: 'About', href: '/#about' },
    { name: 'Process', href: '/#process' },
    { name: 'Contact', href: '/#contact' }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    navigate(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050505]/92 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Official PRIRAJ GROUP logo */}
        <a
          href="/"
          onClick={(e) => handleLinkClick(e, '/')}
          className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] rounded transition-opacity hover:opacity-95"
        >
          <img
            src="/assets/priraj-logo.png"
            alt="PRIRAJ GROUP"
            className="h-[36px] md:h-[44px] w-auto max-w-[200px] object-contain block"
          />
        </a>

        {/* Center: Navigation Links in requested order */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-7">
          {navLinks.map((link) => {
            const isActive =
              link.href === '/services'
                ? currentPath.startsWith('/services')
                : link.href === '/'
                ? currentPath === '/'
                : false;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-xs lg:text-sm font-medium transition-colors duration-200 relative group py-1 ${
                  isActive ? 'text-[#d4af37]' : 'text-neutral-300 hover:text-white'
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 h-[1.5px] bg-[#d4af37] transition-all duration-200 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Right: Contact icons & Primary CTA */}
        <div className="hidden md:flex items-center gap-3 lg:gap-4">
          <a
            href={`mailto:${OFFICIAL_CONTACT.email}`}
            className="p-2 rounded-lg text-neutral-400 hover:text-[#d4af37] hover:bg-white/[0.04] transition-colors"
            title={`Email: ${OFFICIAL_CONTACT.email}`}
            aria-label="Send email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={OFFICIAL_CONTACT.phoneTel}
            className="p-2 rounded-lg text-neutral-400 hover:text-[#d4af37] hover:bg-white/[0.04] transition-colors"
            title={`Call: ${OFFICIAL_CONTACT.phone}`}
            aria-label="Call phone"
          >
            <Phone className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenProjectModal}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold tracking-wider uppercase text-black bg-[#d4af37] hover:bg-[#e5c07b] transition-all duration-200 shadow-[0_0_15px_-3px_rgba(212,175,55,0.35)] hover:shadow-[0_0_20px_0_rgba(212,175,55,0.5)] cursor-pointer whitespace-nowrap active:scale-[0.98]"
          >
            <span>START A PROJECT</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2.5">
          <button
            onClick={onOpenProjectModal}
            className="text-xs px-3 py-1.5 rounded-md font-semibold bg-[#d4af37] text-black"
          >
            Start
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#09090d]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4 shadow-2xl">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-base font-medium text-neutral-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Quick Contact Links in mobile menu */}
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2 text-xs text-neutral-400">
            <a href={`mailto:${OFFICIAL_CONTACT.email}`} className="hover:text-[#d4af37] transition-colors">
              {OFFICIAL_CONTACT.email}
            </a>
            <a href={OFFICIAL_CONTACT.phoneTel} className="hover:text-[#d4af37] transition-colors">
              {OFFICIAL_CONTACT.phone}
            </a>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenProjectModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-black bg-[#d4af37] hover:bg-[#e5c07b] transition-colors"
            >
              <span>START A PROJECT</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
