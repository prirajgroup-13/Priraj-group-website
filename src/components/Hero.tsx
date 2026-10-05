import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Code2, Eye, ShieldCheck, Sparkles } from 'lucide-react';
import { PROJECTS_DATA, CORE_CAPABILITIES, FOUNDER_INFO } from '../data/content';
import { useRouter } from '../router/Router';

interface HeroProps {
  onOpenProjectModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenProjectModal }) => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [isPaused, setIsPaused] = useState(false);
  const { navigate } = useRouter();

  // Subtle auto-cycling across projects
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveProjectIndex((prev) => (prev + 1) % PROJECTS_DATA.length);
    }, 8000);
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

  const getProjectCode = (projectId: string) => {
    switch (projectId) {
      case 'winter-arc':
        return [
          { num: '01', code: '// WinterArc-90Day-Protocol.ts · PRIRAJ GROUP' },
          { num: '02', code: 'export interface DailyProtocolState {' },
          { num: '03', code: '  currentDay: number; // Day 1 to 90' },
          { num: '04', code: '  morningCardioCompleted: boolean;' },
          { num: '05', code: '  resistanceTrainingCompleted: boolean;' },
          { num: '06', code: '  gallonHydrationLogged: number; // 3,785 ml' },
          { num: '07', code: '  readingLoggedPages: number; // >= 10 pages' },
          { num: '08', code: '  dietCleanZeroCheats: boolean;' },
          { num: '09', code: '  sleepRecoveryHours: number;' },
          { num: '10', code: '};' },
          { num: '11', code: '' },
          { num: '12', code: 'export const verifyDayStreak = (log: DailyProtocolState) => {' },
          { num: '13', code: '  return log.morningCardioCompleted &&' },
          { num: '14', code: '         log.gallonHydrationLogged >= 3785 &&' },
          { num: '15', code: '         log.dietCleanZeroCheats;' },
          { num: '16', code: '};' }
        ];
      case 'barber-booking':
        return [
          { num: '01', code: '// BarberBookingEngine.tsx · PRIRAJ GROUP' },
          { num: '02', code: 'export interface AppointmentBooking {' },
          { num: '03', code: '  service: "Executive Fade & Beard Sculpt";' },
          { num: '04', code: '  selectedDate: "2026-10-15";' },
          { num: '05', code: '  timeSlot: "11:15 AM";' },
          { num: '06', code: '  clientPhone: "+91 98765 43210";' },
          { num: '07', code: '  status: "CONFIRMED";' },
          { num: '08', code: '};' },
          { num: '09', code: 'export const bookSlot = async (slot) => {' },
          { num: '10', code: '  return reserveAppointmentSlot(slot);' },
          { num: '11', code: '};' }
        ];
      case 'driving-school':
        return [
          { num: '01', code: '// DrivingSchoolScheduler.tsx · PRIRAJ GROUP' },
          { num: '02', code: 'export interface LessonBooking {' },
          { num: '03', code: '  course: "Comprehensive Beginner (20 Lessons)";' },
          { num: '04', code: '  sessionDate: "2026-10-18";' },
          { num: '05', code: '  timeSlot: "09:00 AM";' },
          { num: '06', code: '  pickupAddress: "Sector 14 Landmark Gate";' },
          { num: '07', code: '  licenseVerification: "LEARNER_VALID";' },
          { num: '08', code: '};' }
        ];
      case 'influence':
        return [
          { num: '01', code: '// EditorialLayoutEngine.tsx · Next.js' },
          { num: '02', code: 'import { createTypographicScale } from \'@priraj/typography\';' },
          { num: '03', code: '' },
          { num: '04', code: 'export const EditorialIssue = createFluidPage({' },
          { num: '05', code: '  targetFCP: \'320ms\',' },
          { num: '06', code: '  gridSystem: \'modular-12-col\',' },
          { num: '07', code: '  renderMode: \'edge-optimized\',' },
          { num: '08', code: '  motionProfile: \'cubic-bezier(0.16, 1, 0.3, 1)\'' },
          { num: '09', code: '});' }
        ];
      default:
        return [
          { num: '01', code: '// DigitalStudioArchitecture.ts · PRIRAJ GROUP' },
          { num: '02', code: 'export const studioStandards = {' },
          { num: '03', code: '  performance: \'sub-second first paint\',' },
          { num: '04', code: '  typography: \'deliberate editorial balance\',' },
          { num: '05', code: '  responsiveness: \'mobile first touch ergonomic\'' },
          { num: '06', code: '};' }
        ];
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[95vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:py-32 z-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* ==================================================== */}
          {/* LEFT SIDE: Confident PRIRAJ GROUP Studio Hero        */}
          {/* ==================================================== */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* Early Founder Credibility Reference */}
            <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-medium text-neutral-300 mb-6 backdrop-blur-md">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#d4af37] to-[#74541c] flex items-center justify-center text-[9px] font-bold text-black tracking-tight shrink-0 shadow-sm">
                AS
              </div>
              <div className="flex items-center gap-1.5 text-[11px] sm:text-xs">
                <span className="text-neutral-400">Founded by</span>
                <span className="font-semibold text-white tracking-wide">{FOUNDER_INFO.name}</span>
                <span className="text-neutral-500 font-mono">·</span>
                <span className="text-[#d4af37] font-mono text-[10px] tracking-wider uppercase font-semibold">FOUNDER &amp; CEO</span>
              </div>
            </div>

            {/* Main Confident Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] mb-6 text-balance">
              WE BUILD DIGITAL EXPERIENCES THAT MOVE BUSINESS{' '}
              <span className="gold-gradient-text">FORWARD.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed mb-8 max-w-xl text-balance">
              PRIRAJ GROUP creates modern websites, e-commerce experiences and digital products designed around strong design, performance and real-world usability.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenProjectModal}
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-xs font-bold tracking-wider uppercase text-black bg-[#d4af37] hover:bg-[#e5c07b] transition-all duration-200 shadow-[0_0_25px_-5px_rgba(212,175,55,0.45)] hover:shadow-[0_0_35px_0_rgba(212,175,55,0.6)] active:scale-[0.98] cursor-pointer whitespace-nowrap"
              >
                <span>START A PROJECT</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-xs font-semibold tracking-wider uppercase text-neutral-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#d4af37]/40 transition-all duration-200 backdrop-blur-md cursor-pointer whitespace-nowrap"
              >
                <span>VIEW OUR WORK</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-neutral-400 group-hover:text-white" />
              </a>
            </div>

            {/* Core Capabilities Strip */}
            <div className="pt-6 border-t border-white/10 w-full">
              <div className="text-[11px] font-mono uppercase tracking-widest text-[#d4af37] mb-2 font-semibold">
                Studio Capabilities
              </div>
              <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs text-neutral-300 font-medium">
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
          {/* RIGHT SIDE: Premium Laptop Device Mockup             */}
          {/* ==================================================== */}
          <div
            className="lg:col-span-6 flex flex-col items-center lg:items-end w-full"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Top Project Label & Quick Tabs */}
            <div className="w-full max-w-lg lg:max-w-xl flex items-center justify-between mb-3 px-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] sm:text-xs font-mono font-bold tracking-wider uppercase text-[#d4af37]">
                  FEATURED WORK
                </span>
                <span className="text-neutral-600">/</span>
                <span className="text-xs font-medium text-neutral-300 truncate max-w-[170px] sm:max-w-xs">
                  {activeProject.title}
                </span>
              </div>

              {/* View Tab & Controls */}
              <div className="flex items-center gap-2">
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
                    aria-label="Previous project"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[11px] font-mono text-neutral-500 px-1 select-none">
                    0{activeProjectIndex + 1}/0{PROJECTS_DATA.length}
                  </span>
                  <button
                    onClick={handleNext}
                    className="p-1 rounded-md bg-white/[0.04] hover:bg-white/[0.08] text-neutral-400 hover:text-white transition-colors border border-white/5 cursor-pointer"
                    aria-label="Next project"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Laptop Device Container */}
            <div className="relative w-full max-w-lg lg:max-w-xl select-none group">
              
              {/* Subtle Warm Amber/Gold Ambient Glow */}
              <div
                className="absolute -inset-4 bg-gradient-to-r from-[#d4af37]/12 via-[#38bdf8]/5 to-transparent rounded-3xl blur-2xl pointer-events-none opacity-80"
                aria-hidden="true"
              />

              {/* LAPTOP LID / DISPLAY HOUSING */}
              <div className="relative rounded-t-2xl sm:rounded-t-[22px] bg-gradient-to-b from-[#24242d] via-[#14141a] to-[#0c0c10] p-2.5 sm:p-3 border border-white/20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_35px_-5px_rgba(212,175,55,0.18)]">
                
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
                      <span className="text-[#d4af37]">prirajgroup.com</span>
                      <span className="text-neutral-600">/</span>
                      <span className="text-neutral-300 truncate">{activeProject.id}</span>
                    </div>

                    <button
                      onClick={() => {
                        if (activeProject.id === 'winter-arc') {
                          navigate('/work/winter-arc');
                        } else {
                          const el = document.getElementById('work');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-[10px] text-neutral-400 hover:text-[#d4af37] font-mono cursor-pointer transition-colors flex items-center gap-1"
                    >
                      <span>Case Study</span>
                      <ArrowUpRight className="w-2.5 h-2.5" />
                    </button>
                  </div>

                  {/* DISPLAY SCREEN CONTENT: PROJECT VISUAL OR CODE ARCHITECTURE */}
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

                        {/* Glass Specular Reflection Sheen */}
                        <div
                          className="absolute inset-0 pointer-events-none"
                          style={{
                            background: 'linear-gradient(125deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 28%, transparent 55%)'
                          }}
                          aria-hidden="true"
                        />

                        {/* Badge on Screen */}
                        <div className="absolute bottom-2.5 left-2.5 z-10 flex items-center gap-2">
                          <div className="px-2.5 py-0.5 rounded bg-[#d4af37]/90 text-black font-mono font-bold text-[10px] tracking-wider">
                            {activeProject.badgeType}
                          </div>
                          <div className="px-2 py-0.5 rounded bg-black/80 backdrop-blur-md border border-white/10 text-[10px] text-neutral-200 font-medium">
                            {activeProject.category}
                          </div>
                        </div>

                        {/* Quick View Button Overlay */}
                        <button
                          onClick={() => {
                            if (activeProject.id === 'winter-arc') {
                              navigate('/work/winter-arc');
                            } else {
                              const el = document.getElementById('work');
                              if (el) el.scrollIntoView({ behavior: 'smooth' });
                            }
                          }}
                          className="absolute bottom-2.5 right-2.5 z-10 px-3 py-1 rounded-md bg-black/80 hover:bg-[#d4af37] text-neutral-300 hover:text-black border border-white/20 text-[10px] font-semibold tracking-wider uppercase transition-colors flex items-center gap-1 backdrop-blur-md cursor-pointer"
                        >
                          <span>Explore</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </>
                    ) : (
                      /* High-Quality Code Architecture Terminal */
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
                <div className="h-3 sm:h-3.5 bg-gradient-to-b from-[#2a2a35] via-[#1a1a22] to-[#121218] rounded-b-sm border-t border-white/20 mx-auto w-full relative z-10">
                  <div className="w-14 sm:w-16 h-1 bg-[#0d0d12] rounded-b-md mx-auto border-b border-white/10" />
                </div>
                <div className="h-2 bg-gradient-to-b from-[#181820] to-[#0a0a0e] rounded-b-xl mx-3 sm:mx-4 border-b border-white/10 shadow-2xl relative z-0" />
                <div
                  className="h-4 w-4/5 mx-auto bg-black/80 rounded-full blur-md -mt-1 pointer-events-none"
                  aria-hidden="true"
                />
              </div>

              {/* Project Dots */}
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
