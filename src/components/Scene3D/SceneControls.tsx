import React, { useState } from 'react';
import { Sliders, Eye, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

interface SceneControlsProps {
  viewMode: 'cinematic' | 'architectural' | 'minimal';
  setViewMode: (mode: 'cinematic' | 'architectural' | 'minimal') => void;
  particleDensity: 'high' | 'medium' | 'low';
  setParticleDensity: (density: 'high' | 'medium' | 'low') => void;
}

export const SceneControls: React.FC<SceneControlsProps> = ({
  viewMode,
  setViewMode,
  particleDensity,
  setParticleDensity
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40">
      {isOpen ? (
        <div className="w-72 rounded-xl bg-[#0d0d10]/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl transition-all duration-300">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Sliders className="w-4 h-4 text-[#d4af37]" />
              <span className="text-xs font-semibold tracking-wider uppercase text-neutral-200">
                3D Scene Controller
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-neutral-400 hover:text-white transition-colors p-1"
              aria-label="Collapse scene controls"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Perspective Mode */}
          <div className="space-y-1.5 mb-4">
            <label className="text-[11px] font-medium text-neutral-400 flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-[#d4af37]" />
              Scene Composition
            </label>
            <div className="grid grid-cols-3 gap-1 bg-[#15151a] p-1 rounded-lg border border-white/5">
              {(['cinematic', 'architectural', 'minimal'] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode)}
                  className={`text-[11px] py-1.5 px-2 rounded-md font-medium capitalize transition-all ${
                    viewMode === mode
                      ? 'bg-[#d4af37]/20 text-[#f6e4a8] border border-[#d4af37]/40 shadow-sm'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>

          {/* Particle Density */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-medium text-neutral-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              Particle Density
            </label>
            <div className="grid grid-cols-3 gap-1 bg-[#15151a] p-1 rounded-lg border border-white/5">
              {(['high', 'medium', 'low'] as const).map((density) => (
                <button
                  key={density}
                  onClick={() => setParticleDensity(density)}
                  className={`text-[11px] py-1.5 px-2 rounded-md font-medium capitalize transition-all ${
                    particleDensity === density
                      ? 'bg-[#d4af37]/20 text-[#f6e4a8] border border-[#d4af37]/40 shadow-sm'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {density}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-[10px] text-neutral-500">
            <span>WebGL 2.0 Real-time</span>
            <span className="text-[#d4af37]">60 FPS Reactive</span>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#0d0d10]/85 hover:bg-[#16161b] backdrop-blur-md border border-white/10 hover:border-[#d4af37]/40 text-neutral-300 hover:text-white text-xs font-medium shadow-xl transition-all duration-200 group"
          title="Adjust 3D Scene Parameters"
        >
          <Sliders className="w-3.5 h-3.5 text-[#d4af37] group-hover:rotate-45 transition-transform duration-300" />
          <span className="hidden sm:inline">3D Viewport</span>
          <ChevronUp className="w-3.5 h-3.5 text-neutral-500 group-hover:text-neutral-300" />
        </button>
      )}
    </div>
  );
};
