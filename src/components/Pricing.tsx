import React from 'react';
import { ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { PRICING_PACKAGES } from '../data/content';
import { PricingPackage } from '../types';

interface PricingProps {
  onSelectPackage: (pkg: PricingPackage) => void;
  onOpenGeneralProjectModal: () => void;
}

export const Pricing: React.FC<PricingProps> = ({
  onSelectPackage,
  onOpenGeneralProjectModal
}) => {
  return (
    <section id="packages" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#d4af37] mb-3">
            Packages &amp; Investment
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Transparent Pricing Built for Real Business Growth.
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed text-balance">
            Whether you need a focused corporate website, an interactive digital experience, or a complete e-commerce store, we deliver high-performance digital craft.
          </p>
        </div>

        {/* 4-Package Grid: 4 columns on large screens, 2 columns on tablet, 1 column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PRICING_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-2xl flex flex-col justify-between p-6 sm:p-7 transition-all duration-300 backdrop-blur-xl ${
                pkg.isPopular
                  ? 'bg-[#101017]/95 border-2 border-[#d4af37]/60 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.9),0_0_30px_-8px_rgba(212,175,55,0.2)] hover:border-[#d4af37]'
                  : 'bg-[#0d0d12]/85 border border-white/10 hover:border-white/20 shadow-xl'
              }`}
            >
              {/* Top Accent Badge */}
              {pkg.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold tracking-wide uppercase bg-[#d4af37] text-black shadow-md whitespace-nowrap">
                    <Sparkles className="w-3 h-3" />
                    {pkg.badge}
                  </span>
                </div>
              )}

              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mb-3 pt-1">
                  <span className="text-xs font-mono font-bold tracking-wider text-[#d4af37]">
                    {pkg.number} &mdash; PACKAGE
                  </span>
                  <span className="text-[11px] font-semibold text-neutral-400 font-mono">
                    {pkg.shortRange}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-white mb-2">
                  {pkg.name}
                </h3>

                {/* Price Display */}
                <div className="py-4 my-2 border-y border-white/10">
                  <div className="font-display text-2xl font-extrabold text-white tracking-tight">
                    {pkg.startingRange}
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-1 font-normal">
                    Starting from · Scope flexible
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6 min-h-[48px]">
                  {pkg.subtitle}
                </p>

                {/* Package Inclusions */}
                <div className="mb-6">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 mb-3">
                    What&apos;s Included
                  </div>
                  <ul className="space-y-2.5">
                    {pkg.includes.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-neutral-200">
                        <div className="w-4 h-4 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-[#d4af37]" />
                        </div>
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action CTA */}
              <div className="pt-6 border-t border-white/10">
                <button
                  onClick={() => onSelectPackage(pkg)}
                  className={`w-full py-3.5 rounded-xl text-xs font-semibold tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                    pkg.isPopular
                      ? 'bg-[#d4af37] hover:bg-[#e5c07b] text-black shadow-[0_0_20px_-3px_rgba(212,175,55,0.4)] hover:shadow-[0_0_25px_0_rgba(212,175,55,0.6)]'
                      : 'bg-white/[0.08] hover:bg-white/[0.14] text-white border border-white/15'
                  }`}
                >
                  <span>{pkg.ctaText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Disclaimer Note */}
        <div className="max-w-2xl mx-auto text-center mt-8 text-xs text-neutral-400 font-normal leading-relaxed">
          Final pricing depends on project scope, features, integrations, and requirements.
        </div>

        {/* Custom Quote Strip below pricing cards */}
        <div className="mt-14 max-w-3xl mx-auto rounded-2xl bg-[#0e0e13]/85 border border-white/10 p-7 sm:p-9 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-2xl">
          <div>
            <h4 className="font-display text-lg sm:text-xl font-bold text-white mb-1">
              Need something different?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400">
              Tell us about your specific goals, features, and timeline for a tailored proposal.
            </p>
          </div>
          <button
            onClick={onOpenGeneralProjectModal}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs font-semibold text-black bg-[#d4af37] hover:bg-[#e5c07b] transition-all shadow-[0_0_20px_-3px_rgba(212,175,55,0.4)] whitespace-nowrap cursor-pointer shrink-0"
          >
            Request a custom quote &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};
