"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  LayoutGrid,
  Paintbrush,
  Search,
  Monitor,
  BarChart3,
  TrendingUp,
  Users,
  Shield,
  Droplet,
  Home,
  Zap,
  Award
} from "lucide-react";

// Categories for filtering
const categories = [
  { id: "all", label: "All Case Studies", icon: LayoutGrid },
  { id: "branding", label: "Branding", icon: Paintbrush },
  { id: "seo", label: "SEO", icon: Search },
  { id: "web-design", label: "Web Design", icon: Monitor },
  { id: "paid-media", label: "Paid Media", icon: BarChart3 },
  { id: "growth-strategy", label: "Growth Strategy", icon: ArrowUpRight },
];

const caseStudies = [
  {
    num: "01",
    brand: "Palco Claims",
    glowClass: "from-orange-500/25 via-[#0306AC]/15 to-transparent",
    subtitle: "Property Insurance Claims Company",
    categories: ["seo", "web-design"],
    challenge: "Palco Claims struggled to build online authority and clearly communicate their services to potential clients.",
    whatWeDid: "We refreshed their brand with a modern logo, improved their SEO performance, and built a clean, conversion-focused website.",
    result: "210% increase in visibility in just 6 months, resulting in more qualified leads and establishing their authority in the field.",
    stats: [
      { value: "210%", label: "Increase in Visibility in 6 Months", icon: TrendingUp },
      { value: "150+", label: "Qualified Leads Generated", icon: Users },
      { value: "Top 3", label: "Ranking for Key Search Terms", icon: Award }
    ],
    screenshot: (
      <div className="w-full h-full bg-[#FCFCFD] flex flex-col justify-between p-2.5 text-brand-dark font-sans overflow-hidden select-none relative border border-slate-100/50">
        {/* Screen Glare reflection overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-white/70 pointer-events-none z-30" />

        {/* Website Mockup Header */}
        <div className="flex items-center justify-between border-b border-brand-zinc-200 pb-1 mb-1 shrink-0 z-10 bg-white/70">
          <div className="flex items-center gap-1">
            <div className="w-3.5 h-3.5 rounded-full bg-orange-500 flex items-center justify-center font-bold text-[6.5px] text-white">P</div>
            <span className="text-[7px] font-black tracking-tight text-brand-dark">PALCO CLAIMS</span>
          </div>
          <div className="flex items-center gap-2 text-[5.5px] text-brand-zinc-500 font-bold">
            <span>Home</span>
            <span>Services</span>
            <span>About</span>
            <span className="bg-orange-500 text-white px-1.5 py-0.5 rounded-xs font-bold scale-90">Call</span>
          </div>
        </div>

        {/* Hero Block */}
        <div className="flex-1 flex flex-col justify-center items-center text-center p-2.5 relative overflow-hidden z-10 bg-white border border-brand-zinc-200/50 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.02)] my-1">
          <div className="relative z-10 space-y-1 w-full max-w-[180px]">
            <span className="text-[4.5px] text-orange-600 font-extrabold uppercase tracking-wider block leading-none">Property Insurance Claims</span>
            <h4 className="text-[7px] font-black text-brand-dark leading-snug uppercase">Public Claims Adjuster & Loss Consultant in Texas & Oklahoma</h4>
            <span className="inline-block bg-brand-blue text-white font-black text-[4.5px] px-2 py-0.5 rounded-xs mt-1 scale-90 shadow-md">Get Free Consultation</span>
          </div>
        </div>

        {/* Sub-hero tagline */}
        <div className="bg-white text-brand-dark py-1 text-center shrink-0 border-t border-slate-100 rounded-b-xs z-10 shadow-[0_-1px_3px_rgba(0,0,0,0.02)]">
          <span className="text-[5.5px] font-black tracking-tight text-brand-blue">What is a Public Adjuster?</span>
        </div>
      </div>
    )
  },
  {
    num: "02",
    brand: "Greenleaf DTC",
    glowClass: "from-emerald-500/25 via-yellow-400/10 to-transparent",
    subtitle: "Organic Superfood Retailer",
    categories: ["paid-media", "growth-strategy"],
    challenge: "Greenleaf DTC had high PPC client acquisition costs and low repeat purchase rates from their digital ad spend.",
    whatWeDid: "We overhauled Meta ads targeting, rebuilt high-converting ad creative funnels, and optimized checkout pages.",
    result: "4.8x average return on ad spend within 90 days, doubling their monthly subscription signups and reducing CPA by 35%.",
    stats: [
      { value: "4.8x", label: "Average Campaign ROAS", icon: TrendingUp },
      { value: "+140%", label: "Increase in Subscriptions", icon: Users },
      { value: "-35%", label: "Reduction in CPA", icon: Zap }
    ],
    screenshot: (
      <div className="w-full h-full bg-[#FCFCFD] flex flex-col justify-between p-2.5 text-brand-dark font-sans overflow-hidden select-none relative border border-slate-100/50">
        {/* Screen Glare reflection overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-white/70 pointer-events-none z-30" />

        {/* Ad Header */}
        <div className="flex items-center justify-between border-b border-brand-zinc-200 pb-1 mb-1 shrink-0 z-10">
          <div className="flex items-center gap-1">
            <div className="w-3.5 h-3.5 rounded-full bg-emerald-100 border border-emerald-500/20 flex items-center justify-center font-bold text-[6px] text-emerald-700">G</div>
            <div>
              <span className="text-[6.5px] font-black block leading-none text-brand-dark">Greenleaf Wellness</span>
              <span className="text-[4.5px] text-brand-zinc-400 font-semibold block leading-none mt-0.5">Sponsored</span>
            </div>
          </div>
          <span className="text-[5.5px] bg-brand-blue/10 text-brand-blue px-1.5 py-0.5 rounded-xs font-black">META ADS</span>
        </div>

        {/* Ad content */}
        <div className="flex-1 flex gap-2 items-center min-h-0 z-10">
          {/* Ad Image Mockup */}
          <div className="flex-1 aspect-[4/3] rounded border border-brand-zinc-200 bg-white p-1 flex flex-col justify-between relative overflow-hidden shadow-xs">
            <span className="text-[5.5px] font-black text-emerald-800 uppercase leading-none block">Pure Wellness Oils</span>
            <div className="w-8 h-8 rounded bg-emerald-50 mx-auto my-0.5 flex items-center justify-center border border-emerald-100">
              <div className="w-2.5 h-5 bg-emerald-500 rounded-sm shadow-sm" />
            </div>
            <div className="flex justify-between items-center leading-none">
              <span className="text-[6.5px] font-black text-brand-dark">$49.00</span>
              <span className="text-[4.5px] bg-brand-yellow text-brand-dark font-black px-1.5 py-0.5 rounded-xs scale-90">SHOP NOW</span>
            </div>
          </div>

          {/* Campaign Stats Card */}
          <div className="w-16 shrink-0 flex flex-col gap-1">
            <div className="bg-white border border-brand-zinc-200/80 rounded p-1 text-center leading-none shadow-xs">
              <span className="text-[4.5px] text-brand-zinc-400 font-bold block uppercase">ROAS</span>
              <span className="text-[9px] font-black text-brand-blue block mt-0.5">4.8x</span>
            </div>
            <div className="bg-white border border-brand-zinc-200/80 rounded p-1 text-center leading-none shadow-xs">
              <span className="text-[4.5px] text-brand-zinc-400 font-bold block uppercase">CPA</span>
              <span className="text-[9px] font-black text-emerald-600 block mt-0.5">-35%</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    num: "03",
    brand: "Technova SaaS",
    glowClass: "from-blue-600/25 via-cyan-400/15 to-transparent",
    subtitle: "B2B Sales Intelligence Platform",
    categories: ["seo", "growth-strategy"],
    challenge: "Technova was overspending on paid search keywords while organic inbound pipelines remained flat.",
    whatWeDid: "We designed an authority-driven SEO content plan and implemented automated schema indexing across product pages.",
    result: "380% increase in organic search demos inside 6 months, establishing Top-1 positions for high-intent search terms.",
    stats: [
      { value: "+380%", label: "Growth in Organic Search Traffic", icon: TrendingUp },
      { value: "Rank #1", label: "For High-Intent SaaS Keywords", icon: Zap },
      { value: "142K", label: "New Monthly Organic Visitors", icon: Users }
    ],
    screenshot: (
      <div className="w-full h-full bg-[#F8FAFC] flex flex-col justify-between p-2.5 text-slate-800 font-sans overflow-hidden select-none relative">
        {/* Screen Glare reflection overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-white/75 pointer-events-none z-30" />

        {/* Dashboard Header */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-1 mb-1 shrink-0 z-10 bg-white/50">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-brand-blue flex items-center justify-center font-bold text-[6px] text-white">T</div>
            <span className="text-[6.5px] font-black text-brand-dark">TECHNOVA</span>
          </div>
          <span className="text-[5.5px] bg-brand-blue/10 text-brand-blue px-1.5 py-0.5 rounded-xs font-black">ANALYTICS</span>
        </div>

        {/* Dashboard Body */}
        <div className="flex-1 flex gap-1.5 items-stretch min-h-0 py-1 z-10">
          {/* Sidebar */}
          <div className="w-4 bg-slate-100 border-r border-slate-200 pr-0.5 flex flex-col gap-1 pt-0.5 shrink-0">
            <span className="h-0.5 w-full rounded bg-brand-blue/40" />
            <span className="h-0.5 w-2/3 rounded bg-slate-300" />
            <span className="h-0.5 w-1/2 rounded bg-slate-300" />
          </div>
          {/* Main Content */}
          <div className="flex-1 flex flex-col justify-between pt-0.5">
            <div className="flex justify-between items-center leading-none">
              <div>
                <span className="text-[4.5px] text-slate-400 font-bold uppercase block">Organic Demos</span>
                <span className="text-[10px] font-black text-slate-800 tracking-tight">142,800 <span className="text-[5.5px] text-emerald-600 font-black">+380%</span></span>
              </div>
            </div>
            {/* Chart Line */}
            <div className="relative h-9 w-full flex items-end mt-1">
              <svg className="w-full h-full text-brand-blue" viewBox="0 0 100 30" preserveAspectRatio="none">
                <path d="M 0 25 Q 25 22, 45 12 T 90 2 L 100 2" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
                <path d="M 0 25 Q 25 22, 45 12 T 90 2 L 100 2 L 100 30 L 0 30 Z" fill="currentColor" fillOpacity="0.05" />
                <circle cx="90" cy="2" r="2.5" fill="#FFF35C" stroke="currentColor" strokeWidth="1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    num: "04",
    brand: "Luxe Staging",
    glowClass: "from-amber-600/20 via-orange-400/10 to-transparent",
    subtitle: "High-End Real Estate Staging",
    categories: ["branding", "web-design"],
    challenge: "Luxe Staging had a template website that failed to appeal to luxury real estate brokers and developers.",
    whatWeDid: "We engineered a high-end visual identity, custom typography palette, and premium animated portfolio website.",
    result: "Secured $14M in design contracts in the first 4 months post-relaunch, with a 3x increase in digital project inquiries.",
    stats: [
      { value: "$14M+", label: "New Project Pipeline Secured", icon: TrendingUp },
      { value: "3x", label: "Increase in RFP Inquiries", icon: Users },
      { value: "100%", label: "Lighthouse Design Score", icon: Award }
    ],
    screenshot: (
      <div className="w-full h-full bg-[#fcfbf9] flex flex-col justify-between p-2.5 text-[#080710] font-serif overflow-hidden select-none relative">
        {/* Screen Glare reflection overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/15 pointer-events-none z-30" />

        {/* Luxe Header */}
        <div className="flex items-center justify-between border-b border-[#080710]/5 pb-1 mb-1 shrink-0 z-10">
          <span className="text-[7.5px] font-black tracking-widest text-[#080710]">L U X E</span>
          <div className="flex gap-1.5 text-[4.5px] font-sans text-neutral-500 uppercase">
            <span>Work</span>
            <span>Philosophy</span>
            <span>Inquire</span>
          </div>
        </div>

        {/* Luxe Hero */}
        <div className="flex-1 flex flex-col justify-between py-1 relative z-10">
          <div className="space-y-0.5 text-center">
            <span className="text-[4.5px] text-neutral-400 uppercase tracking-widest font-sans block">Interior Staging Studio</span>
            <h4 className="text-[7.5px] font-black text-[#080710] leading-tight">Elevated Staging for Elite Residences</h4>
          </div>
          {/* Interior photo simulation in HTML/CSS */}
          <div className="w-full h-11 bg-neutral-200 rounded border border-neutral-300/30 relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-x-0 bottom-0 h-4 bg-neutral-300" />
            <div className="absolute bottom-1 left-4 w-10 h-3 bg-neutral-800 rounded-sm shadow-md" />
            <div className="absolute bottom-0.5 left-15 w-4 h-4 bg-amber-800 rounded-full opacity-40 blur-xs" />
            <span className="text-[4.5px] font-sans font-black text-neutral-600 tracking-wider absolute bottom-1">LUXURY RESIDENCE</span>
          </div>
        </div>
      </div>
    )
  }
];

// Motion Variants for Staggered Case Study Information
const detailsContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15
    }
  }
} as const;

const detailsItemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 220, damping: 20 }
  }
} as const;

const statsContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.25
    }
  }
} as const;

const statItemVariants = {
  hidden: { opacity: 0, x: 20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 250, damping: 22 }
  }
} as const;

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  // Filter case studies by active category
  const filteredCaseStudies = caseStudies.filter((item) =>
    activeCategory === "all" ? true : item.categories.includes(activeCategory)
  );

  // Ensure active index stays within bounds of filtered items
  const activeIndex = activeSlideIndex >= filteredCaseStudies.length ? 0 : activeSlideIndex;
  const activeSlide = filteredCaseStudies[activeIndex] || filteredCaseStudies[0];

  const handleNext = () => {
    setActiveSlideIndex((prev) => (prev + 1) % filteredCaseStudies.length);
  };

  const handlePrev = () => {
    setActiveSlideIndex((prev) => (prev - 1 + filteredCaseStudies.length) % filteredCaseStudies.length);
  };

  const selectCategory = (catId: string) => {
    setActiveCategory(catId);
    setActiveSlideIndex(0);
  };

  return (
    <section id="portfolio" className="relative overflow-hidden bg-transparent py-8 md:py-12 border-t border-b border-brand-zinc-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 mb-6 md:mb-8 text-center items-center max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-3.5 py-1 text-[8px] md:text-[9px] font-black tracking-widest uppercase text-brand-blue select-none self-center">
            04 // PORTFOLIO
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-dark tracking-tight leading-[1.1] select-none">
            Real Results. <span className="text-brand-blue relative inline-block">
              Lasting Impact.
              <svg className="absolute -bottom-1.5 md:-bottom-2 left-0 w-full h-2.5 md:h-3 pointer-events-none drop-shadow-[0_1.5px_2px_rgba(255,243,92,0.45)]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path
                  d="M 2 5 Q 50 2, 98 4 C 99 4, 99 5, 98 5.5 Q 50 7.5, 2 6 Z"
                  fill="#FFF35C"
                />
              </svg>
            </span>
          </h2>
          <p className="text-brand-zinc-500 font-medium leading-relaxed text-xs md:text-sm max-w-xl mx-auto">
            We partner with ambitious brands and turn challenges into growth opportunities. Explore how our strategies deliver measurable results.
          </p>
        </motion.div>

        {/* Categories Navigation Filter Bar (Horizontally Scrollable on Mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full max-w-4xl mx-auto mb-8"
        >
          <div className="bg-white border border-brand-zinc-200/60 shadow-sm p-1.5 rounded-full flex overflow-x-auto lg:flex-wrap items-center justify-start lg:justify-center gap-1 sm:gap-2 scrollbar-none w-full whitespace-nowrap px-4 py-1">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <motion.button
                  key={cat.id}
                  onClick={() => selectCategory(cat.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold transition-colors duration-300 cursor-pointer text-brand-zinc-500 hover:text-brand-dark shrink-0"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryTab"
                      className="absolute inset-0 bg-brand-blue rounded-full shadow-md z-0"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className={`relative z-10 flex items-center gap-2 transition-colors duration-300 ${isActive ? "text-white" : ""}`}>
                    <Icon className="h-3.5 w-3.5" />
                    <span>{cat.label}</span>
                  </span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Interactive Case Study Slider Container */}
        <div className="relative w-full max-w-6xl mx-auto">



          {/* Active Case Study Details Card */}
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(event, info) => {
              const swipe = info.offset.x;
              if (swipe < -60) {
                handleNext();
              } else if (swipe > 60) {
                handlePrev();
              }
            }}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="w-full rounded-[2.5rem] border border-brand-zinc-200/60 bg-white shadow-[0_4px_30px_rgba(3,6,172,0.01)] hover:shadow-[0_25px_60px_rgba(3,6,172,0.06)] transition-all duration-500 p-6 xs:p-8 md:p-12 relative overflow-hidden group cursor-grab active:cursor-grabbing select-none"
          >
            {/* Subtle grid pattern inside card for premium texture */}
            <div className="absolute inset-0 bg-[radial-gradient(#f1f5f9_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-40 pointer-events-none z-0" />

            {/* Drag/Swipe Indicator Badge */}
            <div className="absolute top-4 right-4 md:top-6 md:right-8 z-20 flex items-center gap-1.5 px-3 py-1 bg-slate-50/90 border border-slate-200/40 rounded-full text-[9px] font-bold text-neutral-400 select-none pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
              <span>Swipe / Drag to Navigate</span>
            </div>

            <AnimatePresence mode="wait">
              {activeSlide && (
                <motion.div
                  key={activeSlide.brand}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10"
                >
                  {/* Column 1: CSS Laptop Mockup on Fluted Pedestal */}
                  <div className="lg:col-span-5 flex flex-col justify-end overflow-visible min-h-[190px] xs:min-h-[220px] relative">
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                      whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
                      className="relative w-full max-w-[280px] xs:max-w-[320px] mx-auto z-10 flex flex-col items-center cursor-pointer group/laptop"
                    >
                      {/* Dynamic Backlight Glow matching the active brand */}
                      <motion.div
                        animate={{
                          scale: [1, 1.15, 1],
                          opacity: [0.35, 0.5, 0.35]
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 4,
                          ease: "easeInOut"
                        }}
                        className={`absolute -inset-14 rounded-full blur-[75px] bg-gradient-to-tr ${activeSlide.glowClass} pointer-events-none z-0`}
                      />

                      {/* Laptop Screen with glare overlay */}
                      <div className="w-[85%] aspect-[16/10] bg-neutral-900 rounded-t-xl p-1.5 border border-neutral-800 shadow-[0_20px_40px_rgba(8,7,16,0.3)] relative z-10">
                        <div className="w-full h-full rounded-md overflow-hidden bg-[#080710] relative">
                          {activeSlide.screenshot}
                        </div>
                        {/* Webcam */}
                        <div className="absolute top-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-black rounded-full" />
                      </div>

                      {/* Laptop Base */}
                      <div className="w-full h-2.5 bg-neutral-300 rounded-b-xl border-t border-neutral-400 relative z-20 shadow-[0_3px_6px_rgba(0,0,0,0.15)] flex flex-col justify-between p-0.5">
                        <div className="w-[80%] h-0.5 bg-neutral-400 mx-auto rounded-xs opacity-50" />
                        <div className="w-[20%] h-[2px] bg-neutral-300 mx-auto rounded-xs border border-neutral-400/40" />
                      </div>
                    </motion.div>

                    {/* Fluted/Ribbed Pedestal with cast shadow */}
                    <div className="relative w-[90%] h-16 xs:h-20 mx-auto -mt-1 rounded-t-xl overflow-hidden shadow-[0_15px_30px_rgba(8,7,16,0.15)]">
                      <div
                        className="absolute inset-0 border-t border-x border-slate-300/40"
                        style={{
                          backgroundImage: 'linear-gradient(90deg, #a3a3a3 0%, #e5e5e5 12%, #c2c2c2 25%, #f5f5f5 37%, #a3a3a3 50%, #e5e5e5 62%, #c2c2c2 75%, #f5f5f5 87%, #a3a3a3 100%)',
                          backgroundSize: '36px 100%',
                        }}
                      />
                      {/* Ambient laptop shadow */}
                      <motion.div
                        animate={{ opacity: [0.4, 0.25, 0.4] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="absolute top-0 inset-x-0 h-2.5 bg-gradient-to-b from-black/40 to-transparent z-10"
                      />
                      {/* Light highlight at the very top edge of pedestal */}
                      <div className="absolute top-[0.5px] inset-x-0 h-[0.5px] bg-white/40 z-15" />
                    </div>
                  </div>

                  {/* Column 2: Challenge, What We Did, Result */}
                  <motion.div
                    variants={detailsContainerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false }}
                    className="lg:col-span-4 space-y-6"
                  >
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="inline-flex items-center gap-1.5 text-[8px] md:text-[9px] font-black tracking-widest text-brand-blue uppercase leading-none">
                          FEATURED CASE STUDY
                        </span>
                        <span className="text-[10px] font-mono font-bold text-brand-blue/70 bg-brand-blue/5 border border-brand-blue/10 px-2.5 py-0.5 rounded-full select-none">
                          {activeSlide.num} / {String(filteredCaseStudies.length).padStart(2, '0')}
                        </span>
                      </div>
                      <h3 className="font-heading text-2xl md:text-3xl font-extrabold text-brand-dark tracking-tight leading-none mb-1">
                        {activeSlide.brand}
                      </h3>
                      <p className="text-[10px] md:text-xs font-bold text-brand-zinc-400">
                        {activeSlide.subtitle}
                      </p>
                    </div>

                    <div className="space-y-4">
                      {/* Challenge */}
                      <motion.div variants={detailsItemVariants} className="flex gap-3 xs:gap-3.5 items-start group/item">
                        <div className="flex h-8 w-8 xs:h-9 xs:w-9 shrink-0 items-center justify-center rounded-full bg-brand-blue/5 border border-brand-blue/10 text-brand-blue group-hover/item:bg-brand-blue group-hover/item:text-white group-hover/item:scale-110 transition-all duration-300">
                          <TargetIcon className="h-4 w-4 xs:h-4.5 xs:w-4.5" />
                        </div>
                        <div>
                          <span className="text-[10px] md:text-[11px] font-black uppercase text-brand-dark block tracking-wider leading-none mb-1">
                            The Challenge
                          </span>
                          <p className="text-[11px] md:text-xs text-brand-zinc-500 font-semibold leading-relaxed">
                            {activeSlide.challenge}
                          </p>
                        </div>
                      </motion.div>

                      {/* What We Did */}
                      <motion.div variants={detailsItemVariants} className="flex gap-3 xs:gap-3.5 items-start group/item">
                        <div className="flex h-8 w-8 xs:h-9 xs:w-9 shrink-0 items-center justify-center rounded-full bg-brand-blue/5 border border-brand-blue/10 text-brand-blue group-hover/item:bg-brand-blue group-hover/item:text-white group-hover/item:scale-110 transition-all duration-300">
                          <LightbulbIcon className="h-4 w-4 xs:h-4.5 xs:w-4.5" />
                        </div>
                        <div>
                          <span className="text-[10px] md:text-[11px] font-black uppercase text-brand-dark block tracking-wider leading-none mb-1">
                            What We Did
                          </span>
                          <p className="text-[11px] md:text-xs text-brand-zinc-500 font-semibold leading-relaxed">
                            {activeSlide.whatWeDid}
                          </p>
                        </div>
                      </motion.div>

                      {/* The Result */}
                      <motion.div variants={detailsItemVariants} className="flex gap-3 xs:gap-3.5 items-start group/item">
                        <div className="flex h-8 w-8 xs:h-9 xs:w-9 shrink-0 items-center justify-center rounded-full bg-brand-blue/5 border border-brand-blue/10 text-brand-blue group-hover/item:bg-brand-blue group-hover/item:text-white group-hover/item:scale-110 transition-all duration-300">
                          <TrophyIcon className="h-4 w-4 xs:h-4.5 xs:w-4.5" />
                        </div>
                        <div>
                          <span className="text-[10px] md:text-[11px] font-black uppercase text-brand-dark block tracking-wider leading-none mb-1">
                            The Result
                          </span>
                          <p className="text-[11px] md:text-xs text-brand-zinc-500 font-semibold leading-relaxed">
                            {activeSlide.result}
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Column 3: Stats Panel (Horizontal stats on mobile, vertical list on desktop) */}
                  <motion.div
                    variants={statsContainerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false }}
                    className="lg:col-span-3 bg-slate-50/40 backdrop-blur-xs border border-slate-100/80 shadow-[inset_0_2px_4px_rgba(255,255,255,0.75)] rounded-2xl p-4 md:p-6 grid grid-cols-3 lg:grid-cols-1 gap-3 xs:gap-4 lg:gap-6 lg:space-y-6"
                  >
                    {activeSlide.stats.map((stat, sIdx) => {
                      const StatIcon = stat.icon;
                      return (
                        <motion.div
                          key={sIdx}
                          variants={statItemVariants}
                          whileHover={{ scale: 1.03, y: -2 }}
                          className="flex flex-col lg:flex-row gap-2 lg:gap-4 items-center text-center lg:text-left border-r border-slate-200/50 last:border-0 lg:border-r-0 lg:border-b lg:border-slate-100/60 lg:pb-5 lg:last:border-0 lg:last:pb-0 pr-1.5 lg:pr-0 group/stat cursor-pointer"
                        >
                          <div className="flex h-8.5 w-8.5 xs:h-10 xs:w-10 shrink-0 items-center justify-center rounded-full bg-brand-blue/5 border border-brand-blue/15 text-brand-blue group-hover/stat:scale-110 transition-transform duration-300">
                            <StatIcon className="h-4.5 w-4.5 xs:h-5 xs:w-5" />
                          </div>
                          <div>
                            <span className="text-base xs:text-lg lg:text-2xl font-heading font-black text-brand-blue block tracking-tight leading-none mb-1">
                              {stat.value}
                            </span>
                            <p className="text-[7.5px] xs:text-[8px] lg:text-[9px] font-bold text-brand-zinc-400 uppercase tracking-wider leading-tight">
                              {stat.label}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>

        {/* Bottom Navigation Controls + Pagination Dots */}
        <div className="flex items-center justify-center gap-6 mt-12 relative z-20">
          {/* ArrowLeft */}
          <motion.button
            onClick={handlePrev}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            className="h-10 w-10 flex items-center justify-center rounded-full border border-brand-zinc-200 bg-white text-brand-dark hover:border-brand-blue hover:bg-brand-blue hover:text-white shadow-sm hover:shadow active:scale-95 transition-all duration-300 cursor-pointer"
            aria-label="Previous case study"
          >
            <ArrowLeft className="h-4.5 w-4.5" />
          </motion.button>

          {/* Pagination Dots */}
          {filteredCaseStudies.length > 1 && (
            <div className="flex gap-2 items-center select-none">
              {filteredCaseStudies.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlideIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${activeIndex === idx ? "bg-brand-blue w-6" : "bg-brand-zinc-300 hover:bg-brand-zinc-400 w-2.5"
                    }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}

          {/* ArrowRight */}
          <motion.button
            onClick={handleNext}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            className="h-10 w-10 flex items-center justify-center rounded-full border border-brand-zinc-200 bg-white text-brand-dark hover:border-brand-blue hover:bg-brand-blue hover:text-white shadow-sm hover:shadow active:scale-95 transition-all duration-300 cursor-pointer"
            aria-label="Next case study"
          >
            <ArrowRight className="h-4.5 w-4.5" />
          </motion.button>
        </div>

      </div>
    </section>
  );
}

// Icon wrapper components for uniform challenge items
function TargetIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function LightbulbIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .4 2.5 1.5 3.5.7.8 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}

function TrophyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" />
      <path d="M12 2a6 6 0 0 1 6 6v3.58a6 6 0 0 1-6 6 6 6 0 0 1-6-6V8a6 6 0 0 1 6-6z" />
    </svg>
  );
}
