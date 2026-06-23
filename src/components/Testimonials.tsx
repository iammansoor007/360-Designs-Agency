"use client";

import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote: "Working with Elevate Digital was a game changer for our business. Their strategies increased our leads by 150%!",
    name: "Sarah Johnson",
    role: "COO",
    company: "TechNova",
    rating: 5,
    avatar: "SJ"
  },
  {
    quote: "Professional, reliable, and results-driven. They truly care about our growth and deliver beyond expectations.",
    name: "Michael Thompson",
    role: "Founder",
    company: "BuildRight",
    rating: 5,
    avatar: "MT"
  },
  {
    quote: "The best marketing agency we've worked with. Creative, responsive, and incredibly effective.",
    name: "Emma Davis",
    role: "Marketing Director",
    company: "Greenleaf",
    rating: 5,
    avatar: "ED"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="relative overflow-hidden bg-transparent py-24 border-t border-b border-brand-zinc-200">

      {/* Title */}
      <div className="mx-auto max-w-7xl px-6 md:px-12 mb-20 text-center relative z-10">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-brand-zinc-200 px-3.5 py-1 text-[9px] font-black tracking-widest uppercase text-brand-dark select-none shadow-sm">
            02 // TESTIMONIALS
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-brand-dark tracking-tight leading-tight">
            Client{" "}
            <span className="relative inline-block text-brand-blue">
              Verdicts
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

      {/* Testimonials Carousel Container */}
      <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        
        {/* Navigation Arrows */}
        <button
          onClick={prev}
          className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-brand-zinc-200 bg-white text-brand-dark hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all duration-300 shadow-md cursor-pointer hover:scale-105 active:scale-95"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={next}
          className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-brand-zinc-200 bg-white text-brand-dark hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all duration-300 shadow-md cursor-pointer hover:scale-105 active:scale-95"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Carousel Viewport */}
        <div className="mx-auto max-w-5xl px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, idx) => {
              const isMobileActive = activeIndex === idx;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`group relative flex flex-col justify-between rounded-2xl border border-brand-zinc-200/80 bg-white p-8 shadow-sm hover:shadow-xl hover:border-brand-blue transition-all duration-500 overflow-hidden ${
                    !isMobileActive ? "hidden md:flex" : "flex"
                  }`}
                >
                  {/* Top Yellow Accent Bar */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-brand-zinc-100 group-hover:bg-brand-yellow transition-colors duration-500" />
                  
                  {/* Hover Background Grid overlay */}
                  <div className="absolute inset-0 z-0 grid grid-cols-4 pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-700 border-b border-r border-brand-blue/5">
                    {[...Array(16)].map((_, i) => (
                      <div key={i} className="aspect-square border-l border-t border-brand-blue/5" />
                    ))}
                  </div>

                  <div className="relative z-10">
                    {/* Stars badge row */}
                    <div className="inline-flex gap-1 mb-6 bg-brand-light border border-brand-zinc-100 rounded-full px-3 py-1 shadow-sm">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-brand-yellow text-brand-yellow" />
                      ))}
                    </div>

                    {/* Quote - elegant editorial text */}
                    <blockquote className="font-heading text-base leading-relaxed text-brand-dark italic font-semibold">
                      "{item.quote}"
                    </blockquote>
                  </div>

                  {/* Client Profile */}
                  <div className="relative z-10 flex items-center gap-4 mt-8 pt-5 border-t border-brand-zinc-100">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-blue text-white font-sans font-black text-sm border-2 border-white shadow-md">
                      {item.avatar}
                    </div>
                    <div>
                      <span className="block text-xs font-black text-brand-dark uppercase tracking-wider leading-none">
                        {item.name}
                      </span>
                      <span className="block text-[10px] font-bold text-brand-zinc-400 uppercase tracking-widest mt-1">
                        {item.role} @ <span className="text-brand-blue font-black">{item.company}</span>
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex justify-center gap-2 mt-12 relative z-20">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === idx ? "bg-brand-blue w-6" : "bg-brand-zinc-300 hover:bg-brand-zinc-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
