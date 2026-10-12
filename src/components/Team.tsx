import React, { useState } from 'react';
import { UserCheck, ShieldCheck, Code2 } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/content';

interface TeamProps {
  id?: string;
  className?: string;
}

export const Team: React.FC<TeamProps> = ({ id = 'team', className = '' }) => {
  const angatdeep = TEAM_MEMBERS.find((m) => m.id === 'angatdeep-singh') || TEAM_MEMBERS[0];
  const chintan = TEAM_MEMBERS.find((m) => m.id === 'chintan-patel') || TEAM_MEMBERS[1];

  const [angatdeepImgErr, setAngatdeepImgErr] = useState(false);
  const [chintanImgErr, setChintanImgErr] = useState(false);

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
            THE PEOPLE BEHIND{' '}
            <span className="text-[#38bdf8]">PRIRAJ GROUP</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
            Meet the team building modern digital experiences through design, technology, and practical execution.
          </p>
        </div>

        {/* Clean, simplified 2-card Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* PROFILE 1: Angatdeep Singh — Founder & CEO */}
          <article
            className="group relative rounded-3xl bg-[#090e1c]/80 border border-white/10 hover:border-[#d4af37]/40 transition-all duration-300 p-8 sm:p-10 flex flex-col justify-between shadow-2xl backdrop-blur-sm"
            aria-label="Angatdeep Singh — Founder & CEO"
          >
            {/* Top Bar / Role Tag */}
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider font-semibold text-[#d4af37] bg-[#d4af37]/10 border border-[#d4af37]/30 px-3 py-1 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
                FOUNDER &amp; CEO
              </span>
              <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest">
                PRIRAJ GROUP
              </span>
            </div>

            {/* Middle: Portrait Illustration & Identity */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center mb-6">
              {/* Portrait container */}
              <div className="sm:col-span-5 flex justify-center sm:justify-start">
                <div
                  className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden bg-[#04060a] border border-[#d4af37]/20 p-1 shadow-lg group-hover:border-[#d4af37]/50 transition-colors"
                  aria-label="Professional anime-style illustration of Angatdeep Singh"
                >
                  {!angatdeepImgErr && angatdeep.photo ? (
                    <img
                      src={angatdeep.photo}
                      alt="Angatdeep Singh — Founder & CEO, PRIRAJ GROUP (Illustrated Portrait)"
                      referrerPolicy="no-referrer"
                      onError={() => setAngatdeepImgErr(true)}
                      className="w-full h-full object-cover object-top rounded-xl transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full rounded-xl bg-[#070b16] flex flex-col items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#d4af37] to-[#1e293b] p-[2px] flex items-center justify-center">
                        <span className="font-display text-xl font-bold text-white">AS</span>
                      </div>
                      <span className="text-[10px] font-mono text-[#d4af37] uppercase tracking-wider mt-2">
                        FOUNDER &amp; CEO
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Title & Name */}
              <div className="sm:col-span-7 flex flex-col justify-center text-center sm:text-left">
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1">
                  Angatdeep Singh
                </h3>
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#d4af37] mb-1">
                  Founder &amp; CEO
                </div>
                <div className="text-[11px] font-mono text-neutral-400">
                  PRIRAJ GROUP
                </div>
              </div>
            </div>

            {/* Profile Description */}
            <div className="mt-auto pt-6 border-t border-white/5">
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Angatdeep Singh is the Founder &amp; CEO of PRIRAJ GROUP, focused on building modern digital experiences through thoughtful design, practical technology, and real-world usability.
              </p>
            </div>
          </article>

          {/* PROFILE 2: Chintan Patel — Full-Stack Developer | Team Member */}
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

            {/* Middle: Portrait Illustration & Identity */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center mb-6">
              {/* Portrait Container */}
              <div className="sm:col-span-5 flex justify-center sm:justify-start">
                <div
                  className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden bg-[#04060a] border border-[#38bdf8]/20 p-1 shadow-lg group-hover:border-[#38bdf8]/50 transition-colors"
                  aria-label="Professional anime-style illustration of Chintan Patel"
                >
                  {!chintanImgErr && chintan.photo ? (
                    <img
                      src={chintan.photo}
                      alt="Chintan Patel — Full-Stack Developer, Team Member at PRIRAJ GROUP (Illustrated Portrait)"
                      referrerPolicy="no-referrer"
                      onError={() => setChintanImgErr(true)}
                      className="w-full h-full object-cover object-top rounded-xl transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full rounded-xl bg-[#070b16] flex flex-col items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#38bdf8] to-[#1e293b] p-[2px] flex items-center justify-center">
                        <span className="font-display text-xl font-bold text-white">CP</span>
                      </div>
                      <span className="text-[10px] font-mono text-[#38bdf8] uppercase tracking-wider mt-2">
                        DEVELOPER
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Title & Name */}
              <div className="sm:col-span-7 flex flex-col justify-center text-center sm:text-left">
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1">
                  Chintan Patel
                </h3>
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#38bdf8] mb-1">
                  Full-Stack Developer
                </div>
                <div className="text-[11px] font-mono text-neutral-400">
                  Team Member
                </div>
              </div>
            </div>

            {/* Profile Description */}
            <div className="mt-auto pt-6 border-t border-white/5">
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Chintan Patel is a Full-Stack Developer and team member at PRIRAJ GROUP, contributing to the development of modern web experiences and digital solutions.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
