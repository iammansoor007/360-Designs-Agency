"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { useState } from "react";

const hubs = [
  {
    id: "us",
    name: "United States",
    focus: "SaaS & Brand Strategy",
    coords: { x: "27.27%", y: "29.72%" },
    timezone: "EST / PST",
  },
  {
    id: "ca",
    name: "Canada",
    focus: "E-Commerce & Tech Startups",
    coords: { x: "24.63%", y: "33.63%" },
    timezone: "EST / AST",
  },
  {
    id: "br",
    name: "Brazil",
    focus: "Digital Products & Apps",
    coords: { x: "26.67%", y: "77.03%" },
    timezone: "BRT",
  },
  {
    id: "uk",
    name: "United Kingdom",
    focus: "Creative Web Design",
    coords: { x: "45.97%", y: "45.21%" },
    timezone: "GMT",
  },
  {
    id: "es",
    name: "Spain",
    focus: "SaaS Platforms & Branding",
    coords: { x: "46.49%", y: "46.30%" },
    timezone: "CET",
  },
  {
    id: "be",
    name: "Belgium",
    focus: "Corporate Platforms",
    coords: { x: "48.27%", y: "44.90%" },
    timezone: "CET",
  },
  {
    id: "fr",
    name: "France",
    focus: "Bespoke UI/UX Design",
    coords: { x: "49.00%", y: "47.84%" },
    timezone: "CET",
  },
  {
    id: "de",
    name: "Germany",
    focus: "Next.js Engineering UIs",
    coords: { x: "49.66%", y: "43.78%" },
    timezone: "CET",
  },
  {
    id: "at",
    name: "Austria",
    focus: "SEO & Growth Marketing",
    coords: { x: "51.07%", y: "44.34%" },
    timezone: "CET",
  },
  {
    id: "it",
    name: "Italy",
    focus: "E-Commerce Architectures",
    coords: { x: "50.53%", y: "50.18%" },
    timezone: "CET",
  },
  {
    id: "bh",
    name: "Bahrain",
    focus: "Web Apps & FinTech",
    coords: { x: "61.08%", y: "58.22%" },
    timezone: "AST",
  },
  {
    id: "au",
    name: "Australia",
    focus: "Conversion Optimization",
    coords: { x: "82.34%", y: "82.47%" },
    timezone: "AEST / AWST",
  },
];

export default function ServiceArea() {
  const [activeHub, setActiveHub] = useState<string | null>(null);

  return (
    <section
      id="service-area"
      className="relative bg-transparent py-16 sm:py-20 lg:py-24 border-t border-b border-brand-zinc-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-16 items-start lg:items-center">

          {/* ── Left Column ── */}
          <div className="w-full lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">

            <span className="text-[10px] font-sans font-black tracking-widest text-brand-zinc-400 uppercase">
              06 // GLOBAL COVERAGE
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-dark tracking-tight leading-[1.15]">
              Connecting Brands With{" "}
              <span className="relative inline-block text-brand-blue">
                Global Markets
                <svg
                  className="absolute -bottom-2.5 left-0 w-full h-3 pointer-events-none drop-shadow-[0_1.5px_2px_rgba(255,243,92,0.45)]"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
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

            <p className="text-sm sm:text-base md:text-lg text-brand-zinc-500 leading-relaxed font-normal max-w-md">
              Proudly engineering digital experiences for clients worldwide,
              enabling startups and local businesses to compete on a global scale.
            </p>

            {/* ── Country chip grid ── */}
            <div className="w-full flex flex-wrap justify-center lg:justify-start gap-2">
              {hubs.map((hub) => {
                const isActive = activeHub === hub.id;
                return (
                  <motion.button
                    key={hub.id}
                    onMouseEnter={() => setActiveHub(hub.id)}
                    onMouseLeave={() => setActiveHub(null)}
                    onFocus={() => setActiveHub(hub.id)}
                    onBlur={() => setActiveHub(null)}
                    whileTap={{ scale: 0.96 }}
                    className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-bold tracking-wide transition-all duration-200 cursor-pointer select-none focus:outline-none"
                    style={{
                      borderColor: isActive ? "#3B82F6" : "#e4e4e7",
                      backgroundColor: isActive ? "#EFF6FF" : "transparent",
                      color: isActive ? "#1D4ED8" : "#52525b",
                    }}
                    aria-pressed={isActive}
                  >
                    <MapPin
                      className="shrink-0 transition-colors duration-200"
                      style={{ color: isActive ? "#FFF35C" : "#a1a1aa", width: 10, height: 10 }}
                      strokeWidth={3}
                    />
                    {hub.name}
                  </motion.button>
                );
              })}
            </div>

            {/* Fixed-height info panel — reserves space so nothing shifts */}
            <div className="relative w-full h-16 overflow-hidden">
              <AnimatePresence mode="wait">
                {activeHub && (() => {
                  const hub = hubs.find((h) => h.id === activeHub);
                  if (!hub) return null;
                  return (
                    <motion.div
                      key={hub.id}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute inset-0 flex items-center gap-3 rounded-xl border border-brand-zinc-200 bg-brand-dark/95 px-4 shadow-md"
                    >
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-yellow">
                        <MapPin className="h-3.5 w-3.5 text-brand-dark" strokeWidth={3} />
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-xs font-black text-white leading-tight">{hub.name}</p>
                        <p className="truncate text-[10px] font-semibold text-brand-zinc-400 leading-normal">{hub.focus}</p>
                      </div>
                      <span className="ml-auto shrink-0 text-[9px] font-bold tracking-widest text-brand-yellow uppercase whitespace-nowrap">
                        {hub.timezone}
                      </span>
                    </motion.div>
                  );
                })()}
              </AnimatePresence>
            </div>

            <a
              href="#contact"
              className="group self-center lg:self-start relative inline-flex items-center gap-0 overflow-hidden rounded-full bg-brand-yellow shadow-[0_4px_28px_rgba(255,243,92,0.4)] active:scale-[0.97] transition-transform duration-150"
            >
              {/* Dark curtain slides in from left on hover */}
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-brand-dark translate-x-[-102%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
              />

              {/* Label */}
              <span className="relative z-10 pl-7 pr-5 py-[14px] text-[11px] font-black uppercase tracking-[0.15em] text-brand-dark group-hover:text-white transition-colors duration-300 delay-75 whitespace-nowrap">
                Let's Work Together
              </span>

              {/* Arrow circle — inverts on hover */}
              <span className="relative z-10 mr-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-dark text-brand-yellow group-hover:bg-brand-yellow group-hover:text-brand-dark transition-all duration-300">
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2.5} />
              </span>
            </a>
          </div>

          {/* ── Right Column: Map ── */}
          <div className="w-full lg:col-span-7 bg-white border border-brand-zinc-200 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl overflow-hidden relative">
            <div className="absolute top-0 right-0 h-32 w-32 bg-brand-yellow/10 rounded-full blur-2xl -z-10" />
            <div className="absolute bottom-0 left-0 h-32 w-32 bg-brand-blue/5 rounded-full blur-2xl -z-10" />

            <div className="relative aspect-[1010/666] w-full select-none">
              <img
                src="/world-map.svg"
                alt="World Map showing service areas"
                className="w-full h-full object-contain pointer-events-none select-none"
              />

              {/* Pins — no labels on map */}
              {hubs.map((hub) => {
                const isActive = activeHub === hub.id;

                return (
                  <div
                    key={hub.id}
                    className="absolute z-10 cursor-pointer"
                    style={{ left: hub.coords.x, top: hub.coords.y }}
                    onMouseEnter={() => setActiveHub(hub.id)}
                    onMouseLeave={() => setActiveHub(null)}
                    onFocus={() => setActiveHub(hub.id)}
                    onBlur={() => setActiveHub(null)}
                    role="button"
                    tabIndex={0}
                    aria-label={hub.name}
                  >
                    {/* Outer glow ring — only when active */}
                    <motion.div
                      animate={{
                        opacity: isActive ? 1 : 0,
                        scale: isActive ? 1 : 0.4,
                      }}
                      transition={{ duration: 0.25 }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-brand-yellow/30 pointer-events-none"
                    />

                    {/* Idle subtle pulse */}
                    <div
                      className="absolute -translate-x-1/2 -translate-y-1/2 h-5 w-5 rounded-full pointer-events-none"
                      style={{
                        background: "rgba(59,130,246,0.15)",
                        animation: "ping 2s cubic-bezier(0,0,0.2,1) infinite",
                      }}
                    />

                    {/* Pin dot */}
                    <motion.div
                      animate={{
                        scale: isActive ? 1.6 : 1,
                        backgroundColor: isActive ? "#FFF35C" : "#3B82F6",
                        borderColor: isActive ? "#3B82F6" : "#ffffff",
                      }}
                      transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 flex h-3 w-3 sm:h-3.5 sm:w-3.5 items-center justify-center rounded-full border-2 shadow-md"
                    >
                      <motion.div
                        animate={{ backgroundColor: isActive ? "#1D4ED8" : "#ffffff" }}
                        transition={{ duration: 0.2 }}
                        className="h-1 w-1 rounded-full"
                      />
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
