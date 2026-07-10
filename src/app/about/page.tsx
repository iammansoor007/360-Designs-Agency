"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Play,
  Check,
  Compass,
  Eye,
  Target,
  Palette,
  Code,
  Rocket,
  ShoppingCart,
  Building2,
  Heart,
  GraduationCap,
  Landmark,
  Database,
  Utensils,
  Scale,
  Star,
  FolderClosed,
  Clock,
  Users,
  ShieldCheck,
  TrendingUp,
  FileText,
  Search,
  MessageSquare,
  Megaphone,
  Globe,
  Calendar,
  MoreVertical,
  BarChart2,
  Trophy,
  Image as ImageIcon,
  Pencil,
  Coins,
  Lightbulb,
  Briefcase,
  Handshake,
  Headphones,
  Award,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import content from "@/data/content.json";

// ── Drawing Animation for Hand-Drawn SVG Underlines ────────────────
const drawVariants = {
  hidden: { pathLength: 0 },
  visible: (custom: { delay: number; duration: number }) => ({
    pathLength: 1,
    transition: {
      duration: custom?.duration ?? 0.4,
      delay: custom?.delay ?? 0.1,
      ease: "easeOut" as any
    }
  })
};

const TickerDigit = ({ digit }: { digit: number }) => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <span 
      className="relative inline-block overflow-hidden select-none" 
      style={{ 
        width: "0.58em",
        height: "1em"
      }}
    >
      <motion.span
        className="absolute left-0 top-0 flex flex-col w-full"
        initial={{ y: 0 }}
        whileInView={{ y: `-${digit}em` }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 45,
          damping: 12,
          mass: 0.8,
          delay: 0.1
        }}
      >
        {numbers.map((num) => (
          <span 
            key={num} 
            className="flex items-center justify-center leading-none bg-clip-text text-transparent bg-gradient-to-r from-[#0306AC] to-[#4b4fff] dark:from-[#E9BD36] dark:to-[#FFA800]" 
            style={{ 
              height: "1em",
              WebkitBackgroundClip: "text"
            }}
          >
            {num}
          </span>
        ))}
      </motion.span>
    </span>
  );
};

const DigitTicker = ({ value }: { value: number }) => {
  const digits = String(value).split("");
  return (
    <span className="inline-flex items-baseline">
      {digits.map((digit, idx) => {
        if (isNaN(Number(digit))) {
          return (
            <span 
              key={idx} 
              className="leading-none bg-clip-text text-transparent bg-gradient-to-r from-[#0306AC] to-[#4b4fff] dark:from-[#E9BD36] dark:to-[#FFA800]"
              style={{ WebkitBackgroundClip: "text" }}
            >
              {digit}
            </span>
          );
        }
        return <TickerDigit key={idx} digit={Number(digit)} />;
      })}
    </span>
  );
};

export default function AboutPage() {
  const { aboutOwner } = content;

  return (
    <>
      <main className="flex-1 w-full bg-white dark:bg-[#080710] text-brand-dark dark:text-white transition-colors duration-300 relative overflow-hidden">

        {/* Awwwards-Level Floating Blurred Mesh Blobs */}
        <div className="absolute top-[3%] left-[-15%] w-[50vw] h-[50vw] rounded-full bg-[#0306AC]/[0.03] dark:bg-[#0306AC]/[0.06] blur-[120px] pointer-events-none select-none -z-10 animate-float-blob" />
        <div className="absolute top-[28%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-[#E9BD36]/[0.02] dark:bg-[#E9BD36]/[0.05] blur-[150px] pointer-events-none select-none -z-10 animate-float-blob-delayed" />
        <div className="absolute bottom-[30%] left-[-12%] w-[48vw] h-[48vw] rounded-full bg-[#0306AC]/[0.02] dark:bg-[#0306AC]/[0.04] blur-[140px] pointer-events-none select-none -z-10 animate-float-blob" />
        <div className="absolute bottom-[5%] right-[-12%] w-[42vw] h-[42vw] rounded-full bg-[#E9BD36]/[0.015] dark:bg-[#E9BD36]/[0.035] blur-[160px] pointer-events-none select-none -z-10 animate-float-blob-delayed" />

        {/* Awwwards-Level Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808007_1px,transparent_1px),linear-gradient(to_bottom,#80808007_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none -z-10" />

        {/* ── 1. HERO SECTION (Badge, Title, CTAs, and Visual Image) ── */}
        <section className="relative overflow-hidden pt-4 pb-4 md:pt-6 md:pb-6 border-b border-brand-zinc-200 dark:border-white/10">
          <div className="absolute inset-0 -z-10 bg-linear-grid-blue-4 [background-size:40px_40px] opacity-[0.05] dark:opacity-[0.08]" />

          {/* Ambient Glows */}
          <div className="absolute top-[10%] left-[-5%] w-[350px] h-[350px] rounded-full bg-[#0306AC]/[0.02] dark:bg-[#0306AC]/[0.05] blur-[120px] pointer-events-none -z-10" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

              {/* Left Column: Heading and CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-6 space-y-6 text-left"
              >
                {/* Yellow Badge */}
                <div className="inline-flex">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#E9BD36] px-4 py-1.5 text-[10px] font-black uppercase tracking-wider text-brand-dark shadow-sm">
                    <Star className="h-3.5 w-3.5 fill-brand-dark text-brand-dark shrink-0" />
                    ABOUT 360 DESIGNS AGENCY
                  </span>
                </div>

                <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.08] text-brand-dark dark:text-white">
                  We Build Digital <br />
                  Experiences That <br />
                  <span className="relative inline-block text-[#0306AC] dark:text-[#E9BD36] pb-2 whitespace-nowrap">
                    Drive Real Growth.
                    <svg className="absolute -bottom-1.5 left-0 w-full h-3.5 pointer-events-none text-[#E9BD36] opacity-90" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <motion.path
                        d="M 2 5 Q 50 1.5, 98 3.5 C 99 3.5, 99 4.5, 98 5 Q 50 7, 2 5.5 Z"
                        fill="currentColor"
                        custom={{ delay: 0.45, duration: 0.65 }}
                        variants={drawVariants}
                        initial="hidden"
                        animate="visible"
                      />
                    </svg>
                  </span>
                </h1>

                <p className="text-xs sm:text-sm text-brand-zinc-500 font-semibold font-sans leading-relaxed max-w-lg">
                  We are a digital agency with a passion for performance. We help brands grow with smart strategies, creative design, and powerful digital solutions that deliver measurable results.
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  {/* Let's Work Together */}
                  <a
                    href="/#contact"
                    className="group relative inline-flex items-center gap-0 overflow-hidden rounded-full bg-[#0306AC] dark:bg-[#E9BD36] shadow-[0_4px_28px_rgba(3, 6, 172,0.15)] dark:shadow-[0_4px_28px_rgba(233, 189, 54,0.15)] active:scale-[0.97] transition-all duration-350 border border-[#0306AC] dark:border-[#E9BD36] pointer-events-auto"
                  >
                    <span className="absolute inset-0 bg-[#080710] dark:bg-white translate-x-[-102%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
                    <span className="relative z-10 pl-6 pr-4 py-[11px] text-[11px] font-black uppercase tracking-wider text-white dark:text-[#080710] group-hover:text-white dark:group-hover:text-[#080710] transition-colors duration-300 delay-75 whitespace-nowrap">
                      LET'S WORK TOGETHER
                    </span>
                    <span className="relative z-10 mr-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#080710] dark:bg-white text-white dark:text-[#080710] group-hover:bg-[#E9BD36] dark:group-hover:bg-[#0306AC] group-hover:text-[#080710] dark:group-hover:text-white transition-all duration-300">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </a>

                  {/* Watch Our Story */}
                  <button
                    className="group relative inline-flex items-center gap-0 overflow-hidden rounded-full bg-white dark:bg-[#1a1a2e] shadow-sm active:scale-[0.97] transition-all duration-350 border border-[#080710]/10 dark:border-white/15"
                  >
                    <span className="absolute inset-0 bg-[#E9BD36] dark:bg-[#0306AC] translate-x-[-102%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
                    <span className="relative z-10 pl-6 pr-4 py-[11px] text-[11px] font-black uppercase tracking-wider text-[#080710] dark:text-white group-hover:text-[#080710] dark:group-hover:text-white transition-colors duration-300 delay-75 whitespace-nowrap">
                      WATCH OUR STORY
                    </span>
                    <span className="relative z-10 mr-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#080710] dark:bg-white text-white dark:text-[#080710] group-hover:bg-[#080710] dark:group-hover:bg-[#0306AC] group-hover:text-[#E9BD36] dark:group-hover:text-white transition-all duration-300">
                      <Play className="h-3.5 w-3.5 fill-current" />
                    </span>
                  </button>
                </div>
              </motion.div>

              {/* Right Column: Hero Image */}
              <div className="lg:col-span-6 relative w-full h-[320px] sm:h-[420px] md:h-[480px] lg:h-[520px] flex items-center justify-center pt-8 lg:pt-0">
                {/* Background Blobs for depth */}
                <div className="absolute top-[10%] right-[10%] w-[320px] h-[320px] rounded-full bg-[#E9BD36]/[0.05] dark:bg-[#E9BD36]/[0.1] blur-[80px] pointer-events-none -z-10" />
                <div className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] rounded-full bg-[#0306AC]/[0.03] dark:bg-[#0306AC]/[0.08] blur-[80px] pointer-events-none -z-10" />

                <motion.div
                  initial={{ opacity: 0, scale: 0.98, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  <img
                    src="/mohsinaboutowner.png"
                    alt="About 360 Designs Agency Overview"
                    className="w-full h-full object-contain filter drop-shadow-2xl"
                  />
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 2. STATS BAR SECTION (Asymmetric Typographic Spread) ────────── */}
        <section className="relative overflow-hidden py-4 md:py-8 border-b border-brand-zinc-200 dark:border-white/10 bg-zinc-50/10 dark:bg-white/[0.005]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">

              {/* Left Column: Symmetrical Stat-Style Intro */}
              <div className="lg:col-span-4 flex flex-col justify-between self-stretch text-left">
                <div className="w-full">
                  <div className="relative flex items-center justify-between w-full pb-2.5 mb-3">
                    <span className="text-[8px] font-mono tracking-widest text-[#0306AC] dark:text-[#E9BD36] font-black uppercase">// SUMMARY</span>
                    <span className="text-[8px] font-mono tracking-widest text-brand-zinc-400 dark:text-zinc-500 select-none">[ INFO ]</span>
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-zinc-100 dark:bg-white/5" />
                  </div>
                  
                  <h2 className="font-heading text-3xl sm:text-4xl font-black tracking-tight leading-[1.1] text-brand-dark dark:text-white mt-1">
                    We shape the future of digital <span className="text-[#0306AC] dark:text-[#E9BD36] italic font-serif font-light">brands.</span>
                  </h2>
                  
                  <p className="text-[9.5px] text-brand-zinc-400 dark:text-zinc-500 mt-3 font-semibold leading-normal max-w-xs">
                    Every strategic choice, line of code, and creative pixel is engineered to establish market leadership and drive commercial value.
                  </p>
                </div>
                
                {/* Symmetrical Core Expertise List at the Bottom */}
                <div className="pt-6 mt-8 border-t border-brand-zinc-100 dark:border-white/5 w-full select-none">
                  <span className="text-[7.5px] font-mono tracking-widest text-[#0306AC] dark:text-[#E9BD36] uppercase font-black block mb-3">
                    // EXPERTISE
                  </span>
                  <div className="grid grid-cols-2 gap-y-3.5 gap-x-6">
                    <div className="flex items-center gap-2 text-brand-dark dark:text-white text-[9.5px] font-bold uppercase tracking-wider">
                      <span className="text-[8px] font-mono text-brand-zinc-400 dark:text-zinc-500 font-normal">[ 01 ]</span>
                      Strategy
                    </div>
                    <div className="flex items-center gap-2 text-brand-dark dark:text-white text-[9.5px] font-bold uppercase tracking-wider">
                      <span className="text-[8px] font-mono text-brand-zinc-400 dark:text-zinc-500 font-normal">[ 02 ]</span>
                      UI / UX
                    </div>
                    <div className="flex items-center gap-2 text-brand-dark dark:text-white text-[9.5px] font-bold uppercase tracking-wider">
                      <span className="text-[8px] font-mono text-brand-zinc-400 dark:text-zinc-500 font-normal">[ 03 ]</span>
                      Next.js
                    </div>
                    <div className="flex items-center gap-2 text-brand-dark dark:text-white text-[9.5px] font-bold uppercase tracking-wider">
                      <span className="text-[8px] font-mono text-brand-zinc-400 dark:text-zinc-500 font-normal">[ 04 ]</span>
                      Growth
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: 2x2 Clean Typographic Grid */}
              <div className="lg:col-span-8 grid grid-cols-2 gap-x-12 gap-y-12 sm:gap-x-16 border-t lg:border-t-0 lg:border-l border-brand-zinc-200/60 dark:border-white/5 pt-10 lg:pt-0 lg:pl-16">

                {/* Stat 1 */}
                <div className="flex flex-col items-start relative w-full group hover:-translate-y-1 transition-transform duration-350 ease-out">
                  <div className="relative flex items-center justify-between w-full pb-2.5 mb-3">
                    <Globe className="h-4.5 w-4.5 text-[#0306AC] dark:text-[#E9BD36] transition-transform duration-300 group-hover:rotate-[15deg]" />
                    <span className="text-[8px] font-mono tracking-widest text-brand-zinc-400 dark:text-zinc-500 select-none">[ 01 ]</span>
                    {/* Hover animated border line */}
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-zinc-100 dark:bg-white/5" />
                    <div className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#0306AC] dark:text-[#E9BD36] group-hover:w-full transition-all duration-500 ease-out" />
                  </div>
                  <div className="flex items-baseline gap-0.5 text-brand-dark dark:text-white">
                    <span className="font-heading font-black text-5xl sm:text-6xl md:text-7xl tracking-tighter leading-none text-brand-dark dark:text-white">
                      <DigitTicker value={300} />
                    </span>
                    <span className="font-heading font-bold text-2xl sm:text-3xl leading-none text-[#0306AC] dark:text-[#E9BD36]">+</span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] font-black text-brand-dark dark:text-white uppercase tracking-widest mt-3.5 leading-none transition-colors duration-300 group-hover:text-[#0306AC] dark:group-hover:text-[#E9BD36]">
                    Global Clients
                  </p>
                  <p className="text-[9.5px] text-brand-zinc-400 dark:text-zinc-500 mt-2 font-semibold leading-normal max-w-[200px]">
                    Active partnerships across borders and industries
                  </p>
                </div>

                {/* Stat 2 */}
                <div className="flex flex-col items-start relative w-full group hover:-translate-y-1 transition-transform duration-350 ease-out">
                  <div className="relative flex items-center justify-between w-full pb-2.5 mb-3">
                    <Rocket className="h-4.5 w-4.5 text-[#0306AC] dark:text-[#E9BD36] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    <span className="text-[8px] font-mono tracking-widest text-brand-zinc-400 dark:text-zinc-500 select-none">[ 02 ]</span>
                    {/* Hover animated border line */}
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-zinc-100 dark:bg-white/5" />
                    <div className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#0306AC] dark:text-[#E9BD36] group-hover:w-full transition-all duration-500 ease-out" />
                  </div>
                  <div className="flex items-baseline gap-0.5 text-brand-dark dark:text-white">
                    <span className="font-heading font-black text-5xl sm:text-6xl md:text-7xl tracking-tighter leading-none text-brand-dark dark:text-white">
                      <DigitTicker value={250} />
                    </span>
                    <span className="font-heading font-bold text-2xl sm:text-3xl leading-none text-[#0306AC] dark:text-[#E9BD36]">+</span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] font-black text-brand-dark dark:text-white uppercase tracking-widest mt-3.5 leading-none transition-colors duration-300 group-hover:text-[#0306AC] dark:group-hover:text-[#E9BD36]">
                    Projects Built
                  </p>
                  <p className="text-[9.5px] text-brand-zinc-400 dark:text-zinc-500 mt-2 font-semibold leading-normal max-w-[200px]">
                    Delivered with absolute pixel perfection
                  </p>
                </div>

                {/* Stat 3 */}
                <div className="flex flex-col items-start relative w-full group hover:-translate-y-1 transition-transform duration-350 ease-out">
                  <div className="relative flex items-center justify-between w-full pb-2.5 mb-3">
                    <Heart className="h-4.5 w-4.5 text-[#0306AC] dark:text-[#E9BD36] transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-[8px] font-mono tracking-widest text-brand-zinc-400 dark:text-zinc-500 select-none">[ 03 ]</span>
                    {/* Hover animated border line */}
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-zinc-100 dark:bg-white/5" />
                    <div className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#0306AC] dark:bg-[#E9BD36] group-hover:w-full transition-all duration-500 ease-out" />
                  </div>
                  <div className="flex items-baseline gap-0.5 text-brand-dark dark:text-white">
                    <span className="font-heading font-black text-5xl sm:text-6xl md:text-7xl tracking-tighter leading-none text-brand-dark dark:text-white">
                      <DigitTicker value={98} />
                    </span>
                    <span className="font-heading font-bold text-2xl sm:text-3xl leading-none text-[#0306AC] dark:text-[#E9BD36]">%</span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] font-black text-brand-dark dark:text-white uppercase tracking-widest mt-3.5 leading-none transition-colors duration-300 group-hover:text-[#0306AC] dark:group-hover:text-[#E9BD36]">
                    Satisfaction Rate
                  </p>
                  <p className="text-[9.5px] text-brand-zinc-400 dark:text-zinc-500 mt-2 font-semibold leading-normal max-w-[200px]">
                    Ranked by our clients' success and reviews
                  </p>
                </div>

                {/* Stat 4 */}
                <div className="flex flex-col items-start relative w-full group hover:-translate-y-1 transition-transform duration-350 ease-out">
                  <div className="relative flex items-center justify-between w-full pb-2.5 mb-3">
                    <Trophy className="h-4.5 w-4.5 text-[#0306AC] dark:text-[#E9BD36] transition-transform duration-300 group-hover:rotate-[-10deg]" />
                    <span className="text-[8px] font-mono tracking-widest text-brand-zinc-400 dark:text-zinc-500 select-none">[ 04 ]</span>
                    {/* Hover animated border line */}
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-zinc-100 dark:bg-white/5" />
                    <div className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#0306AC] dark:text-[#E9BD36] group-hover:w-full transition-all duration-500 ease-out" />
                  </div>
                  <div className="flex items-baseline gap-0.5 text-brand-dark dark:text-white">
                    <span className="font-heading font-black text-5xl sm:text-6xl md:text-7xl tracking-tighter leading-none text-brand-dark dark:text-white">
                      <DigitTicker value={7} />
                    </span>
                    <span className="font-heading font-bold text-2xl sm:text-3xl leading-none text-[#0306AC] dark:text-[#E9BD36]">+</span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] font-black text-brand-dark dark:text-white uppercase tracking-widest mt-3.5 leading-none transition-colors duration-300 group-hover:text-[#0306AC] dark:group-hover:text-[#E9BD36]">
                    Years Active
                  </p>
                  <p className="text-[9.5px] text-brand-zinc-400 dark:text-zinc-500 mt-2 font-semibold leading-normal max-w-[200px]">
                    Pioneering industry-leading digital design
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ── 3. WHO WE ARE SECTION (Awwwards-Level Premium Collage & Editorial Rows) ──── */}
        <section className="relative overflow-hidden py-20 md:py-28 border-b border-brand-zinc-200 dark:border-white/10 bg-white dark:bg-[#080710]">
          
          {/* Gigantic background watermarked agency identifier */}
          <div className="absolute right-[5%] top-[10%] text-[15vw] sm:text-[12vw] font-heading font-black tracking-tighter text-[#0306AC]/[0.015] dark:text-white/[0.01] pointer-events-none select-none z-0 leading-none">
            CREATIVE
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

              {/* Left Column: Heading and Interactive Editorial Rows */}
              <div className="lg:col-span-6 space-y-10 text-left">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 select-none">
                    <span className="text-[8.5px] font-mono tracking-widest text-[#0306AC] dark:text-[#E9BD36] font-black uppercase">// WHO WE ARE</span>
                    <div className="h-[1px] w-8 bg-[#0306AC]/20 dark:bg-white/10" />
                  </div>
                  
                  <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-brand-dark dark:text-white tracking-tight leading-[1.05]">
                    Designing landmarks, <br />
                    not just <span className="text-[#0306AC] dark:text-[#E9BD36] italic font-serif font-light">interfaces.</span>
                  </h2>
                  
                  <p className="text-xs sm:text-sm text-brand-zinc-550 dark:text-zinc-400 font-normal leading-relaxed max-w-xl">
                    We are an elite coalition of design purists, engineering craftspeople, and performance strategists who build high-ticket platforms that command market attention and scale digital authority.
                  </p>
                </div>

                {/* Awwwards-Style Expandable Editorial Rows */}
                <div className="border-t border-brand-zinc-200 dark:border-white/10 divide-y divide-brand-zinc-200 dark:divide-white/10 w-full">
                  
                  {/* Row 1 */}
                  <div className="group relative py-6 flex items-start justify-between gap-6 cursor-pointer overflow-hidden transition-all duration-300">
                    <div className="absolute inset-y-0 left-0 w-0 bg-zinc-50 dark:bg-white/[0.02] group-hover:w-full transition-all duration-500 ease-out -z-10" />
                    
                    <div className="flex items-start gap-4 sm:gap-6">
                      <span className="text-[10px] font-mono font-bold text-[#0306AC] dark:text-[#E9BD36] mt-1 select-none">[ 01 ]</span>
                      <div className="space-y-1">
                        <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-brand-dark dark:text-white group-hover:text-[#0306AC] dark:group-hover:text-[#E9BD36] transition-colors duration-300">
                          Radical Aesthetics
                        </h3>
                        <p className="text-[10px] sm:text-[11px] text-brand-zinc-450 dark:text-zinc-500 font-medium leading-normal max-w-md transition-colors duration-300 group-hover:text-brand-dark dark:group-hover:text-white">
                          Avant-garde layout architectures and bespoke identity systems built to visually isolate your brand from standard templates.
                        </p>
                      </div>
                    </div>
                    <div className="h-7 w-7 rounded-full border border-brand-zinc-300 dark:border-white/10 flex items-center justify-center text-brand-zinc-400 dark:text-zinc-500 group-hover:border-[#0306AC] dark:group-hover:border-[#E9BD36] group-hover:text-[#0306AC] dark:group-hover:text-[#E9BD36] group-hover:rotate-45 transition-all duration-300 shrink-0">
                      <ArrowRight className="h-3 w-3" />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="group relative py-6 flex items-start justify-between gap-6 cursor-pointer overflow-hidden transition-all duration-300">
                    <div className="absolute inset-y-0 left-0 w-0 bg-zinc-50 dark:bg-white/[0.02] group-hover:w-full transition-all duration-500 ease-out -z-10" />
                    
                    <div className="flex items-start gap-4 sm:gap-6">
                      <span className="text-[10px] font-mono font-bold text-[#0306AC] dark:text-[#E9BD36] mt-1 select-none">[ 02 ]</span>
                      <div className="space-y-1">
                        <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-brand-dark dark:text-white group-hover:text-[#0306AC] dark:group-hover:text-[#E9BD36] transition-colors duration-300">
                          High-Fidelity Engineering
                        </h3>
                        <p className="text-[10px] sm:text-[11px] text-brand-zinc-450 dark:text-zinc-500 font-medium leading-normal max-w-md transition-colors duration-300 group-hover:text-brand-dark dark:group-hover:text-white">
                          Next.js production engines engineered with semantic HTML, precise performance caching, and custom Framer Motion dynamics.
                        </p>
                      </div>
                    </div>
                    <div className="h-7 w-7 rounded-full border border-brand-zinc-300 dark:border-white/10 flex items-center justify-center text-brand-zinc-400 dark:text-zinc-500 group-hover:border-[#0306AC] dark:group-hover:border-[#E9BD36] group-hover:text-[#0306AC] dark:group-hover:text-[#E9BD36] group-hover:rotate-45 transition-all duration-300 shrink-0">
                      <ArrowRight className="h-3 w-3" />
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="group relative py-6 flex items-start justify-between gap-6 cursor-pointer overflow-hidden transition-all duration-300">
                    <div className="absolute inset-y-0 left-0 w-0 bg-zinc-50 dark:bg-white/[0.02] group-hover:w-full transition-all duration-500 ease-out -z-10" />
                    
                    <div className="flex items-start gap-4 sm:gap-6">
                      <span className="text-[10px] font-mono font-bold text-[#0306AC] dark:text-[#E9BD36] mt-1 select-none">[ 03 ]</span>
                      <div className="space-y-1">
                        <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-brand-dark dark:text-white group-hover:text-[#0306AC] dark:group-hover:text-[#E9BD36] transition-colors duration-300">
                          Commercial Growth Engines
                        </h3>
                        <p className="text-[10px] sm:text-[11px] text-brand-zinc-450 dark:text-zinc-500 font-medium leading-normal max-w-md transition-colors duration-300 group-hover:text-brand-dark dark:group-hover:text-white">
                          Strategic landing funnels and advanced SEO frameworks focused on positioning, high intent search rankings, and enterprise sales.
                        </p>
                      </div>
                    </div>
                    <div className="h-7 w-7 rounded-full border border-brand-zinc-300 dark:border-white/10 flex items-center justify-center text-brand-zinc-400 dark:text-zinc-500 group-hover:border-[#0306AC] dark:group-hover:border-[#E9BD36] group-hover:text-[#0306AC] dark:group-hover:text-[#E9BD36] group-hover:rotate-45 transition-all duration-300 shrink-0">
                      <ArrowRight className="h-3 w-3" />
                    </div>
                  </div>

                </div>
              </div>

              {/* Right Column: Interactive 3D Parallax Collage */}
              <div className="lg:col-span-6 relative h-[380px] sm:h-[480px] w-full flex items-center justify-center select-none">
                
                {/* Collage Container with Hover Group Parallax */}
                <motion.div 
                  initial="rest" 
                  whileHover="hover" 
                  animate="rest"
                  className="relative w-full h-full max-w-[480px]"
                >
                  
                  {/* Card A: Background Abstract Art (Parallax Layer 1 - Deep) */}
                  <motion.div
                    variants={{
                      rest: { x: 0, y: 0, rotate: -4, scale: 0.95 },
                      hover: { x: -25, y: -15, rotate: -8, scale: 0.96 }
                    }}
                    transition={{ type: "spring", stiffness: 120, damping: 20 }}
                    className="absolute left-4 top-4 w-[60%] aspect-[1.1] rounded-2xl overflow-hidden border border-brand-zinc-200 dark:border-white/5 shadow-md bg-brand-dark -z-10"
                  >
                    <img 
                      src="/agency_abstract_graphics.png" 
                      alt="Abstract 3D Glass Render" 
                      className="w-full h-full object-cover opacity-60 dark:opacity-80"
                    />
                  </motion.div>

                  {/* Card B: Midground Studio workspace (Parallax Layer 2 - Center) */}
                  <motion.div
                    variants={{
                      rest: { x: 0, y: 0, scale: 1 },
                      hover: { x: 0, y: 0, scale: 1.02 }
                    }}
                    transition={{ type: "spring", stiffness: 120, damping: 20 }}
                    className="absolute left-[15%] top-[15%] w-[70%] aspect-[1.3] rounded-2xl overflow-hidden border border-brand-zinc-200 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] bg-white dark:bg-[#12121e]"
                  >
                    <img 
                      src="/agency_workspace.png" 
                      alt="360 Designs Agency Workspace" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-grid-blue-4 opacity-[0.02] [background-size:16px_16px]" />
                  </motion.div>

                  {/* Card C: Foreground High-Fidelity UI Detail (Parallax Layer 3 - Close) */}
                  <motion.div
                    variants={{
                      rest: { x: 0, y: 0, rotate: 6, scale: 0.98 },
                      hover: { x: 30, y: 25, rotate: 10, scale: 1.02 }
                    }}
                    transition={{ type: "spring", stiffness: 120, damping: 20 }}
                    className="absolute right-2 bottom-6 w-[55%] aspect-[1.28] rounded-2xl overflow-hidden border border-[#E9BD36]/20 dark:border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.12)] dark:shadow-[0_30px_60px_rgba(0,0,0,0.5)] bg-white dark:bg-[#12121e]"
                  >
                    <img 
                      src="/agency_ui_detail.png" 
                      alt="Minimalist High-Fidelity Dashboard Interface" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#0306AC]/10 to-transparent mix-blend-overlay pointer-events-none" />
                  </motion.div>

                  {/* Spinning active dot indicator badge overlay */}
                  <div className="absolute top-[8%] right-[8%] bg-white/95 dark:bg-[#080710]/95 backdrop-blur-md border border-brand-zinc-200 dark:border-white/10 px-3.5 py-2 rounded-xl flex items-center gap-2.5 shadow-lg select-none">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0306AC] dark:bg-[#E9BD36] opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#0306AC] dark:bg-[#E9BD36]" />
                    </span>
                    <span className="text-[8px] font-mono tracking-widest text-[#0306AC] dark:text-[#E9BD36] font-black uppercase">
                      STUDIO PARALLAX // ACTIVE
                    </span>
                  </div>

                </motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 4. MISSION & VISION SECTION (Horizontal metrics layouts) ──────── */}
        <section className="relative overflow-hidden py-16 md:py-20 border-b border-brand-zinc-200 dark:border-white/10 bg-zinc-50/50 dark:bg-white/[0.005]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 relative z-10">

            {/* Main wrapper container */}
            <div className="w-full bg-[#F8FAFC]/80 dark:bg-[#12121e]/40 rounded-[32px] border border-brand-zinc-200 dark:border-white/10 p-6 md:p-8 relative flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch justify-between shadow-sm">

              {/* Corner Grid decorations */}
              <div className="absolute left-0 bottom-0 w-[60px] h-[60px] pointer-events-none opacity-25 bg-grid-blue-8 [background-size:10px_10px] z-0" />
              <div className="absolute right-0 top-0 w-[60px] h-[60px] pointer-events-none opacity-25 bg-grid-yellow-8 [background-size:10px_10px] z-0" />

              {/* Floating arrow connector */}
              <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-[#0306AC] text-white items-center justify-center z-20 shadow-md border border-white/10">
                <ArrowRight className="h-4.5 w-4.5" />
              </div>

              {/* Card Left: Our Mission */}
              <div className="flex-1 w-full bg-white dark:bg-[#12121e] rounded-2xl border-l-4 border-l-[#0306AC] border border-brand-zinc-200 dark:border-white/5 p-6 shadow-sm flex flex-col justify-between min-h-[220px] z-10 hover:border-brand-blue/30 transition-colors">
                <div className="flex gap-4 items-start">
                  <div className="h-12 w-12 rounded-xl bg-brand-blue/5 flex items-center justify-center text-brand-blue shrink-0 border border-brand-blue/10">
                    <Target className="h-6 w-6" />
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <span className="text-[10px] font-sans font-black tracking-widest text-[#0306AC] uppercase block">OUR MISSION</span>
                    <p className="text-[11.5px] font-normal text-brand-zinc-500 leading-relaxed">
                      To empower businesses with smart digital strategies and innovative solutions that drive measurable growth and long-term success.
                    </p>
                  </div>
                </div>

                {/* Horizontal divider */}
                <div className="w-full h-px bg-brand-zinc-150 dark:bg-white/5 my-4.5" />

                {/* 3 Stats */}
                <div className="flex items-center justify-between gap-2 px-1">
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-full bg-[#0306AC]/5 flex items-center justify-center text-[#0306AC] shrink-0 border border-[#0306AC]/10">
                      <Users className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <span className="block font-heading font-black text-xs text-brand-dark dark:text-white leading-none">300+</span>
                      <span className="block text-[7px] font-bold text-[#6B7280] uppercase tracking-wide mt-0.5">Happy Clients</span>
                    </div>
                  </div>
                  <div className="w-px h-6 bg-brand-zinc-200 dark:bg-white/5" />
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-full bg-[#0306AC]/5 flex items-center justify-center text-[#0306AC] shrink-0 border border-[#0306AC]/10">
                      <FolderClosed className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <span className="block font-heading font-black text-xs text-brand-dark dark:text-white leading-none">250+</span>
                      <span className="block text-[7px] font-bold text-[#6B7280] uppercase tracking-wide mt-0.5">Projects Completed</span>
                    </div>
                  </div>
                  <div className="w-px h-6 bg-brand-zinc-200 dark:bg-white/5" />
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-full bg-[#0306AC]/5 flex items-center justify-center text-[#0306AC] shrink-0 border border-[#0306AC]/10">
                      <Globe className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <span className="block font-heading font-black text-xs text-brand-dark dark:text-white leading-none">20+</span>
                      <span className="block text-[7px] font-bold text-[#6B7280] uppercase tracking-wide mt-0.5">Countries Served</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Right: Our Vision */}
              <div className="flex-1 w-full bg-white dark:bg-[#12121e] rounded-2xl border-r-4 border-r-[#E9BD36] border border-brand-zinc-200 dark:border-white/5 p-6 shadow-sm flex flex-col justify-between min-h-[220px] z-10 hover:border-brand-blue/30 transition-colors">
                <div className="flex gap-4 items-start">
                  <div className="space-y-1.5 flex-1">
                    <span className="text-[10px] font-sans font-black tracking-widest text-[#0306AC] dark:text-[#E9BD36] uppercase block">OUR VISION</span>
                    <p className="text-[11.5px] font-normal text-brand-zinc-500 leading-relaxed">
                      To be a global leader in digital innovation, transforming ideas into impactful digital experiences that shape the future.
                    </p>
                  </div>
                  <div className="h-12 w-12 rounded-xl bg-amber-50/50 dark:bg-white/5 flex items-center justify-center text-brand-yellow shrink-0 border border-brand-yellow/10">
                    <Eye className="h-6 w-6" />
                  </div>
                </div>

                {/* Horizontal divider */}
                <div className="w-full h-px bg-brand-zinc-150 dark:bg-white/5 my-4.5" />

                {/* 3 Stats */}
                <div className="flex items-center justify-between gap-2 px-1">
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-full bg-[#E9BD36]/10 flex items-center justify-center text-[#E9BD36] shrink-0 border border-[#E9BD36]/20">
                      <Star className="h-3.5 w-3.5" fill="currentColor" />
                    </div>
                    <div>
                      <span className="block font-heading font-black text-xs text-brand-dark dark:text-white leading-none">98%</span>
                      <span className="block text-[7px] font-bold text-[#6B7280] uppercase tracking-wide mt-0.5">Client Satisfaction</span>
                    </div>
                  </div>
                  <div className="w-px h-6 bg-brand-zinc-200 dark:bg-white/5" />
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-full bg-[#E9BD36]/10 flex items-center justify-center text-[#E9BD36] shrink-0 border border-[#E9BD36]/20">
                      <TrendingUp className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <span className="block font-heading font-black text-xs text-brand-dark dark:text-white leading-none">2.4M+</span>
                      <span className="block text-[7px] font-bold text-[#6B7280] uppercase tracking-wide mt-0.5">Revenue Impact</span>
                    </div>
                  </div>
                  <div className="w-px h-6 bg-brand-zinc-200 dark:bg-white/5" />
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-full bg-[#E9BD36]/10 flex items-center justify-center text-[#E9BD36] shrink-0 border border-[#E9BD36]/20">
                      <Rocket className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <span className="block font-heading font-black text-xs text-brand-dark dark:text-white leading-none">100%</span>
                      <span className="block text-[7px] font-bold text-[#6B7280] uppercase tracking-wide mt-0.5">Commitment</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 5. OUR SERVICES SECTION ─────────────────────────────────── */}
        <section className="relative overflow-hidden py-16 md:py-20 border-b border-brand-zinc-200 dark:border-white/10 bg-white dark:bg-[#080710]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 relative z-10">

            <div className="text-center mb-12 flex flex-col items-center">
              <span className="text-[10px] font-sans font-black tracking-widest text-[#0306AC] uppercase block mb-1">
                OUR SERVICES
              </span>
              <div className="h-0.5 w-6 bg-[#E9BD36] mb-3" />
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark dark:text-white tracking-tight pt-1">
                Solutions That Drive <span className="text-[#0306AC] dark:text-[#E9BD36]">Real Growth</span>
              </h2>
              <p className="text-xs text-brand-zinc-500 font-normal font-sans leading-relaxed max-w-lg mt-3">
                We offer end-to-end digital solutions designed to help your brand stand out, attract the right audience, and achieve measurable success.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">

              {/* Service Card 1 */}
              <div className="p-5 rounded-2xl glass-card-premium relative overflow-hidden group hover:border-[#0306AC] dark:hover:border-[#E9BD36] flex flex-col h-[230px]">
                <div className="h-10 w-10 rounded-xl bg-[#0306AC]/5 dark:bg-white/5 flex items-center justify-center text-[#0306AC] dark:text-[#E9BD36] shrink-0 border border-[#0306AC]/10">
                  <Palette className="h-5 w-5" />
                </div>
                <div className="h-[2px] w-4 bg-[#0306AC] mt-3.5 mb-2" />
                <div className="space-y-1">
                  <h3 className="font-heading font-bold text-xs sm:text-[13px] text-brand-dark dark:text-white leading-snug tracking-tight">Brand Identity Design</h3>
                  <p className="text-[10px] font-normal text-brand-zinc-500 leading-relaxed">Crafting memorable brand identities that reflect your values and leave a lasting impact.</p>
                </div>
                <div className="flex justify-end pt-4.5 mt-auto">
                  <div className="h-6 w-6 rounded-full bg-zinc-100 dark:bg-white/5 flex items-center justify-center text-zinc-400 group-hover:bg-[#0306AC] group-hover:text-white transition-all duration-300">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>

              {/* Service Card 2 */}
              <div className="p-5 rounded-2xl glass-card-premium relative overflow-hidden group hover:border-[#0306AC] dark:hover:border-[#E9BD36] flex flex-col h-[230px]">
                <div className="h-10 w-10 rounded-xl bg-[#0306AC]/5 dark:bg-white/5 flex items-center justify-center text-[#0306AC] dark:text-[#E9BD36] shrink-0 border border-[#0306AC]/10">
                  <Code className="h-5 w-5" />
                </div>
                <div className="h-[2px] w-4 bg-[#0306AC] mt-3.5 mb-2" />
                <div className="space-y-1">
                  <h3 className="font-heading font-bold text-xs sm:text-[13px] text-brand-dark dark:text-white leading-snug tracking-tight">Website Design & Development</h3>
                  <p className="text-[10px] font-normal text-brand-zinc-500 leading-relaxed">Building modern, fast, and responsive websites that engage visitors and convert.</p>
                </div>
                <div className="flex justify-end pt-4.5 mt-auto">
                  <div className="h-6 w-6 rounded-full bg-zinc-100 dark:bg-white/5 flex items-center justify-center text-zinc-400 group-hover:bg-[#0306AC] group-hover:text-white transition-all duration-300">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>

              {/* Service Card 3 */}
              <div className="p-5 rounded-2xl glass-card-premium relative overflow-hidden group hover:border-[#0306AC] dark:hover:border-[#E9BD36] flex flex-col h-[230px]">
                <div className="h-10 w-10 rounded-xl bg-[#0306AC]/5 dark:bg-white/5 flex items-center justify-center text-[#0306AC] dark:text-[#E9BD36] shrink-0 border border-[#0306AC]/10">
                  <Search className="h-5 w-5" />
                </div>
                <div className="h-[2px] w-4 bg-[#0306AC] mt-3.5 mb-2" />
                <div className="space-y-1">
                  <h3 className="font-heading font-bold text-xs sm:text-[13px] text-brand-dark dark:text-white leading-snug tracking-tight">SEO & Content Strategy</h3>
                  <p className="text-[10px] font-normal text-brand-zinc-500 leading-relaxed">Improving your visibility on search engines and driving organic growth with smart SEO.</p>
                </div>
                <div className="flex justify-end pt-4.5 mt-auto">
                  <div className="h-6 w-6 rounded-full bg-zinc-100 dark:bg-white/5 flex items-center justify-center text-zinc-400 group-hover:bg-[#0306AC] group-hover:text-white transition-all duration-300">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>

              {/* Service Card 4 */}
              <div className="p-5 rounded-2xl glass-card-premium relative overflow-hidden group hover:border-[#0306AC] dark:hover:border-[#E9BD36] flex flex-col h-[230px]">
                <div className="h-10 w-10 rounded-xl bg-[#0306AC]/5 dark:bg-white/5 flex items-center justify-center text-[#0306AC] dark:text-[#E9BD36] shrink-0 border border-[#0306AC]/10">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div className="h-[2px] w-4 bg-[#0306AC] mt-3.5 mb-2" />
                <div className="space-y-1">
                  <h3 className="font-heading font-bold text-xs sm:text-[13px] text-brand-dark dark:text-white leading-snug tracking-tight">Social Media Marketing</h3>
                  <p className="text-[10px] font-normal text-brand-zinc-500 leading-relaxed">Creating engaging campaigns that build communities and boost your brand awareness.</p>
                </div>
                <div className="flex justify-end pt-4.5 mt-auto">
                  <div className="h-6 w-6 rounded-full bg-zinc-100 dark:bg-white/5 flex items-center justify-center text-zinc-400 group-hover:bg-[#0306AC] group-hover:text-white transition-all duration-300">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>

              {/* Service Card 5 */}
              <div className="p-5 rounded-2xl glass-card-premium relative overflow-hidden group hover:border-[#0306AC] dark:hover:border-[#E9BD36] flex flex-col h-[230px]">
                <div className="h-10 w-10 rounded-xl bg-[#0306AC]/5 dark:bg-white/5 flex items-center justify-center text-[#0306AC] dark:text-[#E9BD36] shrink-0 border border-[#0306AC]/10">
                  <Megaphone className="h-5 w-5" />
                </div>
                <div className="h-[2px] w-4 bg-[#0306AC] mt-3.5 mb-2" />
                <div className="space-y-1">
                  <h3 className="font-heading font-bold text-xs sm:text-[13px] text-brand-dark dark:text-white leading-snug tracking-tight">Paid Ads Management</h3>
                  <p className="text-[10px] font-normal text-brand-zinc-500 leading-relaxed">Running ROI-focused ad campaigns that deliver real results and maximize your budget.</p>
                </div>
                <div className="flex justify-end pt-4.5 mt-auto">
                  <div className="h-6 w-6 rounded-full bg-zinc-100 dark:bg-white/5 flex items-center justify-center text-zinc-400 group-hover:bg-[#0306AC] group-hover:text-white transition-all duration-300">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>

              {/* Service Card 6 */}
              <div className="p-5 rounded-2xl glass-card-premium relative overflow-hidden group hover:border-[#0306AC] dark:hover:border-[#E9BD36] flex flex-col h-[230px]">
                <div className="h-10 w-10 rounded-xl bg-[#0306AC]/5 dark:bg-white/5 flex items-center justify-center text-[#0306AC] dark:text-[#E9BD36] shrink-0 border border-[#0306AC]/10">
                  <Pencil className="h-5 w-5" />
                </div>
                <div className="h-[2px] w-4 bg-[#0306AC] mt-3.5 mb-2" />
                <div className="space-y-1">
                  <h3 className="font-heading font-bold text-xs sm:text-[13px] text-brand-dark dark:text-white leading-snug tracking-tight">Content Creation</h3>
                  <p className="text-[10px] font-normal text-brand-zinc-500 leading-relaxed">High-quality content that tells your story, connects with your audience, and converts.</p>
                </div>
                <div className="flex justify-end pt-4.5 mt-auto">
                  <div className="h-6 w-6 rounded-full bg-zinc-100 dark:bg-white/5 flex items-center justify-center text-zinc-400 group-hover:bg-[#0306AC] group-hover:text-white transition-all duration-300">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 6. OUR PROCESS SECTION ─────────────────────────────────── */}
        <section className="relative overflow-hidden py-16 md:py-20 border-b border-brand-zinc-200 dark:border-white/10 bg-zinc-50/50 dark:bg-white/[0.01]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 relative z-10">

            <div className="text-center mb-12 flex flex-col items-center">
              <span className="text-[10px] font-sans font-black tracking-widest text-[#0306AC] uppercase mb-1">
                // OUR PROCESS
              </span>
              <div className="h-0.5 w-6 bg-[#E9BD36] mb-3" />
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark dark:text-white tracking-tight pt-1">
                A Simple 5-Step Process That <span className="text-[#0306AC] dark:text-[#E9BD36]">Delivers Results</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4 max-w-5xl mx-auto items-start">

              {/* Step 1 */}
              <div className="flex flex-col items-center text-center space-y-3 relative group">
                {/* Horizontal flowing connector path */}
                <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-1 z-0 pointer-events-none">
                  <svg className="w-full h-1 text-brand-zinc-200 dark:text-white/10" fill="none">
                    <path d="M 0 2 H 160" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                    <motion.path
                      d="M 0 2 H 160"
                      stroke="#0306AC"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                      initial={{ strokeDashoffset: 0 }}
                      animate={{ strokeDashoffset: -16 }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                    />
                  </svg>
                  <span className="absolute top-[-3px] left-1/2 -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-[#0306AC] dark:bg-[#E9BD36] shadow-sm animate-pulse" />
                </div>

                <div className="h-12 w-12 rounded-full border border-brand-zinc-200 dark:border-white/10 text-[#0306AC] dark:text-[#E9BD36] flex items-center justify-center bg-white dark:bg-[#12121e] shadow-md group-hover:border-[#0306AC] transition-colors duration-300 relative z-10">
                  <Search className="h-5 w-5" />
                </div>
                <div className="space-y-1.5 pt-1">
                  <span className="block text-[10px] font-sans font-black text-[#0306AC] uppercase tracking-wider">01</span>
                  <h3 className="font-heading font-bold text-xs text-brand-dark dark:text-white">Discover</h3>
                  <p className="font-sans text-[10px] font-normal text-brand-zinc-550 leading-relaxed max-w-[170px] mx-auto">We learn about your business, goals, and target audience.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center space-y-3 relative group">
                {/* Horizontal flowing connector path */}
                <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-1 z-0 pointer-events-none">
                  <svg className="w-full h-1 text-brand-zinc-200 dark:text-white/10" fill="none">
                    <path d="M 0 2 H 160" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                    <motion.path
                      d="M 0 2 H 160"
                      stroke="#0306AC"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                      initial={{ strokeDashoffset: 0 }}
                      animate={{ strokeDashoffset: -16 }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                    />
                  </svg>
                  <span className="absolute top-[-3px] left-1/2 -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-[#0306AC] dark:bg-[#E9BD36] shadow-sm animate-pulse" />
                </div>

                <div className="h-12 w-12 rounded-full border border-brand-zinc-200 dark:border-white/10 text-[#0306AC] dark:text-[#E9BD36] flex items-center justify-center bg-white dark:bg-[#12121e] shadow-md group-hover:border-[#0306AC] transition-colors duration-300 relative z-10">
                  <Pencil className="h-4.5 w-4.5" />
                </div>
                <div className="space-y-1.5 pt-1">
                  <span className="block text-[10px] font-sans font-black text-[#0306AC] uppercase tracking-wider">02</span>
                  <h3 className="font-heading font-bold text-xs text-brand-dark dark:text-white">Plan</h3>
                  <p className="font-sans text-[10px] font-normal text-brand-zinc-550 leading-relaxed max-w-[170px] mx-auto">We create a customized strategy tailored to your specific needs.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center space-y-3 relative group">
                {/* Horizontal flowing connector path */}
                <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-1 z-0 pointer-events-none">
                  <svg className="w-full h-1 text-brand-zinc-200 dark:text-white/10" fill="none">
                    <path d="M 0 2 H 160" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                    <motion.path
                      d="M 0 2 H 160"
                      stroke="#0306AC"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                      initial={{ strokeDashoffset: 0 }}
                      animate={{ strokeDashoffset: -16 }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                    />
                  </svg>
                  <span className="absolute top-[-3px] left-1/2 -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-[#0306AC] dark:bg-[#E9BD36] shadow-sm animate-pulse" />
                </div>

                <div className="h-12 w-12 rounded-full border border-brand-zinc-200 dark:border-white/10 text-[#0306AC] dark:text-[#E9BD36] flex items-center justify-center bg-white dark:bg-[#12121e] shadow-md group-hover:border-[#0306AC] transition-colors duration-300 relative z-10">
                  <Palette className="h-5 w-5" />
                </div>
                <div className="space-y-1.5 pt-1">
                  <span className="block text-[10px] font-sans font-black text-[#0306AC] uppercase tracking-wider">03</span>
                  <h3 className="font-heading font-bold text-xs text-brand-dark dark:text-white">Design</h3>
                  <p className="font-sans text-[10px] font-normal text-brand-zinc-550 leading-relaxed max-w-[170px] mx-auto">Our creative team designs stunning visuals and user experiences.</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center text-center space-y-3 relative group">
                {/* Horizontal flowing connector path */}
                <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-1 z-0 pointer-events-none">
                  <svg className="w-full h-1 text-brand-zinc-200 dark:text-white/10" fill="none">
                    <path d="M 0 2 H 160" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                    <motion.path
                      d="M 0 2 H 160"
                      stroke="#0306AC"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                      initial={{ strokeDashoffset: 0 }}
                      animate={{ strokeDashoffset: -16 }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                    />
                  </svg>
                  <span className="absolute top-[-3px] left-1/2 -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-[#0306AC] dark:bg-[#E9BD36] shadow-sm animate-pulse" />
                </div>

                <div className="h-12 w-12 rounded-full border border-brand-zinc-200 dark:border-white/10 text-[#0306AC] dark:text-[#E9BD36] flex items-center justify-center bg-white dark:bg-[#12121e] shadow-md group-hover:border-[#0306AC] transition-colors duration-300 relative z-10">
                  <Code className="h-5 w-5" />
                </div>
                <div className="space-y-1.5 pt-1">
                  <span className="block text-[10px] font-sans font-black text-[#0306AC] uppercase tracking-wider">04</span>
                  <h3 className="font-heading font-bold text-xs text-brand-dark dark:text-white">Develop</h3>
                  <p className="font-sans text-[10px] font-normal text-brand-zinc-550 leading-relaxed max-w-[170px] mx-auto">We build fast, responsive, and high-performing digital solutions.</p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex flex-col items-center text-center space-y-3 relative group">
                <div className="h-12 w-12 rounded-full border border-brand-zinc-200 dark:border-white/10 text-[#0306AC] dark:text-[#E9BD36] flex items-center justify-center bg-white dark:bg-[#12121e] shadow-md group-hover:border-[#0306AC] transition-colors duration-300 relative z-10">
                  <Rocket className="h-5 w-5" />
                </div>
                <div className="space-y-1.5 pt-1">
                  <span className="block text-[10px] font-sans font-black text-[#0306AC] uppercase tracking-wider">05</span>
                  <h3 className="font-heading font-bold text-xs text-brand-dark dark:text-white">Deliver</h3>
                  <p className="font-sans text-[10px] font-normal text-brand-zinc-550 leading-relaxed max-w-[170px] mx-auto">We test, launch, and optimize for long-term success.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 7. INDUSTRIES WE SERVE SECTION ───────────────────────────── */}
        <section className="relative overflow-hidden py-16 md:py-20 border-b border-brand-zinc-200 dark:border-white/10 bg-white dark:bg-[#080710]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 relative z-10">

            <div className="text-center mb-12 flex flex-col items-center">
              <span className="text-[10px] font-sans font-black tracking-widest text-[#0306AC] uppercase block mb-1">
                // INDUSTRIES WE SERVE
              </span>
              <div className="h-0.5 w-6 bg-[#E9BD36] mb-3" />
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">
                Empowering Businesses Across <span className="text-[#0306AC] dark:text-[#E9BD36]">Every Industry</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 max-w-6xl mx-auto">

              {/* Card 1: E-Commerce */}
              <div className="p-4 rounded-2xl bg-white dark:bg-[#12121e] border border-brand-zinc-200 dark:border-white/10 shadow-sm flex flex-col items-center justify-center gap-2 group hover:border-[#0306AC] transition-all cursor-pointer h-[95px]">
                <ShoppingCart className="h-5 w-5 text-[#0306AC] dark:text-[#E9BD36]" />
                <span className="text-[10px] font-bold text-brand-dark dark:text-white text-center mt-1">E-Commerce</span>
              </div>

              {/* Card 2: Real Estate */}
              <div className="p-4 rounded-2xl bg-white dark:bg-[#12121e] border border-brand-zinc-200 dark:border-white/10 shadow-sm flex flex-col items-center justify-center gap-2 group hover:border-[#0306AC] transition-all cursor-pointer h-[95px]">
                <Building2 className="h-5 w-5 text-[#0306AC] dark:text-[#E9BD36]" />
                <span className="text-[10px] font-bold text-brand-dark dark:text-white text-center mt-1">Real Estate</span>
              </div>

              {/* Card 3: Healthcare */}
              <div className="p-4 rounded-2xl bg-white dark:bg-[#12121e] border border-brand-zinc-200 dark:border-white/10 shadow-sm flex flex-col items-center justify-center gap-2 group hover:border-[#0306AC] transition-all cursor-pointer h-[95px]">
                <Heart className="h-5 w-5 text-[#0306AC] dark:text-[#E9BD36]" />
                <span className="text-[10px] font-bold text-brand-dark dark:text-white text-center mt-1">Healthcare</span>
              </div>

              {/* Card 4: Education */}
              <div className="p-4 rounded-2xl bg-white dark:bg-[#12121e] border border-brand-zinc-200 dark:border-white/10 shadow-sm flex flex-col items-center justify-center gap-2 group hover:border-[#0306AC] transition-all cursor-pointer h-[95px]">
                <GraduationCap className="h-5 w-5 text-[#0306AC] dark:text-[#E9BD36]" />
                <span className="text-[10px] font-bold text-brand-dark dark:text-white text-center mt-1">Education</span>
              </div>

              {/* Card 5: Finance */}
              <div className="p-4 rounded-2xl bg-white dark:bg-[#12121e] border border-brand-zinc-200 dark:border-white/10 shadow-sm flex flex-col items-center justify-center gap-2 group hover:border-[#0306AC] transition-all cursor-pointer h-[95px]">
                <Coins className="h-5 w-5 text-[#0306AC] dark:text-[#E9BD36]" />
                <span className="text-[10px] font-bold text-brand-dark dark:text-white text-center mt-1">Finance</span>
              </div>

              {/* Card 6: SaaS & Tech */}
              <div className="p-4 rounded-2xl bg-white dark:bg-[#12121e] border border-brand-zinc-200 dark:border-white/10 shadow-sm flex flex-col items-center justify-center gap-2 group hover:border-[#0306AC] transition-all cursor-pointer h-[95px]">
                <Database className="h-5 w-5 text-[#0306AC] dark:text-[#E9BD36]" />
                <span className="text-[10px] font-bold text-brand-dark dark:text-white text-center mt-1">SaaS & Tech</span>
              </div>

              {/* Card 7: Hospitality */}
              <div className="p-4 rounded-2xl bg-white dark:bg-[#12121e] border border-brand-zinc-200 dark:border-white/10 shadow-sm flex flex-col items-center justify-center gap-2 group hover:border-[#0306AC] transition-all cursor-pointer h-[95px]">
                <Utensils className="h-5 w-5 text-[#0306AC] dark:text-[#E9BD36]" />
                <span className="text-[10px] font-bold text-brand-dark dark:text-white text-center mt-1">Hospitality</span>
              </div>

              {/* Card 8: Legal */}
              <div className="p-4 rounded-2xl bg-white dark:bg-[#12121e] border border-brand-zinc-200 dark:border-white/10 shadow-sm flex flex-col items-center justify-center gap-2 group hover:border-[#0306AC] transition-all cursor-pointer h-[95px]">
                <Scale className="h-5 w-5 text-[#0306AC] dark:text-[#E9BD36]" />
                <span className="text-[10px] font-bold text-brand-dark dark:text-white text-center mt-1">Legal</span>
              </div>

            </div>
          </div>
        </section>

        {/* ── 8. WHY BUSINESSES CHOOSE US SECTION ─────────────────────── */}
        <section className="relative overflow-hidden py-16 md:py-24 border-b border-brand-zinc-200 dark:border-white/10 bg-zinc-50/50 dark:bg-white/[0.01]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 relative z-10">

            <div className="text-center mb-16 flex flex-col items-center">
              <span className="text-[9px] font-sans font-black tracking-widest text-[#0306AC] dark:text-[#E9BD36] uppercase mb-2">
                WHY BUSINESSES CHOOSE US
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-brand-dark tracking-tight leading-none">
                Results. Reliability. <span className="text-[#0306AC] dark:text-[#E9BD36]">Relationship.</span>
              </h2>
              <p className="text-xs sm:text-sm text-brand-zinc-550 dark:text-zinc-400 font-sans max-w-2xl mt-4 leading-relaxed">
                We go beyond just delivering services — we build long-term partnerships that drive real growth and lasting impact for your business.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

              {/* Left Column: Team Picture Card */}
              <div className="lg:col-span-4 relative flex justify-center">
                <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-full min-h-[300px] rounded-[32px] overflow-hidden bg-[#0306AC] border border-brand-zinc-200 dark:border-white/10 shadow-lg p-6 flex flex-col justify-between">
                  {/* Decorative yellow arc line at top-right */}
                  <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-brand-yellow rounded-tr-[32px] pointer-events-none" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-brand-yellow" />

                  <div className="max-w-[200px] z-10">
                    <p className="text-white text-xs sm:text-sm font-semibold leading-relaxed">
                      We focus on what matters most —
                    </p>
                    <p className="text-[#E9BD36] text-base sm:text-lg font-black mt-1 leading-none">
                      your growth.
                    </p>
                  </div>

                  {/* Team picture placeholder gray box */}
                  <div className="absolute right-0 bottom-0 w-[60%] h-[75%] bg-zinc-200 dark:bg-zinc-800 rounded-tl-3xl shadow-inner flex items-center justify-center text-[10px] font-mono text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-wider">
                    [ Image ]
                  </div>
                </div>
              </div>

              {/* Right Column: 6 features in a 3-column grid */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">

                {/* Feature 1: Proven Results */}
                <div className="p-6 rounded-2xl bg-white dark:bg-[#12121e] border border-brand-zinc-200/80 dark:border-white/10 shadow-sm flex flex-col items-start hover:border-brand-blue/30 transition-all duration-300">
                  <div className="h-10 w-10 rounded-full bg-brand-blue/5 dark:bg-white/5 flex items-center justify-center text-brand-blue dark:text-brand-blue mb-4">
                    <Target className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading font-extrabold text-xs text-brand-dark dark:text-white">Proven Results</h3>
                  <div className="h-[2px] w-6 bg-[#E9BD36] mt-2 mb-2" />
                  <p className="text-[10px] font-normal text-brand-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">We deliver measurable outcomes that drive real growth for your business.</p>
                </div>

                {/* Feature 2: Creative Excellence */}
                <div className="p-6 rounded-2xl bg-white dark:bg-[#12121e] border border-brand-zinc-200/80 dark:border-white/10 shadow-sm flex flex-col items-start hover:border-brand-blue/30 transition-all duration-300">
                  <div className="h-10 w-10 rounded-full bg-brand-blue/5 dark:bg-white/5 flex items-center justify-center text-brand-blue dark:text-brand-blue mb-4">
                    <Lightbulb className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading font-extrabold text-xs text-brand-dark dark:text-white">Creative Excellence</h3>
                  <div className="h-[2px] w-6 bg-brand-blue mt-2 mb-2" />
                  <p className="text-[10px] font-normal text-brand-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">Unique designs & strategies that make your brand stand out in the market.</p>
                </div>

                {/* Feature 3: Transparent Process */}
                <div className="p-6 rounded-2xl bg-white dark:bg-[#12121e] border border-brand-zinc-200/80 dark:border-white/10 shadow-sm flex flex-col items-start hover:border-brand-blue/30 transition-all duration-300">
                  <div className="h-10 w-10 rounded-full bg-brand-blue/5 dark:bg-white/5 flex items-center justify-center text-brand-blue dark:text-brand-blue mb-4">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading font-extrabold text-xs text-brand-dark dark:text-white">Transparent Process</h3>
                  <div className="h-[2px] w-6 bg-[#E9BD36] mt-2 mb-2" />
                  <p className="text-[10px] font-normal text-brand-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">Clear communication and full visibility at every stage of the project.</p>
                </div>

                {/* Feature 4: On-Time Delivery */}
                <div className="p-6 rounded-2xl bg-white dark:bg-[#12121e] border border-brand-zinc-200/80 dark:border-white/10 shadow-sm flex flex-col items-start hover:border-brand-blue/30 transition-all duration-300">
                  <div className="h-10 w-10 rounded-full bg-brand-blue/5 dark:bg-white/5 flex items-center justify-center text-brand-blue dark:text-brand-blue mb-4">
                    <Clock className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading font-extrabold text-xs text-brand-dark dark:text-white">On-Time Delivery</h3>
                  <div className="h-[2px] w-6 bg-brand-blue mt-2 mb-2" />
                  <p className="text-[10px] font-normal text-brand-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">We respect deadlines and deliver on time, every time.</p>
                </div>

                {/* Feature 5: Dedicated Support */}
                <div className="p-6 rounded-2xl bg-white dark:bg-[#12121e] border border-brand-zinc-200/80 dark:border-white/10 shadow-sm flex flex-col items-start hover:border-brand-blue/30 transition-all duration-300">
                  <div className="h-10 w-10 rounded-full bg-brand-blue/5 dark:bg-white/5 flex items-center justify-center text-brand-blue dark:text-brand-blue mb-4">
                    <Headphones className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading font-extrabold text-xs text-brand-dark dark:text-white">Dedicated Support</h3>
                  <div className="h-[2px] w-6 bg-[#E9BD36] mt-2 mb-2" />
                  <p className="text-[10px] font-normal text-brand-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">Our team is always here to support you, whenever you need us.</p>
                </div>

                {/* Feature 6: Long-Term Partnership */}
                <div className="p-6 rounded-2xl bg-white dark:bg-[#12121e] border border-brand-zinc-200/80 dark:border-white/10 shadow-sm flex flex-col items-start hover:border-brand-blue/30 transition-all duration-300">
                  <div className="h-10 w-10 rounded-full bg-brand-blue/5 dark:bg-white/5 flex items-center justify-center text-brand-blue dark:text-brand-blue mb-4">
                    <Handshake className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading font-extrabold text-xs text-brand-dark dark:text-white">Long-Term Partnership</h3>
                  <div className="h-[2px] w-6 bg-brand-blue mt-2 mb-2" />
                  <p className="text-[10px] font-normal text-brand-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">We believe in building relationships not just projects for sustainable success.</p>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ── 9. ABOUT FOUNDER SECTION ─────────────────────────────────── */}
        <section className="relative overflow-hidden py-16 md:py-24 border-b border-[#E5E7EB] dark:border-white/10 bg-white dark:bg-[#080710]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

              {/* Left Column: Portrait image placeholder (graybox) */}
              <div className="lg:col-span-3 flex justify-center">
                <div className="relative aspect-[3/4] w-full max-w-[280px] rounded-[32px] overflow-hidden bg-zinc-200 dark:bg-zinc-800 border border-brand-zinc-200 dark:border-white/10 shadow-lg">
                  {/* Graybox label */}
                  <div className="absolute inset-0 flex items-center justify-center text-[11px] font-mono text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-wider">
                    [ Portrait ]
                  </div>

                  {/* Bottom-left overlay card: 300+ Clients Worldwide */}
                  <div className="absolute left-4 bottom-4 bg-white/95 dark:bg-[#12121e]/95 backdrop-blur-sm rounded-xl p-3 shadow-md border border-brand-zinc-100 dark:border-white/5 flex flex-col gap-1.5 max-w-[130px] z-10">
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3 text-[#0306AC] dark:text-[#E9BD36]" />
                      <span className="font-heading font-black text-xs text-brand-dark dark:text-white leading-none">300+</span>
                    </div>
                    <span className="text-[7.5px] font-bold text-brand-zinc-400 uppercase tracking-wider leading-none">Clients Worldwide</span>

                    {/* Tiny avatar group */}
                    <div className="flex -space-x-1 overflow-hidden mt-0.5">
                      <div className="inline-block h-3.5 w-3.5 rounded-full ring-1 ring-white bg-zinc-300 dark:bg-zinc-700" />
                      <div className="inline-block h-3.5 w-3.5 rounded-full ring-1 ring-white bg-zinc-400 dark:bg-zinc-600" />
                      <div className="inline-block h-3.5 w-3.5 rounded-full ring-1 ring-white bg-zinc-500 dark:bg-zinc-500" />
                      <div className="inline-block h-3.5 w-3.5 rounded-full ring-1 ring-white bg-zinc-600 dark:bg-zinc-400" />
                      <div className="inline-block h-3.5 w-3.5 rounded-full ring-1 ring-white bg-zinc-700 dark:bg-zinc-300" />
                    </div>
                  </div>

                  {/* Bottom-right overlay cursive signature: Mohsin / Ahsan */}
                  <div className="absolute right-4 bottom-5 text-[#0306AC] dark:text-[#E9BD36] font-heading font-black italic text-sm tracking-wide z-10 opacity-80 select-none">
                    Ahsan
                  </div>
                </div>
              </div>

              {/* Middle Column: Bio & Signature */}
              <div className="lg:col-span-5 space-y-5 text-left">
                <div className="space-y-1">
                  <span className="text-[9px] font-sans font-black tracking-widest text-[#0306AC] dark:text-[#E9BD36] uppercase block">// ABOUT THE FOUNDER</span>
                  <div className="h-0.5 w-6 bg-[#E9BD36]" />
                </div>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight leading-tight">
                  Hi, I'm <span className="text-[#0306AC] dark:text-[#E9BD36]">Ahsan</span>
                </h2>
                <p className="text-xs sm:text-sm font-bold text-[#0306AC] dark:text-[#E9BD36] tracking-wide uppercase leading-none mt-0.5">
                  Founder & Digital Strategist
                </p>

                <div className="space-y-3.5 text-xs sm:text-sm font-normal font-sans leading-relaxed text-brand-zinc-500 dark:text-zinc-400">
                  <p>I'm a digital strategist and entrepreneur with a passion for helping brands grow through innovative design, smart marketing, and powerful strategies.</p>
                  <p>With over 7+ years of experience, I've had the privilege of working with 300+ clients worldwide, delivering results that make a real difference.</p>
                </div>

                {/* Handwritten signature and down arrow CTA */}
                <div className="pt-4 flex items-center gap-6 select-none">
                  <svg className="w-32 h-12 text-[#0306AC] dark:text-[#E9BD36]" viewBox="0 0 150 50" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <motion.path
                      d="M 15 35 C 25 15, 35 15, 42 38 C 50 18, 58 18, 65 35 C 72 20, 80 20, 85 35 C 92 15, 100 25, 105 15 C 112 30, 118 35, 130 25 M 10 42 Q 75 35, 140 38"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </svg>

                  <a
                    href="#contact"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-yellow text-brand-dark hover:scale-105 active:scale-95 transition-all duration-300 shadow-md"
                    aria-label="Know More About Me"
                  >
                    <ArrowRight className="h-4.5 w-4.5 rotate-90" />
                  </a>
                  <span className="text-[10px] font-sans font-black tracking-widest uppercase text-brand-dark dark:text-white">Know More About Me</span>
                </div>
              </div>

              {/* Right Column: 4 grid stat cards (2x2) */}
              <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-4">

                {/* Card 1 */}
                <div className="p-5 rounded-2xl bg-zinc-50/50 dark:bg-white/[0.02] border border-brand-zinc-200/80 dark:border-white/10 flex flex-col justify-between h-[120px] hover:border-brand-blue/30 transition-all duration-300">
                  <div className="flex justify-between items-start">
                    <div className="h-8 w-8 rounded-full bg-brand-blue/5 dark:bg-white/5 flex items-center justify-center text-brand-blue dark:text-brand-blue">
                      <Award className="h-4.5 w-4.5" />
                    </div>
                    <span className="font-heading font-black text-lg text-[#0306AC] dark:text-[#E9BD36] leading-none">7+</span>
                  </div>
                  <div>
                    <h3 className="text-[9.5px] font-black text-brand-dark dark:text-white uppercase tracking-wider block">Years Experience</h3>
                    <p className="text-[8px] text-brand-zinc-400 mt-1 leading-normal font-sans">Years of expertise in delivering innovative digital solutions that drive results.</p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="p-5 rounded-2xl bg-zinc-50/50 dark:bg-white/[0.02] border border-brand-zinc-200/80 dark:border-white/10 flex flex-col justify-between h-[120px] hover:border-brand-blue/30 transition-all duration-300">
                  <div className="flex justify-between items-start">
                    <div className="h-8 w-8 rounded-full bg-brand-blue/5 dark:bg-white/5 flex items-center justify-center text-brand-blue dark:text-brand-blue">
                      <Briefcase className="h-4.5 w-4.5" />
                    </div>
                    <span className="font-heading font-black text-lg text-[#0306AC] dark:text-[#E9BD36] leading-none">300+</span>
                  </div>
                  <div>
                    <h3 className="text-[9.5px] font-black text-brand-dark dark:text-white uppercase tracking-wider block">Projects Completed</h3>
                    <p className="text-[8px] text-brand-zinc-400 mt-1 leading-normal font-sans">Successfully completed projects across 20+ industries worldwide.</p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="p-5 rounded-2xl bg-zinc-50/50 dark:bg-white/[0.02] border border-brand-zinc-200/80 dark:border-white/10 flex flex-col justify-between h-[120px] hover:border-brand-blue/30 transition-all duration-300">
                  <div className="flex justify-between items-start">
                    <div className="h-8 w-8 rounded-full bg-brand-blue/5 dark:bg-white/5 flex items-center justify-center text-brand-blue dark:text-brand-blue">
                      <Globe className="h-4.5 w-4.5" />
                    </div>
                    <span className="font-heading font-black text-lg text-[#0306AC] dark:text-[#E9BD36] leading-none">Global</span>
                  </div>
                  <div>
                    <h3 className="text-[9.5px] font-black text-brand-dark dark:text-white uppercase tracking-wider block">Client Base</h3>
                    <p className="text-[8px] text-brand-zinc-400 mt-1 leading-normal font-sans">Proud to work with clients from USA, UK, Canada, Australia, and more.</p>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="p-5 rounded-2xl bg-zinc-50/50 dark:bg-white/[0.02] border border-brand-zinc-200/80 dark:border-white/10 flex flex-col justify-between h-[120px] hover:border-brand-blue/30 transition-all duration-300">
                  <div className="flex justify-between items-start">
                    <div className="h-8 w-8 rounded-full bg-brand-blue/5 dark:bg-white/5 flex items-center justify-center text-brand-blue dark:text-brand-blue">
                      <Code className="h-4.5 w-4.5" />
                    </div>
                    <span className="font-heading font-black text-lg text-[#0306AC] dark:text-[#E9BD36] leading-none">Strategy</span>
                  </div>
                  <div>
                    <h3 className="text-[9.5px] font-black text-brand-dark dark:text-white uppercase tracking-wider block">Strategy-First Approach</h3>
                    <p className="text-[8px] text-brand-zinc-400 mt-1 leading-normal font-sans">We follow a clear strategy-first approach to create impactful and scalable solutions.</p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ── 10. CLIENT REVIEWS CAROUSEL SECTION ───────────────────────── */}
        <ReviewsCarousel />

        {/* Cursive Font Injector for 'Together' */}
        <style dangerouslySetInnerHTML={{
          __html: `
          @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
          .font-cursive {
            font-family: 'Dancing Script', cursive;
          }
        `}} />

        {/* ── 11. BOTTOM CTA BANNER SECTION ──────────────────────────── */}
        <section className="relative overflow-hidden py-14 md:py-20 bg-white dark:bg-[#080710]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 relative z-10">
            <div className="w-full bg-[#0306AC] rounded-[32px] overflow-hidden relative shadow-2xl min-h-[350px] flex items-stretch">

              {/* BG grid dots */}
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff18_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

              {/* Decorative outline circles behind portrait */}
              <div className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[340px] h-[340px] pointer-events-none hidden lg:block select-none opacity-40">
                <svg viewBox="0 0 100 100" className="w-full h-full text-white/20">
                  <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </svg>
              </div>

              {/* Halftone dot grid on right side */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 grid grid-cols-5 gap-2 opacity-25 hidden lg:grid">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div key={i} className="h-1.5 w-1.5 rounded-full bg-white" />
                ))}
              </div>

              {/* Left: copy */}
              <div className="relative z-10 flex flex-col justify-center gap-5 p-8 md:p-12 lg:max-w-[55%]">
                <div className="space-y-0.5">
                  <span className="text-[9px] font-sans font-black tracking-[0.22em] text-[#E9BD36] uppercase block">
                    READY TO GROW YOUR BUSINESS?
                  </span>
                  <div className="h-0.5 w-6 bg-[#E9BD36] mt-1" />
                </div>

                <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black leading-[1.08] tracking-tight text-white">
                  Let's Build Something<br />
                  Amazing{" "}
                  <div className="relative inline-block">
                    <span className="font-cursive text-[#E9BD36] text-4xl sm:text-5xl font-normal pl-1">Together</span>
                    <svg className="absolute left-0 bottom-[-4px] w-full h-2 text-[#E9BD36]" viewBox="0 0 100 10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M 5 5 C 30 8, 70 8, 95 3" />
                    </svg>
                  </div>
                </h2>

                <p className="text-[11.5px] sm:text-sm text-white/75 font-sans leading-relaxed max-w-[420px]">
                  Have a project in mind? Let's discuss your ideas and turn them into powerful digital solutions that drive real results for your business.
                </p>

                <div className="flex items-center gap-4 flex-wrap pt-2">
                  <a
                    href="/#contact"
                    className="group inline-flex items-center gap-3 rounded-full bg-[#E9BD36] px-6 py-3.5 text-[10.5px] font-black uppercase tracking-[0.16em] text-[#080710] hover:bg-[#ffe44a] active:scale-95 transition-all duration-300 shadow-lg"
                  >
                    GET STARTED TODAY
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#080710] text-[#E9BD36] transition-transform duration-300 group-hover:translate-x-1">
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  </a>

                  <button className="inline-flex items-center gap-2.5 text-white text-[11px] font-bold uppercase tracking-widest hover:text-[#E9BD36] transition-colors duration-200">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-white hover:border-[#E9BD36] hover:text-[#E9BD36] transition-all duration-200">
                      <Play className="h-2.5 w-2.5 fill-current ml-0.5" />
                    </span>
                    WATCH OUR STORY
                  </button>
                </div>
              </div>

              {/* Right: portrait graybox + floating card */}
              <div className="hidden lg:flex flex-1 items-end justify-center relative pr-8">
                {/* Portrait placeholder */}
                <div className="relative z-10 w-[240px] h-[320px] bg-zinc-300/20 rounded-t-[24px] flex items-center justify-center text-[10px] font-mono text-white/30 uppercase tracking-wider font-bold self-end border border-white/10 shadow-inner">
                  [ Portrait ]
                </div>

                {/* Let's Connect floating card */}
                <div className="absolute bottom-8 right-0 bg-white/95 dark:bg-[#12121e]/95 backdrop-blur-sm rounded-2xl px-4 py-3.5 shadow-xl border border-white/10 flex items-start gap-3 max-w-[190px] z-20">
                  <div className="h-9 w-9 rounded-xl bg-[#0306AC]/10 flex items-center justify-center shrink-0 text-[#0306AC]">
                    <Headphones className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-black text-brand-dark dark:text-white leading-none">Let's Connect</p>
                    <p className="text-[9px] text-brand-zinc-400 mt-1 leading-snug">We're just a message away to help you grow.</p>
                  </div>
                </div>

                {/* Yellow dot accent */}
                <div className="absolute top-12 right-24 h-3 w-3 rounded-full bg-[#E9BD36] z-20" />
              </div>

            </div>
          </div>
        </section>

      </main>
    </>
  );
}

/* ── Inline Reviews Carousel Component ─────────────────────────────────── */
const REVIEWS = [
  {
    quote: "360 Designs Agency transformed our ideas into a stunning website. Their creativity, professionalism, and support throughout the project were excellent.",
    name: "John Carter",
    role: "CEO, TechNova",
    initial: "J",
    accent: "#0306AC",
  },
  {
    quote: "The team delivered more than we expected. Our online presence has never been better. Highly recommended!",
    name: "Sarah Mitchell",
    role: "Marketing Director, BrightWave",
    initial: "S",
    accent: "#E9BD36",
  },
  {
    quote: "Professional, reliable, and result-driven. 360 Designs Agency is our go-to partner for digital growth.",
    name: "David Thompson",
    role: "Founder, Nexus Solutions",
    initial: "D",
    accent: "#0306AC",
  },
  {
    quote: "Absolutely fantastic service. They understood our vision instantly and delivered beyond our expectations every single step of the way.",
    name: "Emily Rodriguez",
    role: "COO, BrightPath Inc.",
    initial: "E",
    accent: "#E9BD36",
  },
  {
    quote: "From branding to web design — they handled everything flawlessly. Our conversion rate jumped 40% in the first month after launch.",
    name: "Marcus Liu",
    role: "Founder, Apex Digital",
    initial: "M",
    accent: "#0306AC",
  },
];

function ReviewsCarousel() {
  const [active, setActive] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxActive = Math.max(0, REVIEWS.length - itemsPerView);
  const safeActive = Math.min(active, maxActive);

  // If itemsPerView changes, clamp the active slide to safe bounds
  useEffect(() => {
    if (active > maxActive) {
      setActive(maxActive);
    }
  }, [itemsPerView, maxActive, active]);

  const handlePrev = () => {
    setActive((prev) => (prev > 0 ? prev - 1 : maxActive));
  };

  const handleNext = () => {
    setActive((prev) => (prev < maxActive ? prev + 1 : 0));
  };

  return (
    <section className="relative overflow-hidden py-16 md:py-24 border-b border-brand-zinc-200 dark:border-white/10 bg-white dark:bg-[#080710]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="text-center mb-14 flex flex-col items-center">
          <span className="text-[9px] font-sans font-black tracking-widest text-[#0306AC] dark:text-[#E9BD36] uppercase mb-2">
            CLIENT REVIEWS
          </span>
          <div className="h-0.5 w-6 bg-[#E9BD36] mb-4" />
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-brand-dark dark:text-white tracking-tight">
            What Our <span className="text-[#0306AC] dark:text-[#E9BD36]">Clients</span> Say
          </h2>
          <p className="text-xs sm:text-sm text-brand-zinc-500 dark:text-zinc-400 font-sans max-w-lg mt-4 leading-relaxed">
            We take pride in the trust our clients place in us. Here's what they have to say about working with 360 Designs Agency.
          </p>
        </div>

        {/* Carousel Container with Arrows */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-10">

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-[-10px] sm:left-0 top-1/2 -translate-y-1/2 z-20 h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-white dark:bg-[#12121e] border border-brand-zinc-200 dark:border-white/10 shadow-md flex items-center justify-center text-brand-dark dark:text-white hover:scale-105 active:scale-95 transition-all hover:border-[#0306AC]"
            aria-label="Previous reviews"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-[-10px] sm:right-0 top-1/2 -translate-y-1/2 z-20 h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-white dark:bg-[#12121e] border border-brand-zinc-200 dark:border-white/10 shadow-md flex items-center justify-center text-brand-dark dark:text-white hover:scale-105 active:scale-95 transition-all hover:border-[#0306AC]"
            aria-label="Next reviews"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Viewport */}
          <div className="overflow-hidden w-full">
            <motion.div
              className="flex"
              animate={{ x: `-${safeActive * (100 / itemsPerView)}%` }}
              transition={{ type: "spring", stiffness: 220, damping: 26 }}
            >
              {REVIEWS.map((r, i) => (
                <div
                  key={i}
                  className="shrink-0 px-3 transition-all duration-300"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="relative p-6 rounded-2xl bg-white dark:bg-[#12121e] border border-brand-zinc-200/80 dark:border-white/10 shadow-sm flex flex-col justify-between hover:border-[#0306AC]/30 hover:shadow-md h-full min-h-[240px] overflow-hidden">

                    {/* Decorative large quote mark */}
                    <span className="absolute top-4 right-5 text-6xl font-serif leading-none text-brand-zinc-100 dark:text-white/5 select-none pointer-events-none">
                      ❝
                    </span>

                    <div className="space-y-4">
                      {/* Stars */}
                      <div className="flex gap-1 text-amber-400">
                        {[...Array(5)].map((_, si) => (
                          <Star key={si} className="h-3.5 w-3.5 fill-current" />
                        ))}
                      </div>
                      {/* Quote */}
                      <p className="text-[12px] sm:text-[13px] font-medium text-brand-zinc-500 dark:text-zinc-400 leading-relaxed italic relative z-10">
                        "{r.quote}"
                      </p>
                    </div>

                    {/* Bottom: avatar + name */}
                    <div className="mt-6">
                      <div className="flex items-center gap-3">
                        <div
                          className="h-9 w-9 rounded-full flex items-center justify-center font-heading font-black text-sm shadow-sm shrink-0"
                          style={{
                            backgroundColor: r.accent === "#E9BD36" ? "#E9BD36" : "#0306AC",
                            color: r.accent === "#E9BD36" ? "#080710" : "#ffffff",
                          }}
                        >
                          {r.initial}
                        </div>
                        <div>
                          <span className="block text-[10px] font-black text-brand-dark dark:text-white uppercase tracking-wider leading-none">
                            {r.name}
                          </span>
                          <span className="block text-[8.5px] font-semibold text-brand-zinc-400 mt-1 leading-none">
                            {r.role}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Absolute bottom accent line */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-1"
                      style={{ backgroundColor: r.accent === "#E9BD36" ? "#E9BD36" : "#0306AC" }}
                    />

                  </div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: maxActive + 1 }).map((_, di) => (
            <button
              key={di}
              onClick={() => setActive(di)}
              aria-label={`Go to page ${di + 1}`}
              className={`rounded-full transition-all duration-300 ${di === safeActive
                ? "w-6 h-2.5 bg-[#0306AC] dark:bg-[#E9BD36]"
                : "w-2.5 h-2.5 bg-brand-zinc-200 dark:bg-white/20 hover:bg-[#0306AC]/40"
                }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

