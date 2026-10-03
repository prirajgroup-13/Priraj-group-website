import React from 'react';
import {
  Code2,
  Layers,
  Palette,
  ShoppingBag,
  Compass,
  Cpu,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { SERVICES_DATA } from '../data/content';
import { Link, useRouter } from '../router/Router';

interface ServicesOverviewProps {
  onOpenProjectModal: (serviceName?: string) => void;
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({ onOpenProjectModal }) => {
  const { navigate } = useRouter();

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
        {/* Back Link to Home */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-medium text-neutral-400 hover:text-[#d4af37] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold tracking-wider uppercase text-neutral-300 mb-6 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
            <span>PRIRAJ GROUP &middot; CAPABILITIES &amp; EXPERTISE</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            Digital Experiences Built Around Your Business.
          </h1>

          <p className="text-base sm:text-xl text-neutral-300 font-normal leading-relaxed max-w-3xl text-balance">
            We design and develop modern digital experiences that combine thoughtful design, reliable technology, and clear business purpose.
          </p>
        </div>

        {/* 6 Premium Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.slug}
              onClick={() => navigate(service.route)}
              className="group relative rounded-2xl bg-[#0d0d12]/85 hover:bg-[#12121a] backdrop-blur-xl border border-white/10 hover:border-[#d4af37]/60 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_-15px_rgba(0,0,0,0.9),0_0_30px_-5px_rgba(212,175,55,0.2)] flex flex-col justify-between cursor-pointer"
            >
              {/* Subtle top edge gold highlight border on hover */}
              <div className="absolute top-0 right-8 left-8 h-[1.5px] bg-gradient-to-r from-transparent via-[#d4af37]/0 to-transparent group-hover:via-[#d4af37]/70 transition-all duration-500" />

              <div>
                {/* Icon & Category Index */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:border-[#d4af37]/40 group-hover:bg-[#d4af37]/10 transition-colors">
                    {getServiceIcon(service.slug)}
                  </div>
                  <span className="text-xs font-mono text-neutral-500 group-hover:text-[#d4af37] transition-colors font-semibold">
                    {service.number} &mdash; SERVICE
                  </span>
                </div>

                {/* Service Name */}
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#f7edcd] transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                {/* Key Deliverables Highlights */}
                <div className="space-y-2 mb-6">
                  {service.deliverables.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-neutral-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Action */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-neutral-400 font-mono">
                  {service.pricingStarting}
                </span>

                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#d4af37] group-hover:translate-x-1 transition-transform">
                  <span>Explore Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Standard Values Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-[#0d0d12]/90 via-[#151522]/90 to-[#0d0d12]/90 border border-white/10 p-8 sm:p-12 backdrop-blur-xl mb-16 shadow-2xl">
          <div className="max-w-3xl mb-8">
            <div className="text-xs font-mono text-[#d4af37] font-semibold mb-2">
              THE PRIRAJ STANDARD
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
              Engineered with Type-Safe Architecture &amp; Refined Aesthetics
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              We don&apos;t build disposable templates. Every website and digital application we deliver is engineered with clean code, sub-second response times, and an obsessive attention to usability and business impact.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10">
            <div>
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-1">
                Zero-Template Craft
              </div>
              <div className="text-sm font-semibold text-white">Custom Engineered</div>
              <div className="text-xs text-neutral-400 mt-1">Built specifically for your brand positioning.</div>
            </div>
            <div>
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-1">
                Performance
              </div>
              <div className="text-sm font-semibold text-white">Sub-Second Loads</div>
              <div className="text-xs text-neutral-400 mt-1">Lightweight assets, edge hosting &amp; clean code.</div>
            </div>
            <div>
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-1">
                Client Direct
              </div>
              <div className="text-sm font-semibold text-white">Engineer Collaboration</div>
              <div className="text-xs text-neutral-400 mt-1">Work directly with the architects building your product.</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="rounded-2xl bg-[#0e0e14]/95 border border-[#d4af37]/30 p-8 sm:p-12 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-[0_0_40px_-10px_rgba(212,175,55,0.15)]">
          <div>
            <div className="text-xs font-mono text-[#d4af37] font-semibold mb-1">
              Have a project in mind?
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
              Let&apos;s build something meaningful.
            </h3>
            <p className="text-sm text-neutral-300">
              Share your project vision, timeline, and requirements. We review all inquiries promptly.
            </p>
          </div>
          <button
            onClick={() => onOpenProjectModal()}
            className="px-8 py-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-black bg-[#d4af37] hover:bg-[#e5c07b] transition-all shadow-lg shrink-0 whitespace-nowrap cursor-pointer active:scale-[0.98]"
          >
            Start a Project &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};
