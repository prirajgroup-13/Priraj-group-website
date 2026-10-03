import React from 'react';
import {
  Code2,
  Layers,
  Palette,
  ShoppingBag,
  Compass,
  Cpu,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { SERVICES_DATA } from '../data/content';
import { Link, useRouter } from '../router/Router';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const { navigate } = useRouter();

  const getServiceIcon = (slug: string) => {
    switch (slug) {
      case 'website-development':
        return <Code2 className="w-5 h-5 text-[#d4af37]" />;
      case 'web-application':
        return <Layers className="w-5 h-5 text-[#d4af37]" />;
      case 'ui-ux-design':
        return <Palette className="w-5 h-5 text-[#d4af37]" />;
      case 'ecommerce':
        return <ShoppingBag className="w-5 h-5 text-[#d4af37]" />;
      case 'branding':
        return <Compass className="w-5 h-5 text-[#d4af37]" />;
      case 'custom-digital-solutions':
        return <Cpu className="w-5 h-5 text-[#d4af37]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#d4af37]" />;
    }
  };

  return (
    <section id="services" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-[#d4af37] mb-3">
              Capabilities &amp; Services
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              What We Build
            </h2>
          </div>
          <div className="max-w-md flex flex-col items-start md:items-end gap-3">
            <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed text-left md:text-right">
              From custom business websites to full-scale digital products, PRIRAJ GROUP designs and engineers digital technology that drives actual business results.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#d4af37] hover:text-[#f7edcd] transition-colors"
            >
              <span>View All Services Overview &rarr;</span>
            </Link>
          </div>
        </div>

        {/* 6 Primary Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.slug}
              onClick={() => navigate(service.route)}
              className="group relative rounded-2xl bg-[#0d0d12]/80 hover:bg-[#121218]/95 backdrop-blur-md border border-white/10 hover:border-[#d4af37]/50 p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_-10px_rgba(0,0,0,0.8),0_0_25px_-5px_rgba(212,175,55,0.15)] flex flex-col justify-between cursor-pointer"
            >
              {/* Subtle gold top-right highlight border on hover */}
              <div className="absolute top-0 right-8 left-8 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/0 to-transparent group-hover:via-[#d4af37]/50 transition-all duration-500" />

              <div>
                {/* Icon & Category Index */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:border-[#d4af37]/30 group-hover:bg-[#d4af37]/10 transition-colors">
                    {getServiceIcon(service.slug)}
                  </div>
                  <span className="text-xs font-mono text-neutral-500 group-hover:text-[#d4af37] transition-colors font-semibold">
                    {service.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2.5 group-hover:text-[#f7edcd] transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                  {service.shortDesc}
                </p>
              </div>

              {/* Card Footer: Action */}
              <div className="pt-5 border-t border-white/5 flex items-center justify-between">
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
      </div>
    </section>
  );
};
