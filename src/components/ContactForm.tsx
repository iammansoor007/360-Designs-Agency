"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { useState, FormEvent, MouseEvent } from "react";
import content from "@/data/content.json";

export default function ContactForm() {
  const { contact } = content;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = contact.errorName;
    if (!formData.email.trim()) {
      newErrors.email = contact.errorEmailRequired;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = contact.errorEmailInvalid;
    }
    if (!formData.phone.trim()) newErrors.phone = contact.errorPhone;
    if (!formData.message.trim()) newErrors.message = contact.errorMessage;
    return newErrors;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <section
      id="contact"
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden bg-[#F9FAFB] dark:bg-[#080710] py-24 md:py-32 border-b border-brand-zinc-200 dark:border-white/10"
    >

      {/* Subtle Light Tilted Grid Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30 z-0">
        <div
          className="absolute -inset-[50%] w-[200%] h-[200%] rotate-[8deg]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(38, 92, 131, 0.035) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(38, 92, 131, 0.035) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px"
          }}
        />
      </div>

      {/* Crossing structural grid lines */}
      <div className="absolute inset-y-12 left-0 right-0 h-[1px] bg-brand-blue/[0.03] pointer-events-none" />
      <div className="absolute inset-y-36 left-0 right-0 h-[1px] bg-brand-blue/[0.03] pointer-events-none" />
      <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-brand-blue/[0.03] pointer-events-none" />
      <div className="absolute right-1/4 top-0 bottom-0 w-[1px] bg-brand-blue/[0.03] pointer-events-none" />

      {/* Interactive Cursor-Following Glowing Orbs */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-brand-blue/[0.06] blur-[100px] pointer-events-none hidden md:block"
        animate={{
          x: mousePos.x - 200,
          y: mousePos.y - 200
        }}
        transition={{ type: "spring", damping: 35, stiffness: 160, mass: 0.6 }}
      />
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full bg-brand-yellow/[0.08] blur-[80px] pointer-events-none hidden md:block"
        animate={{
          x: mousePos.x - 150 + 50,
          y: mousePos.y - 150 + 50
        }}
        transition={{ type: "spring", damping: 45, stiffness: 120, mass: 0.9 }}
      />

      {/* Static corner blurs for mobile support */}
      <div className="absolute top-1/4 left-1/4 w-[280px] h-[280px] rounded-full bg-brand-blue/[0.04] blur-[80px] pointer-events-none md:hidden" />
      <div className="absolute bottom-1/4 right-1/4 w-[200px] h-[200px] rounded-full bg-brand-yellow/[0.06] blur-[60px] pointer-events-none md:hidden" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 relative z-10">

        {/* Columns Grid with items-center alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Integrated Header & Contact Badges */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-3.5 py-1 text-[8px] md:text-[9px] font-black tracking-widest uppercase text-brand-blue select-none">
                {contact.sectionNumber} // {contact.sectionTag}
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-dark tracking-tight leading-[1.1] select-none">
                {contact.titleIntro} <span className="text-brand-blue relative inline-block">
                  {contact.titleHighlight}
                  <svg className="absolute -bottom-1.5 md:-bottom-2 left-0 w-full h-2.5 md:h-3 pointer-events-none drop-shadow-[0_1.5px_2px_rgba(233, 189, 54,0.45)]" viewBox="0 0 100 14" preserveAspectRatio="none">
                    <path
                      d="M 2 7 Q 50 2, 98 5 C 99 5, 99 6, 98 6.5 Q 50 9, 2 8 C 1 8, 1 7, 2 7 Z"
                      fill="#E9BD36"
                    />
                  </svg>
                </span>
              </h2>
              <p className="text-sm text-brand-zinc-500 leading-relaxed font-semibold max-w-md">
                {contact.description}
              </p>
            </div>

            {/* Direct Contact Badges (Responsive Optimized) */}
            <div className="space-y-3.5 max-w-sm">
              {/* Email Badge */}
              <div className="flex items-center gap-3 bg-white/45 dark:bg-white/5 backdrop-blur-md border border-white/60 dark:border-white/10 rounded-2xl p-3 transition-all duration-355 hover:border-brand-blue/30 dark:hover:border-brand-blue/30 hover:bg-white/60 dark:hover:bg-white/10 shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
                <div className="w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex-shrink-0 flex items-center justify-center text-brand-blue shadow-sm">
                  <Mail className="w-4 h-4" />
                </div>
                <a href={`mailto:${contact.email}`} className="text-[10px] xs:text-xs font-bold text-brand-dark hover:text-brand-blue transition-colors font-mono break-all sm:break-normal">
                  {contact.email}
                </a>
              </div>

              {/* Location Badge */}
              <div className="flex items-center gap-3 bg-white/45 dark:bg-white/5 backdrop-blur-md border border-white/60 dark:border-white/10 rounded-2xl p-3 transition-all duration-355 hover:border-brand-blue/30 dark:hover:border-brand-blue/30 hover:bg-white/60 dark:hover:bg-white/10 shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
                <div className="w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex-shrink-0 flex items-center justify-center text-brand-blue shadow-sm">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-[10px] xs:text-xs font-bold text-brand-dark font-mono break-all sm:break-normal">
                  {contact.location}
                </span>
              </div>

              {/* Phone Badge */}
              <div className="flex items-center gap-3 bg-white/45 dark:bg-white/5 backdrop-blur-md border border-white/60 dark:border-white/10 rounded-2xl p-3 transition-all duration-360 hover:border-brand-blue/30 dark:hover:border-brand-blue/30 hover:bg-white/60 dark:hover:bg-white/10 shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
                <div className="w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex-shrink-0 flex items-center justify-center text-brand-blue shadow-sm">
                  <Phone className="w-4 h-4" />
                </div>
                <a href={`tel:${contact.phone.replace(/[^0-9+]/g, "")}`} className="text-[10px] xs:text-xs font-bold text-brand-dark hover:text-brand-blue transition-colors font-mono break-all sm:break-normal">
                  {contact.phone}
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Support Card (Restored to Light Glassmorphism) */}
          <div className="lg:col-span-7 w-full bg-white/45 dark:bg-white/5 backdrop-blur-xl border border-white/60 dark:border-white/10 p-4 sm:p-8 md:p-10 rounded-[2.5rem] shadow-[0_24px_80px_rgba(38, 92, 131,0.02)]">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-5"
                  noValidate
                >

                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono font-black text-brand-zinc-500 dark:text-zinc-400 uppercase tracking-widest block">
                      {contact.labelName}
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={contact.placeholderName}
                      className={`w-full bg-white/55 dark:bg-white/5 backdrop-blur-md border rounded-xl px-4 py-3.5 text-xs font-semibold text-brand-dark text-[#080710] dark:text-white placeholder-brand-zinc-400 dark:placeholder-zinc-500 focus:ring-4 focus:ring-brand-blue/5 focus:border-brand-blue focus:bg-white/80 dark:focus:bg-[#12121e] outline-none transition-all ${errors.name ? "border-red-400" : "border-brand-zinc-200/80 dark:border-white/10"
                        }`}
                    />
                    {errors.name && <span className="text-[10px] font-bold text-red-500 block">{errors.name}</span>}
                  </div>

                  {/* Email Address */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono font-black text-brand-zinc-500 dark:text-zinc-400 uppercase tracking-widest block">
                      {contact.labelEmail}
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={contact.placeholderEmail}
                      className={`w-full bg-white/55 dark:bg-white/5 backdrop-blur-md border rounded-xl px-4 py-3.5 text-xs font-semibold text-brand-dark text-[#080710] dark:text-white placeholder-brand-zinc-400 dark:placeholder-zinc-500 focus:ring-4 focus:ring-brand-blue/5 focus:border-brand-blue focus:bg-white/80 dark:focus:bg-[#12121e] outline-none transition-all ${errors.email ? "border-red-400" : "border-brand-zinc-200/80 dark:border-white/10"
                        }`}
                    />
                    {errors.email && <span className="text-[10px] font-bold text-red-500 block">{errors.email}</span>}
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono font-black text-brand-zinc-500 dark:text-zinc-400 uppercase tracking-widest block">
                      {contact.labelPhone}
                    </label>
                    <input
                      type="text"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={contact.placeholderPhone}
                      className={`w-full bg-white/55 dark:bg-white/5 backdrop-blur-md border rounded-xl px-4 py-3.5 text-xs font-semibold text-brand-dark text-[#080710] dark:text-white placeholder-brand-zinc-400 dark:placeholder-zinc-500 focus:ring-4 focus:ring-brand-blue/5 focus:border-brand-blue focus:bg-white/80 dark:focus:bg-[#12121e] outline-none transition-all ${errors.phone ? "border-red-400" : "border-brand-zinc-200/80 dark:border-white/10"
                        }`}
                    />
                    {errors.phone && <span className="text-[10px] font-bold text-red-500 block">{errors.phone}</span>}
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono font-black text-brand-zinc-500 dark:text-zinc-400 uppercase tracking-widest block">
                      {contact.labelMessage}
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={contact.placeholderMessage}
                      className={`w-full bg-white/55 dark:bg-white/5 backdrop-blur-md border rounded-xl px-4 py-3.5 text-xs font-semibold text-brand-dark text-[#080710] dark:text-white placeholder-brand-zinc-400 dark:placeholder-zinc-500 focus:ring-4 focus:ring-brand-blue/5 focus:border-brand-blue focus:bg-white/80 dark:focus:bg-[#12121e] outline-none transition-all resize-none ${errors.message ? "border-red-400" : "border-brand-zinc-200/80 dark:border-white/10"
                        }`}
                    />
                    {errors.message && <span className="text-[10px] font-bold text-red-500 block">{errors.message}</span>}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative inline-flex items-center gap-0 overflow-hidden rounded-full bg-[#265C83] dark:bg-[#E9BD36] shadow-[0_4px_28px_rgba(38, 92, 131,0.15)] dark:shadow-[0_4px_28px_rgba(233, 189, 54,0.15)] active:scale-[0.97] transition-all duration-300 border border-[#265C83] dark:border-[#E9BD36] cursor-pointer w-full sm:w-auto"
                    >
                      {/* Curtain slides in from left on hover */}
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-[#080710] dark:bg-white translate-x-[-102%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
                      />
                      {/* Label */}
                      <span className="relative z-10 pl-7 pr-5 py-[14px] text-xs font-black uppercase tracking-[0.15em] text-white dark:text-[#080710] group-hover:text-white dark:group-hover:text-[#080710] transition-colors duration-300 delay-75 whitespace-nowrap flex-1 text-center sm:text-left">
                        {isSubmitting ? "Sending..." : contact.btnSubmit}
                      </span>
                      {/* Arrow circle — inverts on hover */}
                      <span className="relative z-10 mr-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#080710] dark:bg-white text-white dark:text-[#080710] group-hover:bg-[#E9BD36] dark:group-hover:bg-[#265C83] group-hover:text-[#080710] dark:group-hover:text-white transition-all duration-300">
                        {isSubmitting ? (
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        ) : (
                          <ArrowRight className="h-4 w-4" />
                        )}
                      </span>
                    </button>
                  </div>

                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-16 space-y-5"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue text-white shadow-md shadow-brand-blue/15 animate-bounce">
                    <CheckCircle className="h-9 w-9 text-white" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-heading text-2xl font-bold text-brand-dark">{contact.successTitle}</h3>
                    <p className="text-sm text-brand-zinc-500 font-semibold leading-relaxed max-w-md">
                      {contact.successParagraph1}
                      <span className="text-brand-blue font-bold uppercase">{formData.name}</span>
                      {contact.successParagraph2}
                      <span className="text-brand-blue font-bold lowercase">{formData.email}</span>
                      {contact.successParagraph3}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
