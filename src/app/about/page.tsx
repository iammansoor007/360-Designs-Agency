"use client";
 
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { 
  ArrowRight, 
  Target, 
  Compass, 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  CheckCircle2, 
  Building2, 
  Globe, 
  Layers, 
  Award,
  ArrowUpRight,
  TrendingUp,
  Search,
  Check,
  MapPin,
  Star
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
 
// ── Odometer rolling digits for founder stats ──────────────────────
function Digit({ char, isActive }: { char: string; isActive: boolean }) {
  const isNumber = !isNaN(parseInt(char));
  const targetDigit = isNumber ? parseInt(char) : 0;
 
  if (!isNumber) {
    return <span className="inline-block">{char}</span>;
  }
 
  return (
    <span className="relative inline-block h-[1.1em] overflow-hidden leading-none select-none">
      <span className="invisible block">9</span>
      <motion.span
        initial={{ y: "0%" }}
        animate={isActive ? { y: `-${targetDigit * 10}%` } : { y: "0%" }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 left-0 flex flex-col font-heading font-black"
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
          <span key={n} className="h-[1.1em] flex items-center justify-center">
            {n}
          </span>
        ))}
      </motion.span>
    </span>
  );
}
 
function RollingNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });
  const digits = value.toString().split("");
 
  return (
    <span ref={ref} className="inline-flex items-baseline font-heading font-black">
      {digits.map((char, index) => (
        <Digit key={index} char={char} isActive={isInView} />
      ))}
      {suffix && <span className="inline-block font-heading font-black">{suffix}</span>}
    </span>
  );
}
 
// ── Animated Circular Stat Ring ────────────────────────────────────
const RADIUS = 34;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
 
function AnimatedStat({
  value,
  label,
  sublabel,
  percentage,
}: {
  value: string;
  label: string;
  sublabel: string;
  percentage: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-80px" });
  const [displayed, setDisplayed] = useState(value.replace(/[0-9.]/g, "0"));
  const [dotProgress, setDotProgress] = useState(0);
  const [isDark, setIsDark] = useState(false);
 
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);
 
  useEffect(() => {
    if (isInView) {
      const isPercent = value.includes("%");
      const suffix = isPercent ? "%" : value.replace(/[0-9.]/g, "");
      const numeric = parseFloat(value.replace(/[^0-9.]/g, ""));
      const DURATION = 1200;
      const startTime = performance.now() + 100;
      let rafId: number;
      
      const tick = (now: number) => {
        const elapsed = Math.max(0, now - startTime);
        const raw = Math.min(elapsed / DURATION, 1);
        const eased = 1 - Math.pow(1 - raw, 4);
        
        setDisplayed(Math.round(eased * numeric).toString() + suffix);
        setDotProgress(eased * percentage);
        
        if (raw < 1) {
          rafId = requestAnimationFrame(tick);
        } else {
          setDotProgress(percentage);
        }
      };
      
      rafId = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(rafId);
    } else {
      setDisplayed(value.replace(/[0-9.]/g, "0"));
      setDotProgress(0);
    }
  }, [isInView, percentage, value]);
 
  const dotAngle = 2 * Math.PI * dotProgress;
  const dotX = 41 + RADIUS * Math.cos(dotAngle - Math.PI / 2);
  const dotY = 41 + RADIUS * Math.sin(dotAngle - Math.PI / 2);
  
  const gradientId = `ringGradient-${label.replace(/[^a-zA-Z0-9]/g, "")}`;
 
  return (
    <div ref={ref} className="flex flex-col items-center gap-2 text-center flex-1">
      <div className="relative w-[80px] h-[80px] sm:w-[90px] sm:h-[90px]">
        <div className="absolute inset-0 rounded-full bg-brand-blue/5 dark:bg-brand-yellow/5 blur-sm" />
        <svg viewBox="0 0 82 82" className="relative w-full h-full">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={isDark ? "#FFF35C" : "#0306AC"} />
              <stop offset="100%" stopColor={isDark ? "#FFA800" : "#2563EB"} />
            </linearGradient>
          </defs>
          <circle
            cx="41" cy="41" r={RADIUS}
            fill="none"
            stroke={isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(3, 6, 172, 0.05)"}
            strokeWidth="3"
          />
          <circle
            cx="41" cy="41" r={RADIUS}
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth="3"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={CIRCUMFERENCE * (1 - dotProgress)}
            strokeLinecap="round"
          />
          <circle
            cx={dotX} cy={dotY} r="2.5"
            fill={isDark ? "#FFF35C" : "#0306AC"}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <span className="font-heading font-black text-base sm:text-lg text-brand-dark dark:text-white leading-none">
            {displayed}
          </span>
        </div>
      </div>
      <div>
        <h4 className="font-heading font-black text-[11px] text-brand-dark dark:text-white tracking-tight">{label}</h4>
        <p className="text-[8px] font-semibold text-brand-zinc-400 uppercase tracking-widest mt-0.5">{sublabel}</p>
      </div>
    </div>
  );
}
 
export default function AboutPage() {
  const { aboutOwner } = content;
  const [activeHub, setActiveHub] = useState<string>("us");
 
  // Custom Services
  const servicesList = [
    { num: "01", title: "Search Siloing & SEO", desc: "Structuring semantic page siloing and index optimization to scale organic inbound customer pipelines." },
    { num: "02", title: "Bespoke Next.js Builds", desc: "Engineered cleanly on Next.js. Fast static load times, liquid layouts, and clean visual assets." },
    { num: "03", title: "Conversion Copywriting", desc: "Structuring site copywriting focused strictly on value propositions, lead generation, and demos." }
  ];

  // Process steps
  const processSteps = [
    { num: "01", title: "Technical Audit", desc: "Analyzing backlink silos and content keyword gaps." },
    { num: "02", title: "Creative Layouts", desc: "Drafting high-end, responsive custom UI wireframes." },
    { num: "03", title: "Next.js Build", desc: "Developing fast, static React sites with clean assets." },
    { num: "04", title: "SEO Optimization", desc: "Acquiring targeted authority backlinks and indexing." }
  ];
 
  const mapsHubs = [
    { id: "us", name: "B2B SaaS Hub (Casper)", x: "25%", y: "40%", details: "Dominating local map profiles & keyword authority hierarchies." },
    { id: "uk", name: "E-Commerce Hub (London)", x: "50%", y: "30%", details: "Deploying fluid static checkouts & collection structures." },
    { id: "au", name: "Elite Services Hub (Sydney)", x: "85%", y: "75%", details: "Structuring lead acquisition assets & search map silos." }
  ];
 
  const whyChooseUs = [
    { icon: <CheckCircle2 className="h-4.5 w-4.5 text-brand-blue" />, title: "No Templated Bloat", desc: "Clean custom code matching your exact design language." },
    { icon: <ShieldCheck className="h-4.5 w-4.5 text-brand-blue" />, title: "Lead Gen Focus", desc: "Visual copy placement engineered strictly to convert visitors." },
    { icon: <Cpu className="h-4.5 w-4.5 text-brand-blue" />, title: "Core Web Vitals", desc: "Achieving near-perfect performance scores on Google PageSpeed." },
    { icon: <Sparkles className="h-4.5 w-4.5 text-brand-blue" />, title: "Founder Partnership", desc: "Collaborate directly with Muhammad Mohsin." }
  ];
 
  const testimonials = [
    {
      quote: "Our organic search leads increased by 180% in 4 months. The custom Next.js site speed is flawless.",
      name: "David Harrison",
      role: "Founder, Harrison Tech",
    },
    {
      quote: "Unlike agencies using templates, Mohsin Designs built a custom structure that ranks and scales.",
      name: "Elena Rostova",
      role: "Director, LuxEstate",
    }
  ];
 
  return (
    <>
      <Navbar />
      
      <main className="flex-1 w-full bg-white dark:bg-[#080710] text-brand-dark dark:text-white transition-colors duration-300">
        
        {/* ── 1. HERO SECTION (Compact & Live GSC Dashboard) ────────────────── */}
        <section className="relative overflow-hidden pt-28 pb-10 md:pt-32 md:pb-12 border-b border-brand-zinc-200 dark:border-white/10">
          <div className="absolute inset-0 -z-10 bg-linear-grid-blue-4 [background-size:40px_40px] opacity-[0.12] dark:opacity-20" />
          
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Bold Typographic Pitch */}
              <div className="lg:col-span-7 space-y-5 text-left">
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-3 py-0.5 text-[8px] font-black tracking-widest uppercase text-brand-blue select-none">
                  // THE AGENCY STORY
                </span>
                
                <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] uppercase flex flex-col">
                  <span className="text-stroke-blue dark:text-stroke-blue">MOHSIN DESIGNS //</span>
                  <span className="text-brand-dark dark:text-white">CRAFTING REAL</span>
                  <span className="relative text-brand-blue block">
                    AUTHORITY.
                    <svg className="absolute -bottom-1.5 left-0 w-full h-2.5 pointer-events-none text-brand-yellow" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <motion.path
                        d="M 2 5 Q 50 2, 98 4 C 99 4, 99 5, 98 5.5 Q 50 7.5, 2 6 Z"
                        fill="currentColor"
                        custom={{ delay: 0.3, duration: 0.6 }}
                        variants={drawVariants}
                        initial="hidden"
                        animate="visible"
                      />
                    </svg>
                  </span>
                </h1>
                
                <p className="text-xs sm:text-sm text-brand-zinc-500 font-semibold font-sans leading-relaxed max-w-xl">
                  We replace heavy website templates with custom static Next.js engineering and keyword siloing maps to target direct search intent.
                </p>
                
                {/* Visual Pillars */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-brand-zinc-200 max-w-md">
                  <div className="space-y-0.5">
                    <span className="font-heading font-black text-brand-blue text-[9px] block">01 / BRAND</span>
                    <span className="font-sans font-extrabold text-[7.5px] text-brand-zinc-400 uppercase tracking-widest block">Bespoke UI</span>
                  </div>
                  <div className="space-y-0.5">
                    <span className="font-heading font-black text-brand-blue text-[9px] block">02 / CODE</span>
                    <span className="font-sans font-extrabold text-[7.5px] text-brand-zinc-400 uppercase tracking-widest block">Next-Gen React</span>
                  </div>
                  <div className="space-y-0.5">
                    <span className="font-heading font-black text-brand-blue text-[9px] block">03 / SEO</span>
                    <span className="font-sans font-extrabold text-[7.5px] text-brand-zinc-400 uppercase tracking-widest block">Core Vitals</span>
                  </div>
                </div>
              </div>
              
              {/* Right Column: Google Search Console impression chart */}
              <div className="lg:col-span-5 relative flex justify-end">
                <div className="w-full max-w-[400px] rounded-[24px] border border-brand-zinc-200 dark:border-white/10 bg-white dark:bg-[#12121e] shadow-lg p-5 relative overflow-hidden group hover:border-brand-blue/30 transition-all duration-500">
                  <div className="flex items-center justify-between pb-3 border-b border-brand-zinc-100 dark:border-white/5 mb-3.5">
                    <div className="flex items-center gap-2">
                      <div className="h-5.5 w-5.5 rounded-lg bg-brand-blue/10 flex items-center justify-center">
                        <Search className="h-3 w-3 text-brand-blue" />
                      </div>
                      <div>
                        <span className="block font-sans font-black text-[9px] text-brand-dark uppercase tracking-tight">Search Console</span>
                        <span className="block font-mono text-[6.5px] text-brand-zinc-400 uppercase tracking-widest leading-none">mohsindesigns.com</span>
                      </div>
                    </div>
                    <span className="text-[7.5px] font-bold text-green-500 bg-green-500/10 px-2 py-0.5 rounded-full">+380% IMPRESSIONS</span>
                  </div>
 
                  {/* Metric Columns */}
                  <div className="grid grid-cols-3 gap-2.5 mb-4">
                    <div className="bg-zinc-50 dark:bg-white/5 rounded-xl p-2.5 border border-brand-zinc-200">
                      <span className="block font-mono text-[6.5px] text-brand-zinc-400 uppercase tracking-widest">Total Clicks</span>
                      <span className="block font-heading font-black text-xs text-brand-dark mt-0.5">142K</span>
                    </div>
                    <div className="bg-zinc-50 dark:bg-white/5 rounded-xl p-2.5 border border-brand-zinc-200">
                      <span className="block font-mono text-[6.5px] text-brand-zinc-400 uppercase tracking-widest">Impressions</span>
                      <span className="block font-heading font-black text-xs text-brand-dark mt-0.5">2.4M</span>
                    </div>
                    <div className="bg-zinc-50 dark:bg-white/5 rounded-xl p-2.5 border border-brand-zinc-200">
                      <span className="block font-mono text-[6.5px] text-brand-zinc-400 uppercase tracking-widest">Avg Position</span>
                      <span className="block font-heading font-black text-xs text-brand-dark mt-0.5">1.2</span>
                    </div>
                  </div>
 
                  {/* Interactive Chart Graph */}
                  <div className="relative w-full h-[100px] bg-zinc-50/50 dark:bg-white/5 rounded-xl p-2 border border-brand-zinc-200 overflow-hidden flex items-end">
                    <svg viewBox="0 0 100 40" className="w-full h-full text-brand-blue" preserveAspectRatio="none">
                      <path d="M 0 35 Q 20 28, 40 32 T 80 12 T 100 2 V 40 H 0 Z" fill="currentColor" opacity="0.08" />
                      <path d="M 0 35 Q 20 28, 40 32 T 80 12 T 100 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                      <circle cx="100" cy="2" r="2" fill="currentColor" />
                    </svg>
                    <div className="absolute top-2.5 right-2.5 flex items-center gap-1">
                      <TrendingUp className="h-2.5 w-2.5 text-green-500" />
                      <span className="font-mono text-[7px] font-black text-green-500">Live Silo Effect</span>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>
 
        {/* ── 2. STATS SECTION (Integrated Horizontal Panel) ─────────── */}
        <section className="relative overflow-hidden py-8 border-b border-brand-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-white/[0.01]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 relative z-10">
            <div className="p-6 rounded-[24px] bg-white dark:bg-[#12121e] border border-brand-zinc-200 dark:border-white/10 shadow-sm flex flex-col md:flex-row gap-6 justify-around items-center">
              <AnimatedStat value="5+" label="Years Experience" sublabel="Established 2019" percentage={0.8} />
              <div className="hidden md:block w-[1px] h-10 bg-brand-zinc-200 dark:bg-white/5" />
              <AnimatedStat value="3K+" label="Clients Scaled" sublabel="Global Footprint" percentage={0.95} />
              <div className="hidden md:block w-[1px] h-10 bg-brand-zinc-200 dark:bg-white/5" />
              <AnimatedStat value="95%" label="Client Retention" sublabel="Results Oriented" percentage={0.9} />
            </div>
          </div>
        </section>
 
        {/* ── 3. ABOUT US & MISSION SECTION (Asymmetrical Bento Image Layout) ─ */}
        <section className="relative overflow-hidden py-12 md:py-16 border-b border-brand-zinc-200 dark:border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
              
              {/* Bento Card 1: Text narrative */}
              <div className="lg:col-span-7 p-6 sm:p-8 rounded-[24px] bg-white dark:bg-[#12121e] border border-brand-zinc-200 dark:border-white/10 shadow-sm flex flex-col justify-between gap-4">
                <div className="space-y-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-3 py-0.5 text-[8px] font-black tracking-widest uppercase text-brand-blue select-none">
                    // IDENTITY & BELIEF
                  </span>
                  <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight text-brand-dark tracking-tight">
                    WordPress templates fail.{" "}
                    <span className="relative inline-block text-brand-blue">
                      We cure them.
                      <svg className="absolute -bottom-1 left-0 w-full h-2 pointer-events-none" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M 2 5 Q 50 2, 98 4" stroke="#FFF35C" strokeWidth="2" strokeLinecap="round" fill="none" />
                      </svg>
                    </span>
                  </h2>
                </div>
                <p className="text-xs sm:text-sm font-semibold font-sans leading-relaxed text-brand-zinc-500">
                  Heavy template designs load slowly, break layouts, and alienate customers. We build lightweight static React codebases integrated with keyword siloing maps to target direct search intent.
                </p>
              </div>
 
              {/* Bento Card 2: Mission Image Showcase */}
              <div className="lg:col-span-5 min-h-[220px] lg:min-h-0 rounded-[24px] overflow-hidden border border-brand-zinc-200 dark:border-white/10 shadow-sm relative">
                <Image
                  src="/blog1.png"
                  alt="Mission & Vision Showcase"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-black/10 flex flex-col justify-end p-5 text-white space-y-0.5">
                  <span className="text-[7px] font-mono font-black text-brand-yellow uppercase tracking-widest leading-none">THE MISSION</span>
                  <p className="text-xs font-semibold leading-relaxed">
                    Deploying custom-coded, high-converting platforms that capture qualified organic market share.
                  </p>
                </div>
              </div>
 
            </div>
          </div>
        </section>
 
        {/* ── 4. DEDICATED IMAGE SHOWCASE GALLERY SECTION ────────────────── */}
        <section className="relative overflow-hidden py-12 md:py-16 border-b border-brand-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-white/[0.01]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 relative z-10">
            
            <div className="text-center mb-8 flex flex-col items-center">
              <span className="text-[8px] font-sans font-black tracking-widest text-brand-zinc-400 uppercase mb-1">
                // CREATIVE SANDBOX
              </span>
              <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-extrabold text-brand-dark tracking-tight">
                Behind the{" "}
                <span className="relative inline-block text-brand-blue">
                  Screens
                  <svg className="absolute -bottom-1 left-0 w-full h-2 pointer-events-none" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M 2 5 Q 50 2, 98 4" stroke="#FFF35C" strokeWidth="2" strokeLinecap="round" fill="none" />
                  </svg>
                </span>
              </h2>
            </div>
 
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* Gallery Image 1 */}
              <div className="relative aspect-[4/5] rounded-[20px] overflow-hidden border border-brand-zinc-200 dark:border-white/10 shadow-sm group hover:-translate-y-1.5 transition-all duration-300">
                <Image
                  src="/blog1.png"
                  alt="Keyword mapping"
                  fill
                  sizes="(max-width: 640px) 100vw, 300px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4 text-white">
                  <span className="text-[6.5px] font-mono font-bold text-brand-yellow uppercase tracking-widest leading-none">01 / DISCOVERY</span>
                  <span className="text-xs font-black mt-1 leading-none">Silo Architecture</span>
                </div>
              </div>
 
              {/* Gallery Image 2 */}
              <div className="relative aspect-[4/5] rounded-[20px] overflow-hidden border border-brand-zinc-200 dark:border-white/10 shadow-sm group hover:-translate-y-1.5 transition-all duration-300">
                <Image
                  src="/blog2.png"
                  alt="UX wireframes"
                  fill
                  sizes="(max-width: 640px) 100vw, 300px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4 text-white">
                  <span className="text-[6.5px] font-mono font-bold text-brand-yellow uppercase tracking-widest leading-none">02 / INTERFACE</span>
                  <span className="text-xs font-black mt-1 leading-none">Liquid Grid Wireframing</span>
                </div>
              </div>
 
              {/* Gallery Image 3 */}
              <div className="relative aspect-[4/5] rounded-[20px] overflow-hidden border border-brand-zinc-200 dark:border-white/10 shadow-sm group hover:-translate-y-1.5 transition-all duration-300">
                <Image
                  src="/blog3.png"
                  alt="Static build checkups"
                  fill
                  sizes="(max-width: 640px) 100vw, 300px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4 text-white">
                  <span className="text-[6.5px] font-mono font-bold text-brand-yellow uppercase tracking-widest leading-none">03 / COMPILE</span>
                  <span className="text-xs font-black mt-1 leading-none">Static Page Hydration</span>
                </div>
              </div>
 
              {/* Gallery Image 4 */}
              <div className="relative aspect-[4/5] rounded-[20px] overflow-hidden border border-brand-zinc-200 dark:border-white/10 shadow-sm group hover:-translate-y-1.5 transition-all duration-300">
                <Image
                  src="/blog4.png"
                  alt="Launch and check"
                  fill
                  sizes="(max-width: 640px) 100vw, 300px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4 text-white">
                  <span className="text-[6.5px] font-mono font-bold text-brand-yellow uppercase tracking-widest leading-none">04 / OPTIMIZE</span>
                  <span className="text-xs font-black mt-1 leading-none">Lighthouse Audits</span>
                </div>
              </div>
 
            </div>
          </div>
        </section>
 
        {/* ── 5. SERVICES SECTION (Split List + Image Frame) ──────────── */}
        <section className="relative overflow-hidden py-12 md:py-16 border-b border-brand-zinc-200 dark:border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Services text */}
              <div className="lg:col-span-7 space-y-4">
                <div className="space-y-1">
                  <span className="text-[8px] font-sans font-black tracking-widest text-brand-zinc-400 uppercase mb-1 block">// CORE EXPERTISE</span>
                  <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-extrabold text-brand-dark tracking-tight">
                    Specialized Services We{" "}
                    <span className="relative inline-block text-brand-blue">
                      Deliver
                      <svg className="absolute -bottom-1 left-0 w-full h-2 pointer-events-none" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M 2 5 Q 50 2, 98 4" stroke="#FFF35C" strokeWidth="2" strokeLinecap="round" fill="none" />
                      </svg>
                    </span>
                  </h2>
                </div>
                
                <div className="divide-y divide-brand-zinc-200 dark:divide-white/10 border-t border-brand-zinc-200 dark:border-white/10">
                  {servicesList.map((service, idx) => (
                    <div 
                      key={idx}
                      className="py-3 flex items-start gap-4 group cursor-pointer"
                    >
                      <span className="font-heading font-black text-sm text-brand-zinc-400 group-hover:text-brand-blue transition-colors leading-none pt-0.5">{service.num}</span>
                      <div className="space-y-0.5">
                        <h3 className="font-heading font-black text-xs sm:text-sm text-brand-dark group-hover:translate-x-1 transition-transform">{service.title}</h3>
                        <p className="text-[10px] font-semibold text-brand-zinc-500 leading-relaxed">{service.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Right Column: High-End Case Mockup Image */}
              <div className="lg:col-span-5 relative flex justify-end">
                <div className="w-full max-w-[320px] aspect-[4/5] rounded-[24px] overflow-hidden border border-brand-zinc-200 dark:border-white/10 shadow-md relative bg-zinc-50 dark:bg-white/5">
                  <Image
                    src="/blog3.png"
                    alt="Creative Showcase Mockup"
                    fill
                    sizes="(max-width: 768px) 100vw, 320px"
                    className="object-cover"
                  />
                </div>
              </div>
              
            </div>
          </div>
        </section>
 
        {/* ── 6. PROCESS SECTION (Visual Stepper Grid) ───────────────── */}
        <section className="relative overflow-hidden py-12 md:py-16 border-b border-brand-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-white/[0.01]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 relative z-10">
            
            <div className="text-center mb-8 flex flex-col items-center">
              <span className="text-[8px] font-sans font-black tracking-widest text-brand-zinc-400 uppercase mb-1">
                // ROADMAP & FRAMEWORK
              </span>
              <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-extrabold text-brand-dark tracking-tight">
                Our Proven{" "}
                <span className="relative inline-block text-brand-blue">
                  Methodology
                  <svg className="absolute -bottom-1 left-0 w-full h-2 pointer-events-none" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M 2 5 Q 50 2, 98 4" stroke="#FFF35C" strokeWidth="2" strokeLinecap="round" fill="none" />
                  </svg>
                </span>
              </h2>
            </div>
 
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3.5">
              {processSteps.map((s, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-[20px] bg-white dark:bg-[#12121e] border border-brand-zinc-200 dark:border-white/10 shadow-sm relative overflow-hidden group hover:border-brand-blue/20 transition-all duration-300 flex flex-col gap-2.5"
                >
                  <div className="flex justify-between items-start">
                    <span className="font-heading font-black text-base text-brand-zinc-400">{s.num}</span>
                    <Sparkles className="h-3.5 w-3.5 text-brand-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="space-y-0.5">
                    <h3 className="font-heading font-extrabold text-xs text-brand-dark">{s.title}</h3>
                    <p className="text-[10px] font-semibold text-brand-zinc-500 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
 
        {/* ── 7. INDUSTRIES SERVED (Interactive Global Coverage Map) ─────── */}
        <section className="relative overflow-hidden py-12 md:py-16 border-b border-brand-zinc-200 dark:border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Heading and description */}
              <div className="lg:col-span-5 space-y-4">
                <div className="space-y-1">
                  <span className="text-[8px] font-sans font-black tracking-widest text-brand-zinc-400 uppercase mb-1 block">// TARGET SECTORS</span>
                  <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-extrabold text-brand-dark tracking-tight">
                    Industries We{" "}
                    <span className="relative inline-block text-brand-blue">
                      Serve Globally
                      <svg className="absolute -bottom-1 left-0 w-full h-2 pointer-events-none" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M 2 5 Q 50 2, 98 4" stroke="#FFF35C" strokeWidth="2" strokeLinecap="round" fill="none" />
                      </svg>
                    </span>
                  </h2>
                </div>
                
                <p className="text-xs sm:text-sm font-semibold text-brand-zinc-500 leading-relaxed">
                  We deploy targeted search keyword strategies and high-performing static Next.js portals across core digital markets. Click hubs on the map to view deliverables.
                </p>
 
                {/* Active Hub Info Box */}
                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-white/5 border border-brand-zinc-200 shadow-sm space-y-1">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-brand-blue" />
                    <span className="font-heading font-black text-[10px] text-brand-dark">
                      {mapsHubs.find(h => h.id === activeHub)?.name}
                    </span>
                  </div>
                  <p className="text-[9.5px] font-semibold text-brand-zinc-500 leading-relaxed">
                    {mapsHubs.find(h => h.id === activeHub)?.details}
                  </p>
                </div>
              </div>
 
              {/* Right Column: Interactive Map Canvas */}
              <div className="lg:col-span-7 relative bg-zinc-50 dark:bg-[#12121e] rounded-[24px] border border-brand-zinc-200 dark:border-white/10 p-5 overflow-hidden h-[260px] sm:h-[300px]">
                <div className="absolute inset-0 opacity-[0.25] dark:opacity-[0.18]">
                  <Image
                    src="/world-map.svg"
                    alt="World Map Hubs"
                    fill
                    className="object-contain"
                  />
                </div>
 
                {/* Hub hotspot markers */}
                {mapsHubs.map((hub) => (
                  <button
                    key={hub.id}
                    onClick={() => setActiveHub(hub.id)}
                    style={{ left: hub.x, top: hub.y }}
                    className="absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer group"
                  >
                    <span className={`absolute inset-0 rounded-full animate-ping duration-1000 ${activeHub === hub.id ? "bg-brand-blue" : "bg-brand-yellow opacity-40"}`} />
                    <span className={`relative h-2 w-2 rounded-full border border-white shadow-md transition-colors ${activeHub === hub.id ? "bg-brand-blue" : "bg-brand-yellow"}`} />
                  </button>
                ))}
              </div>
 
            </div>
          </div>
        </section>
 
        {/* ── 8. WHY BUSINESS CHOOSE ME (Checklist Grid) ─────────────── */}
        <section className="relative overflow-hidden py-12 md:py-16 border-b border-brand-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-white/[0.01]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 relative z-10">
            
            <div className="text-center mb-8 flex flex-col items-center">
              <span className="text-[8px] font-sans font-black tracking-widest text-brand-zinc-400 uppercase mb-1">
                // ADVANTAGES
              </span>
              <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-extrabold text-brand-dark tracking-tight">
                Why Businesses{" "}
                <span className="relative inline-block text-brand-blue">
                  Partner with Us
                  <svg className="absolute -bottom-1 left-0 w-full h-2 pointer-events-none" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M 2 5 Q 50 2, 98 4" stroke="#FFF35C" strokeWidth="2" strokeLinecap="round" fill="none" />
                  </svg>
                </span>
              </h2>
            </div>
 
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {whyChooseUs.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-[16px] bg-white dark:bg-[#12121e] border border-brand-zinc-200 dark:border-white/10 shadow-sm relative overflow-hidden group hover:border-brand-blue/20 transition-all duration-300 flex items-start gap-4.5"
                >
                  <div className="h-7 w-7 rounded-lg bg-brand-blue/5 flex items-center justify-center shrink-0">
                    <Check className="h-3.5 w-3.5 text-brand-blue" />
                  </div>
                  <div className="space-y-0.5">
                    <h3 className="font-heading font-black text-xs text-brand-dark">{item.title}</h3>
                    <p className="text-[10px] font-semibold text-brand-zinc-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
 
        {/* ── 9. ABOUT OWNER SECTION (Elite Framed Portrait & Counters) ─ */}
        <section className="relative overflow-hidden py-12 md:py-16 border-b border-brand-zinc-200 dark:border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Portrait with Hand-Drawn Stroke Frame & Pixel Grid (Sticky) */}
              <div className="lg:col-span-5 lg:sticky lg:top-28 relative w-full flex justify-center self-start">
                
                {/* Background Pixel Grid decoration */}
                <div className="absolute -inset-4 z-0 grid grid-cols-6 w-[105%] h-[105%] overflow-hidden pointer-events-none opacity-30 border border-brand-blue/5">
                  {[...Array(36)].map((_, i) => (
                    <div key={i} className="aspect-square border-r border-b border-brand-blue/5" />
                  ))}
                </div>
                
                {/* Hand-drawn marker/brush drawing frame */}
                <svg
                  className="absolute -inset-5 sm:-inset-6 w-[110%] sm:w-[112%] h-[110%] sm:h-[112%] pointer-events-none stroke-[#FFF35C] fill-none z-0 opacity-90"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M -2 4 C 30 1, 70 2, 102 3.5"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    variants={drawVariants}
                    custom={{ delay: 0.1, duration: 0.4 }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                  />
                  <motion.path
                    d="M 96.5 -2 C 98.5 30, 95 70, 96 102"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    variants={drawVariants}
                    custom={{ delay: 0.4, duration: 0.4 }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                  />
                  <motion.path
                    d="M 102 96 C 70 94.5, 30 96.5, -2 95"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    variants={drawVariants}
                    custom={{ delay: 0.7, duration: 0.4 }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                  />
                  <motion.path
                    d="M 4 102 C 1.5 70, 4.5 30, 3 -2"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    variants={drawVariants}
                    custom={{ delay: 1.0, duration: 0.4 }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                  />
                </svg>
 
                {/* Rotating Star Badge */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ ease: "linear", duration: 15, repeat: Infinity }}
                  className="absolute -top-6 -left-6 h-20 w-20 z-20 hidden sm:block select-none pointer-events-none"
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full text-brand-blue">
                    <path
                      id="starPath"
                      d="M 50, 15 A 35,35 0 1,1 49.9,15"
                      fill="none"
                    />
                    <text className="font-mono text-[7px] font-black tracking-widest fill-current">
                      <textPath href="#starPath" startOffset="0%">
                        • ESTABLISHED 2019 • PERSONAL APPROACH •
                      </textPath>
                    </text>
                  </svg>
                </motion.div>
                
                {/* Image Frame */}
                <div className="relative w-full max-w-[320px] aspect-[4/5] rounded-[24px] overflow-hidden border border-brand-zinc-200 dark:border-white/10 shadow-sm bg-zinc-50 dark:bg-white/5 select-none pointer-events-none z-10">
                  <Image
                    src={aboutOwner.portraitSrc}
                    alt={aboutOwner.portraitAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 320px"
                    className="object-cover grayscale contrast-[1.05] brightness-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Signature floating card */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/10 dark:bg-[#080710]/40 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div>
                      <h4 className="font-heading font-black text-white text-xs tracking-tight leading-tight">Muhammad Mohsin</h4>
                      <p className="font-mono text-[6px] font-bold text-brand-yellow uppercase tracking-widest mt-0.5 leading-none">Founder & Director</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-[6px] font-black text-white/55 uppercase tracking-widest leading-none">Est.</p>
                      <p className="font-sans text-[10px] font-black text-brand-yellow mt-0.5 tracking-tight leading-none">2019</p>
                    </div>
                  </div>
                </div>
              </div>
 
              {/* Right Column: Narrative & Odometer counter stats */}
              <div className="lg:col-span-7 space-y-4 z-10">
                <div className="space-y-1">
                  <span className="inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-3 py-0.5 text-[8px] font-black tracking-widest uppercase text-brand-blue select-none">
                    // FOUNDER BIO
                  </span>
                  <h2 className="font-heading text-2xl sm:text-3xl font-extrabold leading-[1.15] text-brand-dark tracking-tight">
                    Muhammad Mohsin //{" "}
                    <span className="relative inline-block text-brand-blue">
                      Personal Vision
                      <svg className="absolute -bottom-1.5 left-0 w-full h-2.5 pointer-events-none drop-shadow-[0_1.5px_2px_rgba(255,243,92,0.45)]" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M 2 5 Q 50 3.5, 98 5" stroke="#FFF35C" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                      </svg>
                    </span>
                  </h2>
                </div>
 
                <div className="space-y-2.5 text-xs sm:text-sm font-semibold font-sans leading-relaxed text-brand-zinc-500">
                  <p>{aboutOwner.bioParagraph1}</p>
                  <p>{aboutOwner.bioParagraph2}</p>
                </div>
 
                {/* Stats grid with rolling odometer counters */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-brand-zinc-200 dark:border-white/10 max-w-sm">
                  <div>
                    <div className="font-heading font-black text-base sm:text-lg text-brand-blue leading-none">
                      <RollingNumber value={aboutOwner.yearsExpValue} suffix={aboutOwner.yearsExpSuffix} />
                    </div>
                    <div className="text-[7px] font-bold text-brand-zinc-500 uppercase tracking-widest mt-1 leading-none">
                      {aboutOwner.yearsExpLabel}
                    </div>
                  </div>
                  <div>
                    <div className="font-heading font-black text-base sm:text-lg text-brand-blue leading-none">
                      <RollingNumber value={aboutOwner.brandsScaledValue} suffix={aboutOwner.brandsScaledSuffix} />
                    </div>
                    <div className="text-[7px] font-bold text-brand-zinc-500 uppercase tracking-widest mt-1 leading-none">
                      {aboutOwner.brandsScaledLabel}
                    </div>
                  </div>
                  <div>
                    <div className="font-heading font-black text-base sm:text-lg text-brand-blue leading-none">
                      <RollingNumber value={aboutOwner.successRateValue} suffix={aboutOwner.successRateSuffix} />
                    </div>
                    <div className="text-[7px] font-bold text-brand-zinc-500 uppercase tracking-widest mt-1 leading-none">
                      {aboutOwner.successRateLabel}
                    </div>
                  </div>
                </div>
              </div>
 
            </div>
          </div>
        </section>
 
        {/* ── 10. TESTIMONIALS SECTION ─────────────────────────────────── */}
        <section className="relative overflow-hidden py-12 md:py-16 border-b border-brand-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-white/[0.01]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 relative z-10">
            
            <div className="text-center mb-8 flex flex-col items-center">
              <span className="text-[8px] font-sans font-black tracking-widest text-brand-zinc-400 uppercase mb-1">
                // PARTNER FEEDBACK
              </span>
              <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-extrabold text-brand-dark tracking-tight">
                Client Success{" "}
                <span className="relative inline-block text-brand-blue">
                  Stories
                  <svg className="absolute -bottom-1 left-0 w-full h-2 pointer-events-none" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M 2 5 Q 50 2, 98 4" stroke="#FFF35C" strokeWidth="2" strokeLinecap="round" fill="none" />
                  </svg>
                </span>
              </h2>
            </div>
 
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {testimonials.map((test, idx) => (
                <div 
                  key={idx}
                  className="p-5 rounded-[20px] bg-white dark:bg-[#12121e] border border-brand-zinc-200 dark:border-white/10 shadow-sm relative overflow-hidden group hover:border-brand-blue/20 transition-all duration-300 flex flex-col justify-between"
                >
                  <p className="text-xs font-semibold text-brand-zinc-500 leading-relaxed italic">
                    "{test.quote}"
                  </p>
                  
                  <div className="flex items-center gap-3 pt-3.5 mt-3.5 border-t border-brand-zinc-200 dark:border-white/5">
                    <div className="h-6.5 w-6.5 rounded-full bg-brand-blue text-white dark:text-[#080710] font-heading font-black text-xs flex items-center justify-center border border-white/10 shadow-sm">
                      {test.name.charAt(0)}
                    </div>
                    <div>
                      <span className="block text-[10px] font-black text-brand-dark uppercase tracking-wider leading-none">{test.name}</span>
                      <span className="block text-[7.5px] font-bold text-brand-zinc-400 mt-1 leading-none">{test.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
 
        {/* ── 11. FINAL CTA SECTION ──────────────────────────────────── */}
        <section className="relative overflow-hidden py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 relative z-10 text-center max-w-3xl mx-auto space-y-4">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold leading-none tracking-tight">
              Let's Scale Your{" "}
              <span className="relative inline-block text-brand-blue">
                Organic Search
                <svg className="absolute -bottom-1 left-0 w-full h-2 pointer-events-none" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M 2 5 Q 50 2, 98 4" stroke="#FFF35C" strokeWidth="2" strokeLinecap="round" fill="none" />
                </svg>
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-brand-zinc-500 font-semibold max-w-xl mx-auto">
              Ready to stand out, command high conversions, and outrank competitors? Work directly with Muhammad Mohsin.
            </p>
            
            <div className="pt-2">
              <a
                href="/#contact"
                className="group relative inline-flex items-center gap-0 overflow-hidden rounded-full bg-[#0306AC] dark:bg-[#FFF35C] shadow-[0_4px_28px_rgba(3,6,172,0.15)] dark:shadow-[0_4px_28px_rgba(255,243,92,0.15)] active:scale-[0.97] transition-all duration-300 border border-[#0306AC] dark:border-[#FFF35C]"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-[#080710] dark:bg-white translate-x-[-102%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
                />
                <span className="relative z-10 pl-7 pr-5 py-[12px] text-xs font-black uppercase tracking-[0.15em] text-white dark:text-[#080710] group-hover:text-white dark:group-hover:text-[#080710] transition-colors duration-300 delay-75 whitespace-nowrap">
                  Get Free Quote
                </span>
                <span className="relative z-10 mr-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#080710] dark:bg-white text-white dark:text-[#080710] group-hover:bg-[#FFF35C] dark:group-hover:bg-[#0306AC] group-hover:text-[#080710] dark:group-hover:text-white transition-all duration-300">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </a>
            </div>
          </div>
        </section>
 
      </main>
      
      <Footer />
    </>
  );
}
