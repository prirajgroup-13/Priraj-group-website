import React, { useState } from 'react';
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
import { FOUNDER_INFO, VALUE_PROPOSITIONS, OFFICIAL_CONTACT } from '../data/content';
import { useRouter } from '../router/Router';
import { Team } from '../components/Team';

interface AboutPageProps {
  onOpenProjectModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenProjectModal }) => {
  const { navigate } = useRouter();
  const [imageError, setImageError] = useState(false);

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

        {/* Section 2: Comprehensive Founder Presentation */}
        <div className="p-8 sm:p-14 rounded-3xl bg-[#080c16]/90 border border-white/15 backdrop-blur-xl mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Founder Visual Frame */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm">
                <div
                  className="absolute -inset-4 bg-gradient-to-tr from-[#d4af37]/20 via-[#38bdf8]/10 to-transparent rounded-3xl blur-2xl pointer-events-none opacity-80"
                  aria-hidden="true"
                />

                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#131b2e] to-[#080c16] border border-white/20 p-2 shadow-2xl">
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#06080e] flex items-center justify-center">
                    {!imageError ? (
                      <img
                        src={FOUNDER_INFO.image}
                        alt={`${FOUNDER_INFO.name} — ${FOUNDER_INFO.role}`}
                        onError={() => setImageError(true)}
                        className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                      />
                    ) : (
                      /* Editorial Crest Fallback */
                      <div className="w-full h-full p-8 flex flex-col items-center justify-between text-center bg-gradient-to-b from-[#0c1222] to-[#06080e]">
                        <div className="w-full flex items-center justify-between text-[10px] font-mono text-[#d4af37] tracking-widest uppercase">
                          <span>PRIRAJ GROUP</span>
                          <span>FOUNDER</span>
                        </div>
                        <div className="flex flex-col items-center my-auto">
                          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#d4af37] via-[#987223] to-[#221808] p-[2px] shadow-[0_0_30px_0_rgba(212,175,55,0.3)] mb-4">
                            <div className="w-full h-full rounded-full bg-[#080c16] flex items-center justify-center text-white font-display text-2xl font-bold tracking-wider">
                              AS
                            </div>
                          </div>
                          <h4 className="font-display text-xl font-bold text-white tracking-wide">
                            {FOUNDER_INFO.name}
                          </h4>
                          <p className="text-xs font-mono text-[#d4af37] tracking-widest uppercase mt-1">
                            {FOUNDER_INFO.role}
                          </p>
                        </div>
                        <div className="text-[11px] text-neutral-400 font-mono border-t border-white/5 pt-3 w-full">
                          Executive &amp; Creative Direction
                        </div>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#06080e] via-transparent to-transparent pointer-events-none" />

                    <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-black/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-white font-display">
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

            {/* Founder Narrative & Perspective */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] mb-2 font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
                The Person Behind PRIRAJ GROUP
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white mb-2 tracking-tight">
                {FOUNDER_INFO.name}
              </h2>

              <div className="text-xs font-mono text-[#d4af37] uppercase tracking-wider font-semibold mb-6 flex items-center gap-2">
                <span>{FOUNDER_INFO.role}</span>
                <span>·</span>
                <span className="text-neutral-300">PRIRAJ GROUP</span>
              </div>

              {/* Exact Requested Short Description */}
              <blockquote className="border-l-2 border-[#38bdf8] pl-4 text-base sm:text-lg text-white font-medium leading-relaxed mb-6 italic">
                &ldquo;Building modern digital experiences with design, technology and real-world usability.&rdquo;
              </blockquote>

              <p className="text-sm text-neutral-300 leading-relaxed mb-8">
                Angatdeep Singh is the founder of PRIRAJ GROUP, focused on building modern digital experiences that combine strong design, practical technology and real-world usability. Every digital flagship we engineer is tailored around distinct aesthetic identity, measurable conversion, and lasting technical performance.
              </p>

              <div className="space-y-3.5 mb-8 w-full">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
                  <span><strong>Direct Founder Accountability:</strong> You work directly with senior engineering and design leadership—never passed down to disconnected junior interns.</span>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <span><strong>Zero-Template Craft:</strong> Every line of code and UI component is tailored to your business goals and market competition.</span>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <span><strong>Transparent Delivery:</strong> Clear milestones, fixed scopes, and direct communication on WhatsApp and email.</span>
                </div>
              </div>

              <button
                onClick={onOpenProjectModal}
                className="px-7 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-[#d4af37] hover:bg-[#e5c07b] transition-all shadow-md cursor-pointer"
              >
                Start a Conversation with Us &rarr;
              </button>
            </div>

          </div>
        </div>

        {/* Section 3: Our Studio Team */}
        <div className="mb-24">
          <Team id="about-team" className="!px-0 !py-0 !bg-transparent" />
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
