"use client";

import { motion } from "framer-motion";
import { 
  Sparkles, 
  Terminal, 
  TrendingUp, 
  Zap, 
  HeartHandshake 
} from "lucide-react";

// Variants for repeating hand-drawn paths animations on scroll
const drawVariants = {
  hidden: { pathLength: 0 },
  visible: (custom: { delay: number; duration: number }) => ({
    pathLength: 1,
    transition: { 
      duration: custom?.duration ?? 0.6, 
      delay: custom?.delay ?? 0.2, 
      ease: "easeOut" 
    }
  })
};

const reasons = [
  {
    icon: <Sparkles className="h-5 w-5 text-brand-blue group-hover:text-brand-dark transition-colors duration-300" />,
    title: "Bespoke Visual Polish",
    desc: "We design strictly from scratch. Every typeface selection, letter-spacing token, and background vector is custom-built to match your brand's unique caliber, completely avoiding the overused 'AI SaaS bootstrap template' look."
  },
  {
    icon: <Terminal className="h-5 w-5 text-brand-blue group-hover:text-brand-dark transition-colors duration-300" />,
    title: "Elite Next.js & React Engineering",
    desc: "We build on modern React architectures. Your landing page will load in milliseconds, score 100 on Google Lighthouse, and feature responsive layouts that render beautifully across all mobile viewports."
  },
  {
    icon: <TrendingUp className="h-5 w-5 text-brand-blue group-hover:text-brand-dark transition-colors duration-300" />,
    title: "Conversion-Focused Architecture",
    desc: "Design without conversion is just art. We mathematically structure page hierarchies, button placement, and social proof components to guide visitors toward high-value conversions."
  },
  {
    icon: <Zap className="h-5 w-5 text-brand-blue group-hover:text-brand-dark transition-colors duration-300" />,
    title: "High-Velocity Communication",
    desc: "We run our agency like a top-tier tech startup. You get a dedicated Slack channel, weekly asynchronous video walkthroughs via Loom, and transparent milestones. No mystery delays."
  },
  {
    icon: <HeartHandshake className="h-5 w-5 text-brand-blue group-hover:text-brand-dark transition-colors duration-300" />,
    title: "Direct Access & Elite Support",
    desc: "We are an elite boutique agency. You work directly with the founder and senior specialists, never outsourced juniors. Includes 30 days of post-launch engineering support and training."
  }
];

export default function WhyChooseMe() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }
    }
  };

  return (
    <section id="why-us" className="relative bg-white py-24 border-b border-brand-zinc-200">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -z-10 h-96 w-96 rounded-full bg-brand-yellow/10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Sticky Summary & Value Prop */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="lg:col-span-5 lg:sticky lg:top-28 h-fit space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <span className="text-[10px] font-sans font-black tracking-widest text-brand-zinc-400 uppercase">
              05 // METHODOLOGY
            </span>
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-brand-dark tracking-tight leading-[1.15]">
              Why Elite Ambitions Require{" "}
              <span className="relative inline-block text-brand-blue">
                Custom Execution
                <svg className="absolute -bottom-2 left-0 w-full h-3 pointer-events-none drop-shadow-[0_1.5px_2px_rgba(255,243,92,0.45)]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <motion.path
                    d="M 2 5 Q 50 3.5, 98 5"
                    stroke="#FFF35C"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    variants={drawVariants}
                    custom={{ delay: 0.2, duration: 0.6 }}
                  />
                </svg>
              </span>
            </h2>
            <p className="text-brand-zinc-500 font-medium leading-relaxed max-w-md">
              Cheap templates tell your clients you cut corners. We design custom experiences that validate your pricing model and build immediate authority.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-brand-zinc-200 w-full max-w-md">
              <div className="bg-brand-light p-5 rounded-2xl border border-brand-zinc-200/80 shadow-sm hover:border-brand-blue transition-colors duration-300">
                <span className="block font-heading font-black text-3xl text-brand-blue leading-none">98%</span>
                <span className="block text-[9px] font-bold text-brand-zinc-500 uppercase tracking-widest mt-3 leading-none">Client Retention</span>
              </div>
              <div className="bg-brand-light p-5 rounded-2xl border border-brand-zinc-200/80 shadow-sm hover:border-brand-blue transition-colors duration-300">
                <span className="block font-heading font-black text-3xl text-brand-blue leading-none">3.4x</span>
                <span className="block text-[9px] font-bold text-brand-zinc-500 uppercase tracking-widest mt-3 leading-none">Avg. Conversion</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Detailed Reasons */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            className="lg:col-span-7 space-y-6"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group p-6 md:p-8 rounded-2xl border border-brand-zinc-200 bg-white shadow-sm hover:shadow-md hover:border-brand-blue hover:bg-brand-light/35 transition-all duration-300 flex flex-col md:flex-row gap-6 cursor-pointer"
              >
                {/* Icon wrapper */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-yellow/30 text-brand-blue border border-brand-blue/5 group-hover:scale-110 group-hover:bg-brand-yellow group-hover:border-brand-yellow transition-all duration-500 shadow-sm">
                  {reason.icon}
                </div>
                {/* Content */}
                <div className="space-y-2">
                  <h3 className="font-heading font-extrabold text-xl text-brand-dark group-hover:text-brand-blue transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-sm md:text-base text-brand-zinc-500 leading-relaxed font-normal">
                    {reason.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
