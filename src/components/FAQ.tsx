import React, { useState } from 'react';
import { ChevronDown, Plus, Minus, HelpCircle } from 'lucide-react';
import { FAQ_DATA } from '../data/content';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#d4af37] mb-3 font-mono">
            Frequently Asked Questions
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            CLEAR ANSWERS. ZERO GUESSWORK.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed max-w-xl mx-auto">
            Everything you need to know about our web development process, project pricing, and post-launch support.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#090d16]/95 border-[#d4af37]/50 shadow-xl'
                    : 'bg-[#090d16]/60 border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base sm:text-lg font-bold text-white tracking-tight">
                    {item.question}
                  </span>
                  <div className={`p-2 rounded-lg shrink-0 transition-colors ${
                    isOpen ? 'bg-[#d4af37] text-black' : 'bg-white/[0.04] text-neutral-400'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-sm text-neutral-300 leading-relaxed border-t border-white/5 pt-4">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Contact strip if question is not listed */}
        <div className="mt-12 p-6 rounded-2xl bg-[#090d16]/50 border border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-neutral-400 font-mono">
            Have a question specific to your custom requirements?
          </span>
          <a
            href="#contact"
            className="text-xs font-bold uppercase tracking-wider text-[#d4af37] hover:text-[#f7edcd] transition-colors"
          >
            Ask Us Directly &rarr;
          </a>
        </div>

      </div>
    </section>
  );
};
