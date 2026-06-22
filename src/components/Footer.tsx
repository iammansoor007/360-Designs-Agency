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

  return (
    <footer className="relative bg-brand-dark-blue text-white pt-20 pb-10 overflow-hidden border-t border-brand-zinc-800">
      
      {/* Decorative vector bg grid */}
      <div className="absolute inset-0 -z-10 bg-linear-grid-white-3 [background-size:40px_40px]" />
      
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-brand-zinc-800">
          
          {/* Logo & Description Column (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2.5">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 overflow-hidden border border-white/10">
                <div className="absolute top-1 left-1 w-6 h-6 rounded-full bg-brand-yellow/80 mix-blend-screen" />
                <div className="absolute bottom-1 right-1 w-6 h-6 rounded-full bg-brand-blue/80 mix-blend-screen" />
                <span className="relative font-heading font-extrabold text-white text-base z-10">E</span>
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-black text-lg leading-none tracking-tight text-white">
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
            {/* Social Icons (styled round grey circles, turning yellow/blue on hover) */}
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
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-brand-yellow">
              Quick Links
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
                  <a href={link.href} className="hover:text-brand-yellow transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-brand-yellow">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs md:text-sm font-semibold text-brand-zinc-300">
              {[
                "SEO",
                "Social Media Marketing",
                "PPC Advertising",
                "Web Design",
                "Branding & Strategy"
              ].map((item, idx) => (
                <li key={idx} className="cursor-pointer hover:text-brand-yellow transition-colors">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Column (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-brand-yellow">
              Contact Info
            </h4>
            <ul className="space-y-4 text-xs md:text-sm font-semibold text-brand-zinc-300">
              <li>
                <span className="block text-[10px] font-bold text-brand-zinc-500 uppercase tracking-wide">Email</span>
                <a href="mailto:hello@elevatedigital.com" className="text-white hover:text-brand-yellow transition-colors">
                  hello@elevatedigital.com
                </a>
              </li>
              <li>
                <span className="block text-[10px] font-bold text-brand-zinc-500 uppercase tracking-wide">Phone</span>
                <a href="tel:+11234567890" className="text-white hover:text-brand-yellow transition-colors">
                  +1 (123) 456-7890
                </a>
              </li>
              <li>
                <span className="block text-[10px] font-bold text-brand-zinc-500 uppercase tracking-wide">Address</span>
                <span className="text-white leading-relaxed">
                  123 Business St, Suite 100, New York, NY 10001, U.S.A.
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter Column (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-brand-yellow">
              Newsletter
            </h4>
            <p className="text-xs text-brand-zinc-300 font-semibold leading-relaxed">
              Subscribe to get tips, insights, and updates.
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
                    className="w-full bg-transparent px-3 py-2 text-xs text-white focus:outline-none placeholder-brand-zinc-500 font-semibold"
                    placeholder="Your email address"
                  />
                  <button
                    type="submit"
                    className="bg-brand-yellow text-brand-dark px-3.5 flex items-center justify-center hover:bg-white hover:text-brand-blue transition-colors cursor-pointer"
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

        {/* Bottom Bar */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] font-bold text-brand-zinc-500 uppercase tracking-widest">
            © {currentYear} Elevate Digital Marketing Agency. All Rights Reserved.
          </p>
          
          <div className="flex gap-6 text-[10px] font-bold text-brand-zinc-500 uppercase tracking-wider">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-brand-zinc-300 hover:bg-brand-yellow hover:text-brand-dark hover:border-brand-yellow transition-all cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
