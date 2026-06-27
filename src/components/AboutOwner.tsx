"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import Image from "next/image";


// Variants for repeating hand-drawn paths animations on scroll
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

import content from "@/data/content.json";

// 3D rolling odometer-style digit component
function Digit({ char, isActive }: { char: string; isActive: boolean }) {
  const isNumber = !isNaN(parseInt(char));
  const targetDigit = isNumber ? parseInt(char) : 0;

  if (!isNumber) {
    return <span className="inline-block">{char}</span>;
  }

  return (
    <span className="relative inline-block h-[1.1em] overflow-hidden leading-none select-none">
      {/* Pre-rendered invisible digit keeps width static to prevent layout jitter */}
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

// 3D rolling number counter
function RollingNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });
  const valueString = value.toString();
  const digits = valueString.split("");

  return (
    <span ref={ref} className="inline-flex items-baseline font-heading font-black">
      {digits.map((char, index) => (
        <Digit key={index} char={char} isActive={isInView} />
      ))}
      {suffix && <span className="inline-block font-heading font-black">{suffix}</span>}
    </span>
  );
}

export default function AboutOwner() {
  const { aboutOwner } = content;

  return (
    <section id="about" className="relative overflow-hidden bg-transparent py-10 md:py-16 border-b border-brand-zinc-200">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

          {/* Left Column: Premium Framed Portrait */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="lg:col-span-5 relative w-full flex justify-center"
          >

            {/* Background Pixel Grid decoration */}
            <div className="absolute -inset-4 z-0 grid grid-cols-6 w-[105%] h-[105%] overflow-hidden pointer-events-none opacity-30 border border-brand-blue/5">
              {[...Array(36)].map((_, i) => (
                <div key={i} className="aspect-square border-r border-b border-brand-blue/5" />
              ))}
            </div>

            {/* Hand-drawn marker/brush drawing frame */}
            <svg
              className="absolute -inset-5 sm:-inset-6 w-[110%] sm:w-[112%] h-[110%] sm:h-[112%] pointer-events-none stroke-brand-yellow fill-none z-0 opacity-90"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {/* Stroke 1: Top line (Left to Right) */}
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
              {/* Stroke 2: Right line (Top to Bottom) */}
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
              {/* Stroke 3: Bottom line (Right to Left) */}
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
              {/* Stroke 4: Left line (Bottom to Top) */}
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
              <svg viewBox="0 0 100 100" className="h-full w-full">
                <defs>
                  <path id="aboutCirclePath" d="M 50, 50 m -30, 0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0" />
                </defs>
                <text className="text-[7.5px] font-black uppercase tracking-wider fill-brand-zinc-400 font-sans">
                  <textPath href="#aboutCirclePath" startOffset="0%">
                    {aboutOwner.circleText}
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-5 w-5 rounded-full bg-brand-yellow flex items-center justify-center shadow-md">
                  <span className="text-[10px] font-black text-brand-dark">{aboutOwner.circleLetter}</span>
                </div>
              </div>
            </motion.div>

            {/* Portrait Image Container */}
            <div className="relative aspect-[3/4] w-full max-w-[420px] overflow-hidden rounded-2xl border border-brand-zinc-200 shadow-md bg-brand-zinc-50 z-10 group cursor-pointer">
              <Image
                src={aboutOwner.portraitSrc}
                alt={aboutOwner.portraitAlt}
                fill
                priority
                className="object-cover grayscale group-hover:grayscale-0 scale-[1.01] group-hover:scale-103 transition-all duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 420px"
              />

              {/* Overlay glow on hover */}
              <div className="absolute inset-0 bg-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>

          </motion.div>

          {/* Right Column: Narrative Biography & Clean Stats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="lg:col-span-7 space-y-8 lg:pl-6 z-20 text-center lg:text-left flex flex-col items-center lg:items-start w-full"
          >

            {/* Section Tag */}
            <div className="space-y-4">
              <span className="text-[10px] font-sans font-black tracking-widest text-brand-zinc-400 uppercase">
                {aboutOwner.sectionNumber} // {aboutOwner.sectionTag}
              </span>

              {/* Header with hand-drawn style highlight line */}
              <h2 className="font-heading text-4xl sm:text-5xl font-extrabold leading-[1.15] text-brand-dark tracking-tight">
                {aboutOwner.titleIntro}
                <span className="relative inline-block text-brand-blue">
                  {aboutOwner.titleHighlight}
                  <svg className="absolute -bottom-2.5 left-0 w-full h-3 pointer-events-none drop-shadow-[0_1.5px_2px_rgba(255,243,92,0.45)]" viewBox="0 0 100 10" preserveAspectRatio="none">
                    {/* Primary marker highlight stroke */}
                    <motion.path
                      d="M 2 5 Q 50 3.5, 98 5"
                      stroke="#FFF35C"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      variants={drawVariants}
                      custom={{ delay: 0.3, duration: 0.6 }}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false }}
                    />
                    {/* Secondary overlapping stroke to make it look organic and hand-drawn */}
                    <motion.path
                      d="M 8 7 Q 50 5.5, 92 6.5"
                      stroke="#FFF35C"
                      strokeWidth="2"
                      strokeLinecap="round"
                      opacity="0.8"
                      variants={drawVariants}
                      custom={{ delay: 0.5, duration: 0.5 }}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false }}
                    />
                  </svg>
                </span>
              </h2>
            </div>

            {/* Narrative biography */}
            <div className="space-y-5 font-sans">
              <p className="text-lg md:text-xl text-brand-dark leading-relaxed font-semibold">
                {aboutOwner.bioParagraph1}
              </p>
              <p className="text-sm md:text-base text-brand-zinc-600 leading-relaxed font-normal">
                {aboutOwner.bioParagraph2}
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-1.5 xs:gap-3 sm:gap-6 pt-8 border-t border-brand-zinc-200 mt-8 w-full">
              <div className="relative pl-2 sm:pl-6 border-l-2 border-brand-yellow">
                <div className="text-xl xs:text-2xl sm:text-4xl md:text-5xl font-heading font-black text-brand-blue leading-none">
                  <RollingNumber value={aboutOwner.yearsExpValue} suffix={aboutOwner.yearsExpSuffix} />
                </div>
                <div className="text-[8px] sm:text-[10px] font-bold text-brand-zinc-500 uppercase tracking-widest mt-3 leading-none">
                  {aboutOwner.yearsExpLabel}
                </div>
              </div>

              <div className="relative pl-2 sm:pl-6 border-l-2 border-brand-yellow">
                <div className="text-xl xs:text-2xl sm:text-4xl md:text-5xl font-heading font-black text-brand-blue leading-none">
                  <RollingNumber value={aboutOwner.brandsScaledValue} suffix={aboutOwner.brandsScaledSuffix} />
                </div>
                <div className="text-[8px] sm:text-[10px] font-bold text-brand-zinc-500 uppercase tracking-widest mt-3 leading-none">
                  {aboutOwner.brandsScaledLabel}
                </div>
              </div>

              <div className="relative pl-2 sm:pl-6 border-l-2 border-brand-yellow">
                <div className="text-xl xs:text-2xl sm:text-4xl md:text-5xl font-heading font-black text-brand-blue leading-none">
                  <RollingNumber value={aboutOwner.successRateValue} suffix={aboutOwner.successRateSuffix} />
                </div>
                <div className="text-[8px] sm:text-[10px] font-bold text-brand-zinc-500 uppercase tracking-widest mt-3 leading-none">
                  {aboutOwner.successRateLabel}
                </div>
              </div>
            </div>

            {/* Premium CTA Button */}
            <div className="pt-4">
              <a
                href={aboutOwner.ctaHref}
                className="group inline-flex items-center gap-3 rounded-full bg-brand-dark px-6 py-3.5 text-[10px] font-extrabold uppercase tracking-widest text-white hover:bg-brand-blue transition-all duration-300 shadow-md"
              >
                {aboutOwner.ctaText}
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-yellow text-brand-dark group-hover:bg-white group-hover:text-brand-blue transition-colors duration-300">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
