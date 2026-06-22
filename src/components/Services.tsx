"use client";

import { motion } from "framer-motion";
import { Search, Megaphone, Target, Code2, Star, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: <Search className="h-5 w-5 text-brand-blue" />,
    title: "Search Engine Optimization",
    desc: "Scale organic traffic, outrank competitors, and build sustainable leads."
  },
  {
    icon: <Megaphone className="h-5 w-5 text-brand-blue" />,
    title: "Social Media Marketing",
    desc: "Tell compelling stories that build trust, authority, and active communities."
  },
  {
    icon: <Target className="h-5 w-5 text-brand-blue" />,
    title: "Paid Advertising (PPC)",
    desc: "Launch high-performance, conversion-optimized campaigns to scale ROI."
  },
  {
    icon: <Code2 className="h-5 w-5 text-brand-blue" />,
    title: "Web Design & Development",
    desc: "Build lightning-fast, custom websites with stunning UX and conversion flows."
  },
  {
    icon: <Star className="h-5 w-5 text-brand-blue" />,
    title: "Branding & Strategy",
    desc: "Craft custom identities, visual guidelines, and strategic market positioning."
  }
];

export default function Services() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      }
    }
  };

  const cardVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }
    }
  };

  return (
    <section id="services" className="relative overflow-hidden bg-white py-24 md:py-32 border-t border-brand-zinc-200">
      
      {/* Background Soft Glow blobs */}
      <div className="absolute top-0 right-10 -z-10 h-80 w-80 rounded-full bg-brand-blue/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 -z-10 h-80 w-80 rounded-full bg-brand-yellow/15 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        
        {/* Title Tag & Heading */}
        <div className="text-center mb-20">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-zinc-100 px-3.5 py-1 text-[9px] font-black tracking-widest uppercase text-brand-dark select-none">
              03 // EXPERTISE
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-brand-dark tracking-tight leading-tight">
              Services We{" "}
              <span className="relative inline-block text-brand-blue">
                Provide
                <svg className="absolute -bottom-2.5 left-0 w-full h-3 pointer-events-none drop-shadow-[0_1px_1.5px_rgba(255,243,92,0.45)]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path
                    d="M 2 5 Q 50 2, 98 4 C 99 4, 99 5, 98 5.5 Q 50 7.5, 2 6 Z"
                    fill="#FFF35C"
                  />
                </svg>
              </span>
            </h2>
          </div>
        </div>

        {/* 5-Column Grid Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col items-center text-center justify-start rounded-2xl border border-brand-zinc-200 bg-white p-8 shadow-sm hover:shadow-xl hover:border-brand-blue transition-all duration-500 overflow-hidden cursor-pointer"
            >
              {/* Corner Interaction Arrow */}
              <div className="absolute top-4 right-4 text-brand-zinc-300 group-hover:text-brand-blue transition-colors duration-300">
                <ArrowUpRight className="h-4 w-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </div>

              {/* Hover Background Grid Overlay */}
              <div className="absolute inset-0 z-0 grid grid-cols-3 pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-700 border-b border-r border-brand-blue/5">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="aspect-square border-l border-t border-brand-blue/5" />
                ))}
              </div>

              {/* Yellow Circular Icon Wrapper */}
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-brand-yellow border-2 border-white shadow-md group-hover:scale-110 transition-transform duration-300 mb-6 mt-2">
                {service.icon}
              </div>

              {/* Service Info */}
              <h3 className="relative z-10 font-sans font-black text-sm text-brand-dark leading-tight group-hover:text-brand-blue transition-colors min-h-[40px] flex items-center justify-center">
                {service.title}
              </h3>
              <p className="relative z-10 text-xs text-brand-zinc-500 mt-4 leading-relaxed font-semibold">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
