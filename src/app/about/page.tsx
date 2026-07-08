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
  Coins
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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

export default function AboutPage() {
  const { aboutOwner } = content;
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      <main className="flex-1 w-full bg-white dark:bg-[#080710] text-brand-dark dark:text-white transition-colors duration-300 relative overflow-hidden">
        
        {/* Awwwards-Level Floating Blurred Mesh Blobs */}
        <div className="absolute top-[3%] left-[-15%] w-[50vw] h-[50vw] rounded-full bg-[#0306AC]/[0.03] dark:bg-[#0306AC]/[0.06] blur-[120px] pointer-events-none select-none -z-10 animate-float-blob" />
        <div className="absolute top-[28%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-[#FFF35C]/[0.02] dark:bg-[#FFF35C]/[0.05] blur-[150px] pointer-events-none select-none -z-10 animate-float-blob-delayed" />
        <div className="absolute bottom-[30%] left-[-12%] w-[48vw] h-[48vw] rounded-full bg-[#0306AC]/[0.02] dark:bg-[#0306AC]/[0.04] blur-[140px] pointer-events-none select-none -z-10 animate-float-blob" />
        <div className="absolute bottom-[5%] right-[-12%] w-[42vw] h-[42vw] rounded-full bg-[#FFF35C]/[0.015] dark:bg-[#FFF35C]/[0.035] blur-[160px] pointer-events-none select-none -z-10 animate-float-blob-delayed" />

        {/* Awwwards-Level Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808007_1px,transparent_1px),linear-gradient(to_bottom,#80808007_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none -z-10" />

        {/* ── 1. HERO SECTION (Badge, Title, CTAs, and Visual Cards Group) ── */}
        <section className="relative overflow-hidden pt-4 pb-4 md:pt-6 md:pb-6 border-b border-brand-zinc-200 dark:border-white/10">
          <div className="absolute inset-0 -z-10 bg-linear-grid-blue-4 [background-size:40px_40px] opacity-[0.05] dark:opacity-[0.08]" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

              {/* Left Column: Heading and CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-5 space-y-6 text-left"
              >
                {/* Yellow Badge */}
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF35C] px-3.5 py-1 text-[9px] font-black uppercase text-brand-dark tracking-widest shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-dark block" />
                  ABOUT 360 DESIGNS AGENCY
                </span>

                <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.08] text-brand-dark dark:text-white">
                  We Build Digital <br />
                  Experiences That <br />
                  <span className="relative inline-block text-[#0306AC] dark:text-[#FFF35C]">
                    Drive Real Growth.
                    <svg className="absolute -bottom-2 left-0 w-full h-3 pointer-events-none text-brand-yellow" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <motion.path
                        d="M 2 5 Q 50 2, 98 4 C 99 4, 99 5, 98 5.5 Q 50 7.5, 2 6 Z"
                        fill="#FFF35C"
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
                    className="group relative inline-flex items-center gap-0 overflow-hidden rounded-full bg-[#0306AC] dark:bg-[#FFF35C] border border-[#0306AC] dark:border-[#FFF35C] active:scale-[0.97] transition-all duration-300"
                  >
                    <span className="relative z-10 pl-6 pr-4 py-[11px] text-[11px] font-black uppercase tracking-wider text-white dark:text-[#080710] group-hover:text-white dark:group-hover:text-[#080710] transition-colors duration-300">
                      LET'S WORK TOGETHER
                    </span>
                    <span className="relative z-10 mr-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#080710] dark:bg-white text-white dark:text-[#080710] transition-colors duration-350">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </a>

                  {/* Watch Our Story */}
                  <button className="flex items-center gap-2.5 text-[11px] font-black uppercase tracking-wider text-brand-dark dark:text-white hover:text-[#0306AC] dark:hover:text-[#FFF35C] transition-colors duration-300 group">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue/5 dark:bg-white/5 border border-brand-zinc-200 dark:border-white/10 group-hover:border-[#0306AC] dark:group-hover:border-[#FFF35C] transition-all duration-300">
                      <Play className="h-3 w-3 fill-current text-brand-dark dark:text-white group-hover:text-[#0306AC] dark:group-hover:text-[#FFF35C]" />
                    </span>
                    WATCH OUR STORY
                  </button>
                </div>
              </motion.div>

              {/* Right Column: Premium Visual Cards Group (100% Mockup Replica) */}
              <div className="lg:col-span-7 relative h-[420px] sm:h-[480px] w-full flex items-center justify-center">

                {/* ── BACKGROUND DECORATIONS ── */}
                {/* Yellow sun sphere */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 0.9, scale: 1 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute right-[12%] top-[8%] h-14 w-14 rounded-full bg-[#FFF35C] opacity-90 blur-[0.5px] z-0 select-none pointer-events-none"
                />
                {/* Concentric circles line art */}
                <motion.svg
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="absolute right-[5%] top-[2%] w-[180px] h-[180px] text-brand-blue/10 dark:text-white/5 z-0 pointer-events-none"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                  <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="0.5" />
                  <circle cx="50" cy="50" r="28" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
                  <circle cx="50" cy="50" r="18" stroke="currentColor" strokeWidth="0.5" />
                </motion.svg>
                {/* Faint blue dot grid decoration */}
                <div className="absolute right-[3%] top-[5%] w-[120px] h-[100px] z-0 pointer-events-none opacity-30 bg-grid-blue-8 [background-size:12px_12px]" />

                {/* ── MOCKUP STACK ── */}

                {/* 1. Large Panel: Performance Overview (Right Side) */}
                <motion.div
                  initial={{ opacity: 0, x: 50, scale: 0.96 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="absolute right-[2%] top-[12%] w-[68%] min-w-[280px] rounded-2xl glass-card-premium p-4.5 z-10"
                >
                  {/* Panel Top bar */}
                  <div className="flex items-center justify-between pb-3.5 border-b border-brand-zinc-150 dark:border-white/5 mb-3.5">
                    <div className="flex items-center gap-1.5">
                      <span className="block h-2 w-2 rounded-full bg-red-400" />
                      <span className="block h-2 w-2 rounded-full bg-yellow-400" />
                      <span className="block h-2 w-2 rounded-full bg-green-400" />
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[7.5px] font-bold text-brand-zinc-450 bg-zinc-50 dark:bg-white/5 px-2 py-0.5 rounded border border-brand-zinc-200">This Month</span>
                      <Calendar className="h-3 w-3 text-brand-zinc-400" />
                      <MoreVertical className="h-3 w-3 text-brand-zinc-400" />
                    </div>
                  </div>

                  {/* Left Sidebar + Graph Container */}
                  <div className="grid grid-cols-12 gap-4">

                    {/* Sidebar menu */}
                    <div className="col-span-3 space-y-1.5 border-r border-brand-zinc-150 dark:border-white/5 pr-2">
                      <div className="flex items-center gap-1 px-1.5 py-1 rounded bg-[#0306AC]/5 dark:bg-white/5 text-[#0306AC] dark:text-[#FFF35C]">
                        <Compass className="h-2.5 w-2.5" />
                        <span className="text-[6.5px] font-bold uppercase tracking-wide">Overview</span>
                      </div>
                      {["Projects", "Analytics", "Reports", "Clients", "Settings"].map((lbl, idx) => (
                        <div key={idx} className="flex items-center gap-1 px-1.5 py-1 text-brand-zinc-455 hover:bg-zinc-50 dark:hover:bg-white/5 rounded transition-colors">
                          <span className="h-1 w-1 rounded-full bg-brand-zinc-300" />
                          <span className="text-[6.5px] font-bold uppercase tracking-wide">{lbl}</span>
                        </div>
                      ))}
                    </div>

                    {/* Graph area */}
                    <div className="col-span-9 space-y-3 relative">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-black text-brand-dark dark:text-white uppercase tracking-tight">Performance Overview</span>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#0306AC]" />
                            <span className="text-[6px] font-bold text-brand-zinc-450">Traffic</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#FFF35C]" />
                            <span className="text-[6px] font-bold text-[#6B7280]">Conversions</span>
                          </div>
                        </div>
                      </div>

                      {/* Bar chart with month labels */}
                      <div className="h-[95px] w-full flex items-end justify-between gap-1 pb-1 pt-2 relative">
                        {/* Y-axis helper lines */}
                        <div className="absolute inset-x-0 top-0 h-px border-t border-dashed border-brand-zinc-200/50 dark:border-white/5" />
                        <div className="absolute inset-x-0 top-1/3 h-px border-t border-dashed border-brand-zinc-200/50 dark:border-white/5" />
                        <div className="absolute inset-x-0 top-2/3 h-px border-t border-dashed border-brand-zinc-200/50 dark:border-white/5" />

                        {[
                          { m: "Jan", t: 30, c: 20 },
                          { m: "Feb", t: 55, c: 35 },
                          { m: "Mar", t: 45, c: 25 },
                          { m: "Apr", t: 70, c: 45 },
                          { m: "May", t: 60, c: 30 },
                          { m: "Jun", t: 85, c: 55 },
                          { m: "Jul", t: 65, c: 40 },
                          { m: "Aug", t: 100, c: 75, highlight: true },
                          { m: "Sep", t: 50, c: 35 },
                          { m: "Oct", t: 68, c: 42 }
                        ].map((d, i) => (
                          <div key={i} className="flex-1 flex flex-col items-center gap-1 relative h-full justify-end">
                            <div className="flex items-end gap-[2px] w-full justify-center">
                              {/* Traffic (blue) */}
                              <div
                                style={{ height: `${d.t * 0.7}px` }}
                                className={`w-1 sm:w-1.5 rounded-t-xs ${d.highlight ? "bg-[#0306AC] dark:bg-white" : "bg-brand-blue/15 dark:bg-white/10"}`}
                              />
                              {/* Conversions (yellow) */}
                              <div
                                style={{ height: `${d.c * 0.7}px` }}
                                className={`w-1 sm:w-1.5 rounded-t-xs ${d.highlight ? "bg-[#FFF35C]" : "bg-brand-yellow/30 dark:bg-brand-yellow/10"}`}
                              />
                            </div>
                            <span className="text-[5.5px] font-bold text-brand-zinc-400 leading-none">{d.m}</span>

                            {/* Aug 2024 Hover Active Tooltip */}
                            {d.highlight && (
                              <div className="absolute bottom-[85px] left-1/2 -translate-x-1/2 bg-[#080710] dark:bg-white text-white dark:text-[#080710] p-1.5 rounded-md shadow-lg border border-white/10 z-20 w-[65px] text-left select-none">
                                <span className="block text-[5.5px] font-black tracking-wide leading-none mb-1">Aug 2024</span>
                                <div className="flex items-center gap-1 text-[5px] font-bold">
                                  <span className="h-1 w-1 rounded-full bg-[#0306AC] dark:bg-[#0306AC]" />
                                  <span>Traffic: 8,420</span>
                                </div>
                                <div className="flex items-center gap-1 text-[5px] font-bold mt-0.5">
                                  <span className="h-1 w-1 rounded-full bg-[#FFF35C]" />
                                  <span>Conv: 6,210</span>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom metrics grid */}
                  <div className="grid grid-cols-4 gap-2 pt-3 border-t border-brand-zinc-150 dark:border-white/5 mt-3.5 items-center">
                    <div>
                      <span className="block text-[5.5px] font-mono text-brand-zinc-400 uppercase tracking-widest leading-none">Total Users</span>
                      <span className="font-heading font-black text-[10px] text-brand-dark mt-0.5 block">24.6K <span className="text-green-500 text-[6px] font-bold ml-0.5">+18.6%</span></span>
                    </div>
                    <div>
                      <span className="block text-[5.5px] font-mono text-brand-zinc-400 uppercase tracking-widest leading-none">New Leads</span>
                      <span className="font-heading font-black text-[10px] text-brand-dark mt-0.5 block">3,214 <span className="text-green-500 text-[6px] font-bold ml-0.5">+24.8%</span></span>
                    </div>
                    <div>
                      <span className="block text-[5.5px] font-mono text-brand-zinc-400 uppercase tracking-widest leading-none">Conversion Rate</span>
                      <span className="font-heading font-black text-[10px] text-brand-dark mt-0.5 block">6.7% <span className="text-green-500 text-[6px] font-bold ml-0.5">+12.4%</span></span>
                    </div>
                    <div className="flex justify-end">
                      <div className="h-6 w-6 rounded-lg bg-[#0306AC] dark:bg-[#FFF35C] text-white dark:text-brand-dark flex items-center justify-center shadow-md">
                        <BarChart2 className="h-3 w-3" />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* 2. Top Left Card: Total Growth Card */}
                <motion.div
                  initial={{ opacity: 0, x: -30, y: -20, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
                  whileHover={{ scale: 1.04, y: -3 }}
                  className="absolute left-[3%] top-[5%] w-[125px] sm:w-[135px] rounded-xl glass-card-premium p-3 z-20"
                >
                  <span className="text-[6px] font-mono font-bold text-brand-zinc-455 uppercase tracking-widest block">Total Growth</span>
                  <span className="font-heading font-black text-sm text-brand-dark mt-0.5 block">+320%</span>
                  <span className="text-[5px] font-bold text-brand-zinc-400 leading-none">vs last year</span>
                  {/* Graph Sparkline */}
                  <div className="h-6 w-full mt-1.5 flex items-end relative">
                    <svg viewBox="0 0 50 15" className="w-full h-full text-[#0306AC]" preserveAspectRatio="none">
                      <path d="M0 12 Q 10 5, 20 10 T 40 2 T 50 1" stroke="currentColor" strokeWidth="1.2" fill="none" />
                      <circle cx="50" cy="1" r="1.5" fill="currentColor" />
                    </svg>
                    {/* Pulsing endpoint dot */}
                    <span className="absolute right-0 top-[-1px] flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0306AC] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#0306AC]"></span>
                    </span>
                  </div>
                </motion.div>

                {/* 3. Middle Left Card: Projects Delivered Card */}
                <motion.div
                  initial={{ opacity: 0, x: -40, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
                  whileHover={{ scale: 1.04, y: -3 }}
                  className="absolute left-[8%] top-[33%] w-[135px] sm:w-[145px] rounded-xl glass-card-premium p-3 z-20"
                >
                  <span className="text-[6px] font-mono font-bold text-brand-zinc-450 uppercase tracking-widest block">Projects Delivered</span>
                  <span className="font-heading font-black text-sm text-brand-dark mt-0.5 block">250+</span>
                  <span className="text-[5.5px] font-bold text-brand-zinc-400 block mt-0.5">Across 20+ Industries</span>
                  <div className="flex items-center justify-between gap-1 mt-3">
                    <div className="flex -space-x-1">
                      <div className="h-4.5 w-4.5 rounded-full bg-brand-blue border border-white text-white text-[5px] font-bold flex items-center justify-center">M</div>
                      <div className="h-4.5 w-4.5 rounded-full bg-[#FFF35C] border border-white text-brand-dark text-[5px] font-bold flex items-center justify-center">A</div>
                      <div className="h-4.5 w-4.5 rounded-full bg-zinc-300 border border-white text-brand-dark text-[5px] font-bold flex items-center justify-center">H</div>
                      <div className="h-4.5 w-4.5 rounded-full bg-zinc-200 border border-white text-brand-dark text-[5px] font-bold flex items-center justify-center">D</div>
                    </div>
                    <span className="text-[6px] font-bold text-green-500 bg-green-500/10 px-1.5 py-0.5 rounded-full shrink-0">↑ 16% this month</span>
                  </div>
                </motion.div>

                {/* 4. Bottom Left Card: Client Satisfaction Card */}
                <motion.div
                  initial={{ opacity: 0, x: -30, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.65 }}
                  whileHover={{ scale: 1.04, y: -3 }}
                  className="absolute left-[9%] bottom-[5%] w-[130px] sm:w-[140px] rounded-xl glass-card-premium p-3 z-20"
                >
                  <span className="text-[6px] font-mono font-bold text-brand-zinc-455 uppercase tracking-widest block">Client Satisfaction</span>
                  <span className="font-heading font-black text-sm text-brand-dark mt-0.5 block">98%</span>
                  <span className="text-[5.5px] font-bold text-brand-zinc-400 block mt-0.5">Happy Clients</span>
                  {/* Satisfaction Progress Semi-Circle */}
                  <div className="absolute right-3 bottom-3 w-8 h-8">
                    <svg viewBox="0 0 36 36" className="w-full h-full text-[#0306AC]">
                      <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="2.5" opacity="0.1" strokeDasharray="50 100" strokeLinecap="round" transform="rotate(-90 18 18)" />
                      <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="49 100" strokeDashoffset="0" strokeLinecap="round" transform="rotate(-90 18 18)" />
                    </svg>
                  </div>
                </motion.div>

              </div>

            </div>
          </div>
        </section>

        {/* ── 2. STATS BAR SECTION (100% Mockup Replica & Animated) ────────── */}
        <section className="relative overflow-hidden py-8 border-b border-brand-zinc-200 dark:border-white/10 bg-zinc-50/50 dark:bg-white/[0.01]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
              className="p-7 rounded-[32px] glass-card-premium flex flex-col md:flex-row gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-brand-zinc-200 dark:divide-white/10"
            >

              {/* Stat 1 */}
              <div className="flex items-center gap-3.5 justify-center md:justify-start md:px-6 py-2.5 md:py-0 flex-1">
                <div className="h-9 w-9 rounded-full bg-[#0306AC]/5 dark:bg-[#FFF35C]/5 flex items-center justify-center text-[#0306AC] dark:text-[#FFF35C] shrink-0 border border-[#0306AC]/10">
                  <Users className="h-4.5 w-4.5" />
                </div>
                <div>
                  <span className="block font-heading font-black text-lg sm:text-xl leading-none text-[#0306AC] dark:text-[#FFF35C]">300+</span>
                  <span className="block text-[8.5px] font-bold text-brand-zinc-500 uppercase tracking-wide mt-1">Happy Clients Worldwide</span>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-center gap-3.5 justify-center md:justify-start md:px-6 py-2.5 md:py-0 flex-1">
                <div className="h-9 w-9 rounded-full bg-[#0306AC]/5 dark:bg-[#FFF35C]/5 flex items-center justify-center text-[#0306AC] dark:text-[#FFF35C] shrink-0 border border-[#0306AC]/10">
                  <FolderClosed className="h-4.5 w-4.5" />
                </div>
                <div>
                  <span className="block font-heading font-black text-lg sm:text-xl leading-none text-[#0306AC] dark:text-[#FFF35C]">250+</span>
                  <span className="block text-[8.5px] font-bold text-brand-zinc-500 uppercase tracking-wide mt-1">Projects Completed</span>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex items-center gap-3.5 justify-center md:justify-start md:px-6 py-2.5 md:py-0 flex-1">
                <div className="h-9 w-9 rounded-full bg-[#0306AC]/5 dark:bg-[#FFF35C]/5 flex items-center justify-center text-[#0306AC] dark:text-[#FFF35C] shrink-0 border border-[#0306AC]/10 font-heading font-black text-xs">
                  7+
                </div>
                <div>
                  <span className="block font-heading font-black text-lg sm:text-xl leading-none text-[#0306AC] dark:text-[#FFF35C]">7+</span>
                  <span className="block text-[8.5px] font-bold text-brand-zinc-500 uppercase tracking-wide mt-1">Years of Experience</span>
                </div>
              </div>

              {/* Stat 4 */}
              <div className="flex items-center gap-3.5 justify-center md:justify-start md:px-6 py-2.5 md:py-0 flex-1">
                <div className="h-9 w-9 rounded-full bg-[#0306AC]/5 dark:bg-[#FFF35C]/5 flex items-center justify-center text-[#0306AC] dark:text-[#FFF35C] shrink-0 border border-[#0306AC]/10">
                  <ShieldCheck className="h-4.5 w-4.5" />
                </div>
                <div>
                  <span className="block font-heading font-black text-lg sm:text-xl leading-none text-[#0306AC] dark:text-[#FFF35C]">98%</span>
                  <span className="block text-[8.5px] font-bold text-brand-zinc-500 uppercase tracking-wide mt-1">Client Satisfaction</span>
                </div>
              </div>

              {/* Stat 5 */}
              <div className="flex items-center gap-3.5 justify-center md:justify-start md:px-6 py-2.5 md:py-0 flex-1">
                <div className="h-9 w-9 rounded-full bg-[#0306AC]/5 dark:bg-[#FFF35C]/5 flex items-center justify-center text-[#0306AC] dark:text-[#FFF35C] shrink-0 border border-[#0306AC]/10">
                  <Users className="h-4.5 w-4.5" />
                </div>
                <div>
                  <span className="block font-heading font-black text-lg sm:text-xl leading-none text-[#0306AC] dark:text-[#FFF35C]">20+</span>
                  <span className="block text-[8.5px] font-bold text-brand-zinc-500 uppercase tracking-wide mt-1">Team Members</span>
                </div>
              </div>

            </motion.div>
          </div>
        </section>

        {/* ── 3. WHO WE ARE SECTION ───────────────────────────────────── */}
        <section className="relative overflow-hidden py-16 md:py-20 border-b border-brand-zinc-200 dark:border-white/10 bg-white dark:bg-[#080710]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
 
              {/* Left Column: Story paragraphs */}
              <div className="lg:col-span-6 space-y-5 text-left">
                <div className="flex flex-col items-start">
                  <span className="text-[10px] font-sans font-black tracking-widest text-[#0306AC] uppercase block">
                    WHO WE ARE
                  </span>
                  <div className="h-0.5 w-6 bg-[#FFF35C] mt-1.5" />
                </div>
 
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark dark:text-white tracking-tight leading-[1.1] pt-1">
                  A Team of <span className="text-[#0306AC] dark:text-[#FFF35C]">Thinkers</span>,<br />
                  Creators & Problem Solvers
                </h2>
 
                <p className="text-xs sm:text-sm text-brand-zinc-550 font-normal font-sans leading-relaxed max-w-xl">
                  At 360 Designs Agency, we combine creativity, strategy, and technology to build digital solutions that help businesses stand out, grow faster, and achieve long-term success.
                </p>
 
                {/* Checklist Bullet Points */}
                <div className="space-y-3.5 pt-2">
                  <div className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-[#0306AC] flex items-center justify-center shrink-0 shadow-sm">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-xs font-medium text-brand-dark dark:text-white">Data-driven strategies that deliver measurable results</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-[#0306AC] flex items-center justify-center shrink-0 shadow-sm">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-xs font-medium text-brand-dark dark:text-white">Creative designs that captivate and convert</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-[#0306AC] flex items-center justify-center shrink-0 shadow-sm">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-xs font-medium text-brand-dark dark:text-white">Transparent communication and dedicated support</span>
                  </div>
                </div>
              </div>
              
              {/* Right Column: High Fidelity Office Placeholder */}
              <div className="lg:col-span-6 relative flex justify-end">
                {/* Background blue dot grid decorator */}
                <div className="absolute left-[-10px] top-[-10px] w-[80px] h-[80px] z-0 pointer-events-none opacity-20 bg-grid-blue-8 [background-size:12px_12px]" />
                
                {/* Bent yellow bracket decorator */}
                <div className="absolute right-[-12px] top-[10%] bottom-[15%] w-4 border-r border-t border-b border-[#FFF35C] rounded-r-xl pointer-events-none z-0" />
                <div className="absolute right-[-16px] bottom-[15%] h-2 w-2 rounded-full bg-[#FFF35C] pointer-events-none z-0" />
 
                <div className="relative w-full max-w-[480px] aspect-[1.58] rounded-[24px] overflow-hidden border border-brand-zinc-200 dark:border-white/10 shadow-lg bg-zinc-50 dark:bg-zinc-900/60 flex items-center justify-center z-10">
                  <div className="absolute inset-0 bg-linear-grid-blue-4 opacity-[0.06] [background-size:24px_24px]" />
                  <div className="flex flex-col items-center gap-2 text-center relative z-10">
                    <ImageIcon className="h-9 w-9 text-zinc-400 dark:text-zinc-650 animate-pulse" />
                    <span className="text-[9px] font-mono font-bold text-brand-zinc-400 uppercase tracking-widest leading-none mt-1">Placeholder: Team Workspace Image</span>
                  </div>
                </div>
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
              <div className="flex-1 w-full bg-white dark:bg-[#12121e] rounded-2xl border-r-4 border-r-[#FFF35C] border border-brand-zinc-200 dark:border-white/5 p-6 shadow-sm flex flex-col justify-between min-h-[220px] z-10 hover:border-brand-blue/30 transition-colors">
                <div className="flex gap-4 items-start">
                  <div className="space-y-1.5 flex-1">
                    <span className="text-[10px] font-sans font-black tracking-widest text-[#0306AC] dark:text-[#FFF35C] uppercase block">OUR VISION</span>
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
                    <div className="h-7 w-7 rounded-full bg-[#FFF35C]/10 flex items-center justify-center text-[#FFF35C] shrink-0 border border-[#FFF35C]/20">
                      <Star className="h-3.5 w-3.5" fill="currentColor" />
                    </div>
                    <div>
                      <span className="block font-heading font-black text-xs text-brand-dark dark:text-white leading-none">98%</span>
                      <span className="block text-[7px] font-bold text-[#6B7280] uppercase tracking-wide mt-0.5">Client Satisfaction</span>
                    </div>
                  </div>
                  <div className="w-px h-6 bg-brand-zinc-200 dark:bg-white/5" />
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-full bg-[#FFF35C]/10 flex items-center justify-center text-[#FFF35C] shrink-0 border border-[#FFF35C]/20">
                      <TrendingUp className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <span className="block font-heading font-black text-xs text-brand-dark dark:text-white leading-none">2.4M+</span>
                      <span className="block text-[7px] font-bold text-[#6B7280] uppercase tracking-wide mt-0.5">Revenue Impact</span>
                    </div>
                  </div>
                  <div className="w-px h-6 bg-brand-zinc-200 dark:bg-white/5" />
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-full bg-[#FFF35C]/10 flex items-center justify-center text-[#FFF35C] shrink-0 border border-[#FFF35C]/20">
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
              <div className="h-0.5 w-6 bg-[#FFF35C] mb-3" />
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark dark:text-white tracking-tight pt-1">
                Solutions That Drive <span className="text-[#0306AC] dark:text-[#FFF35C]">Real Growth</span>
              </h2>
              <p className="text-xs text-brand-zinc-500 font-normal font-sans leading-relaxed max-w-lg mt-3">
                We offer end-to-end digital solutions designed to help your brand stand out, attract the right audience, and achieve measurable success.
              </p>
            </div>
 
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">
 
              {/* Service Card 1 */}
              <div className="p-5 rounded-2xl glass-card-premium relative overflow-hidden group hover:border-[#0306AC] dark:hover:border-[#FFF35C] flex flex-col h-[230px]">
                <div className="h-10 w-10 rounded-xl bg-[#0306AC]/5 dark:bg-white/5 flex items-center justify-center text-[#0306AC] dark:text-[#FFF35C] shrink-0 border border-[#0306AC]/10">
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
              <div className="p-5 rounded-2xl glass-card-premium relative overflow-hidden group hover:border-[#0306AC] dark:hover:border-[#FFF35C] flex flex-col h-[230px]">
                <div className="h-10 w-10 rounded-xl bg-[#0306AC]/5 dark:bg-white/5 flex items-center justify-center text-[#0306AC] dark:text-[#FFF35C] shrink-0 border border-[#0306AC]/10">
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
              <div className="p-5 rounded-2xl glass-card-premium relative overflow-hidden group hover:border-[#0306AC] dark:hover:border-[#FFF35C] flex flex-col h-[230px]">
                <div className="h-10 w-10 rounded-xl bg-[#0306AC]/5 dark:bg-white/5 flex items-center justify-center text-[#0306AC] dark:text-[#FFF35C] shrink-0 border border-[#0306AC]/10">
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
              <div className="p-5 rounded-2xl glass-card-premium relative overflow-hidden group hover:border-[#0306AC] dark:hover:border-[#FFF35C] flex flex-col h-[230px]">
                <div className="h-10 w-10 rounded-xl bg-[#0306AC]/5 dark:bg-white/5 flex items-center justify-center text-[#0306AC] dark:text-[#FFF35C] shrink-0 border border-[#0306AC]/10">
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
              <div className="p-5 rounded-2xl glass-card-premium relative overflow-hidden group hover:border-[#0306AC] dark:hover:border-[#FFF35C] flex flex-col h-[230px]">
                <div className="h-10 w-10 rounded-xl bg-[#0306AC]/5 dark:bg-white/5 flex items-center justify-center text-[#0306AC] dark:text-[#FFF35C] shrink-0 border border-[#0306AC]/10">
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
              <div className="p-5 rounded-2xl glass-card-premium relative overflow-hidden group hover:border-[#0306AC] dark:hover:border-[#FFF35C] flex flex-col h-[230px]">
                <div className="h-10 w-10 rounded-xl bg-[#0306AC]/5 dark:bg-white/5 flex items-center justify-center text-[#0306AC] dark:text-[#FFF35C] shrink-0 border border-[#0306AC]/10">
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
              <div className="h-0.5 w-6 bg-[#FFF35C] mb-3" />
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark dark:text-white tracking-tight pt-1">
                A Simple 5-Step Process That <span className="text-[#0306AC] dark:text-[#FFF35C]">Delivers Results</span>
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
                  <span className="absolute top-[-3px] left-1/2 -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-[#0306AC] dark:bg-[#FFF35C] shadow-sm animate-pulse" />
                </div>
                
                <div className="h-12 w-12 rounded-full border border-brand-zinc-200 dark:border-white/10 text-[#0306AC] dark:text-[#FFF35C] flex items-center justify-center bg-white dark:bg-[#12121e] shadow-md group-hover:border-[#0306AC] transition-colors duration-300 relative z-10">
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
                  <span className="absolute top-[-3px] left-1/2 -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-[#0306AC] dark:bg-[#FFF35C] shadow-sm animate-pulse" />
                </div>
                
                <div className="h-12 w-12 rounded-full border border-brand-zinc-200 dark:border-white/10 text-[#0306AC] dark:text-[#FFF35C] flex items-center justify-center bg-white dark:bg-[#12121e] shadow-md group-hover:border-[#0306AC] transition-colors duration-300 relative z-10">
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
                  <span className="absolute top-[-3px] left-1/2 -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-[#0306AC] dark:bg-[#FFF35C] shadow-sm animate-pulse" />
                </div>
                
                <div className="h-12 w-12 rounded-full border border-brand-zinc-200 dark:border-white/10 text-[#0306AC] dark:text-[#FFF35C] flex items-center justify-center bg-white dark:bg-[#12121e] shadow-md group-hover:border-[#0306AC] transition-colors duration-300 relative z-10">
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
                  <span className="absolute top-[-3px] left-1/2 -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-[#0306AC] dark:bg-[#FFF35C] shadow-sm animate-pulse" />
                </div>
                
                <div className="h-12 w-12 rounded-full border border-brand-zinc-200 dark:border-white/10 text-[#0306AC] dark:text-[#FFF35C] flex items-center justify-center bg-white dark:bg-[#12121e] shadow-md group-hover:border-[#0306AC] transition-colors duration-300 relative z-10">
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
                <div className="h-12 w-12 rounded-full border border-brand-zinc-200 dark:border-white/10 text-[#0306AC] dark:text-[#FFF35C] flex items-center justify-center bg-white dark:bg-[#12121e] shadow-md group-hover:border-[#0306AC] transition-colors duration-300 relative z-10">
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
              <div className="h-0.5 w-6 bg-[#FFF35C] mb-3" />
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">
                Empowering Businesses Across <span className="text-[#0306AC] dark:text-[#FFF35C]">Every Industry</span>
              </h2>
            </div>
 
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 max-w-6xl mx-auto">
 
              {/* Card 1: E-Commerce */}
              <div className="p-4 rounded-2xl bg-white dark:bg-[#12121e] border border-brand-zinc-200 dark:border-white/10 shadow-sm flex flex-col items-center justify-center gap-2 group hover:border-[#0306AC] transition-all cursor-pointer h-[95px]">
                <ShoppingCart className="h-5 w-5 text-[#0306AC] dark:text-[#FFF35C]" />
                <span className="text-[10px] font-bold text-brand-dark dark:text-white text-center mt-1">E-Commerce</span>
              </div>
 
              {/* Card 2: Real Estate */}
              <div className="p-4 rounded-2xl bg-white dark:bg-[#12121e] border border-brand-zinc-200 dark:border-white/10 shadow-sm flex flex-col items-center justify-center gap-2 group hover:border-[#0306AC] transition-all cursor-pointer h-[95px]">
                <Building2 className="h-5 w-5 text-[#0306AC] dark:text-[#FFF35C]" />
                <span className="text-[10px] font-bold text-brand-dark dark:text-white text-center mt-1">Real Estate</span>
              </div>
 
              {/* Card 3: Healthcare */}
              <div className="p-4 rounded-2xl bg-white dark:bg-[#12121e] border border-brand-zinc-200 dark:border-white/10 shadow-sm flex flex-col items-center justify-center gap-2 group hover:border-[#0306AC] transition-all cursor-pointer h-[95px]">
                <Heart className="h-5 w-5 text-[#0306AC] dark:text-[#FFF35C]" />
                <span className="text-[10px] font-bold text-brand-dark dark:text-white text-center mt-1">Healthcare</span>
              </div>
 
              {/* Card 4: Education */}
              <div className="p-4 rounded-2xl bg-white dark:bg-[#12121e] border border-brand-zinc-200 dark:border-white/10 shadow-sm flex flex-col items-center justify-center gap-2 group hover:border-[#0306AC] transition-all cursor-pointer h-[95px]">
                <GraduationCap className="h-5 w-5 text-[#0306AC] dark:text-[#FFF35C]" />
                <span className="text-[10px] font-bold text-brand-dark dark:text-white text-center mt-1">Education</span>
              </div>
 
              {/* Card 5: Finance */}
              <div className="p-4 rounded-2xl bg-white dark:bg-[#12121e] border border-brand-zinc-200 dark:border-white/10 shadow-sm flex flex-col items-center justify-center gap-2 group hover:border-[#0306AC] transition-all cursor-pointer h-[95px]">
                <Coins className="h-5 w-5 text-[#0306AC] dark:text-[#FFF35C]" />
                <span className="text-[10px] font-bold text-brand-dark dark:text-white text-center mt-1">Finance</span>
              </div>
 
              {/* Card 6: SaaS & Tech */}
              <div className="p-4 rounded-2xl bg-white dark:bg-[#12121e] border border-brand-zinc-200 dark:border-white/10 shadow-sm flex flex-col items-center justify-center gap-2 group hover:border-[#0306AC] transition-all cursor-pointer h-[95px]">
                <Database className="h-5 w-5 text-[#0306AC] dark:text-[#FFF35C]" />
                <span className="text-[10px] font-bold text-brand-dark dark:text-white text-center mt-1">SaaS & Tech</span>
              </div>
 
              {/* Card 7: Hospitality */}
              <div className="p-4 rounded-2xl bg-white dark:bg-[#12121e] border border-brand-zinc-200 dark:border-white/10 shadow-sm flex flex-col items-center justify-center gap-2 group hover:border-[#0306AC] transition-all cursor-pointer h-[95px]">
                <Utensils className="h-5 w-5 text-[#0306AC] dark:text-[#FFF35C]" />
                <span className="text-[10px] font-bold text-brand-dark dark:text-white text-center mt-1">Hospitality</span>
              </div>
 
              {/* Card 8: Legal */}
              <div className="p-4 rounded-2xl bg-white dark:bg-[#12121e] border border-brand-zinc-200 dark:border-white/10 shadow-sm flex flex-col items-center justify-center gap-2 group hover:border-[#0306AC] transition-all cursor-pointer h-[95px]">
                <Scale className="h-5 w-5 text-[#0306AC] dark:text-[#FFF35C]" />
                <span className="text-[10px] font-bold text-brand-dark dark:text-white text-center mt-1">Legal</span>
              </div>
 
            </div>
          </div>
        </section>

        {/* ── 8. WHY BUSINESSES CHOOSE US SECTION ─────────────────────── */}
        <section className="relative overflow-hidden py-16 md:py-20 border-b border-brand-zinc-200 dark:border-white/10 bg-zinc-50/50 dark:bg-white/[0.01]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 relative z-10">
 
            <div className="text-left mb-12 flex flex-col items-start">
              <span className="text-[10px] font-sans font-black tracking-widest text-[#0306AC] dark:text-[#FFF35C] uppercase mb-2">
                // WHY BUSINESSES CHOOSE US
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
                Results. Reliability. <span className="text-[#0306AC] dark:text-[#FFF35C]">Relationship.</span>
              </h2>
            </div>
 
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
 
              {/* Left Column: Team Picture */}
              <div className="lg:col-span-5 relative w-full flex justify-center">
                <div className="relative w-full max-w-[400px] aspect-[1.25] rounded-[24px] overflow-hidden border border-brand-zinc-200 dark:border-white/10 shadow-lg">
                  <Image
                    src="/blog4.png"
                    alt="Results Reliability Relationship"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover"
                  />
                </div>
              </div>
 
              {/* Right Column: 6 features in a 2x3 grid (Bento premium blocks) */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
 
                {/* Feature 1 */}
                <div className="p-5 rounded-2xl glass-card-premium flex gap-3.5 hover:border-brand-blue/30">
                  <div className="h-8 w-8 rounded-lg bg-[#0306AC]/5 dark:bg-white/5 flex items-center justify-center text-[#0306AC] dark:text-[#FFF35C] shrink-0 border border-[#0306AC]/10">
                    <TrendingUp className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xs text-brand-dark dark:text-white">Proven Results</h3>
                    <p className="text-[10px] font-normal text-brand-zinc-500 mt-1 leading-relaxed">We focus on measurable outcomes that grow your business.</p>
                  </div>
                </div>
 
                {/* Feature 2 */}
                <div className="p-5 rounded-2xl glass-card-premium flex gap-3.5 hover:border-brand-blue/30">
                  <div className="h-8 w-8 rounded-lg bg-[#0306AC]/5 dark:bg-white/5 flex items-center justify-center text-[#0306AC] dark:text-[#FFF35C] shrink-0 border border-[#0306AC]/10">
                    <Palette className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xs text-brand-dark dark:text-white">Creative Excellence</h3>
                    <p className="text-[10px] font-normal text-brand-zinc-500 mt-1 leading-relaxed">Unique designs and strategies that make your brand stand out.</p>
                  </div>
                </div>
 
                {/* Feature 3 */}
                <div className="p-5 rounded-2xl glass-card-premium flex gap-3.5 hover:border-brand-blue/30">
                  <div className="h-8 w-8 rounded-lg bg-[#0306AC]/5 dark:bg-white/5 flex items-center justify-center text-[#0306AC] dark:text-[#FFF35C] shrink-0 border border-[#0306AC]/10">
                    <Eye className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xs text-brand-dark dark:text-white">Transparent Process</h3>
                    <p className="text-[10px] font-normal text-brand-zinc-500 mt-1 leading-relaxed">Clear communication and full visibility at every step.</p>
                  </div>
                </div>
 
                {/* Feature 4 */}
                <div className="p-5 rounded-2xl glass-card-premium flex gap-3.5 hover:border-brand-blue/30">
                  <div className="h-8 w-8 rounded-lg bg-[#0306AC]/5 dark:bg-white/5 flex items-center justify-center text-[#0306AC] dark:text-[#FFF35C] shrink-0 border border-[#0306AC]/10">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xs text-brand-dark dark:text-white">On-Time Delivery</h3>
                    <p className="text-[10px] font-normal text-brand-zinc-500 mt-1 leading-relaxed">We respect deadlines and deliver on time, every time.</p>
                  </div>
                </div>
 
                {/* Feature 5 */}
                <div className="p-5 rounded-2xl glass-card-premium flex gap-3.5 hover:border-brand-blue/30">
                  <div className="h-8 w-8 rounded-lg bg-[#0306AC]/5 dark:bg-white/5 flex items-center justify-center text-[#0306AC] dark:text-[#FFF35C] shrink-0 border border-[#0306AC]/10">
                    <Users className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xs text-brand-dark dark:text-white">Dedicated Support</h3>
                    <p className="text-[10px] font-normal text-brand-zinc-500 mt-1 leading-relaxed">Our team is always here to support your growth.</p>
                  </div>
                </div>
 
                {/* Feature 6 */}
                <div className="p-5 rounded-2xl glass-card-premium flex gap-3.5 hover:border-brand-blue/30">
                  <div className="h-8 w-8 rounded-lg bg-[#0306AC]/5 dark:bg-white/5 flex items-center justify-center text-[#0306AC] dark:text-[#FFF35C] shrink-0 border border-[#0306AC]/10">
                    <Users className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xs text-brand-dark dark:text-white">Long-Term Partnership</h3>
                    <p className="text-[10px] font-normal text-brand-zinc-500 mt-1 leading-relaxed">We build lasting relationships, not just projects.</p>
                  </div>
                </div>
 
              </div>
 
            </div>
          </div>
        </section>
 
        {/* ── 9. ABOUT FOUNDER SECTION ─────────────────────────────────── */}
        <section className="relative overflow-hidden py-16 md:py-20 border-b border-[#E5E7EB] dark:border-white/10 bg-white dark:bg-[#080710]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
 
              {/* Left Column: Bio & Signature */}
              <div className="lg:col-span-7 space-y-5 text-left">
                <span className="text-[10px] font-sans font-black tracking-widest text-[#0306AC] dark:text-[#FFF35C] uppercase block">// ABOUT THE FOUNDER</span>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight leading-tight">
                  Hi, I'm <span className="text-[#0306AC] dark:text-[#FFF35C]">Ahsan</span>
                </h2>
 
                <div className="space-y-3.5 text-xs sm:text-sm font-normal font-sans leading-relaxed text-brand-zinc-500">
                  <p>{aboutOwner.bioParagraph1}</p>
                  <p>{aboutOwner.bioParagraph2}</p>
                </div>
 
                {/* Handwritten brush signature: viewport scroll-triggered SVG stroke draw */}
                <div className="pt-4 select-none">
                  <svg className="w-40 h-16 text-[#0306AC] dark:text-[#FFF35C]" viewBox="0 0 150 50" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <motion.path
                      d="M 15 35 C 25 15, 35 15, 42 38 C 50 18, 58 18, 65 35 C 72 20, 80 20, 85 35 C 92 15, 100 25, 105 15 C 112 30, 118 35, 130 25 M 10 42 Q 75 35, 140 38"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </svg>
                </div>
              </div>
 
              {/* Right Column: 4 grid stat cards (2x2) */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
 
                {/* Card 1 */}
                <div className="p-5 rounded-2xl glass-card-premium flex flex-col justify-between h-[110px] hover:border-brand-blue/30">
                  <div className="flex justify-between items-start">
                    <Star className="h-5 w-5 text-[#FFF35C]" fill="#FFF35C" />
                    <span className="font-heading font-black text-lg text-[#0306AC] dark:text-[#FFF35C] leading-none">7+</span>
                  </div>
                  <span className="text-[9.5px] font-black text-brand-dark dark:text-white uppercase tracking-wider block">7+ Years Experience</span>
                </div>
 
                {/* Card 2 */}
                <div className="p-5 rounded-2xl glass-card-premium flex flex-col justify-between h-[110px] hover:border-brand-blue/30">
                  <div className="flex justify-between items-start">
                    <FolderClosed className="h-5 w-5 text-brand-blue" />
                    <span className="font-heading font-black text-lg text-[#0306AC] dark:text-[#FFF35C] leading-none">300+</span>
                  </div>
                  <span className="text-[9.5px] font-black text-brand-dark dark:text-white uppercase tracking-wider block">300+ Projects Completed</span>
                </div>
 
                {/* Card 3 */}
                <div className="p-5 rounded-2xl glass-card-premium flex flex-col justify-between h-[110px] hover:border-brand-blue/30">
                  <div className="flex justify-between items-start">
                    <Globe className="h-5 w-5 text-brand-blue" />
                    <span className="font-heading font-black text-lg text-[#0306AC] dark:text-[#FFF35C] leading-none">Global</span>
                  </div>
                  <span className="text-[9.5px] font-black text-brand-dark dark:text-white uppercase tracking-wider block">Global Client Base</span>
                </div>
 
                {/* Card 4 */}
                <div className="p-5 rounded-2xl glass-card-premium flex flex-col justify-between h-[110px] hover:border-brand-blue/30">
                  <div className="flex justify-between items-start">
                    <FileText className="h-5 w-5 text-brand-blue" />
                    <span className="font-heading font-black text-lg text-[#0306AC] dark:text-[#FFF35C] leading-none">Strategy</span>
                  </div>
                  <span className="text-[9.5px] font-black text-brand-dark dark:text-white uppercase tracking-wider block">Strategy-First Approach</span>
                </div>
 
              </div>

            </div>
          </div>
        </section>

        {/* ── 10. CLIENT REVIEWS SECTION ──────────────────────────────── */}
        <section className="relative overflow-hidden py-16 md:py-20 border-b border-brand-zinc-200 dark:border-white/10 bg-zinc-50/50 dark:bg-white/[0.01]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 relative z-10">

            <div className="text-center mb-12 flex flex-col items-center">
              <span className="text-[10px] font-sans font-black tracking-widest text-[#0306AC] dark:text-[#FFF35C] uppercase mb-2">
                // CLIENT REVIEWS
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
                What Our <span className="text-[#0306AC] dark:text-[#FFF35C]">Clients Say</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

              {/* Review 1 */}
              <div className="p-5.5 rounded-2xl glass-card-premium flex flex-col justify-between h-[230px] hover:border-[#0306AC] transition-all">
                <div>
                  <div className="flex gap-1 mb-3 text-amber-500">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-current" />)}
                  </div>
                  <p className="text-[11.5px] font-semibold text-brand-zinc-500 leading-relaxed italic">
                    "360 Designs Agency transformed our ideas into a stunning website. Their creativity and support throughout the project were excellent."
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-3 border-t border-brand-zinc-100 dark:border-white/5">
                  <div className="h-7 w-7 rounded-full bg-brand-blue text-white dark:text-[#080710] font-heading font-black text-xs flex items-center justify-center border border-white/10 shadow-sm">
                    J
                  </div>
                  <div>
                    <span className="block text-[10px] font-black text-brand-dark uppercase tracking-wider leading-none">John Carter</span>
                    <span className="block text-[7px] font-bold text-brand-zinc-400 mt-1 leading-none">CEO, TechWave</span>
                  </div>
                </div>
              </div>
 
              {/* Review 2 */}
              <div className="p-5.5 rounded-2xl glass-card-premium flex flex-col justify-between h-[230px] hover:border-[#0306AC] transition-all">
                <div>
                  <div className="flex gap-1 mb-3 text-amber-500">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-current" />)}
                  </div>
                  <p className="text-[11.5px] font-semibold text-brand-zinc-500 leading-relaxed italic">
                    "The team delivered more than we expected. Our online presence has never been better. Highly recommended!"
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-3 border-t border-brand-zinc-100 dark:border-white/5">
                  <div className="h-7 w-7 rounded-full bg-brand-blue text-white dark:text-[#080710] font-heading font-black text-xs flex items-center justify-center border border-white/10 shadow-sm">
                    S
                  </div>
                  <div>
                    <span className="block text-[10px] font-black text-brand-dark uppercase tracking-wider leading-none">Sarah Mitchell</span>
                    <span className="block text-[7px] font-bold text-brand-zinc-400 mt-1 leading-none">Marketing Director, BrightView</span>
                  </div>
                </div>
              </div>
 
              {/* Review 3 */}
              <div className="p-5.5 rounded-2xl glass-card-premium flex flex-col justify-between h-[230px] hover:border-[#0306AC] transition-all">
                <div>
                  <div className="flex gap-1 mb-3 text-amber-500">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-current" />)}
                  </div>
                  <p className="text-[11.5px] font-semibold text-brand-zinc-500 leading-relaxed italic">
                    "Professional, reliable, and result-driven. 360 Designs Agency is our go-to partner for digital growth."
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-3 border-t border-brand-zinc-100 dark:border-white/5">
                  <div className="h-7 w-7 rounded-full bg-brand-blue text-white dark:text-[#080710] font-heading font-black text-xs flex items-center justify-center border border-white/10 shadow-sm">
                    D
                  </div>
                  <div>
                    <span className="block text-[10px] font-black text-brand-dark uppercase tracking-wider leading-none">David Thompson</span>
                    <span className="block text-[7px] font-bold text-brand-zinc-400 mt-1 leading-none">Founder, Nexus Solutions</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 11. BOTTOM CTA BANNER SECTION ──────────────────────────── */}
        <section className="relative overflow-hidden py-16 md:py-20 bg-white dark:bg-[#080710]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 relative z-10">
            <div className="w-full bg-[#0306AC] rounded-[24px] p-8 md:p-12 text-center text-white relative overflow-hidden shadow-2xl">

              {/* Overlay graphic grid lines */}
              <div className="absolute inset-0 bg-linear-grid-white-3 [background-size:32px_32px] opacity-10 pointer-events-none" />

              <div className="relative z-10 max-w-2xl mx-auto space-y-5">
                <span className="text-[8px] font-sans font-black tracking-widest text-[#FFF35C] uppercase block">
                  READY TO GROW YOUR BUSINESS?
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold leading-none tracking-tight">
                  Let's Build Something <br />
                  Amazing Together
                </h2>

                <div className="pt-4 flex justify-center">
                  <a
                    href="/#contact"
                    className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#FFF35C] px-7 py-3.5 text-xs font-black uppercase tracking-[0.15em] text-[#080710] shadow-[0_4px_20px_rgba(255,243,92,0.3)] active:scale-[0.97] transition-all duration-300 hover:bg-[#ffe65c]"
                  >
                    Get Started Today
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#080710] text-[#FFF35C] transition-transform duration-300 group-hover:translate-x-1">
                      <Play className="h-2 w-2 fill-current" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
