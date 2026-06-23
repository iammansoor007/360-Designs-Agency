"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// Variants for hand-drawn underline paths
const drawVariants = {
  hidden: { pathLength: 0 },
  visible: (custom: { delay: number; duration: number }) => ({
    pathLength: 1,
    transition: { 
      duration: custom?.duration ?? 0.6, 
      delay: custom?.delay ?? 0.2, 
      ease: "easeOut" as any 
    }
  })
};

const brands = [
  {
    name: "Aether Tech",
    logo: (
      <svg className="h-8 text-brand-zinc-400 group-hover:text-[#0306AC] group-hover:drop-shadow-[0_0_6px_rgba(3,6,172,0.25)] transition-all duration-300 fill-none" viewBox="0 0 140 30" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(10, 2)" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 10 5 C 4 5, 0 10, 0 15 C 0 20, 4 22, 10 22 C 16 22, 18 15, 25 15 C 32 15, 34 22, 40 22 C 46 22, 50 20, 50 15 C 50 10, 46 5, 40 5 C 34 5, 32 15, 25 15 C 18 15, 16 5, 10 5 Z" />
          <circle cx="10" cy="15" r="2.5" fill="#FFF35C" stroke="none" />
          <circle cx="40" cy="15" r="2.5" fill="#22c55e" stroke="none" />
        </g>
        <text x="72" y="20" className="font-heading font-black text-[12px] uppercase tracking-[0.25em] fill-current">AETHER</text>
      </svg>
    )
  },
  {
    name: "Apex Solutions",
    logo: (
      <svg className="h-8 text-brand-zinc-400 group-hover:text-[#0306AC] group-hover:drop-shadow-[0_0_6px_rgba(3,6,172,0.25)] transition-all duration-300 fill-none" viewBox="0 0 140 30" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(12, 1)">
          <polygon points="15,2 28,24 2,24" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
          <polygon points="15,9 22,21 8,21" fill="#FFF35C" />
          <line x1="15" y1="2" x2="15" y2="24" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
        </g>
        <text x="56" y="20" className="font-heading font-black text-[12px] uppercase tracking-[0.25em] fill-current">APEX</text>
      </svg>
    )
  },
  {
    name: "NovaCloud",
    logo: (
      <svg className="h-8 text-brand-zinc-400 group-hover:text-[#0306AC] group-hover:drop-shadow-[0_0_6px_rgba(3,6,172,0.25)] transition-all duration-300 fill-none" viewBox="0 0 140 30" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(12, 1)">
          <path d="M 12 2 L 22 8 L 12 14 L 2 8 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M 2 8 L 2 20 L 12 26 L 12 14 Z" fill="currentColor" opacity="0.2" />
          <path d="M 22 8 L 22 20 L 12 26 L 12 14 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <circle cx="12" cy="8" r="2.5" fill="#FFF35C" />
        </g>
        <text x="48" y="20" className="font-heading font-black text-[12px] uppercase tracking-[0.25em] fill-current">NOVACLOUD</text>
      </svg>
    )
  },
  {
    name: "Verdant E-Com",
    logo: (
      <svg className="h-8 text-brand-zinc-400 group-hover:text-[#0306AC] group-hover:drop-shadow-[0_0_6px_rgba(3,6,172,0.25)] transition-all duration-300 fill-none" viewBox="0 0 140 30" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(15, 1)">
          <path d="M 12 2 Q 22 12, 12 24 Q 2 12, 12 2 Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
          <path d="M 12 8 C 14 12, 14 16, 12 22" stroke="#22c55e" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="12" cy="4" r="2" fill="#FFF35C" />
        </g>
        <text x="46" y="20" className="font-heading font-black text-[12px] uppercase tracking-[0.25em] fill-current">VERDANT</text>
      </svg>
    )
  },
  {
    name: "Solaria AI",
    logo: (
      <svg className="h-8 text-brand-zinc-400 group-hover:text-[#0306AC] group-hover:drop-shadow-[0_0_6px_rgba(3,6,172,0.25)] transition-all duration-300 fill-none" viewBox="0 0 140 30" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(15, 1)">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeDasharray="4 3" />
          <circle cx="12" cy="12" r="5" fill="#FFF35C" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </g>
        <text x="44" y="20" className="font-heading font-black text-[12px] uppercase tracking-[0.25em] fill-current">SOLARIA</text>
      </svg>
    )
  },
  {
    name: "Omnis Automations",
    logo: (
      <svg className="h-8 text-brand-zinc-400 group-hover:text-[#0306AC] group-hover:drop-shadow-[0_0_6px_rgba(3,6,172,0.25)] transition-all duration-300 fill-none" viewBox="0 0 140 30" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(15, 1)">
          <polygon points="12,2 22,8 22,20 12,26 2,20 2,8" stroke="currentColor" strokeWidth="2" />
          <line x1="12" y1="2" x2="12" y2="26" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
          <circle cx="12" cy="14" r="3" fill="#FFF35C" />
        </g>
        <text x="46" y="20" className="font-heading font-black text-[12px] uppercase tracking-[0.25em] fill-current">OMNIS</text>
      </svg>
    )
  },
  {
    name: "Luminary Creative",
    logo: (
      <svg className="h-8 text-brand-zinc-400 group-hover:text-[#0306AC] group-hover:drop-shadow-[0_0_6px_rgba(3,6,172,0.25)] transition-all duration-300 fill-none" viewBox="0 0 140 30" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(15, 1)">
          <path d="M3 20 C 10 18, 7 8, 14 4 C 21 8, 18 18, 25 20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="14" cy="9" r="2.5" fill="#FFF35C" />
          <circle cx="8" cy="16" r="1.5" fill="#22c55e" />
        </g>
        <text x="44" y="20" className="font-heading font-black text-[12px] uppercase tracking-[0.25em] fill-current">LUMINARY</text>
      </svg>
    )
  }
];

export default function Brands() {
  const [isPaused1, setIsPaused1] = useState(false);
  const [isPaused2, setIsPaused2] = useState(false);

  return (
    <section id="brands" className="relative bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#f8fafc] py-20 md:py-28 overflow-hidden border-t border-b border-brand-zinc-200/80">
      
      {/* Background dot grid overlay */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none z-0"
        style={{ backgroundImage: 'radial-gradient(#0306AC 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      {/* Decorative gradient glow behind the marquees */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#0306AC]/6 blur-[130px] pointer-events-none z-0" />

      {/* Local keyframes for buttery smooth hardware-accelerated infinite marquees */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes marquee-left-css-brands {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-50%, 0, 0); }
          }
          @keyframes marquee-right-css-brands {
            0% { transform: translate3d(-50%, 0, 0); }
            100% { transform: translate3d(0, 0, 0); }
          }
          .animate-marquee-left-brands {
            display: flex;
            width: max-content;
            animation: marquee-left-css-brands 30s linear infinite;
          }
          .animate-marquee-right-brands {
            display: flex;
            width: max-content;
            animation: marquee-right-css-brands 30s linear infinite;
          }
          .marquee-paused-css {
            animation-play-state: paused !important;
          }
        `
      }} />

      {/* Brands Header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 mb-14 text-center flex flex-col items-center relative z-10">
        <span className="text-[9px] font-mono font-black tracking-[0.25em] text-[#0306AC]/70 uppercase mb-3">
          04 // PARTNERSHIPS
        </span>
        <h2 className="font-heading text-4xl md:text-5xl font-black text-brand-dark tracking-tight leading-[1.15]">
          Trusted By{" "}
          <span className="relative inline-block text-brand-blue">
            Leading Brands
            <svg className="absolute -bottom-2.5 left-0 w-full h-3 pointer-events-none drop-shadow-[0_1.5px_2px_rgba(3,6,172,0.15)]" viewBox="0 0 100 10" preserveAspectRatio="none">
              <motion.path
                d="M 2 5 Q 50 3.5, 98 5"
                stroke="#FFF35C"
                strokeWidth="3.5"
                strokeLinecap="round"
                variants={drawVariants}
                custom={{ delay: 0.2, duration: 0.6 }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
              />
            </svg>
          </span>
        </h2>
      </div>

      {/* Two Opposing Marquees as Rounded Floating Capsules */}
      <div className="flex flex-col gap-6 relative z-10">
        
        {/* Row 1: Leftwards Marquee */}
        <div className="mx-auto w-[92%] max-w-5xl overflow-hidden rounded-3xl border border-brand-blue/10 bg-white/70 backdrop-blur-md shadow-[0_12px_32px_rgba(3,6,172,0.03)] py-5 sm:py-6 px-4 sm:px-6 relative flex">
          {/* Edge fades for premium depth */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          <div
            className={`animate-marquee-left-brands gap-20 md:gap-28 ${isPaused1 ? "marquee-paused-css" : ""}`}
            onMouseEnter={() => setIsPaused1(true)}
            onMouseLeave={() => setIsPaused1(false)}
          >
            {[...brands, ...brands, ...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="flex items-center justify-center transition-transform duration-300 shrink-0 group cursor-pointer hover:scale-105"
                title={brand.name}
              >
                {brand.logo}
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Rightwards Marquee */}
        <div className="mx-auto w-[92%] max-w-5xl overflow-hidden rounded-3xl border border-brand-blue/10 bg-white/70 backdrop-blur-md shadow-[0_12px_32px_rgba(3,6,172,0.03)] py-5 sm:py-6 px-4 sm:px-6 relative flex">
          {/* Edge fades for premium depth */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div
            className={`animate-marquee-right-brands gap-20 md:gap-28 ${isPaused2 ? "marquee-paused-css" : ""}`}
            onMouseEnter={() => setIsPaused2(true)}
            onMouseLeave={() => setIsPaused2(false)}
          >
            {[...brands, ...brands, ...brands, ...brands].reverse().map((brand, index) => (
              <div
                key={index}
                className="flex items-center justify-center transition-transform duration-300 shrink-0 group cursor-pointer hover:scale-105"
                title={brand.name}
              >
                {brand.logo}
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
