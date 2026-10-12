import React, { useEffect } from 'react';
import { ArrowLeft, Cookie, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { OFFICIAL_CONTACT, FOUNDER_INFO } from '../data/content';
import { useRouter } from '../router/Router';

export const CookiePolicyPage: React.FC = () => {
  const { navigate } = useRouter();

  useEffect(() => {
    document.title = 'Cookie Policy | PRIRAJ GROUP';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="relative min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-4xl mx-auto">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-[#d4af37] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </button>
        </div>

        {/* Page Header */}
        <div className="border-b border-white/10 pb-10 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs font-mono text-[#f7edcd] mb-4">
            <Cookie className="w-3 h-3 text-[#d4af37]" />
            <span>TRACKING &amp; STORAGE TRANSPARENCY</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Cookie Policy
          </h1>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl">
            A transparent disclosure regarding local browser storage, technical operational cookies, and third-party advertising tracking practices on PRIRAJ GROUP.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400 mt-6 pt-6 border-t border-white/5">
            <span>Website: <strong className="text-neutral-200">https://www.prirajgroup.com/</strong></span>
            <span>&middot;</span>
            <span>Effective Date: <strong className="text-neutral-200">October 2026</strong></span>
            <span>&middot;</span>
            <span>Founder &amp; CEO: <strong className="text-neutral-200">{FOUNDER_INFO.name}</strong></span>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-10 text-neutral-300 text-sm sm:text-base leading-relaxed">
          <section className="rounded-2xl bg-[#0c0c12]/80 border border-white/10 p-6 sm:p-8 backdrop-blur-xl">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span className="text-xs font-mono text-[#d4af37] px-2 py-0.5 rounded bg-white/5 border border-white/10">01</span>
              <span>What Are Cookies and Local Storage?</span>
            </h2>
            <p className="mb-3">
              Cookies and local browser storage are small text files or key-value entries stored in your device&rsquo;s web browser when you visit websites. They are commonly used to remember preferences, keep sessions authenticated, or analyze aggregate site usage.
            </p>
          </section>

          <section className="rounded-2xl bg-[#0c0c12]/80 border border-white/10 p-6 sm:p-8 backdrop-blur-xl">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span className="text-xs font-mono text-[#d4af37] px-2 py-0.5 rounded bg-white/5 border border-white/10">02</span>
              <span>Our Tracking Philosophy &mdash; Zero Advertising Cookies</span>
            </h2>
            <p className="mb-3">
              PRIRAJ GROUP takes user privacy and website performance seriously. <strong>We do not use third-party behavioral advertising cookies, retargeting pixels, Facebook Pixels, or cross-site tracking beacons.</strong>
            </p>
            <p className="text-xs sm:text-sm text-neutral-400">
              You will not be tracked or profiled across external websites as a result of visiting <a href="https://www.prirajgroup.com/" className="text-[#d4af37] underline">https://www.prirajgroup.com/</a>.
            </p>
          </section>

          <section className="rounded-2xl bg-[#0c0c12]/80 border border-white/10 p-6 sm:p-8 backdrop-blur-xl">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span className="text-xs font-mono text-[#d4af37] px-2 py-0.5 rounded bg-white/5 border border-white/10">03</span>
              <span>Essential Technical &amp; Operational Storage</span>
            </h2>
            <p className="mb-3">
              We may utilize limited, strictly essential client-side browser storage (such as memory state or temporary sessionStorage) exclusively for operational interface needs:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span><strong>Interactive 3D Scene Controls:</strong> Remembering particle density and viewport rendering modes during your session.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span><strong>Form Submission Protection:</strong> Short-lived client-side anti-spam debounce to avoid duplicate rapid submissions.</span>
              </li>
            </ul>
          </section>

          <section className="rounded-2xl bg-[#0c0c12]/80 border border-white/10 p-6 sm:p-8 backdrop-blur-xl">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span className="text-xs font-mono text-[#d4af37] px-2 py-0.5 rounded bg-white/5 border border-white/10">04</span>
              <span>Managing Your Browser Settings</span>
            </h2>
            <p className="mb-3">
              You have the option to disable cookies and clear local storage at any time via your browser settings (Chrome, Safari, Firefox, Edge). Because our website relies only on essential UI state, disabling third-party cookies in your browser will not impair your experience on our website.
            </p>
          </section>

          <section className="rounded-2xl bg-gradient-to-b from-[#111119] to-[#0a0a0f] border border-[#d4af37]/40 p-6 sm:p-8 shadow-2xl">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-3 flex items-center gap-2.5">
              <span className="text-xs font-mono text-[#d4af37] px-2 py-0.5 rounded bg-white/5 border border-white/10">05</span>
              <span>Questions &amp; Contact</span>
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 mb-4">
              If you have any questions about our cookie or local storage practices, please contact our team at <a href={`mailto:${OFFICIAL_CONTACT.email}`} className="text-[#d4af37] underline">{OFFICIAL_CONTACT.email}</a>.
            </p>
            <div className="text-xs font-mono text-neutral-400">
              PRIRAJ GROUP &middot; Founder &amp; CEO: {FOUNDER_INFO.name}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
