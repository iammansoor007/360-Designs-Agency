"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { useState, FormEvent, MouseEvent } from "react";

export default function ContactForm() {
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
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.message.trim()) newErrors.message = "Message details are required";
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
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section 
      id="contact" 
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden bg-[#F9FAFB] py-24 md:py-32 border-b border-brand-zinc-200"
    >
      
      {/* Subtle Light Tilted Grid Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30 z-0">
        <div 
          className="absolute -inset-[50%] w-[200%] h-[200%] rotate-[8deg]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(3, 6, 172, 0.035) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(3, 6, 172, 0.035) 1px, transparent 1px)
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
                08 // CONTACT
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-dark tracking-tight leading-[1.1] select-none">
                Talk to our <span className="text-brand-blue relative inline-block">
                  strategy team
                  <svg className="absolute -bottom-1.5 md:-bottom-2 left-0 w-full h-2.5 md:h-3 pointer-events-none drop-shadow-[0_1.5px_2px_rgba(255,243,92,0.45)]" viewBox="0 0 100 14" preserveAspectRatio="none">
                    <path
                      d="M 2 7 Q 50 2, 98 5 C 99 5, 99 6, 98 6.5 Q 50 9, 2 8 C 1 8, 1 7, 2 7 Z"
                      fill="#FFF35C"
                    />
                  </svg>
                </span>
              </h2>
              <p className="text-sm text-brand-zinc-500 leading-relaxed font-semibold max-w-md">
                Feel free to reach out for help with your product design, engineering, search strategy, or copy campaigns. Our team will review and reply within 24 hours.
              </p>
            </div>

            {/* Direct Contact Badges (Responsive Optimized) */}
            <div className="space-y-3.5 max-w-sm">
              {/* Email Badge */}
              <div className="flex items-center gap-3 bg-white/45 backdrop-blur-md border border-white/60 rounded-2xl p-3 transition-all duration-350 hover:border-brand-blue/30 hover:bg-white/60 shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
                <div className="w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex-shrink-0 flex items-center justify-center text-brand-blue shadow-sm">
                  <Mail className="w-4 h-4" />
                </div>
                <a href="mailto:hello@elevatedigital.com" className="text-[10px] xs:text-xs font-bold text-brand-dark hover:text-brand-blue transition-colors font-mono break-all sm:break-normal">
                  hello@elevatedigital.com
                </a>
              </div>

              {/* Location Badge */}
              <div className="flex items-center gap-3 bg-white/45 backdrop-blur-md border border-white/60 rounded-2xl p-3 transition-all duration-355 hover:border-brand-blue/30 hover:bg-white/60 shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
                <div className="w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex-shrink-0 flex items-center justify-center text-brand-blue shadow-sm">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-[10px] xs:text-xs font-bold text-brand-dark font-mono break-all sm:break-normal">
                  901 Broadway St, New York, USA
                </span>
              </div>

              {/* Phone Badge */}
              <div className="flex items-center gap-3 bg-white/45 backdrop-blur-md border border-white/60 rounded-2xl p-3 transition-all duration-360 hover:border-brand-blue/30 hover:bg-white/60 shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
                <div className="w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex-shrink-0 flex items-center justify-center text-brand-blue shadow-sm">
                  <Phone className="w-4 h-4" />
                </div>
                <a href="tel:+11234567890" className="text-[10px] xs:text-xs font-bold text-brand-dark hover:text-brand-blue transition-colors font-mono break-all sm:break-normal">
                  +1 (123) 456-7890
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Support Card (Restored to Light Glassmorphism) */}
          <div className="lg:col-span-7 w-full bg-white/45 backdrop-blur-xl border border-white/60 p-4 sm:p-8 md:p-10 rounded-[2.5rem] shadow-[0_24px_80px_rgba(3,6,172,0.02)]">
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
                    <label className="text-[10px] font-mono font-black text-brand-zinc-450 uppercase tracking-widest block">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter Your Full Name"
                      className={`w-full bg-white/55 backdrop-blur-md border rounded-xl px-4 py-3.5 text-xs font-semibold text-brand-dark placeholder-brand-zinc-350 focus:ring-4 focus:ring-brand-blue/5 focus:border-brand-blue focus:bg-white/80 outline-none transition-all ${
                        errors.name ? "border-red-400" : "border-brand-zinc-200/80"
                      }`}
                    />
                    {errors.name && <span className="text-[10px] font-bold text-red-500 block">{errors.name}</span>}
                  </div>

                  {/* Email Address */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono font-black text-brand-zinc-450 uppercase tracking-widest block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter Your Email Address"
                      className={`w-full bg-white/55 backdrop-blur-md border rounded-xl px-4 py-3.5 text-xs font-semibold text-brand-dark placeholder-brand-zinc-350 focus:ring-4 focus:ring-brand-blue/5 focus:border-brand-blue focus:bg-white/80 outline-none transition-all ${
                        errors.email ? "border-red-400" : "border-brand-zinc-200/80"
                      }`}
                    />
                    {errors.email && <span className="text-[10px] font-bold text-red-500 block">{errors.email}</span>}
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono font-black text-brand-zinc-450 uppercase tracking-widest block">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Enter Your Phone Number"
                      className={`w-full bg-white/55 backdrop-blur-md border rounded-xl px-4 py-3.5 text-xs font-semibold text-brand-dark placeholder-brand-zinc-350 focus:ring-4 focus:ring-brand-blue/5 focus:border-brand-blue focus:bg-white/80 outline-none transition-all ${
                        errors.phone ? "border-red-400" : "border-brand-zinc-200/80"
                      }`}
                    />
                    {errors.phone && <span className="text-[10px] font-bold text-red-500 block">{errors.phone}</span>}
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono font-black text-brand-zinc-450 uppercase tracking-widest block">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write Your Message Here"
                      className={`w-full bg-white/55 backdrop-blur-md border rounded-xl px-4 py-3.5 text-xs font-semibold text-brand-dark placeholder-brand-zinc-350 focus:ring-4 focus:ring-brand-blue/5 focus:border-brand-blue focus:bg-white/80 outline-none transition-all resize-none ${
                        errors.message ? "border-red-400" : "border-brand-zinc-200/80"
                      }`}
                    />
                    {errors.message && <span className="text-[10px] font-bold text-red-500 block">{errors.message}</span>}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group flex items-center gap-3 rounded-full bg-brand-blue hover:bg-brand-dark px-7 py-3.5 text-xs font-black uppercase tracking-widest text-white transition-all duration-300 shadow-[0_4px_16px_rgba(3,6,172,0.15)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                    >
                      {isSubmitting ? (
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      ) : (
                        <>
                          Send Message
                          <ArrowRight className="h-3.5 w-3.5 text-white group-hover:translate-x-0.5 transition-transform duration-200" />
                        </>
                      )}
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
                    <h3 className="font-heading text-2xl font-bold text-brand-dark">Message Sent!</h3>
                    <p className="text-sm text-brand-zinc-500 font-semibold leading-relaxed max-w-md">
                      Thank you, <span className="text-brand-blue font-bold uppercase">{formData.name}</span>. We have received your support message and will get back to you at <span className="text-brand-blue font-bold lowercase">{formData.email}</span> within 24 hours.
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
