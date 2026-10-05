import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Flame,
  Droplets,
  BookOpen,
  Dumbbell,
  Timer,
  Moon,
  Sparkles,
  Shield,
  Layers,
  Calendar,
  Smartphone,
  ChevronRight,
  TrendingUp,
  Activity
} from 'lucide-react';
import { useRouter } from '../router/Router';

interface WinterArcCaseStudyProps {
  onOpenProjectModal: (serviceName?: string) => void;
}

export const WinterArcCaseStudy: React.FC<WinterArcCaseStudyProps> = ({ onOpenProjectModal }) => {
  const { navigate } = useRouter();
  const [activeModule, setActiveModule] = useState<number>(0);
  const [selectedDayMilestone, setSelectedDayMilestone] = useState<'day1' | 'day45' | 'day90'>('day45');

  const modules = [
    {
      id: 'dashboard',
      title: 'Day X / 90 Dashboard',
      icon: <Activity className="w-4 h-4 text-[#d4af37]" />,
      desc: 'Central command ring visualizing elapsed days, active streak validity, and real-time daily protocol completion percentage.',
      metrics: 'Day 42 of 90 · 100% On Streak'
    },
    {
      id: 'missions',
      title: 'Daily Missions Checklist',
      icon: <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />,
      desc: 'Five non-negotiable daily objectives with instant tactile logging: Morning Cardio, Resistance Training, 1-Gallon Water, 10 Pages Reading, Clean Nutrition.',
      metrics: '5 / 5 Logged Daily'
    },
    {
      id: 'timers',
      title: 'Workout & Cardio Timers',
      icon: <Timer className="w-4 h-4 text-[#d4af37]" />,
      desc: 'Integrated countdown timers with interval alerts and outdoor route logging for the 45-minute daily cardio session.',
      metrics: 'Dual 45-Minute Sessions'
    },
    {
      id: 'hydration',
      title: '1-Gallon Hydration Ring',
      icon: <Droplets className="w-4 h-4 text-[#d4af37]" />,
      desc: 'Sub-metric progress circle dividing 3,785 ml into intuitive 500ml quick-log taps throughout training and work hours.',
      metrics: '3,785 ml (1 Gal) Requirement'
    },
    {
      id: 'recovery',
      title: 'Sleep & Weekly Review',
      icon: <Moon className="w-4 h-4 text-[#d4af37]" />,
      desc: 'Weekly discipline analytics measuring streak stability, photo milestone logs, and sleep recovery hours.',
      metrics: '7.8 hrs Avg Sleep · 100% Recovery'
    }
  ];

  return (
    <div className="relative pt-28 pb-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between pb-8 mb-8 border-b border-white/10">
          <button
            onClick={() => navigate('/#work')}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Selected Work</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-[#d4af37]">CASE STUDY 01</span>
            <span className="text-neutral-600">/</span>
            <span className="text-xs font-mono text-neutral-400">PRODUCT ENGINEERING</span>
          </div>
        </div>

        {/* ==================================================== */}
        {/* 1. PROJECT HERO                                      */}
        {/* ==================================================== */}
        <div className="mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs font-mono font-bold text-[#fae8b4] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
            <span>APP / FITNESS PRODUCT</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.08]">
            WINTER ARC — <span className="gold-gradient-text">90 DAY CHALLENGE</span>
          </h1>

          <p className="text-lg sm:text-xl text-neutral-300 max-w-3xl leading-relaxed mb-10 font-normal">
            A personal 90-day transformation system designed around training, nutrition, productivity, recovery and daily discipline. Engineered with zero distraction, tactile micro-interactions, and uncompromising streak accountability.
          </p>

          {/* Project Metadata Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-[#090d16]/80 border border-white/10 backdrop-blur-md mb-12">
            <div>
              <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-1">Discipline</div>
              <div className="text-sm font-semibold text-white">Mobile Product &amp; UI/UX</div>
            </div>
            <div>
              <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-1">Protocol Length</div>
              <div className="text-sm font-semibold text-[#d4af37]">90 Consecutive Days</div>
            </div>
            <div>
              <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-1">Architecture</div>
              <div className="text-sm font-semibold text-white">React Native &amp; TypeScript</div>
            </div>
            <div>
              <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-1">Status</div>
              <div className="text-sm font-semibold text-emerald-400">Complete / Production Ready</div>
            </div>
          </div>

          {/* Large Hero Visual: Device Mockup */}
          <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-[#06080e] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)]">
            <img
              src="/assets/projects/winter-arc-app.jpg"
              alt="Winter Arc 90 Day Challenge Mobile Application"
              className="w-full h-auto object-cover max-h-[640px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06080e] via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-black/70 backdrop-blur-md border border-white/10">
              <div className="text-xs sm:text-sm text-neutral-300 font-mono">
                <span className="text-[#d4af37] font-bold">WINTER ARC PROTOCOL</span> — Day 42 / 90 Active Dashboard
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                <span>Obsidian Black</span>
                <span>·</span>
                <span className="text-[#d4af37]">Metallic Gold Highlights</span>
              </div>
            </div>
          </div>
        </div>

        {/* ==================================================== */}
        {/* 2. THE IDEA, THE CHALLENGE & THE SOLUTION             */}
        {/* ==================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* The Idea */}
          <div className="p-8 rounded-2xl bg-[#090d16]/70 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#d4af37] mb-3 font-semibold">
                01. The Idea
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                The Final 90 Days Protocol
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                The Winter Arc is a psychological and physical sprint through the final quarter of the year. While others slow down during winter months, disciplined individuals commit to 90 uninterrupted days of self-elevation: building lean muscle, reading relentlessly, maintaining clean nutrition, and stepping into the new year already transformed.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/5 text-xs text-neutral-400 font-mono">
              Mindset: No Cheats · Absolute Ownership
            </div>
          </div>

          {/* The Challenge */}
          <div className="p-8 rounded-2xl bg-[#090d16]/70 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3 font-semibold">
                02. The Challenge
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                The Friction in Standard Apps
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Existing fitness and habit apps suffer from cognitive fatigue: complex calorie databases that take 10 minutes per meal, noisy social feeds, arbitrary popups, and broken offline syncing. When an athlete finishes an outdoor morning cardio workout in the freezing cold, they need to log compliance in two taps—not fill out a bureaucratic survey.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/5 text-xs text-neutral-400 font-mono">
              Problem: Tool Fatigue &amp; Broken Momentum
            </div>
          </div>

          {/* The Solution */}
          <div className="p-8 rounded-2xl bg-[#0e1424]/90 border border-[#d4af37]/40 shadow-[0_0_30px_-5px_rgba(212,175,55,0.15)] flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#d4af37] mb-3 font-semibold">
                03. The Solution
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                The Zero-Friction Engine
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                PRIRAJ GROUP designed and engineered a streamlined mobile operating system centered around a single circular Day X / 90 ring. Daily rules are validated with instant tactile feedback. Data persists securely offline first. No advertisements, zero social noise, and uncompromising streak tracking.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#d4af37]/20 text-xs text-[#fae8b4] font-mono">
              Outcome: 100% Frictionless Daily Compliance
            </div>
          </div>
        </div>

        {/* ==================================================== */}
        {/* 3. CORE EXPERIENCE — INTERACTIVE MODULE EXPLORER      */}
        {/* ==================================================== */}
        <div className="mb-24 p-8 sm:p-12 rounded-3xl bg-[#080c16]/90 border border-white/15 backdrop-blur-xl">
          <div className="max-w-2xl mb-10">
            <div className="text-xs font-mono uppercase tracking-widest text-[#d4af37] mb-2 font-semibold">
              Interactive System Walkthrough
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Core Experience Modules
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Explore the primary functional components that power the Winter Arc 90-Day daily discipline engine.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Module Navigation List */}
            <div className="lg:col-span-5 space-y-2.5">
              {modules.map((m, idx) => (
                <button
                  key={m.id}
                  onClick={() => setActiveModule(idx)}
                  className={`w-full text-left p-4 rounded-xl transition-all flex items-start gap-3.5 cursor-pointer border ${
                    activeModule === idx
                      ? 'bg-[#131b2e] border-[#d4af37]/60 shadow-[0_0_20px_-3px_rgba(212,175,55,0.2)]'
                      : 'bg-white/[0.02] border-white/5 hover:border-white/15 text-neutral-400 hover:text-white'
                  }`}
                >
                  <div className="p-2 rounded-lg bg-black/50 border border-white/10 shrink-0 mt-0.5">
                    {m.icon}
                  </div>
                  <div className="flex-1">
                    <div className="font-display text-sm font-bold text-white mb-1 flex items-center justify-between">
                      <span>{m.title}</span>
                      <span className="text-[10px] font-mono text-[#d4af37]">{m.metrics}</span>
                    </div>
                    <div className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                      {m.desc}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Right: Active Module Detailed Spotlight */}
            <div className="lg:col-span-7 p-8 rounded-2xl bg-[#060911] border border-white/10">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
                  <span className="font-display text-lg font-bold text-white">
                    {modules[activeModule].title}
                  </span>
                </div>
                <span className="text-xs font-mono text-[#fae8b4] px-2.5 py-1 rounded bg-[#d4af37]/10 border border-[#d4af37]/30">
                  {modules[activeModule].metrics}
                </span>
              </div>

              <p className="text-sm text-neutral-300 leading-relaxed mb-8">
                {modules[activeModule].desc}
              </p>

              {/* Architectural Highlights */}
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <span>Sub-50ms interaction latency with immediate local state synchronization.</span>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <span>Thumb-accessible control zones located in the bottom 40% of the mobile viewport.</span>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <span>Strict streak protection algorithm with offline timestamp validation.</span>
                </div>
              </div>

              {/* Callout */}
              <div className="p-4 rounded-xl bg-[#d4af37]/5 border border-[#d4af37]/20 flex items-center justify-between">
                <span className="text-xs text-neutral-300">Interested in engineering a similar mobile product?</span>
                <button
                  onClick={() => onOpenProjectModal('Mobile Application Development')}
                  className="text-xs font-semibold text-black bg-[#d4af37] hover:bg-[#e5c07b] px-4 py-2 rounded-lg transition-colors cursor-pointer"
                >
                  Discuss Product Scope &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ==================================================== */}
        {/* 4. DESIGN SYSTEM & TECHNICAL CRAFT                   */}
        {/* ==================================================== */}
        <div className="mb-24">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-mono uppercase tracking-widest text-[#d4af37] mb-2 font-semibold">
              Visual Architecture
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Design System &amp; Ergonomics
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Every color, radius, and typographic scale was calibrated specifically for low-light gym training environments and extreme contrast legibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl bg-[#090d16]/70 border border-white/10">
              <div className="text-xs font-mono text-[#d4af37] uppercase tracking-wider mb-2 font-semibold">Palette</div>
              <h4 className="font-display text-xl font-bold text-white mb-4">Obsidian &amp; Warm Gold</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#06080e] border border-white/10 text-xs font-mono">
                  <span className="text-neutral-300">Obsidian Canvas</span>
                  <span className="text-neutral-500">#06080E</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#111726] border border-white/10 text-xs font-mono">
                  <span className="text-neutral-300">Structural Navy</span>
                  <span className="text-neutral-500">#111726</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#d4af37] text-black text-xs font-mono font-bold">
                  <span>Milestone Gold</span>
                  <span>#D4AF37</span>
                </div>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-[#090d16]/70 border border-white/10">
              <div className="text-xs font-mono text-[#d4af37] uppercase tracking-wider mb-2 font-semibold">Typography</div>
              <h4 className="font-display text-xl font-bold text-white mb-4">Tabular Data Precision</h4>
              <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                Numbers in timers, hydration counts, and day milestones use fixed-width tabular figures (`tabular-nums`) to prevent horizontal layout jank during active ticking.
              </p>
              <div className="p-4 rounded-xl bg-black/60 border border-white/5 font-mono text-center">
                <div className="text-2xl font-bold text-white tabular-nums tracking-widest">
                  42 : 14 : 09
                </div>
                <div className="text-[10px] text-neutral-500 uppercase tracking-widest mt-1">
                  Cardio Active Countdown
                </div>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-[#090d16]/70 border border-white/10">
              <div className="text-xs font-mono text-[#d4af37] uppercase tracking-wider mb-2 font-semibold">Ergonomics</div>
              <h4 className="font-display text-xl font-bold text-white mb-4">Single-Thumb Operation</h4>
              <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                Primary actions, check-ins, and timers are positioned within the primary thumb arc, allowing users to log sets with sweaty hands or during outdoor running.
              </p>
              <div className="flex items-center justify-between text-xs text-neutral-400 font-mono pt-3 border-t border-white/5">
                <span>Touch Target Size</span>
                <span className="text-white font-semibold">&ge; 48px</span>
              </div>
            </div>
          </div>
        </div>

        {/* ==================================================== */}
        {/* 5. MOBILE EXPERIENCE: DAY 1 -> DAY 90 PROGRESSION   */}
        {/* ==================================================== */}
        <div className="mb-24 p-8 sm:p-12 rounded-3xl bg-[#090d16]/80 border border-white/10">
          <div className="max-w-2xl mb-10">
            <div className="text-xs font-mono uppercase tracking-widest text-[#d4af37] mb-2 font-semibold">
              User Transformation Journey
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Day 1 → Day 90 Progression
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed">
              The application adapts visually and psychologically as the user advances through the challenge milestones.
            </p>
          </div>

          {/* Interactive Milestone Tabs */}
          <div className="flex items-center gap-2 p-1.5 rounded-xl bg-black/60 border border-white/10 max-w-md mb-8">
            <button
              onClick={() => setSelectedDayMilestone('day1')}
              className={`flex-1 py-2 rounded-lg text-xs font-mono font-semibold transition-colors cursor-pointer ${
                selectedDayMilestone === 'day1'
                  ? 'bg-[#d4af37] text-black'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Day 01: Initiation
            </button>
            <button
              onClick={() => setSelectedDayMilestone('day45')}
              className={`flex-1 py-2 rounded-lg text-xs font-mono font-semibold transition-colors cursor-pointer ${
                selectedDayMilestone === 'day45'
                  ? 'bg-[#d4af37] text-black'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Day 45: Midpoint
            </button>
            <button
              onClick={() => setSelectedDayMilestone('day90')}
              className={`flex-1 py-2 rounded-lg text-xs font-mono font-semibold transition-colors cursor-pointer ${
                selectedDayMilestone === 'day90'
                  ? 'bg-[#d4af37] text-black'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Day 90: Apex
            </button>
          </div>

          {/* Milestone Details Card */}
          <div className="p-8 rounded-2xl bg-[#06080e] border border-white/10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              {selectedDayMilestone === 'day1' && (
                <>
                  <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">Phase 1 · Protocol Initiation</div>
                  <h3 className="font-display text-2xl font-bold text-white mb-3">Day 01: Establishing Baseline Discipline</h3>
                  <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                    The user establishes their initial daily protocol baselines: setting morning wake-up targets, calibrating their outdoor route distance, committing to zero-cheat nutrition, and capturing their Day 1 biometric starting photo.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-xs font-mono text-neutral-300">
                    <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                      <span className="text-[#d4af37] block font-bold">100% Commitment</span>
                      <span>Streak Day 1 Initiated</span>
                    </div>
                    <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                      <span className="text-[#d4af37] block font-bold">Encrypted Vault</span>
                      <span>Baseline Photo Stored</span>
                    </div>
                  </div>
                </>
              )}

              {selectedDayMilestone === 'day45' && (
                <>
                  <div className="text-xs font-mono text-[#d4af37] uppercase tracking-wider mb-2 font-semibold">Phase 2 · The Crucible</div>
                  <h3 className="font-display text-2xl font-bold text-white mb-3">Day 45: The Critical Midpoint Calibration</h3>
                  <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                    The novelty has faded and winter weather tests mental fortitude. The app surfaces historical streak resistance, showing 45 consecutive days logged without a single skipped mission. Haptic confirmation sounds reinforce pride of effort.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-xs font-mono text-neutral-300">
                    <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                      <span className="text-[#d4af37] block font-bold">170,325 ml</span>
                      <span>45 Gallons Consumed</span>
                    </div>
                    <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                      <span className="text-[#d4af37] block font-bold">67.5 Hours</span>
                      <span>Cardio Completed</span>
                    </div>
                  </div>
                </>
              )}

              {selectedDayMilestone === 'day90' && (
                <>
                  <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2 font-semibold">Phase 3 · Transformation</div>
                  <h3 className="font-display text-2xl font-bold text-white mb-3">Day 90: Protocol Completion &amp; New Identity</h3>
                  <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                    90 consecutive days completed. The user exports a private before-and-after transformation dossier, comprehensive biometric metrics, reading completion roster (900+ pages), and enters the new year with undeniable momentum.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-xs font-mono text-neutral-300">
                    <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                      <span className="text-emerald-400 block font-bold">90 / 90 Streak</span>
                      <span>100% Challenge Completed</span>
                    </div>
                    <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                      <span className="text-emerald-400 block font-bold">900 Pages Read</span>
                      <span>Full Transformation Dossier</span>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Right: Multi-screen visual */}
            <div className="md:col-span-5 rounded-xl overflow-hidden border border-white/10 bg-black">
              <img
                src="/assets/projects/winter-arc-experience.jpg"
                alt="Winter Arc multi-screen transformation experience"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* ==================================================== */}
        {/* 6. FINAL EXPERIENCE & RESULTS                         */}
        {/* ==================================================== */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#090d16] via-[#101728] to-[#090d16] border border-white/15 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="text-xs font-mono uppercase tracking-widest text-[#d4af37] mb-2 font-semibold">
                Product Architecture Summary
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
                Built to Withstand Real-World Usage
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                Winter Arc demonstrates PRIRAJ GROUP&apos;s ability to transform complex human behavioral requirements into a tactile, high-performance digital product. By focusing on zero cognitive friction, thumb ergonomics, and local-first persistence, the app delivers an uncompromising user experience.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-neutral-400">
                <span className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-white">Local SQLite Persistence</span>
                <span className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-white">Sub-50ms Reaction Time</span>
                <span className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-white">Offline-First Architecture</span>
                <span className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-white">Dark Mode Optical Tuning</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-stretch sm:items-end justify-center gap-4">
              <button
                onClick={() => onOpenProjectModal('Mobile Application Development')}
                className="px-7 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-[#d4af37] hover:bg-[#e5c07b] transition-all shadow-lg text-center cursor-pointer"
              >
                Start a Product Like This &rarr;
              </button>
              <button
                onClick={() => navigate('/#contact')}
                className="px-7 py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-colors text-center cursor-pointer"
              >
                Inquire on Scope &amp; Pricing
              </button>
            </div>
          </div>
        </div>

        {/* ==================================================== */}
        {/* 7. NEXT PROJECT NAVIGATION                           */}
        {/* ==================================================== */}
        <div className="pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <button
            onClick={() => navigate('/#work')}
            className="text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            &larr; View All Projects
          </button>

          <div className="flex items-center gap-4 text-center sm:text-right">
            <div>
              <div className="text-[11px] font-mono text-[#d4af37] uppercase tracking-wider">Next Portfolio Project</div>
              <div className="font-display text-base font-bold text-white">BARBER SHOP BOOKING</div>
            </div>
            <button
              onClick={() => navigate('/work/barber-booking')}
              className="p-3 rounded-xl bg-white/[0.04] hover:bg-[#d4af37] text-neutral-300 hover:text-black border border-white/10 transition-all cursor-pointer"
              aria-label="View Next Project: Barber Shop Booking"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
