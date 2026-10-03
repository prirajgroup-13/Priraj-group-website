import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Code2, Eye } from 'lucide-react';
import { PROJECTS_DATA, CORE_CAPABILITIES } from '../data/content';

interface HeroProps {
  onOpenProjectModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenProjectModal }) => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [isPaused, setIsPaused] = useState(false);

  // Subtle auto-cycling across real projects
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveProjectIndex((prev) => (prev + 1) % PROJECTS_DATA.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const activeProject = PROJECTS_DATA[activeProjectIndex];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveProjectIndex((prev) => (prev === 0 ? PROJECTS_DATA.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveProjectIndex((prev) => (prev + 1) % PROJECTS_DATA.length);
  };

  // Realistic code architecture snippets for each real project
  const getProjectCode = (projectId: string) => {
    switch (projectId) {
      case '75-hard-challenge':
        return [
          { num: '01', code: '// 75-Hard-Protocol-Engine.js · JavaScript' },
          { num: '02', code: 'export const defaultStreakState = {' },
          { num: '03', code: '  dayCount: 1, // Day 1 to 75' },
          { num: '04', code: '  outdoorWorkoutCompleted: true,' },
          { num: '05', code: '  indoorWorkoutCompleted: true,' },
          { num: '06', code: '  gallonHydrationLogged: 3785, // 3,785 ml' },
          { num: '07', code: '  readingCompleted: true,' },
          { num: '08', code: '  dietCompliant: true,' },
          { num: '09', code: '  progressPhotoVaultHash: \'0x8f7c9e...\'' },
          { num: '10', code: '};' },
          { num: '11', code: '' },
          { num: '12', code: 'export const verifyDailyRule = (log) => {' },
          { num: '13', code: '  return (' },
          { num: '14', code: '    log.outdoorWorkoutCompleted &&' },
          { num: '15', code: '    log.gallonHydrationLogged >= 3785 &&' },
          { num: '16', code: '    Boolean(log.progressPhotoVaultHash)' },
          { num: '17', code: '  );' },
          { num: '18', code: '};' }
        ];
      case 'novia':
        return [
          { num: '01', code: '// SovereignAudioChamber.jsx · React' },
          { num: '02', code: 'import { useSovereignAudio, useCryptoState } from \'@priraj/core\';' },
          { num: '03', code: '' },
          { num: '04', code: 'export const SovereignCircleRoom = ({ circleId }) => {' },
          { num: '05', code: '  const { session, audioLatency } = useSovereignAudio({ bitrate: 320 });' },
          { num: '06', code: '  const { isEncrypted } = useCryptoState(circleId);' },
          { num: '07', code: '' },
          { num: '08', code: '  return (' },
          { num: '09', code: '    <RoomViewport cipher="AES-256-GCM" status="active">' },
          { num: '10', code: '      <AudioChamber quality="lossless" latencyMs={audioLatency} />' },
          { num: '11', code: '      <ChronologicalFeed telemetry="zero-ad-tracking" />' },
          { num: '12', code: '    </RoomViewport>' },
          { num: '13', code: '  );' },
          { num: '14', code: '};' }
        ];
      case 'influence':
        return [
          { num: '01', code: '// EditorialLayoutEngine.jsx · Next.js' },
          { num: '02', code: 'import { createTypographicScale } from \'@priraj/typography\';' },
          { num: '03', code: '' },
          { num: '04', code: 'export const EditorialIssue = createFluidPage({' },
          { num: '05', code: '  targetFCP: \'320ms\',' },
          { num: '06', code: '  gridSystem: \'modular-12-col\',' },
          { num: '07', code: '  renderMode: \'edge-optimized\',' },
          { num: '08', code: '  motionProfile: \'cubic-bezier(0.16, 1, 0.3, 1)\',' },
          { num: '09', code: '  dynamicReadingScales: [\'editorial-dark\', \'magazine-light\']' },
          { num: '10', code: '});' }
        ];
      default:
        return [];
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[95vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:py-32 z-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* ==================================================== */}
          {/* LEFT SIDE: Main PRIRAJ GROUP messaging               */}
          {/* ==================================================== */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold tracking-wider uppercase text-neutral-300 mb-6 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
              <span>PREMIUM DIGITAL SOLUTIONS</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] mb-6">
              We Build Digital Experiences That Move Businesses{' '}
              <span className="gold-gradient-text">Forward.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed mb-8 max-w-xl text-balance">
              Web development, UI/UX design, digital products and technology solutions engineered for real business needs.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenProjectModal}
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-xs font-semibold tracking-wider uppercase text-black bg-[#d4af37] hover:bg-[#e5c07b] transition-all duration-200 shadow-[0_0_25px_-5px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_0_rgba(212,175,55,0.6)] active:scale-[0.98] cursor-pointer whitespace-nowrap"
              >
                <span>START A PROJECT</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-xs font-semibold tracking-wider uppercase text-neutral-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#d4af37]/40 transition-all duration-200 backdrop-blur-md cursor-pointer whitespace-nowrap"
              >
                <span>VIEW OUR WORK</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Factual Core Capabilities Strip (Zero fake metrics) */}
            <div className="pt-6 border-t border-white/10 w-full">
              <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs text-neutral-400 font-medium">
                {CORE_CAPABILITIES.map((cap, idx) => (
                  <React.Fragment key={cap}>
                    <span className="hover:text-white transition-colors">{cap}</span>
                    {idx < CORE_CAPABILITIES.length - 1 && (
                      <span className="text-neutral-600 select-none">&middot;</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* ==================================================== */}
          {/* RIGHT SIDE: Real Project inside Laptop Mockup       */}
          {/* ==================================================== */}
          <div
            className="lg:col-span-6 flex flex-col items-center lg:items-end w-full"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Project Label & Mode Switcher above laptop */}
            <div className="w-full max-w-lg lg:max-w-xl flex items-center justify-between mb-3 px-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] sm:text-xs font-mono font-semibold tracking-wider uppercase text-[#d4af37]">
                  FEATURED PROJECT
                </span>
                <span className="text-neutral-600">/</span>
                <span className="text-xs font-medium text-neutral-300 truncate max-w-[170px] sm:max-w-xs">
                  {activeProject.title}
                </span>
              </div>

              {/* View Tab & Cycle Controls */}
              <div className="flex items-center gap-2">
                {/* Preview vs Code Toggle */}
                <div className="hidden sm:flex items-center bg-white/[0.04] p-0.5 rounded-lg border border-white/10 text-[10px] font-mono">
                  <button
                    onClick={() => setActiveTab('preview')}
                    className={`px-2 py-0.5 rounded-md flex items-center gap-1 transition-colors cursor-pointer ${
                      activeTab === 'preview'
                        ? 'bg-[#d4af37] text-black font-semibold'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    <Eye className="w-3 h-3" />
                    <span>UI</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('code')}
                    className={`px-2 py-0.5 rounded-md flex items-center gap-1 transition-colors cursor-pointer ${
                      activeTab === 'code'
                        ? 'bg-[#d4af37] text-black font-semibold'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    <Code2 className="w-3 h-3" />
                    <span>Code</span>
                  </button>
                </div>

                {/* Prev / Next controls */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={handlePrev}
                    className="p-1 rounded-md bg-white/[0.04] hover:bg-white/[0.08] text-neutral-400 hover:text-white transition-colors border border-white/5 cursor-pointer"
                    aria-label="Previous featured project"
                    title="Previous Project"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[11px] font-mono text-neutral-500 px-1 select-none">
                    0{activeProjectIndex + 1}/0{PROJECTS_DATA.length}
                  </span>
                  <button
                    onClick={handleNext}
                    className="p-1 rounded-md bg-white/[0.04] hover:bg-white/[0.08] text-neutral-400 hover:text-white transition-colors border border-white/5 cursor-pointer"
                    aria-label="Next featured project"
                    title="Next Project"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Laptop Device Container with Floating Animation */}
            <div className="relative w-full max-w-lg lg:max-w-xl select-none">
              
              {/* Subtle Warm Gold Ambient Glow Behind Laptop */}
              <div
                className="absolute -inset-4 bg-gradient-to-r from-[#d4af37]/10 via-[#fae8b4]/5 to-transparent rounded-3xl blur-2xl pointer-events-none opacity-70"
                aria-hidden="true"
              />

              {/* LAPTOP LID / DISPLAY HOUSING */}
              <div className="relative rounded-t-2xl sm:rounded-t-[20px] bg-gradient-to-b from-[#24242d] via-[#14141a] to-[#0c0c10] p-2.5 sm:p-3 border border-white/20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_35px_-5px_rgba(212,175,55,0.15)]">
                
                {/* Top Notch & Camera Eye */}
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 flex items-center gap-1 z-20">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#050508] border border-white/10" />
                </div>

                {/* Display Screen Bezel */}
                <div className="relative rounded-lg sm:rounded-xl overflow-hidden bg-[#050508] border border-white/10 aspect-[16/10]">
                  
                  {/* Window Chrome Title Bar */}
                  <div className="h-6 sm:h-7 bg-[#0d0d12]/95 border-b border-white/10 px-3 flex items-center justify-between z-10 relative">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-red-500/60" />
                      <div className="w-2 h-2 rounded-full bg-amber-500/60" />
                      <div className="w-2 h-2 rounded-full bg-emerald-500/60" />
                    </div>

                    <div className="text-[10px] sm:text-[11px] text-neutral-400 font-mono flex items-center gap-1.5 truncate max-w-[200px]">
                      <span className="text-[#d4af37]">priraj.app</span>
                      <span className="text-neutral-600">/</span>
                      <span className="text-neutral-300 truncate">{activeProject.id}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setActiveTab(activeTab === 'preview' ? 'code' : 'preview')}
                        className="text-[10px] text-neutral-400 hover:text-[#d4af37] font-mono cursor-pointer transition-colors"
                      >
                        {activeTab === 'preview' ? 'View Code' : 'View UI'}
                      </button>
                    </div>
                  </div>

                  {/* DISPLAY SCREEN CONTENT: REAL PROJECT SCREENSHOT OR CODE */}
                  <div className="relative w-full h-[calc(100%-1.5rem)] sm:h-[calc(100%-1.75rem)] overflow-hidden bg-[#0c0c10]">
                    {activeTab === 'preview' ? (
                      <>
                        <img
                          key={activeProject.id}
                          src={activeProject.image}
                          alt={`${activeProject.title} by PRIRAJ GROUP`}
                          className="w-full h-full object-cover transition-opacity duration-500"
                          loading="eager"
                        />

                        {/* Realistic Glass Specular Reflection Sheen */}
                        <div
                          className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.09] pointer-events-none"
                          style={{
                            background: 'linear-gradient(125deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.02) 28%, transparent 55%)'
                          }}
                          aria-hidden="true"
                        />

                        {/* Honest Badge on Screen */}
                        <div className="absolute bottom-2.5 left-2.5 z-10 flex items-center gap-2">
                          <div className="px-2.5 py-0.5 rounded bg-[#d4af37]/25 backdrop-blur-md border border-[#d4af37]/50 text-[10px] text-[#fae8b4] font-mono font-bold tracking-wider">
                            {activeProject.badgeType}
                          </div>
                          <div className="px-2 py-0.5 rounded bg-black/75 backdrop-blur-md border border-white/10 text-[10px] text-neutral-300 font-medium">
                            {activeProject.category}
                          </div>
                        </div>
                      </>
                    ) : (
                      /* Realistic High-Quality Code Architecture Terminal */
                      <div className="w-full h-full p-4 overflow-y-auto font-mono text-[11px] sm:text-xs leading-relaxed bg-[#0a0a0f] text-neutral-300 select-text">
                        <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-[10px] text-neutral-500">
                          <span className="text-[#d4af37] font-semibold">{activeProject.title} &middot; SOURCE ARCHITECTURE</span>
                          <span>PRODUCTION READY</span>
                        </div>
                        <div className="space-y-0.5">
                          {getProjectCode(activeProject.id).map((line, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <span className="text-neutral-600 select-none w-5 text-right font-mono shrink-0">
                                {line.num}
                              </span>
                              <span className="text-neutral-300 font-mono whitespace-pre truncate">
                                {line.code}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* LAPTOP BASE CHASSIS */}
              <div className="relative">
                {/* Hinge & Aluminum Top deck */}
                <div className="h-3 sm:h-3.5 bg-gradient-to-b from-[#2a2a35] via-[#1a1a22] to-[#121218] rounded-b-sm border-t border-white/20 mx-auto w-full relative z-10">
                  {/* Center thumb notch */}
                  <div className="w-14 sm:w-16 h-1 bg-[#0d0d12] rounded-b-md mx-auto border-b border-white/10" />
                </div>

                {/* Bottom Lip & Foot Bevel */}
                <div className="h-2 bg-gradient-to-b from-[#181820] to-[#0a0a0e] rounded-b-xl mx-3 sm:mx-4 border-b border-white/10 shadow-2xl relative z-0" />

                {/* Floor Ambient Drop Shadow & Reflection */}
                <div
                  className="h-4 w-4/5 mx-auto bg-black/80 rounded-full blur-md -mt-1 pointer-events-none"
                  aria-hidden="true"
                />
              </div>

              {/* Project Quick-Switch Dots */}
              <div className="flex items-center justify-center gap-2 mt-4">
                {PROJECTS_DATA.map((proj, idx) => (
                  <button
                    key={proj.id}
                    onClick={() => setActiveProjectIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      activeProjectIndex === idx
                        ? 'w-6 bg-[#d4af37]'
                        : 'w-1.5 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Show ${proj.title}`}
                    title={proj.title}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
