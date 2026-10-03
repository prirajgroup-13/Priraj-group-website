import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, CheckCircle2, Shield, Layers, Code2, Sparkles, X, Eye, FileText } from 'lucide-react';
import { PROJECTS_DATA } from '../data/content';
import { ProjectItem } from '../types';

interface WorkProps {
  onOpenProjectModal: (serviceName?: string) => void;
}

export const Work: React.FC<WorkProps> = ({ onOpenProjectModal }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="work" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-[#d4af37] mb-3">
              Selected Work
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Selected Work
            </h2>
          </div>
          <p className="text-base sm:text-lg text-neutral-400 max-w-md font-normal leading-relaxed">
            Digital products and websites designed and developed by PRIRAJ GROUP.
          </p>
        </div>

        {/* 3 Primary Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl bg-[#0d0d12]/90 hover:bg-[#12121a] border border-white/10 hover:border-[#d4af37]/50 overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.9),0_0_25px_-5px_rgba(212,175,55,0.18)] flex flex-col justify-between"
            >
              {/* Image Preview Container */}
              <div
                onClick={() => setSelectedProject(project)}
                className="relative aspect-[16/10] w-full overflow-hidden bg-[#16161f] border-b border-white/10 cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d12] via-transparent to-black/20 pointer-events-none" />

                {/* Top Badges: REAL PROJECT / CONCEPT PROJECT */}
                <div className="absolute top-3.5 left-3.5 z-10 flex flex-wrap items-center gap-2">
                  <span
                    className={`text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-md shadow-md ${
                      project.badgeType === 'REAL PROJECT'
                        ? 'bg-[#d4af37] text-black'
                        : 'bg-white/15 text-white backdrop-blur-md border border-white/20'
                    }`}
                  >
                    {project.badgeType}
                  </span>
                  <span className="text-[11px] font-medium tracking-wide text-neutral-300 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                    {project.category}
                  </span>
                </div>

                {/* Quick inspect hint on hover */}
                <div className="absolute bottom-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d4af37] text-black text-xs font-semibold shadow-lg">
                    <span>Inspect UI</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-neutral-400 font-mono mb-2">
                    <span className="text-neutral-400">{project.projectType}</span>
                    <span className="text-[#d4af37]">{project.year}</span>
                  </div>

                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-[#f7edcd] transition-colors mb-3 cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Technology tags & Dual Actions */}
                <div className="pt-5 border-t border-white/10 flex flex-col gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] px-2.5 py-1 rounded bg-white/[0.04] text-neutral-300 border border-white/5 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Two Buttons: VIEW PROJECT & CASE STUDY */}
                  <div className="grid grid-cols-2 gap-2.5 pt-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-3 py-2.5 rounded-lg text-xs font-semibold text-neutral-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#d4af37]/40 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span>VIEW PROJECT</span>
                    </button>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-3 py-2.5 rounded-lg text-xs font-semibold text-black bg-[#d4af37] hover:bg-[#e5c07b] transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>CASE STUDY</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global CTA strip */}
        <div className="mt-16 text-center">
          <button
            onClick={() => onOpenProjectModal()}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-xs font-semibold text-neutral-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#d4af37]/40 transition-all backdrop-blur-md cursor-pointer"
          >
            <span>Have a project or website you want us to build?</span>
            <span className="text-[#d4af37] font-bold">Start a Project &rarr;</span>
          </button>
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-fade-in">
          <div
            className="relative w-full max-w-3xl rounded-2xl bg-[#0d0d12] border border-white/15 p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 mb-6 border-b border-white/10 gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`text-[11px] font-mono font-bold tracking-wider uppercase px-2.5 py-0.5 rounded ${
                      selectedProject.badgeType === 'REAL PROJECT'
                        ? 'bg-[#d4af37] text-black'
                        : 'bg-white/15 text-white border border-white/20'
                    }`}
                  >
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
              {/* Full Width Project Screenshot */}
              <div className="rounded-xl overflow-hidden border border-white/10 bg-[#08080c] shadow-lg">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-auto object-cover max-h-[420px]"
                />
              </div>

              {/* Overview & Objective */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#d4af37] mb-2 font-mono">
                  Project Overview
                </h4>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {selectedProject.overview}
                </p>
              </div>

              {/* Problem vs Approach Breakdown */}
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
                    Our Engineering Approach
                  </h5>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {selectedProject.approach}
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3 font-mono">
                  Engineered Features &amp; Modules
                </h4>
                <div className="space-y-2">
                  {selectedProject.keyFeatures.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Stack Tags */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2 font-mono">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded bg-[#14141c] text-xs font-mono text-neutral-300 border border-white/10"
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
                Ready to build a similar website or application for your business?
              </div>
              <button
                onClick={() => {
                  const targetType = selectedProject.id === 'influence' ? 'Website' : 'Web Application';
                  setSelectedProject(null);
                  onOpenProjectModal(targetType);
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-xs text-black bg-[#d4af37] hover:bg-[#e5c07b] transition-colors cursor-pointer shadow-md"
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
