import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Award, Sparkles, User, ExternalLink } from 'lucide-react';
import { FOUNDER_INFO } from '../data/content';
import { useRouter } from '../router/Router';

export const Founder: React.FC = () => {
  const { navigate } = useRouter();
  const [imageError, setImageError] = useState(false);
  const [currentImageSrc, setCurrentImageSrc] = useState(FOUNDER_INFO.image);

  const handleImageError = () => {
    if (currentImageSrc === FOUNDER_INFO.image) {
      // Try WhatsApp filename if local file path is named as uploaded
      setCurrentImageSrc('/WhatsApp Image 2026-10-05 at 3.42.10 PM.jpeg');
    } else {
      setImageError(true);
    }
  };

  return (
    <section id="founder" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 z-10 overflow-hidden bg-gradient-to-b from-[#05070d] via-[#090f1f] to-[#05070d]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Founder Portrait / Brand Credibility Vitrine */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md">
              {/* Subtle ambient ice-blue and gold lighting */}
              <div
                className="absolute -inset-4 bg-gradient-to-tr from-[#38bdf8]/15 via-[#d4af37]/10 to-transparent rounded-3xl blur-2xl pointer-events-none opacity-80"
                aria-hidden="true"
              />

              {/* Portrait Frame */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#0f172a] to-[#060913] border border-[#38bdf8]/30 p-2.5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)]">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#04060a] flex items-center justify-center">
                  {!imageError ? (
                    <img
                      src={currentImageSrc}
                      alt={`${FOUNDER_INFO.name} — ${FOUNDER_INFO.role} of PRIRAJ GROUP`}
                      onError={handleImageError}
                      className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                    />
                  ) : (
                    /* Dignified Editorial Crest Fallback */
                    <div className="w-full h-full p-8 flex flex-col items-center justify-between text-center bg-gradient-to-b from-[#0b1224] to-[#04060a]">
                      <div className="w-full flex items-center justify-between text-[10px] font-mono text-[#38bdf8] tracking-widest uppercase">
                        <span>PRIRAJ GROUP</span>
                        <span>LEADERSHIP</span>
                      </div>

                      <div className="flex flex-col items-center my-auto">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#38bdf8] via-[#d4af37] to-[#1e293b] p-[2px] shadow-[0_0_35px_0_rgba(56,189,248,0.35)] mb-4">
                          <div className="w-full h-full rounded-full bg-[#070b16] flex items-center justify-center text-white font-display text-2xl font-bold tracking-wider">
                            AS
                          </div>
                        </div>
                        <h4 className="font-display text-xl font-bold text-white tracking-wide">
                          {FOUNDER_INFO.name}
                        </h4>
                        <p className="text-xs font-mono text-[#38bdf8] tracking-widest uppercase mt-1 font-semibold">
                          {FOUNDER_INFO.role}
                        </p>
                      </div>

                      <div className="text-[11px] text-neutral-400 font-mono border-t border-white/5 pt-3 w-full">
                        Founder &amp; Executive Direction
                      </div>
                    </div>
                  )}

                  {/* Scrim overlay with badge */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#04060a] via-transparent to-transparent pointer-events-none" />

                  {/* Bottom Credibility Pill */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-black/85 backdrop-blur-md border border-[#38bdf8]/30 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white tracking-wide font-display">
                        {FOUNDER_INFO.name}
                      </div>
                      <div className="text-[10px] font-mono text-[#38bdf8] tracking-wider uppercase font-semibold">
                        {FOUNDER_INFO.role}
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-neutral-300 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                      PRIRAJ GROUP
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Editorial Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="text-xs font-mono font-semibold tracking-widest uppercase text-[#38bdf8] mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
              LEADERSHIP &amp; DIRECTION
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-2 leading-[1.12]">
              THE PERSON BEHIND
            </h2>
            <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#38bdf8] tracking-tight mb-6">
              PRIRAJ GROUP
            </div>

            <div className="mb-6">
              <div className="font-display text-2xl font-bold text-white mb-1">
                {FOUNDER_INFO.name}
              </div>
              <div className="text-xs font-mono text-[#d4af37] font-semibold tracking-widest uppercase">
                {FOUNDER_INFO.role} &middot; PRIRAJ GROUP
              </div>
            </div>

            {/* Exact Requested Short Description */}
            <blockquote className="border-l-2 border-[#38bdf8] pl-4 text-base sm:text-lg text-white font-medium leading-relaxed mb-6 italic">
              &ldquo;Building modern digital experiences with design, technology and real-world usability.&rdquo;
            </blockquote>

            <p className="text-sm text-neutral-300 leading-relaxed mb-8 max-w-xl">
              Angatdeep Singh is the founder of PRIRAJ GROUP, focused on building modern digital experiences that combine strong design, practical technology and real-world usability. Every project is engineered around distinct aesthetic identity, measurable conversion, and lasting technical performance.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-10">
              <div className="p-4 rounded-xl bg-[#090d16]/80 border border-white/10">
                <div className="text-xs font-mono text-[#38bdf8] uppercase tracking-wider mb-1 font-semibold">Design Precision</div>
                <div className="text-xs text-neutral-300 leading-relaxed">
                  Clean visual hierarchy, bespoke color palettes, and typographic balance tailored to your market.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#090d16]/80 border border-white/10">
                <div className="text-xs font-mono text-[#d4af37] uppercase tracking-wider mb-1 font-semibold">Performance First</div>
                <div className="text-xs text-neutral-300 leading-relaxed">
                  Sub-second loading times, zero-dependency bloat, and resilient edge deployment.
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => navigate('/about')}
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-xs font-bold tracking-wider uppercase text-black bg-[#d4af37] hover:bg-[#e5c07b] transition-all shadow-md cursor-pointer whitespace-nowrap"
              >
                <span>MEET THE FOUNDER</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => navigate('/#work')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-semibold tracking-wider uppercase text-neutral-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>Explore Studio Work</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
