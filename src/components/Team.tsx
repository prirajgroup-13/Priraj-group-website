import React, { useState } from 'react';
import { ShieldCheck, Code2, Sparkles, UserCheck } from 'lucide-react';
import { TEAM_MEMBERS, FOUNDER_INFO } from '../data/content';
import { TeamMember } from '../types';

interface TeamProps {
  id?: string;
  className?: string;
}

export const Team: React.FC<TeamProps> = ({ id = 'team', className = '' }) => {
  const [founderImageError, setFounderImageError] = useState(false);
  const [founderImageSrc, setFounderImageSrc] = useState(FOUNDER_INFO.image);

  const handleFounderImageError = () => {
    if (founderImageSrc === FOUNDER_INFO.image) {
      setFounderImageSrc('/WhatsApp Image 2026-10-05 at 3.42.10 PM.jpeg');
    } else {
      setFounderImageError(true);
    }
  };

  const chintan = TEAM_MEMBERS.find((m) => m.id === 'chintan-patel');
  const [chintanImageError, setChintanImageError] = useState(false);

  return (
    <section
      id={id}
      aria-labelledby="our-team-heading"
      className={`relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 z-10 overflow-hidden bg-gradient-to-b from-[#05070d] via-[#080d1a] to-[#05070d] ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="text-xs font-mono font-semibold tracking-widest uppercase text-[#38bdf8] mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
            OUR TEAM
          </div>

          <h2
            id="our-team-heading"
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.12]"
          >
            The People Behind{' '}
            <span className="text-[#38bdf8]">PRIRAJ GROUP</span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
            Building modern digital flagships with executive direction, focused engineering, and real-world execution.
          </p>
        </div>

        {/* Team Grid: Angatdeep Singh (Founder & CEO) & Chintan Patel (Team Member) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Card 1: Angatdeep Singh — Founder & CEO */}
          <article
            className="group relative rounded-3xl bg-[#090e1c]/80 border border-white/10 hover:border-[#38bdf8]/40 transition-all duration-300 p-8 sm:p-10 flex flex-col justify-between shadow-2xl backdrop-blur-sm"
            aria-label="Angatdeep Singh — Founder & CEO"
          >
            {/* Top Bar / Relationship Badge */}
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider font-semibold text-[#d4af37] bg-[#d4af37]/10 border border-[#d4af37]/30 px-3 py-1 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
                FOUNDER &amp; CEO
              </span>
              <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest">
                PRIRAJ GROUP LEADERSHIP
              </span>
            </div>

            {/* Middle: Portrait & Identity */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center mb-6">
              {/* Photo Frame */}
              <div className="sm:col-span-5 flex justify-center sm:justify-start">
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden bg-[#04060a] border border-[#38bdf8]/30 shadow-lg">
                  {!founderImageError ? (
                    <img
                      src={founderImageSrc}
                      alt="Angatdeep Singh — Founder & CEO of PRIRAJ GROUP"
                      onError={handleFounderImageError}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-b from-[#0f172a] to-[#04060a] text-center">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#38bdf8] via-[#d4af37] to-[#1e293b] p-[2px] mb-2">
                        <div className="w-full h-full rounded-full bg-[#070b16] flex items-center justify-center text-white font-display text-lg font-bold">
                          AS
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-[#38bdf8] uppercase tracking-wider">
                        FOUNDER &amp; CEO
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Title & Name */}
              <div className="sm:col-span-7 flex flex-col justify-center text-center sm:text-left">
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1">
                  ANGATDEEP SINGH
                </h3>
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#d4af37] mb-3">
                  Founder &amp; CEO
                </div>
                <div className="inline-block text-[11px] font-mono text-neutral-400">
                  Angatdeep Singh &mdash; Founder &amp; CEO
                </div>
              </div>
            </div>

            {/* Description & Quote */}
            <div className="mt-auto pt-6 border-t border-white/5 space-y-4">
              <blockquote className="border-l-2 border-[#38bdf8] pl-3 text-xs sm:text-sm text-neutral-200 italic leading-relaxed">
                &ldquo;Building modern digital experiences with design, technology and real-world usability.&rdquo;
              </blockquote>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Angatdeep Singh is the founder of PRIRAJ GROUP, focused on building modern digital experiences that combine strong design, practical technology and real-world usability.
              </p>

              <div className="pt-4 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <span className="flex items-center gap-1.5 text-[#38bdf8]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
                  Executive Direction
                </span>
                <span>PRIRAJ GROUP</span>
              </div>
            </div>
          </article>

          {/* Card 2: Chintan Patel — Full-Stack Developer | Team Member */}
          <article
            className="group relative rounded-3xl bg-[#090e1c]/80 border border-white/10 hover:border-[#38bdf8]/40 transition-all duration-300 p-8 sm:p-10 flex flex-col justify-between shadow-2xl backdrop-blur-sm"
            aria-label="Chintan Patel — Full-Stack Developer | Team Member"
          >
            {/* Top Bar / Relationship Badge */}
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider font-semibold text-[#38bdf8] bg-[#38bdf8]/10 border border-[#38bdf8]/30 px-3 py-1 rounded-full">
                <UserCheck className="w-3.5 h-3.5 text-[#38bdf8]" />
                TEAM MEMBER
              </span>
              <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest">
                FULL-STACK DEVELOPER
              </span>
            </div>

            {/* Middle: Professional Circular Avatar "CP" & Identity */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center mb-6">
              {/* Circular Avatar Container */}
              <div className="sm:col-span-5 flex justify-center sm:justify-start">
                <div
                  className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl flex items-center justify-center bg-[#04060a] border border-[#38bdf8]/20 p-4 shadow-lg group-hover:border-[#38bdf8]/50 transition-colors"
                  aria-label="Avatar for Chintan Patel with initials CP"
                >
                  {chintan?.photo && !chintanImageError ? (
                    <img
                      src={chintan.photo}
                      alt="Chintan Patel — Full-Stack Developer | Team Member"
                      onError={() => setChintanImageError(true)}
                      className="w-full h-full object-cover object-top rounded-xl"
                    />
                  ) : (
                    /* Circular Avatar with CP initials (Until real photo is provided) */
                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-[#38bdf8] via-[#1e293b] to-[#0a1020] p-[2px] shadow-[0_0_30px_0_rgba(56,189,248,0.25)] flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                      <div className="w-full h-full rounded-full bg-[#070b16] flex flex-col items-center justify-center">
                        <span className="font-display text-2xl sm:text-3xl font-bold tracking-wider text-white">
                          CP
                        </span>
                        <span className="text-[9px] font-mono text-[#38bdf8] uppercase tracking-widest mt-0.5">
                          DEVELOPER
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Title & Name */}
              <div className="sm:col-span-7 flex flex-col justify-center text-center sm:text-left">
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1">
                  {chintan?.name || 'Chintan Patel'}
                </h3>
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#38bdf8] mb-1">
                  {chintan?.title || 'FULL-STACK DEVELOPER'}
                </div>
                <div className="text-[11px] font-mono text-neutral-400 mb-3">
                  {chintan?.label || 'TEAM MEMBER'}
                </div>
                <div className="inline-block text-[11px] font-mono text-neutral-400">
                  {chintan?.name || 'Chintan Patel'} &mdash; {chintan?.role || 'Full-Stack Developer'} | {chintan?.relationship || 'Team Member'}
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mt-auto pt-6 border-t border-white/5 space-y-4">
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                &ldquo;{chintan?.description || 'Chintan Patel is a Full-Stack Developer and team member at PRIRAJ GROUP, contributing to the development of modern web experiences and digital solutions.'}&rdquo;
              </p>

              <div className="pt-4 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <span className="flex items-center gap-1.5 text-[#38bdf8]">
                  <Code2 className="w-3.5 h-3.5 text-[#38bdf8]" />
                  Full-Stack Development
                </span>
                <span className="px-2 py-0.5 rounded bg-white/5 text-neutral-300 border border-white/10">
                  Team Member
                </span>
              </div>
            </div>
          </article>

        </div>

        {/* Bottom Verification Note / Easy Update Guidance */}
        <div className="mt-12 p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs font-mono text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>PRIRAJ GROUP Studio Team &middot; Verified Profiles</span>
          </div>
          <div className="text-neutral-500">
            Angatdeep Singh &middot; Chintan Patel
          </div>
        </div>

      </div>
    </section>
  );
};
