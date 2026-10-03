import React from 'react';
import { Smartphone, Layout, Zap, Target } from 'lucide-react';
import { VALUE_PROPOSITIONS } from '../data/content';

export const About: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Smartphone className="w-5 h-5 text-[#d4af37]" />;
      case 1:
        return <Layout className="w-5 h-5 text-[#d4af37]" />;
      case 2:
        return <Zap className="w-5 h-5 text-[#d4af37]" />;
      case 3:
        return <Target className="w-5 h-5 text-[#d4af37]" />;
      default:
        return <Layout className="w-5 h-5 text-[#d4af37]" />;
    }
  };

  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Editorial Subheading */}
        <div className="text-xs font-semibold tracking-widest uppercase text-[#d4af37] mb-4">
          About PRIRAJ GROUP
        </div>

        {/* Cinematic Headline */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-6">
            Building digital products{' '}
            <span className="gold-gradient-text">with purpose.</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed text-balance">
            PRIRAJ GROUP is a digital technology and web development company. We create modern websites, custom web applications, mobile applications, refined UI/UX experiences, and complete digital products for ambitious businesses and brands looking to establish commanding online authority.
          </p>
        </div>

        {/* 4 Value Proposition Cards (Factual Core Strengths - Zero Fake Metrics) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {VALUE_PROPOSITIONS.map((val, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-[#0d0d12]/80 backdrop-blur-md border border-white/10 hover:border-[#d4af37]/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-lg"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-5">
                  {getIcon(idx)}
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-2.5">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {val.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] text-neutral-500 font-mono">
                <span>CORE STANDARD</span>
                <span className="text-[#d4af37]">0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Purpose Statement Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-[#0d0d12]/95 via-[#13131c]/95 to-[#0d0d12]/95 border border-white/10 p-8 sm:p-10 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="max-w-2xl">
            <h4 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
              Engineered for Real Business Growth
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              We do not build generic templates. Every website and application we engineer is custom-built around your specific business goals, brand aesthetics, and user conversion needs.
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3.5 rounded-xl text-xs font-semibold text-black bg-[#d4af37] hover:bg-[#e5c07b] transition-all shadow-md shrink-0 whitespace-nowrap cursor-pointer"
          >
            Start a Project with Us &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};
