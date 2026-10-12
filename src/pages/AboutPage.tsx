import React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Shield,
  Layers,
  Sparkles,
  Target,
  Code2,
  Compass,
  Zap,
  Award
} from 'lucide-react';
import { VALUE_PROPOSITIONS, OFFICIAL_CONTACT } from '../data/content';
import { useRouter } from '../router/Router';
// Team component preserved on home page

interface AboutPageProps {
  onOpenProjectModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenProjectModal }) => {
  const { navigate } = useRouter();

  return (
    <div className="relative pt-28 pb-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between pb-8 mb-12 border-b border-white/10">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-[#d4af37]">ABOUT PRIRAJ GROUP</span>
            <span className="text-neutral-600">/</span>
            <span className="text-xs font-mono text-neutral-400">FOUNDER &amp; STUDIO</span>
          </div>
        </div>

        {/* Section 1: Studio Story & Manifesto */}
        <div className="mb-20">
          <div className="text-xs font-mono uppercase tracking-widest text-[#d4af37] mb-3 font-semibold">
            Digital Studio Philosophy
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.08]">
            We Build Websites &amp; Digital Products That{' '}
            <span className="gold-gradient-text">Command Authority.</span>
          </h1>
          <p className="text-lg sm:text-xl text-neutral-300 max-w-3xl leading-relaxed font-normal">
            PRIRAJ GROUP was founded to eliminate the compromise between aesthetic prestige and engineering performance. We design and build modern websites, e-commerce platforms, and digital products for ambitious brands and growing businesses.
          </p>
        </div>


        {/* Section 3: Engineering & Development Capability */}
        <div className="mb-24 p-8 sm:p-12 rounded-3xl bg-[#090e1c]/80 border border-white/10 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 mb-8 border-b border-white/10">
            <div>
              <div className="text-xs font-mono font-semibold tracking-widest uppercase text-[#38bdf8] mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
                STUDIO ENGINEERING &amp; TEAM
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Bespoke Technical Execution
              </h3>
            </div>
            <button
              onClick={() => navigate('/#team')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-semibold uppercase tracking-wider text-[#38bdf8] bg-[#38bdf8]/10 border border-[#38bdf8]/30 hover:bg-[#38bdf8]/20 transition-colors cursor-pointer"
            >
              <span>View Our Team Profiles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-neutral-300">
            <div className="p-6 rounded-2xl bg-[#04060a]/60 border border-white/5 space-y-2">
              <div className="text-xs font-mono text-[#d4af37] uppercase tracking-wider font-semibold">Leadership &amp; Creative Direction</div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Led by <strong>Angatdeep Singh</strong> (Founder &amp; CEO), driving brand strategy, spatial UI architecture, and direct client accountability.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#04060a]/60 border border-white/5 space-y-2">
              <div className="text-xs font-mono text-[#38bdf8] uppercase tracking-wider font-semibold">Full-Stack Development</div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Engineered with modern React, TypeScript, responsive layouts, and performant web solutions by team member <strong>Chintan Patel</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Studio Core Values */}
        <div className="mb-24">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-mono uppercase tracking-widest text-[#d4af37] mb-2 font-semibold">
              Standards &amp; Commitments
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              What Sets PRIRAJ GROUP Apart
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed">
              We reject the superficial shortcuts of generic agency templates in favor of bespoke craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUE_PROPOSITIONS.map((val, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-[#090d16]/70 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono text-[#d4af37] mb-3">0{idx + 1}</div>
                  <h3 className="font-display text-lg font-bold text-white mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-white/5 text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                  Guaranteed Standard
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Bottom Call To Action */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#090d16] via-[#111728] to-[#090d16] border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
              Ready to Upgrade Your Digital Presence?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Let&apos;s build a website or digital product that commands authority and delivers real business results.
            </p>
          </div>
          <button
            onClick={onOpenProjectModal}
            className="px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-[#d4af37] hover:bg-[#e5c07b] transition-all shadow-lg shrink-0 cursor-pointer"
          >
            START A PROJECT &rarr;
          </button>
        </div>

      </div>
    </div>
  );
};
