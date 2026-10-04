import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  Code2,
  Layers,
  Palette,
  ShoppingBag,
  Compass,
  Cpu,
  Shield,
  Clock,
  Eye,
  ArrowUpRight
} from 'lucide-react';
import { ServiceItem } from '../types';
import { PROJECTS_DATA, OFFICIAL_CONTACT } from '../data/content';
import { Link } from '../router/Router';

interface ServiceDetailProps {
  service: ServiceItem;
  onOpenProjectModal: (serviceName?: string) => void;
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({
  service,
  onOpenProjectModal
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const relevantProject = service.relevantProjectId
    ? PROJECTS_DATA.find((p) => p.id === service.relevantProjectId)
    : null;

  const getServiceIcon = (slug: string) => {
    switch (slug) {
      case 'website-development':
        return <Code2 className="w-6 h-6 text-[#d4af37]" />;
      case 'web-application':
        return <Layers className="w-6 h-6 text-[#d4af37]" />;
      case 'ui-ux-design':
        return <Palette className="w-6 h-6 text-[#d4af37]" />;
      case 'ecommerce':
        return <ShoppingBag className="w-6 h-6 text-[#d4af37]" />;
      case 'branding':
        return <Compass className="w-6 h-6 text-[#d4af37]" />;
      case 'custom-digital-solutions':
        return <Cpu className="w-6 h-6 text-[#d4af37]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#d4af37]" />;
    }
  };

  return (
    <div className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-mono font-medium text-neutral-400 hover:text-[#d4af37] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>&larr; Back to Services</span>
          </Link>
        </div>

        {/* ==================================================== */}
        {/* 1. HERO SECTION                                      */}
        {/* ==================================================== */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold tracking-wider uppercase text-neutral-300 mb-6 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
            <span>
              PRIRAJ GROUP &middot; {service.number} {service.title.toUpperCase()}
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            {service.heroTitle}
          </h1>

          <p className="text-base sm:text-xl text-neutral-300 font-normal leading-relaxed mb-8 max-w-3xl text-balance">
            {service.heroSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => onOpenProjectModal(service.title)}
              className="px-7 py-4 rounded-xl text-xs font-semibold tracking-wider uppercase text-black bg-[#d4af37] hover:bg-[#e5c07b] transition-all shadow-[0_0_25px_-5px_rgba(212,175,55,0.4)] flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
            >
              <span>{service.ctaText}</span>
            </button>

            <a
              href="#offerings"
              className="px-7 py-4 rounded-xl text-xs font-semibold tracking-wider uppercase text-neutral-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-colors flex items-center justify-center gap-2"
            >
              <span>Explore Capabilities</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* ==================================================== */}
        {/* 2. SERVICE INTRODUCTION OVERVIEW                     */}
        {/* ==================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 rounded-2xl bg-[#0d0d12]/90 border border-white/10 backdrop-blur-xl mb-20 shadow-xl">
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-mono text-[#d4af37] font-semibold">
              OVERVIEW &amp; PHILOSOPHY
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white leading-snug">
              Bespoke Digital Craft Built for Commercial Advantage
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              {service.fullDesc}
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs text-neutral-400 font-mono">
              <span className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Production JavaScript</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Transparent Delivery Milestones</span>
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 p-6 rounded-xl bg-white/[0.02] border border-white/10 space-y-4">
            <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
              Investment Tier
            </div>
            <div className="font-display text-2xl sm:text-3xl font-bold text-white">
              {service.pricingStarting}
            </div>
            {service.pricingNote && (
              <p className="text-xs text-neutral-400 leading-relaxed">
                {service.pricingNote}
              </p>
            )}
            <button
              onClick={() => onOpenProjectModal(service.title)}
              className="w-full py-3 rounded-lg text-xs font-semibold text-black bg-[#d4af37] hover:bg-[#e5c07b] transition-colors cursor-pointer"
            >
              Request a Project Quote &rarr;
            </button>
          </div>
        </div>

        {/* ==================================================== */}
        {/* 3. SPECIAL EXPLANATION FOR UI/UX (UI vs UX)          */}
        {/* ==================================================== */}
        {service.slug === 'ui-ux-design' && (
          <div className="mb-20 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#0f0f18]/95 via-[#141422]/95 to-[#0f0f18]/95 border border-[#d4af37]/30 shadow-xl">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs font-mono text-[#d4af37] font-semibold tracking-wider uppercase">
                Design Clarity
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">
                Understanding the Difference: UI vs UX
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-2">
                A great digital product requires both structural intelligence (UX) and visual distinction (UI). Here is how PRIRAJ GROUP bridges them together.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-black/50 border border-white/10">
                <div className="text-xs font-mono text-[#d4af37] font-bold mb-2">
                  01 &mdash; USER EXPERIENCE (UX)
                </div>
                <h4 className="font-display text-xl font-bold text-white mb-2">
                  How the Product Works &amp; Feels
                </h4>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4">
                  UX focuses on behavioral psychology, information architecture, user flows, friction removal, and conversion architecture. It ensures that a customer completes their goal in the fewest, most intuitive steps possible.
                </p>
                <ul className="space-y-1.5 text-xs text-neutral-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>User Journey Mapping &amp; Wireframes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Conversion Rate Optimization &amp; Funnel Clarity</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Heuristic Usability Audits &amp; Cognitive Flow</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-black/50 border border-white/10">
                <div className="text-xs font-mono text-[#d4af37] font-bold mb-2">
                  02 &mdash; USER INTERFACE (UI)
                </div>
                <h4 className="font-display text-xl font-bold text-white mb-2">
                  How the Product Looks &amp; Communicates
                </h4>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4">
                  UI translates the UX wireframe into an exquisite visual environment: typographic balance, refined color palettes, touch target ergonomics, micro-interactions, and bespoke styling that commands brand respect.
                </p>
                <ul className="space-y-1.5 text-xs text-neutral-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Pixel-Perfect Component Libraries &amp; Design Tokens</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>High-Contrast Typography &amp; Dark/Gold Aesthetic</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Clickable Interactive Prototypes in Figma</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* 4. WHAT WE OFFER                                     */}
        {/* ==================================================== */}
        <div id="offerings" className="mb-20 scroll-mt-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="text-xs font-semibold tracking-widest uppercase text-[#d4af37] mb-2 font-mono">
                Scope of Capabilities
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
                What We Offer
              </h2>
            </div>
            <p className="text-sm text-neutral-400 max-w-md font-normal leading-relaxed">
              Every deliverable is crafted to production-grade engineering standards with long-term maintenance in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.offerings.map((offering, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0c0c10]/80 border border-white/10 hover:border-[#d4af37]/40 transition-all duration-300 hover:-translate-y-1 shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#d4af37]">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono text-neutral-500 font-semibold">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-white mb-2">
                    {offering.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {offering.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==================================================== */}
        {/* 5. OUR PROCESS FOR THIS SERVICE                      */}
        {/* ==================================================== */}
        <div className="mb-20">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-semibold tracking-widest uppercase text-[#d4af37] mb-2 font-mono">
              Systematic Execution
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
              Our Process
            </h2>
            <p className="text-sm text-neutral-400 leading-relaxed">
              A transparent, phased delivery workflow that keeps you informed at every milestone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {(service.process || []).map((step, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#0d0d12]/80 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono font-bold text-[#d4af37] mb-3">
                    {step?.step || `0${idx + 1}`}
                  </div>
                  <h4 className="font-display text-base font-bold text-white mb-2">
                    {step?.title || ''}
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {step?.desc || ''}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==================================================== */}
        {/* 6. TECHNOLOGIES & TOOLS                              */}
        {/* ==================================================== */}
        <div className="mb-20 p-8 sm:p-10 rounded-2xl bg-[#0c0c10]/80 border border-white/10 backdrop-blur-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="text-xs font-mono text-[#d4af37] font-semibold mb-1">
                TECHNOLOGY STACK
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                Tools &amp; Frameworks We Rely On
              </h3>
            </div>
            <span className="text-xs text-neutral-400 font-mono">
              Modern &middot; Type-Safe &middot; High Performance
            </span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {service.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-xl bg-white/[0.04] text-xs font-mono text-neutral-200 border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* ==================================================== */}
        {/* 7. RELEVANT PRIRAJ GROUP PROJECT SHOWCASE            */}
        {/* ==================================================== */}
        {relevantProject && (
          <div className="mb-20">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
              <div>
                <div className="text-xs font-semibold tracking-widest uppercase text-[#d4af37] mb-2 font-mono">
                  Real Work Demonstration
                </div>
                <h2 className="font-display text-3xl font-bold tracking-tight text-white">
                  Featured Case Study
                </h2>
              </div>
              <span className="text-xs text-neutral-400 font-mono">
                {service.relevantProjectLabel || 'Selected Project'}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-10 rounded-2xl bg-[#0d0d12]/90 border border-white/10 backdrop-blur-xl shadow-2xl">
              <div className="lg:col-span-6 rounded-xl overflow-hidden border border-white/10 aspect-[16/10] bg-[#14141c]">
                <img
                  src={relevantProject.image}
                  alt={relevantProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#d4af37] text-black">
                    {service.relevantProjectLabel || relevantProject.badgeType}
                  </span>
                  <span className="text-xs font-mono text-neutral-400">
                    {relevantProject.category}
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  {relevantProject.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {relevantProject.overview}
                </p>

                <div className="space-y-1.5 pt-2">
                  {relevantProject.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap gap-3">
                  <button
                    onClick={() => onOpenProjectModal(service.title)}
                    className="px-5 py-2.5 rounded-lg text-xs font-semibold text-black bg-[#d4af37] hover:bg-[#e5c07b] transition-colors cursor-pointer"
                  >
                    Build Something Similar &rarr;
                  </button>
                  <Link
                    to="/#work"
                    className="px-5 py-2.5 rounded-lg text-xs font-semibold text-neutral-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-colors inline-flex items-center gap-1"
                  >
                    <span>View All Work</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* 8. FAQ SECTION                                       */}
        {/* ==================================================== */}
        <div className="mb-20 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-xs font-semibold tracking-widest uppercase text-[#d4af37] mb-2 font-mono">
              Common Inquiries
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl bg-[#0c0c10]/90 border border-white/10 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-display text-base font-semibold text-white">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#d4af37] transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ==================================================== */}
        {/* 9. BOTTOM CONTEXTUAL CTA BANNER                      */}
        {/* ==================================================== */}
        <div className="rounded-2xl bg-[#0e0e14]/95 border border-[#d4af37]/40 p-8 sm:p-12 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-[0_0_40px_-10px_rgba(212,175,55,0.2)]">
          <div>
            <div className="text-xs font-mono text-[#d4af37] font-semibold mb-1">
              Have a project in mind?
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
              Let&apos;s build something meaningful.
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-xl">
              Discuss your project requirements directly with PRIRAJ GROUP engineers. We respond with a thoughtful technical proposal and transparent scope.
            </p>
          </div>
          <button
            onClick={() => onOpenProjectModal(service.title)}
            className="px-8 py-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-black bg-[#d4af37] hover:bg-[#e5c07b] transition-all shadow-xl shrink-0 whitespace-nowrap cursor-pointer active:scale-[0.98]"
          >
            Start a Project &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};
