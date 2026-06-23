"use client";

import { motion } from "framer-motion";
import { Award, Star, MessageSquare, HeartHandshake } from "lucide-react";
import { useState } from "react";

// Variants for repeating hand-drawn paths animations on scroll
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
    name: "technova",
    logo: (
      <svg className="h-7 fill-current text-brand-zinc-400 group-hover:text-brand-blue transition-colors duration-300" viewBox="0 0 130 30" xmlns="http://www.w3.org/2000/svg">
        <circle cx="15" cy="15" r="7" className="fill-current" />
        <rect x="25" y="11" width="8" height="8" rx="2" className="fill-brand-zinc-300 group-hover:fill-brand-yellow transition-colors duration-300" />
        <text x="38" y="21" className="font-sans font-black text-sm tracking-tight fill-current">technova</text>
      </svg>
    )
  },
  {
    name: "greenleaf",
    logo: (
      <svg className="h-7 fill-current text-brand-zinc-400 group-hover:text-brand-blue transition-colors duration-300" viewBox="0 0 130 30" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 22 C 5 12, 15 8, 20 22 C 20 22, 10 26, 5 22 Z" className="fill-current" />
        <circle cx="20" cy="22" r="3.5" className="fill-brand-zinc-300 group-hover:fill-brand-yellow transition-colors duration-300" />
        <text x="28" y="21" className="font-sans font-black text-sm tracking-tight fill-current">greenleaf</text>
      </svg>
    )
  },
  {
    name: "BuildRight",
    logo: (
      <svg className="h-7 fill-current text-brand-zinc-400 group-hover:text-brand-blue transition-colors duration-300" viewBox="0 0 130 30" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="5" width="20" height="20" rx="3" fill="none" strokeWidth="2.5" className="stroke-current" />
        <path d="M10 15 L20 15 M15 10 L15 20" strokeWidth="2.5" className="stroke-brand-zinc-300 group-hover:stroke-brand-yellow transition-colors duration-300" />
        <text x="32" y="21" className="font-sans font-black text-sm tracking-tight fill-current">BuildRight</text>
      </svg>
    )
  },
  {
    name: "Visionix",
    logo: (
      <svg className="h-7 fill-current text-brand-zinc-400 group-hover:text-brand-blue transition-colors duration-300" viewBox="0 0 130 30" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 15 C 10 7, 20 7, 25 15 C 20 23, 10 23, 5 15 Z" fill="none" strokeWidth="2.5" className="stroke-current" />
        <circle cx="15" cy="15" r="4.5" className="fill-brand-zinc-300 group-hover:fill-brand-yellow transition-colors duration-300" />
        <text x="32" y="21" className="font-sans font-black text-sm tracking-tight fill-current">Visionix</text>
      </svg>
    )
  },
  {
    name: "Cloudify",
    logo: (
      <svg className="h-7 fill-current text-brand-zinc-400 group-hover:text-brand-blue transition-colors duration-300" viewBox="0 0 130 30" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 18 A 5 5 0 0 1 12 11 A 7 7 0 0 1 25 13 A 5 5 0 0 1 23 23 H 8 A 5 5 0 0 1 5 18 Z" className="fill-current" />
        <circle cx="23" cy="13" r="3" className="fill-brand-zinc-300 group-hover:fill-brand-yellow transition-colors duration-300" />
        <text x="32" y="21" className="font-sans font-black text-sm tracking-tight fill-current">Cloudify</text>
      </svg>
    )
  },
  {
    name: "spark",
    logo: (
      <svg className="h-7 fill-current text-brand-zinc-400 group-hover:text-brand-blue transition-colors duration-300" viewBox="0 0 130 30" xmlns="http://www.w3.org/2000/svg">
        <polygon points="12,5 5,16 13,16 11,25 20,13 12,13" className="fill-current" />
        <circle cx="20" cy="13" r="2.5" className="fill-brand-zinc-300 group-hover:fill-brand-yellow transition-colors duration-300" />
        <text x="27" y="21" className="font-sans font-black text-sm tracking-tight fill-current">spark</text>
      </svg>
    )
  }
];

const pillars = [
  {
    icon: <Award className="h-6 w-6 transition-colors" />,
    title: "Proven Results",
    desc: "Data-driven strategies that deliver real growth."
  },
  {
    icon: <Star className="h-6 w-6 transition-colors" />,
    title: "Customized Solutions",
    desc: "Tailored strategies for your unique business needs."
  },
  {
    icon: <MessageSquare className="h-6 w-6 transition-colors" />,
    title: "Transparent Communication",
    desc: "Clear, honest, and regular updates."
  },
  {
    icon: <HeartHandshake className="h-6 w-6 transition-colors" />,
    title: "Dedicated Support",
    desc: "We are with you every single step of the way."
  }
];

export default function Brands() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="brands" className="relative bg-transparent py-24 overflow-hidden border-b border-brand-zinc-200">
      
      {/* Brands Header */}
      <div className="mx-auto max-w-7xl px-6 md:px-12 mb-12 text-center flex flex-col items-center">
        <span className="text-[10px] font-sans font-black tracking-widest text-brand-zinc-400 uppercase mb-3">
          04 // PARTNERSHIPS
        </span>
        <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-brand-dark tracking-tight leading-[1.15]">
          Trusted By{" "}
          <span className="relative inline-block text-brand-blue">
            Leading Brands
            <svg className="absolute -bottom-2.5 left-0 w-full h-3 pointer-events-none drop-shadow-[0_1.5px_2px_rgba(255,243,92,0.45)]" viewBox="0 0 100 10" preserveAspectRatio="none">
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

      {/* Interactive Marquee */}
      <div
        className="marquee-container opacity-60 hover:opacity-100 transition-opacity duration-500 mb-24 border-t border-b border-brand-zinc-100 py-8 bg-brand-light/50"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          animate={isPaused ? {} : { x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity
          }}
          className="marquee-content gap-20 md:gap-28"
        >
          {[...brands, ...brands, ...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center text-brand-zinc-600 transition-colors duration-300 shrink-0 group cursor-pointer"
              title={brand.name}
            >
              {brand.logo}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Trust Pillars */}
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="rounded-3xl bg-brand-dark p-8 md:p-12 shadow-xl border border-brand-zinc-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="flex gap-4 items-start text-white group cursor-pointer p-3 rounded-2xl hover:bg-white/5 transition-all duration-300">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-yellow border border-white/5 group-hover:scale-110 group-hover:bg-brand-yellow group-hover:text-brand-dark transition-all duration-500">
                {pillar.icon}
              </div>
              <div className="space-y-1">
                <h4 className="font-sans font-extrabold text-sm tracking-wide text-white uppercase group-hover:text-brand-yellow transition-colors duration-300">
                  {pillar.title}
                </h4>
                <p className="text-xs text-brand-zinc-400 font-medium leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
