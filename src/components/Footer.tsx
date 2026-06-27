"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUp, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { FormEvent, useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const wordmarkText = "ELEVATE DIGITAL";
  const wordmarkLetters = Array.from(wordmarkText);

  // Framer Motion variants for letter-by-letter reveal animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.03
      }
    }
  };

  const letterVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <footer className="relative bg-[#090A29] text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
      
      {/* Decorative subtle gradient wash */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-brand-blue/5 blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Main Footer Columns Grid with Balanced Blueprint Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-0 pb-20 border-b border-white/10">
          
          {/* Logo & Description Column (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-6 lg:pr-6">
            <div className="flex items-center gap-2.5">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 overflow-hidden border border-white/10">
                <div className="absolute top-1 left-1 w-6 h-6 rounded-full bg-brand-yellow/80 mix-blend-screen" />
                <div className="absolute bottom-1 right-1 w-6 h-6 rounded-full bg-brand-blue/80 mix-blend-screen" />
                <span className="relative font-heading font-extrabold text-white text-base z-10">E</span>
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-black text-lg leading-none tracking-tight text-white uppercase">
                  Elevate Digital
                </span>
                <span className="font-sans font-bold text-[9px] tracking-widest text-brand-yellow uppercase leading-none mt-1">
                  Marketing Agency
                </span>
              </div>
            </div>
            <p className="text-xs md:text-sm text-brand-zinc-300 leading-relaxed max-w-xs font-semibold">
              Helping businesses grow with smart, motivating strategies that deliver real results.
            </p>
            
            {/* Pulsing Studio Status & Geographic Coordinates */}
            <div className="flex flex-col gap-1.5 pt-1">
              <div className="flex items-center gap-2 text-[9px] font-mono tracking-widest text-brand-zinc-400">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                STUDIO STATUS: OPEN FOR PROJECTS
              </div>
              <span className="text-[9px] font-mono text-brand-zinc-500 tracking-wider">
                NYC 40.7128° N, 74.0060° W // EST. 2024
              </span>
            </div>

            {/* Social Icons (frosted glass circles) */}
            <div className="flex gap-3 pt-2">
              {[
                { icon: <Twitter className="h-4 w-4" />, href: "#" },
                { icon: <Linkedin className="h-4 w-4" />, href: "#" },
                { icon: <Instagram className="h-4 w-4" />, href: "#" },
                { icon: <Github className="h-4 w-4" />, href: "#" }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/10 text-brand-zinc-300 hover:bg-brand-yellow hover:text-brand-dark hover:border-brand-yellow transition-all duration-300 shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4 lg:pl-6 lg:border-l lg:border-white/5">
            <h4 className="font-mono font-bold text-[10px] uppercase tracking-widest text-brand-yellow">
              // Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs md:text-sm font-semibold text-brand-zinc-300">
              {[
                { name: "Home", href: "#" },
                { name: "Services", href: "#services" },
                { name: "About", href: "#about" },
                { name: "Industries", href: "#industries" },
                { name: "Blog", href: "#blog" },
                { name: "FAQ", href: "#faq" },
                { name: "Contact", href: "#contact" }
              ].map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="inline-block hover:text-brand-yellow hover:translate-x-1 transition-all duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4 lg:pl-6 lg:border-l lg:border-white/5">
            <h4 className="font-mono font-bold text-[10px] uppercase tracking-widest text-brand-yellow">
              // Services
            </h4>
            <ul className="space-y-2.5 text-xs md:text-sm font-semibold text-brand-zinc-300">
              {[
                "SEO Optimization",
                "Social Campaigns",
                "PPC Advertising",
                "Web UI/UX Design",
                "Branding & Strategy"
              ].map((item, idx) => (
                <li key={idx}>
                  <span className="inline-block hover:text-brand-yellow hover:translate-x-1 transition-all duration-200 cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Column (lg:col-span-3 - Expanded to fit email addresses safely) */}
          <div className="lg:col-span-3 space-y-4 lg:pl-6 lg:border-l lg:border-white/5">
            <h4 className="font-mono font-bold text-[10px] uppercase tracking-widest text-brand-yellow">
              // Contact Info
            </h4>
            <ul className="space-y-4 text-xs md:text-sm font-semibold text-brand-zinc-300">
              <li className="flex flex-col gap-1">
                <span className="text-[8px] font-mono font-black text-brand-zinc-500 uppercase tracking-widest">// Email</span>
                <a href="mailto:hello@elevatedigital.com" className="text-white hover:text-brand-yellow transition-colors font-mono break-all xs:break-normal">
                  hello@elevatedigital.com
                </a>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-[8px] font-mono font-black text-brand-zinc-500 uppercase tracking-widest">// Phone</span>
                <a href="tel:+11234567890" className="text-white hover:text-brand-yellow transition-colors font-mono break-all xs:break-normal">
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-[8px] font-mono font-black text-brand-zinc-500 uppercase tracking-widest">// Address</span>
                <span className="text-white leading-relaxed">
                  901 Broadway St, New York, NY 10003
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter Column (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4 lg:pl-6 lg:border-l lg:border-white/5">
            <h4 className="font-mono font-bold text-[10px] uppercase tracking-widest text-brand-yellow">
              // Newsletter
            </h4>
            <p className="text-xs text-brand-zinc-300 font-semibold leading-relaxed">
              Subscribe to get tips, insights, and agency updates.
            </p>
            
            <AnimatePresence mode="wait">
              {!subscribed ? (
                <motion.form 
                  key="form"
                  onSubmit={handleSubscribe} 
                  className="flex rounded-xl overflow-hidden bg-white/5 border border-white/10"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent px-3 py-2.5 text-xs text-white focus:outline-none placeholder-brand-zinc-550 font-semibold"
                    placeholder="Email address"
                  />
                  <button
                    type="submit"
                    className="bg-brand-blue text-white px-3.5 flex items-center justify-center hover:bg-brand-yellow hover:text-brand-dark transition-colors duration-300 cursor-pointer"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </motion.form>
              ) : (
                <motion.span 
                  key="success"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="block text-xs font-bold text-brand-yellow"
                >
                  Thanks for subscribing! ✓
                </motion.span>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>

      {/* Full-Width Backdrop Wordmark with viewport-optimized staggered letter reveal */}
      <div className="select-none text-center pointer-events-none mt-12 md:mt-20 mb-6 overflow-hidden w-full px-4 relative z-0">
        <motion.span 
          className="font-sans font-black text-[10vw] leading-none tracking-tighter uppercase flex flex-wrap justify-center w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.01 }}
        >
          {wordmarkLetters.map((letter, idx) => (
            <motion.span
              key={idx}
              variants={letterVariants}
              className={`inline-block transition-all duration-300 cursor-default hover:scale-110 ${
                idx >= 8 
                  ? "text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.08)] hover:[-webkit-text-stroke:1px_#FFF35C] pointer-events-auto" 
                  : "text-white/[0.05] hover:text-brand-yellow pointer-events-auto"
              }`}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.span>
      </div>

      {/* Bottom Bar (Responsive stacking optimized) */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 relative z-10 pt-10 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/5">
        <p className="text-[10px] font-bold text-brand-zinc-550 uppercase tracking-widest text-center md:text-left">
          © {currentYear} Elevate Digital Marketing Agency. All Rights Reserved.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full md:w-auto justify-between md:justify-end">
          <div className="flex gap-4 sm:gap-6 text-[10px] font-bold text-brand-zinc-550 uppercase tracking-wider">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/10 text-brand-zinc-300 hover:bg-brand-yellow hover:text-brand-dark hover:border-brand-yellow transition-all duration-300 cursor-pointer shadow-sm hover:scale-105 active:scale-95"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
