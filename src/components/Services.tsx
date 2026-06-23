"use client";

import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

const services = [
  {
    num: "01",
    title: "Search Engine Optimization (SEO)",
    category: "SEO",
    desc: "Scale organic search traffic, outrank competitors, and secure high-intent leads that drive compounding growth.",
    cardClass: "bg-[#F9FAFB]/90 border-brand-zinc-200/70 hover:bg-brand-blue hover:border-brand-blue hover:text-white shadow-[0_4px_25px_rgba(3,6,172,0.01)] hover:shadow-[0_30px_60px_rgba(3,6,172,0.22)]",
    accentBar: "bg-brand-blue group-hover:bg-brand-yellow",
    titleClass: "text-brand-dark group-hover:text-white",
    descClass: "text-brand-zinc-500 group-hover:text-blue-100",
    tagClass: "text-brand-zinc-400 group-hover:text-blue-200",
    numClass: "text-stroke-blue group-hover:[-webkit-text-stroke-color:rgba(255,255,255,0.2)] opacity-20 group-hover:opacity-15",
    btnClass: "bg-brand-blue text-white group-hover:bg-white group-hover:text-brand-blue group-hover:rotate-45 shadow-brand-blue/20 group-hover:shadow-none",
    blobClass: "bg-brand-blue/10 group-hover:bg-white/20",
    illustrationClass: "bg-white border-brand-zinc-200/50 group-hover:bg-white/10 group-hover:border-white/15",
    illustration: (
      <svg className="w-full h-full text-brand-blue group-hover:text-white transition-colors duration-500" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 20 20 L 180 20 M 20 50 L 180 50 M 20 80 L 180 80 M 20 110 L 180 110" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
        <path d="M 40 10 L 40 130 M 80 10 L 80 130 M 120 10 L 120 130 M 160 10 L 160 130" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />

        {/* Futuristic Monitor Frame */}
        <rect x="25" y="25" width="150" height="90" rx="8" stroke="currentColor" strokeWidth="3" fill="none" />
        {/* Screen Stand */}
        <path d="M 85 115 L 75 135 L 125 135 L 115 115 Z" fill="currentColor" opacity="0.8" />
        <line x1="70" y1="135" x2="130" y2="135" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />

        {/* Dashboard Analytics Elements */}
        {/* Sidebar */}
        <rect x="36" y="34" width="24" height="55" rx="3" fill="currentColor" opacity="0.08" />
        <circle cx="48" cy="44" r="4" fill="currentColor" opacity="0.3" />
        <rect x="42" y="56" width="12" height="3" rx="1" fill="currentColor" opacity="0.3" />
        <rect x="42" y="66" width="12" height="3" rx="1" fill="currentColor" opacity="0.3" />
        <rect x="42" y="76" width="12" height="3" rx="1" fill="currentColor" opacity="0.3" />

        {/* Main Stats Graph */}
        <path d="M 68 80 L 88 65 L 108 72 L 128 48 L 148 52" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 68 80 L 88 65 L 108 72 L 128 48 L 148 52 L 148 90 L 68 90 Z" fill="currentColor" opacity="0.04" />

        {/* Glowing Nodes */}
        <circle cx="128" cy="48" r="4.5" fill="#FFF35C" stroke="currentColor" strokeWidth="2" />
        <circle cx="88" cy="65" r="3" fill="#FFF35C" stroke="currentColor" strokeWidth="1.5" />

        {/* Floating magnifying glass - SEO theme */}
        <g className="animate-float">
          <circle cx="140" cy="85" r="16" stroke="currentColor" strokeWidth="3" fill="none" />
          <circle cx="140" cy="85" r="10" fill="#FFF35C" opacity="0.4" />
          <path d="M 152 97 L 165 110" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          <path d="M 132 81 Q 136 77, 140 78" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
        </g>

        {/* Success Metric pill */}
        <g className="animate-float-delayed">
          <rect x="100" y="32" width="55" height="15" rx="7" fill="currentColor" />
          <text x="127" y="42" textAnchor="middle" fill="#FFF35C" className="group-hover:fill-brand-blue" fontSize="7" fontWeight="bold" fontFamily="monospace">RANK #1</text>
        </g>

        {/* Sparkles */}
        <path d="M 170 40 L 173 44 L 177 45 L 173 46 L 170 50 L 167 46 L 163 45 L 167 44 Z" fill="#FFF35C" stroke="currentColor" strokeWidth="0.5" />
      </svg>
    )
  },
  {
    num: "02",
    title: "Local SEO",
    category: "LOCAL",
    desc: "Dominate local map packs, optimize local directory citations, and drive immediate brick-and-mortar search visibility.",
    cardClass: "bg-[#F9FAFB]/90 border-brand-zinc-200/70 hover:bg-brand-dark hover:border-brand-dark hover:text-white shadow-[0_4px_25px_rgba(3,6,172,0.01)] hover:shadow-[0_30px_60px_rgba(8,7,16,0.35)]",
    accentBar: "bg-brand-dark group-hover:bg-brand-yellow",
    titleClass: "text-brand-dark group-hover:text-white",
    descClass: "text-brand-zinc-500 group-hover:text-brand-zinc-300",
    tagClass: "text-brand-zinc-400 group-hover:text-brand-zinc-400",
    numClass: "text-stroke-dark group-hover:[-webkit-text-stroke-color:rgba(255,255,255,0.2)] opacity-20 group-hover:opacity-15",
    btnClass: "bg-brand-yellow text-brand-dark group-hover:bg-white group-hover:text-brand-dark group-hover:rotate-45 shadow-[#FFA800]/20 group-hover:shadow-none",
    blobClass: "bg-brand-yellow/10 group-hover:bg-white/20",
    illustrationClass: "bg-white border-brand-zinc-200/50 group-hover:bg-white/10 group-hover:border-white/15",
    illustration: (
      <svg className="w-full h-full text-brand-dark group-hover:text-white transition-colors duration-500" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 20 75 L 180 75 M 100 15 L 100 135" stroke="currentColor" strokeWidth="0.5" opacity="0.15" strokeDasharray="3 3" />
        <rect x="25" y="25" width="150" height="100" rx="8" stroke="currentColor" strokeWidth="2.5" fill="none" />
        {/* Map Grid Roads */}
        <path d="M 55 25 Q 70 70, 55 125 M 145 25 Q 130 70, 145 125 M 25 55 L 175 55 M 25 95 L 175 95" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
        {/* Pulsing Coordinate Pins */}
        <circle cx="100" cy="65" r="15" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" className="animate-pulse" />
        <circle cx="100" cy="65" r="5" fill="#FFF35C" stroke="currentColor" strokeWidth="1.5" />
        <g className="animate-float">
          {/* Main Pin */}
          <path d="M 100 38 C 89 38, 82 45, 82 56 C 82 71, 100 92, 100 92 C 100 92, 118 71, 118 56 C 118 45, 111 38, 100 38 Z" fill="currentColor" stroke="none" />
          <circle cx="100" cy="53" r="5" fill="#FFF35C" className="group-hover:fill-brand-dark" />
        </g>
        {/* Mini Pins */}
        <circle cx="50" cy="85" r="3" fill="#FFF35C" stroke="currentColor" strokeWidth="1" />
        <circle cx="150" cy="45" r="3" fill="#FFF35C" stroke="currentColor" strokeWidth="1" />
      </svg>
    )
  },
  {
    num: "03",
    title: "Content Marketing",
    category: "CONTENT",
    desc: "Publish authoritative, conversion-optimized articles and resources that build brand trust and compound search traffic.",
    cardClass: "bg-[#F9FAFB]/90 border-brand-zinc-200/70 hover:bg-brand-yellow hover:border-brand-yellow hover:text-brand-dark shadow-[0_4px_25px_rgba(3,6,172,0.01)] hover:shadow-[0_30px_60px_rgba(255,243,92,0.22)]",
    accentBar: "bg-brand-yellow group-hover:bg-brand-blue",
    titleClass: "text-brand-dark group-hover:text-brand-dark",
    descClass: "text-brand-zinc-500 group-hover:text-brand-dark/85",
    tagClass: "text-brand-zinc-400 group-hover:text-brand-dark/70",
    numClass: "text-stroke-blue group-hover:[-webkit-text-stroke-color:rgba(8,7,16,0.25)] opacity-20 group-hover:opacity-15",
    btnClass: "bg-brand-blue text-white group-hover:bg-brand-dark group-hover:text-white group-hover:rotate-45 shadow-brand-blue/20 group-hover:shadow-none",
    blobClass: "bg-brand-blue/10 group-hover:bg-brand-dark/10",
    illustrationClass: "bg-white border-brand-zinc-200/50 group-hover:bg-white/30 group-hover:border-brand-dark/15",
    illustration: (
      <svg className="w-full h-full text-brand-blue group-hover:text-brand-dark transition-colors duration-500" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Document Editor Layout */}
        <rect x="35" y="25" width="130" height="100" rx="8" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <line x1="50" y1="42" x2="110" y2="42" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <line x1="50" y1="58" x2="150" y2="58" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <line x1="50" y1="74" x2="135" y2="74" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <line x1="50" y1="90" x2="150" y2="90" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />

        {/* Floating Category Pills */}
        <g className="animate-float" transform="translate(100, 102)">
          <rect x="0" y="0" width="50" height="15" rx="7.5" fill="currentColor" />
          <text x="25" y="10" textAnchor="middle" fill="#FFF35C" className="group-hover:fill-brand-yellow" fontSize="7" fontWeight="bold" fontFamily="monospace">BLOG</text>
        </g>

        {/* Drawing Pen Icon */}
        <g className="animate-float-reverse" transform="translate(138, 28)">
          <path d="M 0 16 L 16 0 L 20 4 L 4 20 Z" fill="#FFF35C" stroke="currentColor" strokeWidth="1.5" />
          <path d="M 0 16 L -2 18 L -1 20 L 2 18 Z" fill="currentColor" />
        </g>
      </svg>
    )
  },
  {
    num: "04",
    title: "Google Ads (PPC)",
    category: "PPC",
    desc: "Launch high-performance search, display, and shopping campaigns that turn search intent into immediate sales.",
    cardClass: "bg-[#F9FAFB]/90 border-brand-zinc-200/70 hover:bg-brand-blue hover:border-brand-blue hover:text-white shadow-[0_4px_25px_rgba(3,6,172,0.01)] hover:shadow-[0_30px_60px_rgba(3,6,172,0.22)]",
    accentBar: "bg-brand-blue group-hover:bg-brand-yellow",
    titleClass: "text-brand-dark group-hover:text-white",
    descClass: "text-brand-zinc-500 group-hover:text-blue-100",
    tagClass: "text-brand-zinc-400 group-hover:text-blue-200",
    numClass: "text-stroke-blue group-hover:[-webkit-text-stroke-color:rgba(255,255,255,0.2)] opacity-20 group-hover:opacity-15",
    btnClass: "bg-brand-blue text-white group-hover:bg-white group-hover:text-brand-blue group-hover:rotate-45 shadow-brand-blue/20 group-hover:shadow-none",
    blobClass: "bg-brand-blue/10 group-hover:bg-white/20",
    illustrationClass: "bg-white border-brand-zinc-200/50 group-hover:bg-white/10 group-hover:border-white/15",
    illustration: (
      <svg className="w-full h-full text-brand-blue group-hover:text-white transition-colors duration-500" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="75" r="60" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 5" opacity="0.1" />
        <circle cx="100" cy="75" r="45" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.15" />
        <rect x="25" y="25" width="150" height="98" rx="8" stroke="currentColor" strokeWidth="3" fill="none" />
        <rect x="25" y="25" width="150" height="18" fill="currentColor" opacity="0.08" rx="8" />
        <circle cx="37" cy="34" r="3" fill="currentColor" opacity="0.3" />
        <circle cx="45" cy="34" r="3" fill="currentColor" opacity="0.3" />

        {/* target */}
        <g transform="translate(100, 76)">
          <circle cx="0" cy="0" r="28" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="0" cy="0" r="18" stroke="#FFF35C" strokeWidth="2.5" fill="#FFF35C" fillOpacity="0.15" />
          <circle cx="0" cy="0" r="5" fill="#FFF35C" className="animate-pulse" />
        </g>
        <g className="animate-float">
          <line x1="150" y1="36" x2="114" y2="65" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          <path d="M 146 34 L 154 32 L 152 40 L 148 36 Z" fill="currentColor" />
        </g>
        <g className="animate-float-delayed">
          <rect x="35" y="55" width="46" height="18" rx="5" fill="currentColor" />
          <text x="58" y="67" textAnchor="middle" fill="#FFF35C" className="group-hover:fill-brand-blue" fontSize="7" fontWeight="bold" fontFamily="monospace">ROI 380%</text>
        </g>
      </svg>
    )
  },
  {
    num: "05",
    title: "Meta Ads",
    category: "ADS",
    desc: "Engage target audiences across Facebook & Instagram with scroll-stopping ad creatives and high-conversion funnels.",
    cardClass: "bg-[#F9FAFB]/90 border-brand-zinc-200/70 hover:bg-brand-dark hover:border-brand-dark hover:text-white shadow-[0_4px_25px_rgba(3,6,172,0.01)] hover:shadow-[0_30px_60px_rgba(8,7,16,0.35)]",
    accentBar: "bg-brand-dark group-hover:bg-brand-yellow",
    titleClass: "text-brand-dark group-hover:text-white",
    descClass: "text-brand-zinc-500 group-hover:text-brand-zinc-300",
    tagClass: "text-brand-zinc-400 group-hover:text-brand-zinc-400",
    numClass: "text-stroke-dark group-hover:[-webkit-text-stroke-color:rgba(255,255,255,0.2)] opacity-20 group-hover:opacity-15",
    btnClass: "bg-brand-yellow text-brand-dark group-hover:bg-white group-hover:text-brand-dark group-hover:rotate-45 shadow-[#FFA800]/20 group-hover:shadow-none",
    blobClass: "bg-brand-yellow/10 group-hover:bg-white/20",
    illustrationClass: "bg-white border-brand-zinc-200/50 group-hover:bg-white/10 group-hover:border-white/15",
    illustration: (
      <svg className="w-full h-full text-brand-dark group-hover:text-white transition-colors duration-500" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="75" r="50" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 6" opacity="0.1" />
        <g className="animate-float" transform="translate(45, 25)">
          <rect x="0" y="0" width="110" height="100" rx="10" stroke="currentColor" strokeWidth="2.5" fill="white" className="group-hover:fill-brand-dark/15 transition-colors duration-500" />
          <circle cx="18" cy="18" r="6" fill="#FFF35C" stroke="currentColor" strokeWidth="1.25" />
          <rect x="30" y="13" width="50" height="4" rx="2" fill="currentColor" opacity="0.45" />
          <rect x="30" y="21" width="30" height="3" rx="1.5" fill="currentColor" opacity="0.25" />
          <rect x="10" y="34" width="90" height="42" rx="6" fill="currentColor" opacity="0.06" stroke="currentColor" strokeWidth="1" />
          <path d="M 18 66 L 36 50 L 54 58 L 72 42 L 92 52" stroke="#FFF35C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="72" cy="42" r="3" fill="currentColor" />
          <circle cx="72" cy="42" r="6" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="animate-pulse" />
          <rect x="10" y="82" width="45" height="10" rx="3" fill="currentColor" opacity="0.1" />
          <rect x="60" y="82" width="40" height="10" rx="3" fill="#FFF35C" />
          <text x="80" y="89.5" textAnchor="middle" fill="currentColor" className="group-hover:fill-brand-dark" fontSize="6.5" fontWeight="black" fontFamily="sans-serif">SHOP</text>
        </g>
        <g className="animate-float-delayed" transform="translate(15, 60)">
          <circle cx="12" cy="12" r="12" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="1.5" />
          <text x="12" y="17.5" textAnchor="middle" fill="currentColor" fontSize="13" fontWeight="900" fontFamily="sans-serif">f</text>
        </g>
        <g className="animate-float-reverse" transform="translate(161, 60)">
          <circle cx="12" cy="12" r="12" fill="#FFF35C" stroke="currentColor" strokeWidth="1.5" />
          <rect x="6.5" y="6.5" width="11" height="11" rx="2.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.25" fill="none" />
          <circle cx="15.5" cy="8.5" r="0.75" fill="currentColor" />
        </g>
        <g className="animate-float-reverse" transform="translate(80, 10)">
          <rect width="40" height="13" rx="6.5" fill="currentColor" />
          <text x="20" y="9.2" textAnchor="middle" fill="#FFF35C" fontSize="6.5" fontWeight="bold" fontFamily="monospace">ROAS 4.8x</text>
        </g>
      </svg>
    )
  },
  {
    num: "06",
    title: "Social Media Management",
    category: "SMM",
    desc: "Tell compelling stories, publish platform-specific content, and grow organic followings across key networks.",
    cardClass: "bg-[#F9FAFB]/90 border-brand-zinc-200/70 hover:bg-brand-yellow hover:border-brand-yellow hover:text-brand-dark shadow-[0_4px_25px_rgba(3,6,172,0.01)] hover:shadow-[0_30px_60px_rgba(255,243,92,0.22)]",
    accentBar: "bg-brand-yellow group-hover:bg-brand-blue",
    titleClass: "text-brand-dark group-hover:text-brand-dark",
    descClass: "text-brand-zinc-500 group-hover:text-brand-dark/85",
    tagClass: "text-brand-zinc-400 group-hover:text-brand-dark/70",
    numClass: "text-stroke-blue group-hover:[-webkit-text-stroke-color:rgba(8,7,16,0.25)] opacity-20 group-hover:opacity-15",
    btnClass: "bg-brand-blue text-white group-hover:bg-brand-dark group-hover:text-white group-hover:rotate-45 shadow-brand-blue/20 group-hover:shadow-none",
    blobClass: "bg-brand-blue/10 group-hover:bg-brand-dark/10",
    illustrationClass: "bg-white border-brand-zinc-200/50 group-hover:bg-white/30 group-hover:border-brand-dark/15",
    illustration: (
      <svg className="w-full h-full text-brand-blue group-hover:text-brand-dark transition-colors duration-500" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="100" y1="10" x2="100" y2="140" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.15" />
        <line x1="20" y1="75" x2="180" y2="75" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.15" />
        <g className="animate-float" transform="translate(68, 20)">
          <rect x="0" y="0" width="64" height="110" rx="12" stroke="currentColor" strokeWidth="3" fill="white" className="group-hover:fill-brand-yellow/10 transition-colors duration-500" />
          <rect x="4" y="4" width="56" height="102" rx="9" fill="#F9FAFB" className="group-hover:fill-white/20 transition-colors duration-500" />
          <rect x="22" y="7" width="20" height="4.5" rx="2.25" fill="currentColor" />
          <circle cx="32" cy="24" r="8" fill="currentColor" opacity="0.1" />
          <circle cx="32" cy="24" r="8" stroke="currentColor" strokeWidth="1" fill="none" />
          <rect x="16" y="38" width="32" height="4" rx="2" fill="currentColor" opacity="0.4" />
          <rect x="22" y="46" width="20" height="3" rx="1.5" fill="currentColor" opacity="0.2" />
          <rect x="10" y="55" width="44" height="34" rx="4" fill="currentColor" opacity="0.05" stroke="currentColor" strokeWidth="1" />
          <circle cx="21" cy="98" r="2.5" fill="#FFF35C" />
          <rect x="27.5" y="96.5" width="16" height="3" rx="1.5" fill="currentColor" opacity="0.3" />
        </g>
        <g className="animate-float-delayed" transform="translate(20, 55)">
          <rect width="30" height="20" rx="6" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="1.5" />
          <path d="M 8 20 L 4 24 L 10 20 Z" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="10" cy="10" r="2" fill="#FFF35C" />
          <circle cx="15" cy="10" r="2" fill="#FFF35C" />
          <circle cx="20" cy="10" r="2" fill="#FFF35C" />
        </g>
        <g className="animate-float-reverse" transform="translate(155, 55)">
          <circle cx="15" cy="10" r="10" fill="#FFF35C" stroke="currentColor" strokeWidth="1.5" />
          <path d="M 12 7.5 C 10.5 6, 7 6, 5.5 8 C 4 6, 0.5 6, -1 7.5 C -2.5 9, -1 13.5, 12 19 C 25 13.5, 26.5 9, 25 7.5 C 23.5 6, 20 6, 18.5 8 Z" transform="translate(3, -0.5) scale(0.4)" fill="currentColor" />
        </g>
      </svg>
    )
  },
  {
    num: "07",
    title: "GMB Optimization",
    category: "GMB",
    desc: "Claim, optimize, and actively manage your Google Business Profile to capture high-intent local phone calls and map visits.",
    cardClass: "bg-[#F9FAFB]/90 border-brand-zinc-200/70 hover:bg-brand-blue hover:border-brand-blue hover:text-white shadow-[0_4px_25px_rgba(3,6,172,0.01)] hover:shadow-[0_30px_60px_rgba(3,6,172,0.22)]",
    accentBar: "bg-brand-blue group-hover:bg-brand-yellow",
    titleClass: "text-brand-dark group-hover:text-white",
    descClass: "text-brand-zinc-500 group-hover:text-blue-100",
    tagClass: "text-brand-zinc-400 group-hover:text-blue-200",
    numClass: "text-stroke-blue group-hover:[-webkit-text-stroke-color:rgba(255,255,255,0.2)] opacity-20 group-hover:opacity-15",
    btnClass: "bg-brand-blue text-white group-hover:bg-white group-hover:text-brand-blue group-hover:rotate-45 shadow-brand-blue/20 group-hover:shadow-none",
    blobClass: "bg-brand-blue/10 group-hover:bg-white/20",
    illustrationClass: "bg-white border-brand-zinc-200/50 group-hover:bg-white/10 group-hover:border-white/15",
    illustration: (
      <svg className="w-full h-full text-brand-blue group-hover:text-white transition-colors duration-500" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="75" r="55" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.15" />
        <g className="animate-float" transform="translate(35, 18)">
          <rect width="130" height="18" rx="9" stroke="currentColor" strokeWidth="1.5" fill="white" className="group-hover:fill-brand-blue/10 transition-colors duration-500" />
          <circle cx="12" cy="9" r="3" stroke="currentColor" strokeWidth="1.25" fill="none" />
          <line x1="14" y1="11" x2="18" y2="15" stroke="currentColor" strokeWidth="1.25" />
          <rect x="25" y="7.5" width="70" height="3.5" rx="1.75" fill="currentColor" opacity="0.35" />
          <circle cx="118" cy="9" r="3" fill="#FFF35C" />
        </g>
        <g className="animate-float-delayed" transform="translate(60, 52)">
          <rect x="0" y="20" width="80" height="42" rx="4" stroke="currentColor" strokeWidth="2.5" fill="none" />
          <path d="M -4 20 L 84 20 L 76 8 L 4 8 Z" fill="currentColor" opacity="0.15" />
          <line x1="16" y1="8" x2="16" y2="20" stroke="currentColor" strokeWidth="1.5" />
          <line x1="32" y1="8" x2="32" y2="20" stroke="currentColor" strokeWidth="1.5" />
          <line x1="48" y1="8" x2="48" y2="20" stroke="currentColor" strokeWidth="1.5" />
          <line x1="64" y1="8" x2="64" y2="20" stroke="currentColor" strokeWidth="1.5" />
          <line x1="-4" y1="20" x2="84" y2="20" stroke="currentColor" strokeWidth="2" />
          <rect x="12" y="34" width="18" height="28" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <rect x="42" y="34" width="26" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <line x1="42" y1="42" x2="68" y2="42" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        </g>
        <g className="animate-float" transform="translate(100, 36)">
          <path d="M 0 -12 C -7 -12, -12 -7, -12 0 C -12 10, 0 20, 0 20 C 0 20, 12 10, 12 0 C 12 -7, 7 -12, 0 -12 Z" fill="#FFF35C" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="0" cy="-2" r="3.5" fill="currentColor" className="group-hover:fill-brand-blue" />
        </g>
        <g className="animate-float-delayed" transform="translate(20, 68)">
          <rect width="32" height="15" rx="4" fill="currentColor" opacity="0.1" />
          <polygon points="5,1 6.5,4 9.5,4 7,6 8,9 5,7.5 2,9 3,6 0.5,4 3.5,4" fill="#FFF35C" transform="translate(3, 3)" />
          <text x="22" y="11" fill="currentColor" fontSize="7.5" fontWeight="black" fontFamily="monospace">5.0</text>
        </g>
        <g className="animate-float-reverse" transform="translate(148, 68)">
          <rect width="32" height="15" rx="4" fill="#FFF35C" stroke="currentColor" strokeWidth="1.25" />
          <path d="M 5 4 C 4.5 4, 4 4.5, 4 5 C 4 7, 5.5 8.5, 7.5 8.5 C 8 8.5, 8.5 8, 8.5 7.5 L 7.5 6.5 L 7 7 L 6 6 L 6.5 5.5 Z" fill="currentColor" stroke="currentColor" strokeWidth="0.75" transform="translate(2, 2.5)" />
          <text x="21" y="10.5" fill="currentColor" fontSize="7" fontWeight="black" fontFamily="monospace">CALL</text>
        </g>
      </svg>
    )
  },
  {
    num: "08",
    title: "Website Development",
    category: "DEVELOPMENT",
    desc: "Build lightning-fast, custom websites with stunning UX design, Next.js architecture, and clean code.",
    cardClass: "bg-[#F9FAFB]/90 border-brand-zinc-200/70 hover:bg-brand-dark hover:border-brand-dark hover:text-white shadow-[0_4px_25px_rgba(3,6,172,0.01)] hover:shadow-[0_30px_60px_rgba(8,7,16,0.35)]",
    accentBar: "bg-brand-dark group-hover:bg-brand-yellow",
    titleClass: "text-brand-dark group-hover:text-white",
    descClass: "text-brand-zinc-500 group-hover:text-brand-zinc-300",
    tagClass: "text-brand-zinc-400 group-hover:text-brand-zinc-400",
    numClass: "text-stroke-dark group-hover:[-webkit-text-stroke-color:rgba(255,255,255,0.2)] opacity-20 group-hover:opacity-15",
    btnClass: "bg-brand-yellow text-brand-dark group-hover:bg-white group-hover:text-brand-dark group-hover:rotate-45 shadow-[#FFA800]/20 group-hover:shadow-none",
    blobClass: "bg-brand-yellow/10 group-hover:bg-white/20",
    illustrationClass: "bg-white border-brand-zinc-200/50 group-hover:bg-white/10 group-hover:border-white/15",
    illustration: (
      <svg className="w-full h-full text-brand-dark group-hover:text-white transition-colors duration-500" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 20 20 L 180 20 M 20 50 L 180 50 M 20 80 L 180 80 M 20 110 L 180 110" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.1" />
        <g transform="translate(15, 15)" opacity="0.75" className="animate-float-delayed">
          <rect x="15" y="20" width="120" height="85" rx="8" stroke="currentColor" strokeWidth="2" fill="none" />
          <rect x="15" y="20" width="120" height="16" fill="currentColor" opacity="0.08" rx="8" />
          <line x1="25" y1="46" x2="65" y2="46" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <line x1="25" y1="58" x2="80" y2="58" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </g>
        <g transform="translate(45, 35)" className="animate-float">
          <rect x="10" y="15" width="125" height="82" rx="8" stroke="currentColor" strokeWidth="3" fill="white" className="group-hover:fill-white/5" />
          <rect x="10" y="15" width="125" height="18" fill="#F8FAFC" rx="8" className="group-hover:fill-white/10" />
          <circle cx="20" cy="24" r="2.5" fill="currentColor" />
          <circle cx="27" cy="24" r="2.5" fill="currentColor" />
          <rect x="18" y="42" width="28" height="44" rx="4" fill="currentColor" opacity="0.05" stroke="currentColor" strokeWidth="1" />
          <circle cx="32" cy="53" r="5" fill="#FFF35C" stroke="currentColor" strokeWidth="1.25" />
          <line x1="60" y1="49" x2="110" y2="49" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </g>
      </svg>
    )
  },
  {
    num: "09",
    title: "UI/UX Design",
    category: "DESIGN",
    desc: "Map seamless user journeys, construct wireframes, and design interactive visual interfaces that maximize conversion rates.",
    cardClass: "bg-[#F9FAFB]/90 border-brand-zinc-200/70 hover:bg-brand-yellow hover:border-brand-yellow hover:text-brand-dark shadow-[0_4px_25px_rgba(3,6,172,0.01)] hover:shadow-[0_30px_60px_rgba(255,243,92,0.22)]",
    accentBar: "bg-brand-yellow group-hover:bg-brand-blue",
    titleClass: "text-brand-dark group-hover:text-brand-dark",
    descClass: "text-brand-zinc-500 group-hover:text-brand-dark/85",
    tagClass: "text-brand-zinc-400 group-hover:text-brand-dark/70",
    numClass: "text-stroke-blue group-hover:[-webkit-text-stroke-color:rgba(8,7,16,0.25)] opacity-20 group-hover:opacity-15",
    btnClass: "bg-brand-blue text-white group-hover:bg-brand-dark group-hover:text-white group-hover:rotate-45 shadow-brand-blue/20 group-hover:shadow-none",
    blobClass: "bg-brand-blue/10 group-hover:bg-brand-dark/10",
    illustrationClass: "bg-white border-brand-zinc-200/50 group-hover:bg-white/30 group-hover:border-brand-dark/15",
    illustration: (
      <svg className="w-full h-full text-brand-blue group-hover:text-brand-dark transition-colors duration-500" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="25" width="150" height="100" rx="8" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <line x1="25" y1="52" x2="175" y2="52" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
        <line x1="25" y1="92" x2="175" y2="92" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
        <rect x="40" y="34" width="48" height="46" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="64" cy="57" r="10" stroke="currentColor" strokeWidth="1.5" />

        <rect x="102" y="34" width="55" height="15" rx="4" fill="currentColor" opacity="0.1" />
        <rect x="102" y="54" width="45" height="9" rx="2" fill="currentColor" opacity="0.1" />
        <rect x="102" y="68" width="30" height="9" rx="2" fill="currentColor" opacity="0.1" />

        {/* User pointer cursor */}
        <g className="animate-float" transform="translate(130, 82)">
          <path d="M 0 0 L 15 15 L 8 16 L 4 22 Z" fill="#FFF35C" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="1" cy="1" r="4" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
        </g>
      </svg>
    )
  },
  {
    num: "10",
    title: "Graphic Designing",
    category: "DESIGN",
    desc: "Develop high-end marketing collaterals, social graphics, and custom illustration assets that capture immediate customer attention.",
    cardClass: "bg-[#F9FAFB]/90 border-brand-zinc-200/70 hover:bg-brand-blue hover:border-brand-blue hover:text-white shadow-[0_4px_25px_rgba(3,6,172,0.01)] hover:shadow-[0_30px_60px_rgba(3,6,172,0.22)]",
    accentBar: "bg-brand-blue group-hover:bg-brand-yellow",
    titleClass: "text-brand-dark group-hover:text-white",
    descClass: "text-brand-zinc-500 group-hover:text-blue-100",
    tagClass: "text-brand-zinc-400 group-hover:text-blue-200",
    numClass: "text-stroke-blue group-hover:[-webkit-text-stroke-color:rgba(255,255,255,0.2)] opacity-20 group-hover:opacity-15",
    btnClass: "bg-brand-blue text-white group-hover:bg-white group-hover:text-brand-blue group-hover:rotate-45 shadow-brand-blue/20 group-hover:shadow-none",
    blobClass: "bg-brand-blue/10 group-hover:bg-white/20",
    illustrationClass: "bg-white border-brand-zinc-200/50 group-hover:bg-white/10 group-hover:border-white/15",
    illustration: (
      <svg className="w-full h-full text-brand-blue group-hover:text-white transition-colors duration-500" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="25" width="150" height="100" rx="8" stroke="currentColor" strokeWidth="2.5" fill="none" />
        {/* Layered shapes */}
        <g className="animate-float">
          <rect x="42" y="42" width="50" height="50" rx="5" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M 42 75 L 60 57 L 75 75 M 68 68 L 82 52 L 92 68" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="56" cy="56" r="4" fill="#FFF35C" stroke="currentColor" strokeWidth="1" />
        </g>
        <g className="animate-float-reverse" transform="translate(102, 48)">
          <polygon points="18,0 36,30 0,30" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="18" cy="18" r="10" fill="#FFF35C" opacity="0.3" stroke="currentColor" strokeWidth="1" />
        </g>
      </svg>
    )
  },
  {
    num: "11",
    title: "Branding & Identity",
    category: "BRANDING",
    desc: "Craft cohesive logo marks, visual style guides, typography treatments, and positioning grids that command authority.",
    cardClass: "bg-[#F9FAFB]/90 border-brand-zinc-200/70 hover:bg-brand-dark hover:border-brand-dark hover:text-white shadow-[0_4px_25px_rgba(3,6,172,0.01)] hover:shadow-[0_30px_60px_rgba(8,7,16,0.35)]",
    accentBar: "bg-brand-dark group-hover:bg-brand-yellow",
    titleClass: "text-brand-dark group-hover:text-white",
    descClass: "text-brand-zinc-500 group-hover:text-brand-zinc-300",
    tagClass: "text-brand-zinc-400 group-hover:text-brand-zinc-400",
    numClass: "text-stroke-blue group-hover:[-webkit-text-stroke-color:rgba(255,255,255,0.2)] opacity-20 group-hover:opacity-15",
    btnClass: "bg-brand-yellow text-brand-dark group-hover:bg-white group-hover:text-brand-dark group-hover:rotate-45 shadow-[#FFA800]/20 group-hover:shadow-none",
    blobClass: "bg-brand-yellow/10 group-hover:bg-white/20",
    illustrationClass: "bg-white border-brand-zinc-200/50 group-hover:bg-white/10 group-hover:border-white/15",
    illustration: (
      <svg className="w-full h-full text-brand-blue group-hover:text-white transition-colors duration-500" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="100" y1="15" x2="100" y2="135" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.2" />
        <line x1="30" y1="75" x2="170" y2="75" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.2" />
        <rect x="25" y="20" width="150" height="110" rx="8" stroke="currentColor" strokeWidth="2" strokeDasharray="6 4" fill="none" />
        <g className="animate-float">
          <circle cx="85" cy="70" r="28" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="2" />
          <circle cx="115" cy="70" r="28" fill="#FFF35C" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
          <path d="M 100 50 A 28 28 0 0 1 115 70 A 28 28 0 0 1 100 90 A 28 28 0 0 1 85 70 A 28 28 0 0 1 100 50 Z" fill="#FFF35C" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.5" />
        </g>
        <g className="animate-float-reverse">
          <line x1="50" y1="105" x2="150" y2="105" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="50" cy="105" r="4.5" fill="white" stroke="currentColor" strokeWidth="2" className="group-hover:fill-brand-dark" />
          <circle cx="150" cy="105" r="4.5" fill="white" stroke="currentColor" strokeWidth="2" className="group-hover:fill-brand-dark" />
          <rect x="95" y="100" width="10" height="10" fill="#FFF35C" stroke="currentColor" strokeWidth="2" />
        </g>
      </svg>
    )
  },
  {
    num: "12",
    title: "Email Marketing",
    category: "MARKETING",
    desc: "Nurture subscriber lists with custom automated flows, newsletter designs, and targeted sales campaigns.",
    cardClass: "bg-[#F9FAFB]/90 border-brand-zinc-200/70 hover:bg-brand-yellow hover:border-brand-yellow hover:text-brand-dark shadow-[0_4px_25px_rgba(3,6,172,0.01)] hover:shadow-[0_30px_60px_rgba(255,243,92,0.22)]",
    accentBar: "bg-brand-yellow group-hover:bg-brand-blue",
    titleClass: "text-brand-dark group-hover:text-brand-dark",
    descClass: "text-brand-zinc-500 group-hover:text-brand-dark/85",
    tagClass: "text-brand-zinc-400 group-hover:text-brand-dark/70",
    numClass: "text-stroke-blue group-hover:[-webkit-text-stroke-color:rgba(8,7,16,0.25)] opacity-20 group-hover:opacity-15",
    btnClass: "bg-brand-blue text-white group-hover:bg-brand-dark group-hover:text-white group-hover:rotate-45 shadow-brand-blue/20 group-hover:shadow-none",
    blobClass: "bg-brand-blue/10 group-hover:bg-brand-dark/10",
    illustrationClass: "bg-white border-brand-zinc-200/50 group-hover:bg-white/30 group-hover:border-brand-dark/15",
    illustration: (
      <svg className="w-full h-full text-brand-blue group-hover:text-brand-dark transition-colors duration-500" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="75" r="50" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 6" opacity="0.1" />
        <g className="animate-float" transform="translate(40, 42)">
          <rect x="0" y="15" width="120" height="70" rx="6" stroke="currentColor" strokeWidth="2.5" fill="none" />
          <path d="M 0 15 L 60 52 L 120 15" stroke="currentColor" strokeWidth="2.5" fill="none" />
          <rect x="15" y="-14" width="90" height="40" rx="4" fill="white" stroke="currentColor" strokeWidth="2" className="group-hover:fill-brand-yellow/15 transition-colors duration-500" />
          <rect x="23" y="-8" width="74" height="6" rx="1.5" fill="#FFF35C" stroke="currentColor" strokeWidth="1" />
          <line x1="25" y1="5" x2="95" y2="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
          <line x1="25" y1="13" x2="80" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
          <line x1="25" y1="21" x2="65" y2="21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        </g>
        <g className="animate-float-delayed" transform="translate(20, 50)">
          <circle cx="10" cy="10" r="10" fill="#FFF35C" stroke="currentColor" strokeWidth="1.5" />
          <path d="M 6 13 L 14 5 M 14 5 L 9 5 M 14 5 L 14 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <g className="animate-float-reverse" transform="translate(160, 50)">
          <circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.5" />
          <path d="M 6 10 L 9 13 L 15 7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    )
  },
  {
    num: "13",
    title: "App Development",
    category: "DEVELOPMENT",
    desc: "Design and build premium, high-performance iOS and Android mobile apps with native React Native architectures.",
    cardClass: "bg-[#F9FAFB]/90 border-brand-zinc-200/70 hover:bg-brand-blue hover:border-brand-blue hover:text-white shadow-[0_4px_25px_rgba(3,6,172,0.01)] hover:shadow-[0_30px_60px_rgba(3,6,172,0.22)]",
    accentBar: "bg-brand-blue group-hover:bg-brand-yellow",
    titleClass: "text-brand-dark group-hover:text-white",
    descClass: "text-brand-zinc-500 group-hover:text-blue-100",
    tagClass: "text-brand-zinc-400 group-hover:text-blue-200",
    numClass: "text-stroke-blue group-hover:[-webkit-text-stroke-color:rgba(255,255,255,0.2)] opacity-20 group-hover:opacity-15",
    btnClass: "bg-brand-blue text-white group-hover:bg-white group-hover:text-brand-blue group-hover:rotate-45 shadow-brand-blue/20 group-hover:shadow-none",
    blobClass: "bg-brand-blue/10 group-hover:bg-white/20",
    illustrationClass: "bg-white border-brand-zinc-200/50 group-hover:bg-white/10 group-hover:border-white/15",
    illustration: (
      <svg className="w-full h-full text-brand-blue group-hover:text-white transition-colors duration-500" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="75" r="50" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 6" opacity="0.1" />
        <g className="animate-float" transform="translate(68, 20)">
          <rect x="0" y="0" width="64" height="110" rx="12" stroke="currentColor" strokeWidth="3.5" fill="white" className="group-hover:fill-brand-blue/10 transition-colors duration-500" />
          <rect x="4" y="4" width="56" height="102" rx="9" fill="#F9FAFB" className="group-hover:fill-white/20 transition-colors duration-500" />
          <rect x="20" y="7" width="24" height="4.5" rx="2" fill="currentColor" />
          <circle cx="32" cy="48" r="18" fill="currentColor" opacity="0.05" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
          <polygon points="32,38 42,48 32,58 22,48" fill="#FFF35C" stroke="currentColor" strokeWidth="1.5" />
          <rect x="18" y="76" width="7" height="16" rx="1.5" fill="currentColor" opacity="0.3" />
          <rect x="28.5" y="70" width="7" height="22" rx="1.5" fill="currentColor" />
          <rect x="39" y="80" width="7" height="12" rx="1.5" fill="currentColor" opacity="0.3" />
        </g>
        <g className="animate-float-delayed" transform="translate(20, 60)">
          <circle cx="10" cy="10" r="10" fill="#FFF35C" stroke="currentColor" strokeWidth="1.5" />
          <path d="M 6 14 L 10 6 L 14 14 M 8 11.5 L 12 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <g className="animate-float-reverse" transform="translate(160, 60)">
          <circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.5" />
          <path d="M 8 6 L 14 10 L 8 14 Z" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
        </g>
      </svg>
    )
  }
];

export default function Services() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartPos = useRef({ x: 0, scrollLeft: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Handle Mouse Move for Interactive Background Grid/Dots
  const handleMouseMoveSection = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Handle Drag-to-Scroll on Desktop
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    dragStartPos.current = {
      x: e.pageX - carouselRef.current.offsetLeft,
      scrollLeft: carouselRef.current.scrollLeft
    };
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - dragStartPos.current.x) * 1.5; // Drag speed multiplier
    carouselRef.current.scrollLeft = dragStartPos.current.scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const handleNext = () => {
    if (carouselRef.current) {
      const card = carouselRef.current.firstElementChild as HTMLElement;
      if (card) {
        const cardWidth = card.getBoundingClientRect().width;
        const gap = 24; // matches gap-6 (24px)
        carouselRef.current.scrollBy({ left: cardWidth + gap, behavior: "smooth" });
      }
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      const card = carouselRef.current.firstElementChild as HTMLElement;
      if (card) {
        const cardWidth = card.getBoundingClientRect().width;
        const gap = 24;
        carouselRef.current.scrollBy({ left: -(cardWidth + gap), behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      onMouseMove={handleMouseMoveSection}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative overflow-hidden bg-transparent py-8 md:py-12 border-t border-brand-zinc-200"
    >

      {/* Local keyframe animations for premium floating, pulsing, and glass sweep reflections */}
      <style>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(8px); }
        }
        @keyframes blob-float {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.08); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
        .animate-float {
          animation: float 4.5s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 5.5s ease-in-out infinite;
          animation-delay: 1.5s;
        }
        .animate-float-reverse {
          animation: float-reverse 5s ease-in-out infinite;
        }
        .animate-blob-float {
          animation: blob-float 16s infinite ease-in-out;
        }
        .animate-blob-float-delayed {
          animation: blob-float 20s infinite ease-in-out;
          animation-delay: 4s;
        }
        .carousel-grab-container {
          cursor: grab;
        }
        .carousel-grab-container:active {
          cursor: grabbing;
        }
        /* Awwwards-level diagonal glass sweep glare effect on hover */
        .card-sweep {
          position: relative;
        }
        .card-sweep::before {
          content: '';
          position: absolute;
          top: 0;
          left: -110%;
          width: 60%;
          height: 100%;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.28) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: skewX(-28deg);
          transition: left 0.85s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none;
          z-index: 20;
        }
        .group:hover.card-sweep::before {
          left: 160%;
        }
      `}</style>


      {/* crossing structural grid lines */}
      <div className="absolute inset-x-0 top-12 h-[1px] bg-brand-blue/[0.04] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-12 h-[1px] bg-brand-blue/[0.04] pointer-events-none" />
      <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-brand-blue/[0.04] pointer-events-none" />
      <div className="absolute right-1/4 top-0 bottom-0 w-[1px] bg-brand-blue/[0.04] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">

        {/* Header Section: Title and Navigation aligned beautifully */}
        <div className="flex flex-col gap-4 mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-3.5 py-1 text-[8px] md:text-[9px] font-black tracking-widest uppercase text-brand-blue select-none self-start">
            03 // EXPERTISE
          </span>
          <div className="flex items-center justify-between gap-4 w-full">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-dark tracking-tight leading-[1.1] select-none">
              What We <span className="text-brand-blue relative inline-block">
                Do
                <svg className="absolute -bottom-1.5 md:-bottom-2 left-0 w-full h-2.5 md:h-3 pointer-events-none drop-shadow-[0_1.5px_2px_rgba(255,243,92,0.45)]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path
                    d="M 2 5 Q 50 2, 98 4 C 99 4, 99 5, 98 5.5 Q 50 7.5, 2 6 Z"
                    fill="#FFF35C"
                  />
                </svg>
              </span>
            </h2>

            {/* Navigation Controls */}
            <div className="flex gap-2 sm:gap-3 select-none shrink-0">
              <button
                onClick={handlePrev}
                className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border border-brand-zinc-300 text-brand-dark hover:border-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-300 active:scale-95 shadow-sm cursor-pointer"
                aria-label="Previous services"
              >
                <ArrowLeft className="h-4.5 w-4.5 md:h-5 md:w-5" />
              </button>
              <button
                onClick={handleNext}
                className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border border-brand-zinc-300 text-brand-dark hover:border-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-300 active:scale-95 shadow-sm cursor-pointer"
                aria-label="Next services"
              >
                <ArrowRight className="h-4.5 w-4.5 md:h-5 md:w-5" />
              </button>
            </div>
          </div>
          <p className="text-brand-zinc-500 font-medium leading-relaxed text-xs md:text-sm max-w-xl">
            Powerful, custom-tailored solutions designed to accelerate growth and outclass templates.
          </p>
        </div>

        {/* Swipeable & Drag-to-Scroll Snap Carousel */}
        <div
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-none w-full -mx-2 px-2 md:mx-0 md:px-0 py-8 carousel-grab-container select-none"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="w-[86%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] shrink-0 snap-start animate-fade-in"
              >
                <div
                  className={`group relative flex flex-col justify-between rounded-[2.5rem] border p-6 xs:p-8 md:p-10 transition-all duration-500 hover:-translate-y-2.5 h-full min-h-[490px] sm:min-h-[520px] md:min-h-[540px] overflow-hidden card-sweep ${service.cardClass}`}
                >

                  {/* Decorative glowing accent bar on top of the card that illuminates on hover */}
                  <div className={`absolute top-0 left-12 right-12 h-[4px] rounded-b-full transition-transform duration-500 scale-x-75 group-hover:scale-x-100 ${service.accentBar}`} />

                  {/* Giant background outline number */}
                  <span className={`font-heading font-black text-6xl md:text-7xl absolute right-8 top-8 select-none pointer-events-none transition-colors duration-500 ${service.numClass}`}>
                    {service.num}
                  </span>

                  {/* Layout: Uniform Layout (Illustration Top, Content Bottom) for perfect horizontal rhythm */}
                  <div className="flex flex-col h-full justify-between pointer-events-none z-10">
                    <div className="flex flex-col">
                      {/* Illustration Container */}
                      <div className={`relative w-full aspect-[4/3] flex items-center justify-center p-2 mb-6 border backdrop-blur-xs rounded-3xl shadow-inner transition-all duration-500 overflow-visible ${service.illustrationClass}`}>
                        {/* Soft background blob matching service theme */}
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500 ${service.blobClass}`} />

                        <div className="relative z-10 w-full h-full max-h-[145px] flex items-center justify-center group-hover:scale-[1.04] transition-transform duration-500">
                          {service.illustration}
                        </div>
                      </div>

                      {/* Category Label */}
                      <div className={`font-mono text-[9px] font-black uppercase tracking-widest mb-1.5 transition-colors duration-500 ${service.tagClass}`}>
                        // {service.category}
                      </div>

                      {/* Title */}
                      <h3 className={`font-heading text-xl md:text-2xl font-black mb-2.5 leading-tight transition-colors duration-500 ${service.titleClass}`}>
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className={`text-xs md:text-sm font-semibold leading-relaxed transition-colors duration-500 ${service.descClass}`}>
                        {service.desc}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between mt-8 pt-4 border-t border-current/10 w-full transition-colors duration-500">
                      <span className="font-mono text-[10px] font-bold">
                        [ {service.num} ]
                      </span>
                      <div className={`flex h-11 w-11 items-center justify-center rounded-full transition-all duration-500 shadow-md ${service.btnClass}`}>
                        <ArrowUpRight className="h-5 w-5" strokeWidth={2.5} />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
