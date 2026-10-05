import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, CheckCircle2, Eye, FileText, X, Sparkles } from 'lucide-react';
import { PROJECTS_DATA } from '../data/content';
import { ProjectItem } from '../types';
import { useRouter } from '../router/Router';

interface WorkProps {
  onOpenProjectModal: (serviceName?: string) => void;
}

type CategoryFilter = 'ALL' | 'WEB' | 'BOOKING' | 'PRODUCT' | 'E-COMMERCE' | 'UI/UX';

export const Work: React.FC<WorkProps> = ({ onOpenProjectModal }) => {
  const [selectedFilter, setSelectedFilter] = useState<CategoryFilter>('ALL');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const { navigate } = useRouter();

  const filterTabs: CategoryFilter[] = ['ALL', 'WEB', 'BOOKING', 'PRODUCT', 'E-COMMERCE', 'UI/UX'];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (selectedFilter === 'ALL') return true;
    if (selectedFilter === 'BOOKING') {
      return project.tags.includes('BOOKING') || project.category.includes('BOOKING');
    }
    if (selectedFilter === 'PRODUCT') {
      return project.tags.includes('PRODUCT') || project.category.includes('PRODUCT') || project.category.includes('FITNESS');
    }
    if (selectedFilter === 'WEB') {
      return project.tags.includes('WEB') || project.category.includes('WEB');
    }
    if (selectedFilter === 'E-COMMERCE') {
      return project.tags.includes('E-COMMERCE') || project.category.includes('E-COMMERCE');
    }
    if (selectedFilter === 'UI/UX') {
      return project.tags.includes('UI/UX');
    }
    return true;
  });

  const handleProjectClick = (project: ProjectItem) => {
    if (project.id === 'winter-arc') {
      navigate('/work/winter-arc');
    } else if (project.id === 'barber-booking') {
      navigate('/work/barber-booking');
    } else if (project.id === 'driving-school') {
      navigate('/work/driving-school');
    } else {
      setSelectedProject(project);
    }
  };

  return (
    <section id="work" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-[#d4af37] mb-2 font-mono">
              Portfolio &amp; Case Studies
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-3">
              OUR WORK
            </h2>
            <p className="text-sm sm:text-base font-mono text-[#38bdf8] font-medium tracking-wide">
              Digital experiences built for real-world use.
            </p>
          </div>
          <p className="text-base sm:text-lg text-neutral-300 max-w-lg font-normal leading-relaxed text-left md:text-right">
            &ldquo;From transformation apps to business booking platforms, we design and build digital experiences that solve real problems.&rdquo;
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-[#090d16]/80 border border-white/10 rounded-xl max-w-fit mb-12 overflow-x-auto">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedFilter(tab)}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer whitespace-nowrap ${
                selectedFilter === tab
                  ? 'bg-[#d4af37] text-black shadow-md'
                  : 'text-neutral-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Large Prominent Project Cards Showcase */}
        <div className="space-y-12 sm:space-y-16">
          {filteredProjects.map((project, idx) => {
            const isWinterArc = project.id === 'winter-arc';
            const isBarber = project.id === 'barber-booking';
            const isDriving = project.id === 'driving-school';

            return (
              <div
                key={project.id}
                className={`group relative rounded-3xl bg-[#090d16]/85 hover:bg-[#0e1424]/95 border transition-all duration-300 overflow-hidden shadow-2xl ${
                  isWinterArc
                    ? 'border-[#d4af37]/40 hover:border-[#d4af37]/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_35px_-5px_rgba(212,175,55,0.2)]'
                    : isBarber
                    ? 'border-amber-500/25 hover:border-amber-400/60 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_30px_-5px_rgba(212,175,55,0.15)]'
                    : isDriving
                    ? 'border-[#38bdf8]/30 hover:border-[#38bdf8]/70 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_30px_-5px_rgba(56,189,248,0.15)]'
                    : 'border-white/10 hover:border-[#d4af37]/50'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12">
                  
                  {/* Left Column: Information & Specs */}
                  <div className="lg:col-span-6 flex flex-col justify-between order-2 lg:order-1">
                    <div>
                      {/* Top Meta: Number, Unboxed Category, Year */}
                      <div className="flex items-center gap-2.5 mb-4 text-xs font-mono">
                        <span className="text-[#d4af37] font-bold text-sm">
                          0{idx + 1}
                        </span>
                        <span className="text-neutral-600">/</span>
                        <span className="text-neutral-300 font-semibold tracking-wider uppercase text-[11px]">
                          {project.category}
                        </span>
                        {isWinterArc && (
                          <>
                            <span className="text-neutral-600">·</span>
                            <span className="text-[#fae8b4] font-bold text-[10px] tracking-wider uppercase">
                              FITNESS PRODUCT
                            </span>
                          </>
                        )}
                        {(isBarber || isDriving) && (
                          <>
                            <span className="text-neutral-600">·</span>
                            <span className="text-[#38bdf8] font-bold text-[10px] tracking-wider uppercase">
                              REAL BOOKING SYSTEM
                            </span>
                          </>
                        )}
                      </div>

                      {/* Project Title */}
                      <h3
                        onClick={() => handleProjectClick(project)}
                        className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white group-hover:text-[#fae8b4] transition-colors mb-4 cursor-pointer tracking-tight"
                      >
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6 font-normal">
                        {project.description}
                      </p>

                      {/* Key Highlights / Features Preview */}
                      <div className="space-y-2.5 mb-8">
                        {project.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                            <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Unboxed Metadata Tags */}
                      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 mb-8 text-[11px] font-mono text-neutral-400">
                        {project.tags.map((tag, tIdx) => (
                          <React.Fragment key={tag}>
                            <span className="hover:text-neutral-200 transition-colors">{tag}</span>
                            {tIdx < project.tags.length - 1 && (
                              <span className="text-neutral-600 select-none">·</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-4">
                      <button
                        onClick={() => handleProjectClick(project)}
                        className="group/btn inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-[#d4af37] hover:bg-[#e5c07b] transition-all shadow-md cursor-pointer whitespace-nowrap"
                      >
                        <span>VIEW CASE STUDY</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                      </button>

                      <button
                        onClick={() => onOpenProjectModal(project.title)}
                        className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-colors cursor-pointer whitespace-nowrap"
                      >
                        <span>Build Similar Project</span>
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Large Premium Visual Presentation */}
                  <div
                    onClick={() => handleProjectClick(project)}
                    className="lg:col-span-6 relative rounded-2xl overflow-hidden bg-[#06080e] border border-white/10 aspect-[16/10] cursor-pointer order-1 lg:order-2 group/img shadow-xl"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
                      loading="lazy"
                    />

                    {/* Subtle Scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                    {/* Quick Explore Float Badge on hover */}
                    <div className="absolute bottom-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/20 text-xs font-mono text-white opacity-90 group-hover/img:opacity-100 transition-opacity">
                      <span>Explore Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#d4af37]" />
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Post-Portfolio Conversion Block (Requirement 12) */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#0d1424] to-[#070b14] border border-[#38bdf8]/30 shadow-2xl text-center max-w-4xl mx-auto">
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-[#38bdf8] mb-2">
            Real Work &middot; Real Business Solutions
          </div>
          <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight">
            HAVE A BUSINESS IDEA?
          </h3>
          <p className="text-sm sm:text-base text-neutral-300 max-w-lg mx-auto mb-8 leading-relaxed">
            Let&apos;s build the digital experience around it. From booking platforms to high-performance business flagships.
          </p>
          <button
            onClick={() => onOpenProjectModal()}
            className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-xs font-bold tracking-wider uppercase text-black bg-[#d4af37] hover:bg-[#e5c07b] transition-all shadow-lg hover:shadow-[0_0_30px_0_rgba(212,175,55,0.5)] cursor-pointer"
          >
            <span>START A PROJECT</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>

      </div>

      {/* Case Study Modal for Novia, Influence */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-fade-in">
          <div
            className="relative w-full max-w-3xl rounded-3xl bg-[#090d16] border border-white/15 p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 mb-6 border-b border-white/10 gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-mono font-bold tracking-wider uppercase px-2.5 py-0.5 rounded bg-[#d4af37] text-black">
                    {selectedProject.badgeType}
                  </span>
                  <span className="text-xs font-mono text-neutral-400">
                    {selectedProject.category}
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer shrink-0"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="space-y-6">
              <div className="rounded-xl overflow-hidden border border-white/10 bg-[#06080e] shadow-lg">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-auto object-cover max-h-[420px]"
                />
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#d4af37] mb-2 font-mono">
                  Project Overview
                </h4>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {selectedProject.overview}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <h5 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2 font-mono">
                    The Challenge
                  </h5>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {selectedProject.problem}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <h5 className="text-xs font-semibold uppercase tracking-wider text-[#d4af37] mb-2 font-mono">
                    Engineering Approach
                  </h5>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {selectedProject.approach}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3 font-mono">
                  Key Features &amp; Modules
                </h4>
                <div className="space-y-2">
                  {selectedProject.keyFeatures.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2 font-mono">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded bg-[#131b2e] text-xs font-mono text-neutral-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 mt-6 border-t border-white/10">
              <div className="text-xs text-neutral-400 text-center sm:text-left">
                Want PRIRAJ GROUP to build a similar project for your business?
              </div>
              <button
                onClick={() => {
                  const targetType = selectedProject.title;
                  setSelectedProject(null);
                  onOpenProjectModal(targetType);
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-[#d4af37] hover:bg-[#e5c07b] transition-colors cursor-pointer shadow-md"
              >
                Discuss This Project Scope &rarr;
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
