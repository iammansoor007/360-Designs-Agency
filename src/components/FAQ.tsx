"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const col1Faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer Search Engine Optimization, Social Media Marketing, Paid Advertising (PPC), Web Design & Development, and Branding & Strategy."
  },
  {
    question: "How do you work with clients?",
    answer: "We follow a collaborative, milestone-driven process starting with deep business research, followed by visual prototyping, code implementation, and weekly Loom video briefings."
  },
  {
    question: "How long does it take to see results?",
    answer: "For PPC and paid ads, you can expect leads within the first 48 hours of launch. Organic SEO and authority branding campaigns typically see substantial growth in 3 to 6 months."
  }
];

const col2Faqs = [
  {
    question: "Do you work with small businesses?",
    answer: "Yes, we work with both local growing small businesses looking to establish authority and high-growth venture-backed enterprise companies scaling internationally."
  },
  {
    question: "How much do your services cost?",
    answer: "Every digital audit is bespoke. We provide clear, flat-rate project scopes and monthly advisory packages tailored specifically to your conversion targets and budget."
  },
  {
    question: "Can you help redesign my website?",
    answer: "Absolutely. We specialize in modernizing legacy sites, transitioning them to lightning-fast, conversion-optimized Next.js and React setups that outrank competitors."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <section id="faq" className="relative bg-transparent py-24 border-b border-brand-zinc-200">

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-brand-dark tracking-tight inline-flex items-center gap-3">
            Frequently Asked Questions
            <span className="h-[3px] w-14 bg-brand-yellow rounded-full mt-2" />
          </h2>
        </div>

        {/* 2-Column Accordion Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          
          {/* Column 1 */}
          <div className="space-y-4">
            {col1Faqs.map((faq, index) => {
              const id = `col1-${index}`;
              const isOpen = openIndex === id;

              return (
                <AccordionItem
                  key={id}
                  id={id}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={isOpen}
                  onToggle={toggleFAQ}
                />
              );
            })}
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            {col2Faqs.map((faq, index) => {
              const id = `col2-${index}`;
              const isOpen = openIndex === id;

              return (
                <AccordionItem
                  key={id}
                  id={id}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={isOpen}
                  onToggle={toggleFAQ}
                />
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

function AccordionItem({ id, question, answer, isOpen, onToggle }: {
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: (id: string) => void;
}) {
  return (
    <div
      className={`rounded-2xl border transition-all duration-300 ${
        isOpen 
          ? "border-brand-blue bg-white shadow-md" 
          : "border-brand-zinc-200 bg-white hover:border-brand-blue/30"
      }`}
    >
      <button
        onClick={() => onToggle(id)}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="font-sans font-bold text-sm md:text-base text-brand-dark transition-colors group-hover:text-brand-blue">
          {question}
        </span>
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand-dark transition-colors">
          {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 border-t border-brand-zinc-100 pt-4">
              <p className="text-xs md:text-sm text-brand-zinc-500 leading-relaxed font-semibold">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
