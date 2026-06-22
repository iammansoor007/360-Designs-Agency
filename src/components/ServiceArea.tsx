"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, MapPin } from "lucide-react";
import { useState } from "react";

const hubs = [
  {
    id: "sf",
    name: "San Francisco, USA",
    focus: "SaaS & Venture Capital",
    coords: { x: "18%", y: "35%" },
    timezone: "PST"
  },
  {
    id: "ny",
    name: "New York, USA",
    focus: "FinTech & Brand Strategy",
    coords: { x: "28%", y: "32%" },
    timezone: "EST"
  },
  {
    id: "ldn",
    name: "London, UK",
    focus: "Creative Branding & Web3",
    coords: { x: "47%", y: "26%" },
    timezone: "GMT"
  },
  {
    id: "dxb",
    name: "Dubai, UAE",
    focus: "Real Estate & Web3 UIs",
    coords: { x: "64%", y: "41%" },
    timezone: "GST"
  },
  {
    id: "sgp",
    name: "Singapore",
    focus: "E-Commerce & Technology",
    coords: { x: "78%", y: "58%" },
    timezone: "SGT"
  },
  {
    id: "syd",
    name: "Sydney, Australia",
    focus: "Corporate Portfolios",
    coords: { x: "89%", y: "78%" },
    timezone: "AEST"
  }
];

export default function ServiceArea() {
  const [activeHub, setActiveHub] = useState<string | null>(null);

  return (
    <section id="service-area" className="relative bg-white py-24 border-t border-b border-brand-zinc-200">
      
      {/* Grid background */}
      <div className="absolute inset-0 -z-10 bg-grid-blue-5 [background-size:24px_24px] opacity-75" />

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Title, Copy, Button */}
          <div className="lg:col-span-5 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="text-[10px] font-sans font-black tracking-widest text-brand-zinc-400 uppercase">
              06 // GLOBAL COVERAGE
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-brand-dark tracking-tight leading-[1.15]">
              Connecting Brands With{" "}
              <span className="relative inline-block text-brand-blue">
                Global Markets
                <svg className="absolute -bottom-2.5 left-0 w-full h-3 pointer-events-none drop-shadow-[0_1.5px_2px_rgba(255,243,92,0.45)]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <motion.path
                    d="M 2 5 Q 50 3.5, 98 5"
                    stroke="#FFF35C"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  />
                </svg>
              </span>
            </h2>
            <p className="text-base md:text-lg text-brand-zinc-500 leading-relaxed font-normal max-w-md">
              Proudly engineering digital experiences for clients worldwide, enabling startups and local businesses to compete on a global scale.
            </p>
            <div className="pt-2">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full bg-brand-yellow px-8 py-4 text-xs font-black uppercase tracking-widest text-brand-dark hover:bg-brand-blue hover:text-white transition-all shadow-md hover:scale-[1.03] active:scale-[0.98]"
              >
                Let's Work Together
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-dark text-white group-hover:bg-white group-hover:text-brand-blue transition-colors duration-300">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: World Map Container */}
          <div className="lg:col-span-7 bg-white border border-brand-zinc-200 rounded-3xl p-6 md:p-10 shadow-xl overflow-hidden relative">
            <div className="absolute top-0 right-0 h-32 w-32 bg-brand-yellow/10 rounded-full blur-2xl -z-10" />
            <div className="absolute bottom-0 left-0 h-32 w-32 bg-brand-blue/5 rounded-full blur-2xl -z-10" />

            <div className="relative aspect-[2/1] w-full select-none">
              {/* Monochromatic geographic map contours with styling */}
              <svg 
                className="w-full h-full opacity-15 text-brand-blue" 
                viewBox="0 0 1000 500" 
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Outlines of continents */}
                <path d="M 50 100 Q 120 70 200 90 T 320 180 T 300 250 T 250 300 Q 200 280 180 350 Z" />
                <path d="M 280 40 Q 320 20 350 40 T 320 90 Z" />
                <path d="M 250 300 Q 300 350 310 420 T 350 480 T 320 490 Q 280 440 270 380 T 240 330 Z" />
                <path d="M 450 250 Q 550 220 600 270 T 630 330 T 580 420 T 520 440 Q 480 360 450 320 Z" />
                <path d="M 420 150 Q 480 100 550 110 T 600 180 T 520 250 Q 450 240 420 180 Z" />
                <path d="M 550 110 Q 750 70 850 120 T 900 200 T 880 300 T 750 320 Q 650 300 600 250 Z" />
                <path d="M 680 280 L 720 330 L 700 280 Z" />
                <path d="M 750 290 Q 780 330 790 350 T 760 370 Z" />
                <path d="M 800 380 Q 900 380 920 420 T 850 470 T 800 420 Z" />
              </svg>

              {/* Glowing pins */}
              {hubs.map((hub) => {
                const isActive = activeHub === hub.id;
                
                return (
                  <div
                    key={hub.id}
                    className="absolute z-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                    style={{ left: hub.coords.x, top: hub.coords.y }}
                    onMouseEnter={() => setActiveHub(hub.id)}
                    onMouseLeave={() => setActiveHub(null)}
                  >
                    {/* Double glow ripple on hover */}
                    <div className="absolute -inset-3.5 rounded-full bg-brand-blue/20 animate-ping opacity-75 pointer-events-none" />
                    <div className="absolute -inset-1.5 rounded-full bg-brand-blue/15 animate-pulse pointer-events-none" />
                    
                    <div className="relative flex h-3.5 w-3.5 items-center justify-center rounded-full bg-brand-blue border-2 border-white shadow-md group-hover:bg-brand-yellow group-hover:border-brand-blue transition-colors duration-300">
                      <div className="h-1 w-1 rounded-full bg-white group-hover:bg-brand-blue" />
                    </div>

                    {/* Premium Glassmorphic Tooltip */}
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        y: isActive ? -12 : 10,
                        scale: isActive ? 1 : 0.95,
                      }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="pointer-events-none absolute bottom-full left-1/2 z-20 w-48 -translate-x-1/2 mb-3 p-4 bg-brand-dark/95 backdrop-blur-md text-white rounded-2xl shadow-xl flex flex-col gap-1 border border-brand-zinc-800"
                    >
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-brand-dark/95" />
                      <span className="block text-[9px] font-bold tracking-widest text-brand-yellow uppercase">HUB timezone: {hub.timezone}</span>
                      <span className="block text-xs font-black leading-tight text-white">{hub.name}</span>
                      <span className="block text-[10px] font-semibold text-brand-zinc-400 leading-normal">{hub.focus}</span>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
