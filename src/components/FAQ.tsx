"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import content from "@/data/content.json";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { faq } = content;
  const faqs = faq.list as any[];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-white dark:bg-[#080710] py-24 md:py-32 border-b border-brand-zinc-200 dark:border-white/10"
    >
      {/* Structural Grid Accent Lines */}
      <div className="absolute inset-x-0 top-12 h-[1px] bg-brand-blue/[0.02] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-12 h-[1px] bg-brand-blue/[0.02] pointer-events-none" />
      <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-brand-blue/[0.02] pointer-events-none" />
      <div className="absolute right-1/4 top-0 bottom-0 w-[1px] bg-brand-blue/[0.02] pointer-events-none" />

      {/* Decorative Blur Orbs */}
      <div className="absolute -left-48 top-1/4 h-[600px] w-[600px] rounded-full bg-brand-blue/5 blur-[130px] pointer-events-none" />
      <div className="absolute -right-48 bottom-1/4 h-[600px] w-[600px] rounded-full bg-brand-yellow/5 blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ── Left Column: Sticky Title & Info ── */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-10 flex flex-col justify-start">
            
            <div className="flex flex-col gap-5">
              {/* Category Pill Tag */}
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-3.5 py-1.5 text-[9px] font-black tracking-widest uppercase text-brand-blue select-none self-start">
                {faq.sectionNumber} // {faq.sectionTag}
              </span>
              
              {/* Main Heading */}
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-dark tracking-tight leading-[0.98] select-none">
                {faq.titleIntro} <span className="text-brand-blue relative inline-block">
                  {faq.titleHighlight}
                  <svg className="absolute -bottom-1.5 md:-bottom-2 left-0 w-full h-2.5 md:h-3 pointer-events-none drop-shadow-[0_1.5px_2px_rgba(255,243,92,0.45)]" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path
                      d="M 2 5 Q 50 2, 98 4 C 99 4, 99 5, 98 5.5 Q 50 7.5, 2 6 Z"
                      fill="#FFF35C"
                    />
                  </svg>
                </span>
              </h2>
              
              {/* Subdescription */}
              <p className="text-brand-zinc-500 font-medium leading-relaxed text-sm md:text-base max-w-sm mt-1.5">
                {faq.description}
              </p>
            </div>

            {/* Premium Sticky Strategy Session Box */}
            <div className="relative overflow-hidden rounded-[2.2rem] bg-gradient-to-br from-[#0306AC] via-[#020485] to-[#03053D] dark:from-[#12121e] dark:via-[#0f0f1a] dark:to-[#080710] border border-transparent dark:border-white/10 p-8 text-white shadow-[0_20px_50px_rgba(3,6,172,0.15)] group transition-transform duration-500 hover:scale-[1.01]">
              <div className="absolute inset-0 bg-linear-grid-white-3 opacity-30 pointer-events-none z-10" />
              <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-brand-yellow/15 blur-2xl pointer-events-none" />
              
              <div className="relative z-20 space-y-6">
                <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1.5 text-[9px] font-black tracking-wider uppercase text-[#FFF35C]">
                  // {faq.strategyAudit.badge}
                </span>
                <div className="space-y-2">
                  <h3 className="font-heading text-2xl font-bold leading-tight">
                    {faq.strategyAudit.title}
                  </h3>
                  <p className="text-white/70 text-xs leading-relaxed">
                    {faq.strategyAudit.desc}
                  </p>
                </div>
                <a
                  href={faq.strategyAudit.href}
                  className="group relative inline-flex w-full items-center gap-0 overflow-hidden rounded-full bg-[#FFF35C] dark:bg-[#0306AC] shadow-md active:scale-[0.97] transition-all duration-300 border border-[#FFF35C] dark:border-[#0306AC]"
                >
                  {/* Curtain slides in from left on hover */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-[#080710] dark:bg-white translate-x-[-102%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
                  />
                  {/* Label */}
                  <span className="relative z-10 pl-7 pr-5 py-[14px] text-xs font-black uppercase tracking-[0.15em] text-[#080710] dark:text-white group-hover:text-white dark:group-hover:text-[#080710] transition-colors duration-300 delay-75 whitespace-nowrap">
                    {faq.strategyAudit.button}
                  </span>
                  {/* Arrow circle — inverts on hover */}
                  <span className="relative z-10 mr-2 ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#080710] dark:bg-white text-white dark:text-[#080710] group-hover:bg-[#FFF35C] dark:group-hover:bg-[#0306AC] group-hover:text-[#080710] dark:group-hover:text-white transition-all duration-300">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </a>
              </div>
            </div>

          </div>

          {/* ── Right Column: Accordion Cards ── */}
          <div className="lg:col-span-7 space-y-4 w-full">
            
            {faqs.map((f, index) => {
              const doubleDigit = String(index + 1).padStart(2, "0");
              const isOpen = openIndex === index;

              return (
                <div
                  key={f.question}
                  className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 cursor-pointer select-none p-6 sm:p-7 ${
                    isOpen
                      ? "bg-white dark:bg-[#12121e] border-brand-blue/25 dark:border-brand-blue/25 shadow-[0_20px_40px_rgba(3,6,172,0.03)]"
                      : "bg-transparent border-brand-zinc-200/70 dark:border-white/10 hover:bg-white dark:hover:bg-[#12121e] hover:border-brand-blue/20 dark:hover:border-brand-blue/20 hover:shadow-[0_12px_30px_rgba(3,6,172,0.025)]"
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  {/* Subtle hover background highlight */}
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0" />

                  {/* Header Area */}
                  <div className="flex items-start justify-between gap-4 relative z-10">
                    <div className="flex items-start gap-4">
                      {/* Double Digit Number */}
                      <span className="font-mono text-xs font-bold text-brand-blue/60 mt-1 select-none">
                        {doubleDigit}
                      </span>
                      
                      <div className="space-y-1">
                        {/* Category Label */}
                        <span className="font-mono text-[9px] font-black text-brand-blue/40 tracking-widest uppercase select-none block">
                          // {f.category}
                        </span>
                        
                        {/* Question */}
                        <h3 className={`font-heading font-semibold text-base sm:text-lg md:text-[1.15rem] leading-snug transition-colors duration-300 pr-2 ${
                          isOpen ? "text-brand-blue" : "text-brand-dark group-hover:text-brand-blue"
                        }`}>
                          {f.question}
                        </h3>
                      </div>
                    </div>

                    {/* Plus/Minus Indicator */}
                    <div className="shrink-0 mt-0.5">
                      <motion.div
                        animate={{ rotate: isOpen ? 135 : 0 }}
                        transition={{ type: "spring", stiffness: 220, damping: 18 }}
                        className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 ${
                          isOpen
                            ? "bg-brand-blue border-brand-blue text-white dark:text-[#080710] shadow-[0_4px_12px_rgba(3,6,172,0.15)] dark:shadow-[0_4px_12px_rgba(255,243,92,0.15)]"
                            : "bg-brand-zinc-50 dark:bg-white/5 border-brand-zinc-200/80 dark:border-white/10 text-brand-dark dark:text-white group-hover:border-brand-blue group-hover:text-brand-blue"
                        }`}
                      >
                        <Plus className="h-4.5 w-4.5 stroke-[1.5]" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Answer Area */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden relative z-10"
                        onClick={(e) => e.stopPropagation()} // Prevent closing accordion when clicking inside content
                      >
                        <div className="pl-8 pt-5 mt-5 border-t border-brand-zinc-100/80 space-y-4">
                          
                          {/* Answer Text */}
                          <p className="text-sm sm:text-[15px] text-brand-zinc-500 dark:text-zinc-300 font-medium leading-relaxed">
                            {f.answer}
                          </p>

                          {/* SERVICES TAGS */}
                          {f.tags && (
                            <div className="flex flex-wrap gap-1.5 pt-1">
                              {f.tags.map((tag: string, idx: number) => (
                                <span
                                  key={idx}
                                  className="bg-brand-blue/5 border border-brand-blue/10 text-brand-blue font-mono text-[8px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}

                          {/* PROCESS STEPS */}
                          {f.steps && (
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                              {f.steps.map((step: string, idx: number) => (
                                <div
                                  key={idx}
                                className="relative bg-brand-zinc-50 dark:bg-white/5 border border-brand-zinc-100 dark:border-white/5 rounded-xl p-2.5 flex flex-col gap-0.5"
                                >
                                  <span className="font-mono text-[8px] font-black text-brand-blue/60 uppercase">
                                    Phase 0{idx + 1}
                                  </span>
                                  <span className="text-[10px] font-bold text-brand-dark leading-tight">
                                    {step}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* TIMELINE MILESTONES */}
                          {f.milestones && (
                            <div className="relative pl-3.5 space-y-3 pt-1 border-l border-brand-blue/15 ml-1">
                              {f.milestones.map((ms: any, idx: number) => (
                                <div key={idx} className="relative">
                                  {/* Node dot */}
                                  <span className="absolute -left-[19.5px] top-1.5 flex h-2 w-2 items-center justify-center rounded-full bg-brand-blue ring-4 ring-white dark:ring-[#12121e]" />
                                  
                                  <div className="space-y-0.5">
                                    <span className="font-mono text-[8px] font-black text-brand-blue tracking-widest uppercase">
                                      {ms.title}
                                    </span>
                                    <p className="text-xs font-semibold text-brand-zinc-500 dark:text-zinc-400 leading-normal">
                                      {ms.desc}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* PARTNERS PROFILES */}
                          {f.profiles && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                              {f.profiles.map((profile: any, idx: number) => (
                                <div
                                  key={idx}
                                  className="flex flex-col gap-0.5 bg-brand-zinc-50/80 dark:bg-white/5 border border-brand-zinc-100 dark:border-white/5 rounded-xl p-3"
                                >
                                  <span className="text-xs font-black text-brand-dark">
                                    {profile.name}
                                  </span>
                                  <p className="text-[10px] text-brand-zinc-400 font-semibold leading-normal">
                                    {profile.desc}
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* PRICING INCLUSIONS */}
                          {f.inclusions && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                              {f.inclusions.map((inc: any, idx: number) => (
                                <div
                                  key={idx}
                                  className="flex items-start gap-2 bg-brand-zinc-50/50 dark:bg-white/5 border border-brand-zinc-100/60 dark:border-white/5 rounded-xl p-3"
                                >
                                  <div className="w-4 h-4 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0 mt-0.5">
                                    <Check className="w-2.5 h-2.5 text-brand-blue" strokeWidth={3.5} />
                                  </div>
                                  <div className="space-y-0.5">
                                    <span className="text-xs font-black text-brand-dark block leading-none">
                                      {inc.title}
                                    </span>
                                    <p className="text-[10px] text-brand-zinc-400 font-semibold leading-normal">
                                      {inc.desc}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* REDESIGN TECH STACK & METRICS */}
                          {f.metrics && (
                            <div className="space-y-3">
                              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                                {f.metrics.map((metric: any, idx: number) => (
                                  <div key={idx} className="flex flex-col items-center gap-1.5 bg-emerald-50/40 border border-emerald-100/50 rounded-xl p-2.5">
                                    <div className="relative w-9 h-9 flex items-center justify-center">
                                      <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                                        <circle cx="18" cy="18" r="15.915" fill="none" stroke="#e2e8f0" strokeWidth="2.5" />
                                        <circle cx="18" cy="18" r="15.915" fill="none" stroke="#10b981" strokeWidth="2.5" strokeDasharray="100 100" strokeLinecap="round" />
                                      </svg>
                                      <span className="absolute text-[8px] font-black text-emerald-700 leading-none">
                                        {metric.score}
                                      </span>
                                    </div>
                                    <span className="text-[8px] font-bold text-emerald-800 uppercase tracking-wider text-center">
                                      {metric.label}
                                    </span>
                                  </div>
                                ))}
                              </div>

                              {f.stack && (
                                <div className="flex flex-wrap gap-1.5">
                                  {f.stack.map((tech: string, idx: number) => (
                                    <span
                                      key={idx}
                                      className="inline-flex items-center gap-1 bg-brand-dark/5 dark:bg-white/5 text-brand-dark dark:text-zinc-350 font-sans text-[8px] font-black tracking-wider px-2.5 py-1 rounded-full"
                                    >
                                      <span className="w-1 h-1 rounded-full bg-brand-blue" />
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          )}

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}
