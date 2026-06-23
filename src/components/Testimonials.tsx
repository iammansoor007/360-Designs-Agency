"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useRef } from "react";

const testimonials = [
  // Row 1
  {
    quote: "Working with Elevate Digital was a game changer for our business. Their SEO strategies increased our organic leads by 150% in months!",
    name: "Sarah Johnson",
    role: "COO",
    company: "TechNova",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    avatarBg: "bg-gradient-to-br from-indigo-500 via-purple-500 to-purple-600",
    column: 1
  },
  {
    quote: "Our organic search traffic surged by 300% within months. Their team doesn't just execute campaigns; they deeply strategize for growth.",
    name: "David Miller",
    role: "CEO",
    company: "ApexRetail",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    avatarBg: "bg-gradient-to-br from-blue-500 via-cyan-500 to-cyan-600",
    column: 1
  },
  {
    quote: "Their branding work gave us a cohesive, world-class identity that our customers constantly compliment. Extremely talented team.",
    name: "Olivia Carter",
    role: "Founder",
    company: "BloomCare",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80",
    avatarBg: "bg-gradient-to-br from-pink-500 via-rose-500 to-rose-600",
    column: 1
  },
  // Row 2
  {
    quote: "Professional, reliable, and results-driven. They treated our business like their own and delivered far beyond our expectations.",
    name: "Michael Thompson",
    role: "Founder",
    company: "BuildRight",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
    avatarBg: "bg-gradient-to-br from-violet-500 via-indigo-500 to-indigo-600",
    column: 2
  },
  {
    quote: "The Next.js website they built is lightning fast, visually stunning, and highly optimized. Our bounce rate dropped down to 18%!",
    name: "Sophia Chen",
    role: "Product Lead",
    company: "FinFlow",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
    avatarBg: "bg-gradient-to-br from-emerald-500 via-teal-500 to-teal-600",
    column: 2
  },
  {
    quote: "We now rank in the top positions for highly competitive keywords that previously felt unreachable. True professionals.",
    name: "Alex Rivera",
    role: "VP of Sales",
    company: "NexaPay",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80",
    avatarBg: "bg-gradient-to-br from-amber-500 via-orange-500 to-orange-600",
    column: 2
  },
  // Row 3
  {
    quote: "The best creative marketing agency we've worked with. Incredibly responsive, strategic, and creative.",
    name: "Emma Davis",
    role: "Marketing Director",
    company: "Greenleaf",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80",
    avatarBg: "bg-gradient-to-br from-teal-500 via-cyan-500 to-cyan-600",
    column: 3
  },
  {
    quote: "Their Meta ads campaigns delivered a stellar 4.5x ROAS in just 30 days. Their data-driven approach is unmatched.",
    name: "Marcus Vance",
    role: "Growth Director",
    company: "CloudCore",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
    avatarBg: "bg-gradient-to-br from-fuchsia-500 via-pink-500 to-pink-600",
    column: 3
  },
  {
    quote: "They redesigned our landing pages and boosted sign-ups overnight. A absolute masterclass in conversion-focused UX design.",
    name: "Chloe Bennett",
    role: "Director",
    company: "VibeSaaS",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&h=150&q=80",
    avatarBg: "bg-gradient-to-br from-orange-500 via-red-500 to-red-600",
    column: 3
  }
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll tracking for parallax offset
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Soft physics-based spring smoothing to ease scroll translation jumps
  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 25,
    restDelta: 0.001
  });

  // Calculate horizontal parallax offsets (Row 1 & 3 shift right, Row 2 shifts left)
  const xRow1 = useTransform(smoothScrollProgress, [0, 1], [-80, 80]);
  const xRow2 = useTransform(smoothScrollProgress, [0, 1], [80, -80]);
  const xRow3 = useTransform(smoothScrollProgress, [0, 1], [-60, 60]);

  // Background floating parallax decorations
  const yBgLeft = useTransform(smoothScrollProgress, [0, 1], [-40, 40]);
  const yBgRight = useTransform(smoothScrollProgress, [0, 1], [40, -40]);

  // Separate testimonials by rows
  const row1 = testimonials.filter((t) => t.column === 1);
  const row2 = testimonials.filter((t) => t.column === 2);
  const row3 = testimonials.filter((t) => t.column === 3);

  // Helper to repeat array for seamless looping marquee
  const tripleArray = <T,>(arr: T[]): T[] => [...arr, ...arr, ...arr];

  return (
    <section
      id="testimonials"
      ref={containerRef}
      className="relative overflow-hidden bg-[#F8FAFC] py-24 md:py-32 border-t border-b border-brand-zinc-200"
    >
      {/* Styles for horizontal marquee animations & hover pause */}
      <style>{`
        @keyframes marquee-left {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-33.333%, 0, 0); }
        }
        @keyframes marquee-right {
          0% { transform: translate3d(-33.333%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .marquee-row-left {
          animation: marquee-left 42s linear infinite;
          will-change: transform;
        }
        .marquee-row-right {
          animation: marquee-right 42s linear infinite;
          will-change: transform;
        }
        .marquee-container:hover .marquee-row-left,
        .marquee-container:hover .marquee-row-right {
          animation-play-state: paused;
        }
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        /* Premium hover card glass swipe effect */
        .card-sweep-glare {
          position: relative;
        }
        .card-sweep-glare::before {
          content: '';
          position: absolute;
          top: 0;
          left: -120%;
          width: 60%;
          height: 100%;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.28) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: skewX(-25deg);
          transition: left 0.85s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none;
          z-index: 20;
        }
        .group:hover.card-sweep-glare::before {
          left: 160%;
        }
      `}</style>

      {/* Decorative Background Glows (Static for GPU performance optimization) */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-brand-blue/5 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-brand-yellow/10 blur-3xl pointer-events-none z-0" />

      {/* Crossing structural grid lines */}
      <div className="absolute inset-x-0 top-12 h-[1px] bg-brand-blue/[0.03] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-12 h-[1px] bg-brand-blue/[0.03] pointer-events-none" />
      <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-brand-blue/[0.03] pointer-events-none" />
      <div className="absolute right-1/4 top-0 bottom-0 w-[1px] bg-brand-blue/[0.03] pointer-events-none" />

      <div className="w-full relative z-10">
        
        {/* Header Section & Scorecard (Side by Side) */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="flex flex-col gap-4 max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-3.5 py-1 text-[8px] md:text-[9px] font-black tracking-widest uppercase text-brand-blue select-none self-start">
              02 // TESTIMONIALS
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-dark tracking-tight leading-[1.1] select-none">
              Verdicts from <span className="text-brand-blue relative inline-block">
                Our Partners
                <svg className="absolute -bottom-1.5 md:-bottom-2 left-0 w-full h-2.5 md:h-3 pointer-events-none drop-shadow-[0_1.5px_2px_rgba(255,243,92,0.45)]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path
                    d="M 2 5 Q 50 2, 98 4 C 99 4, 99 5, 98 5.5 Q 50 7.5, 2 6 Z"
                    fill="#FFF35C"
                  />
                </svg>
              </span>
            </h2>
            <p className="text-brand-zinc-500 font-medium leading-relaxed text-xs md:text-sm mt-1">
              We partner with ambitious founders to scale organic search traffic, craft high-converting Next.js applications, and optimize paid acquisition funnels.
            </p>
          </div>

          {/* Premium Scorecard Widget */}
          <div className="bg-white border border-brand-zinc-200/80 rounded-2xl p-4 sm:p-5 shadow-[0_8px_24px_rgba(3,6,172,0.02)] relative overflow-hidden group/scorecard shrink-0 min-w-[260px] md:max-w-sm">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-brand-blue to-brand-blue/40" />
            <div className="flex items-center gap-4 relative z-10">
              <div className="flex flex-col items-center justify-center h-14 w-14 rounded-xl bg-brand-blue text-white shadow-sm border border-brand-blue/10">
                <span className="font-heading font-black text-lg leading-none">4.9</span>
                <span className="font-mono text-[6px] font-bold uppercase tracking-widest opacity-80 mt-1">Rating</span>
              </div>
              <div className="space-y-1">
                <div className="flex gap-0.5 text-brand-yellow">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-brand-yellow text-brand-yellow" />
                  ))}
                </div>
                <span className="block text-[10px] font-black text-brand-dark uppercase tracking-wider leading-none">
                  140+ Verified reviews
                </span>
                <span className="block text-[8px] font-bold text-brand-zinc-400 uppercase tracking-widest">
                  Clutch, Google & G2 reviews
                </span>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-20 h-20 rounded-full bg-brand-blue/5 blur-xl group-hover/scorecard:scale-150 transition-transform duration-500" />
          </div>
        </div>

        {/* 3-Row Horizontal Scrolling Marquee Area */}
        <div className="relative w-full space-y-6 overflow-hidden py-4">
          
          {/* Side Fade Gradient Overlays - Left & Right Dissolving Mask */}
          <div className="absolute left-0 inset-y-0 w-24 sm:w-48 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/60 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 inset-y-0 w-24 sm:w-48 bg-gradient-to-l from-[#F8FAFC] via-[#F8FAFC]/60 to-transparent z-20 pointer-events-none" />

          {/* ROW 1: Right direction (Parallax + xRow1) */}
          <div className="w-full overflow-hidden marquee-container flex">
            <motion.div style={{ x: xRow1 }} className="flex gap-6 w-max">
              <div className="flex gap-6 marquee-row-right w-max">
                {tripleArray(row1).map((item, idx) => (
                  <TestimonialCard key={`row1-${idx}`} item={item} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* ROW 2: Left direction (Parallax + xRow2) */}
          <div className="w-full overflow-hidden marquee-container hidden md:flex">
            <motion.div style={{ x: xRow2 }} className="flex gap-6 w-max">
              <div className="flex gap-6 marquee-row-left w-max">
                {tripleArray(row2).map((item, idx) => (
                  <TestimonialCard key={`row2-${idx}`} item={item} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* ROW 3: Right direction (Parallax + xRow3) */}
          <div className="w-full overflow-hidden marquee-container hidden lg:flex">
            <motion.div style={{ x: xRow3 }} className="flex gap-6 w-max">
              <div className="flex gap-6 marquee-row-right w-max">
                {tripleArray(row3).map((item, idx) => (
                  <TestimonialCard key={`row3-${idx}`} item={item} />
                ))}
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}

function TestimonialCard({ item }: {
  item: {
    quote: string;
    name: string;
    role: string;
    company: string;
    rating: number;
    avatar: string;
    avatarBg: string;
  };
}) {
  return (
    <div className="w-[340px] sm:w-[420px] shrink-0 group relative flex flex-col justify-between rounded-[2rem] border border-brand-zinc-200/80 bg-white p-7 md:p-8 shadow-[0_4px_20px_rgba(3,6,172,0.015)] hover:shadow-[0_16px_36px_rgba(3,6,172,0.06)] hover:border-brand-blue/30 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden card-sweep-glare select-none">
      
      {/* Background radial glow on card hover */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(3,6,172,0.03),transparent_45%)] group-hover:bg-[radial-gradient(circle_at_top_right,rgba(3,6,172,0.06),transparent_45%)] transition-colors duration-500 pointer-events-none z-0" />

      {/* Verified Partner Badge & Score Pill */}
      <div className="flex items-center justify-between mb-6 z-10 relative">
        <div className="flex items-center gap-1.5 bg-brand-blue/5 border border-brand-blue/10 rounded-full px-3 py-1 shadow-sm">
          <Star className="h-3 w-3 fill-brand-yellow text-brand-yellow" />
          <span className="font-mono text-[9px] font-black text-brand-blue tracking-wider">5.0 SCORE</span>
        </div>
        <div className="flex items-center gap-1.5 bg-[#22c55e]/6 border border-[#22c55e]/15 rounded-full px-2.5 py-0.5 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-ping" />
          <span className="font-mono text-[7px] font-black text-emerald-600 tracking-wider">VERIFIED</span>
        </div>
      </div>

      {/* Quote Mark Watermark */}
      <Quote className="absolute -bottom-6 -right-6 h-28 w-28 text-brand-blue/[0.015] group-hover:text-brand-blue/[0.04] transition-colors duration-500 pointer-events-none z-0" />

      {/* Ambient Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 grid grid-cols-4 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-700">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="aspect-square border-l border-t border-brand-blue/5" />
        ))}
      </div>

      {/* Quote Content Section */}
      <div className="relative z-10 flex-1 flex flex-col justify-start">
        <Quote className="h-7 w-7 text-brand-blue/15 mb-3 group-hover:text-brand-blue/25 transition-colors duration-300" />
        <p className="font-heading text-xs sm:text-[13px] md:text-[14px] leading-relaxed text-brand-dark italic font-semibold tracking-tight">
          "{item.quote}"
        </p>
      </div>

      {/* Client Profile Footer */}
      <div className="relative z-10 flex items-center gap-4 mt-6 pt-5 border-t border-brand-zinc-100/80">
        {/* Dynamic color gradient squircle avatar */}
        <div className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${item.avatarBg} text-white font-sans font-black text-xs border border-white/20 shadow-md group-hover:scale-105 transition-transform duration-300 overflow-hidden`}>
          {/* Initials Fallback */}
          <span className="absolute inset-0 flex items-center justify-center">
            {item.name.split(" ").map((n) => n[0]).join("")}
          </span>
          {/* Avatar Image */}
          <img
            src={item.avatar}
            alt={item.name}
            className="absolute inset-0 w-full h-full object-cover rounded-2xl z-10"
            loading="lazy"
          />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline justify-between gap-2">
            <span className="block text-[11px] font-black text-brand-dark uppercase tracking-wider truncate leading-none">
              {item.name}
            </span>
            <span className="font-mono text-[7.5px] font-black text-brand-blue uppercase tracking-widest bg-brand-blue/5 px-2 py-0.5 rounded-md shrink-0">
              {item.company}
            </span>
          </div>
          <span className="block text-[9px] font-bold text-brand-zinc-400 uppercase tracking-widest mt-1.5">
            {item.role}
          </span>
        </div>
      </div>
    </div>
  );
}
