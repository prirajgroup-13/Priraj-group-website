import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { PROCESS_DATA } from '../data/content';

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight || 800;

      if (!sectionHeight || sectionHeight <= 0) return;

      // When section is in viewport
      if (rect.top <= viewportHeight * 0.6 && rect.bottom >= 0) {
        const scrolledDistance = viewportHeight * 0.6 - rect.top;
        const totalDistance = sectionHeight * 0.8;
        if (totalDistance <= 0) return;

        const rawProgress = scrolledDistance / totalDistance;
        if (typeof rawProgress !== 'number' || Number.isNaN(rawProgress)) return;

        const progress = Math.min(Math.max(rawProgress, 0), 1);
        const totalSteps = PROCESS_DATA.length;
        if (totalSteps <= 0) return;

        const rawIndex = Math.floor(progress * totalSteps);
        const stepIndex = Math.max(0, Math.min(rawIndex, totalSteps - 1));

        if (!Number.isNaN(stepIndex) && Number.isFinite(stepIndex)) {
          setActiveStep(stepIndex);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Safe active step and current item resolution to completely prevent undefined errors
  const safeActiveStep =
    typeof activeStep === 'number' &&
    !Number.isNaN(activeStep) &&
    activeStep >= 0 &&
    activeStep < PROCESS_DATA.length
      ? activeStep
      : 0;

  const currentStep = PROCESS_DATA[safeActiveStep] || PROCESS_DATA[0] || {
    step: '01',
    number: '01 — DISCOVER',
    title: 'DISCOVER',
    desc: 'Understand the business, audience, requirements and goals.',
    keyOutputs: ['Business Objective Alignment', 'Audience & Competitor Discovery', 'Clear Scope & Technical Roadmap']
  };

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 z-10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#d4af37] mb-3">
            How We Work
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            A Five-Step Delivery Process
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed">
            From initial discovery to launch and post-launch support, our process ensures every website and product is built on time, on budget, and to the highest technical standard.
          </p>
        </div>

        {/* Desktop Process Timeline Ribbon (5 Steps) */}
        <div className="hidden lg:grid grid-cols-5 gap-3.5 mb-14 relative">
          {/* Subtle connecting track */}
          <div className="absolute top-1/2 left-0 right-0 h-[1.5px] -translate-y-1/2 bg-white/10 z-0" />
          <div
            className="absolute top-1/2 left-0 h-[2px] -translate-y-1/2 bg-gradient-to-r from-[#d4af37] to-[#fae8b4] transition-all duration-500 z-0"
            style={{ width: `${((safeActiveStep + 1) / Math.max(PROCESS_DATA.length, 1)) * 100}%` }}
          />

          {PROCESS_DATA.map((item, idx) => (
            <button
              key={item.step || idx}
              onClick={() => setActiveStep(idx)}
              className={`relative z-10 text-left p-4 rounded-xl transition-all duration-300 backdrop-blur-md cursor-pointer ${
                safeActiveStep === idx
                  ? 'bg-[#15151e]/95 border border-[#d4af37]/60 shadow-[0_0_20px_-3px_rgba(212,175,55,0.25)]'
                  : 'bg-[#0d0d12]/60 border border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`text-xs font-mono font-bold ${
                    safeActiveStep === idx ? 'text-[#d4af37]' : 'text-neutral-500'
                  }`}
                >
                  {item.step}
                </span>
              </div>
              <div className="font-display text-base font-bold text-white mb-1">
                {item.title}
              </div>
              <div className="text-[11px] text-neutral-400 line-clamp-2 leading-relaxed">
                {item.desc}
              </div>
            </button>
          ))}
        </div>

        {/* Mobile / Active Step Card */}
        <div className="rounded-2xl bg-[#0e0e14]/90 border border-white/10 p-7 sm:p-10 backdrop-blur-xl shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Step Identification */}
            <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-white/10 pb-6 lg:pb-0 lg:pr-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs font-mono text-[#f7edcd] mb-3">
                <span>STAGE {currentStep.step || '01'}</span>
                <span>/</span>
                <span>05</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
                {currentStep.number || ''}
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {currentStep.desc || ''}
              </p>

              {/* Mobile Quick Step Buttons */}
              <div className="flex lg:hidden gap-1.5 mt-5">
                {PROCESS_DATA.map((s, idx) => (
                  <button
                    key={s.step || idx}
                    onClick={() => setActiveStep(idx)}
                    className={`h-2 flex-1 rounded-full transition-all cursor-pointer ${
                      safeActiveStep === idx ? 'bg-[#d4af37]' : 'bg-white/15'
                    }`}
                    aria-label={`Step ${s.step || idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Deliverables / Outputs for active step */}
            <div className="lg:col-span-7">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-4 font-mono">
                Key Milestone Deliverables
              </h4>
              <div className="space-y-3">
                {(currentStep.keyOutputs || []).map((output, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-neutral-200">{output}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
