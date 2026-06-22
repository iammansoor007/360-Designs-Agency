"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle, Sparkles } from "lucide-react";
import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
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
    <section id="contact" className="relative bg-white py-20 px-6 md:px-12">
      <div className="mx-auto max-w-7xl">
        
        {/* Dark Navy Block container exactly like reference UI */}
        <div className="rounded-3xl bg-brand-dark-blue p-8 md:p-16 shadow-2xl relative overflow-hidden">
          {/* Subtle yellow ambient glow */}
          <div className="absolute -top-12 -left-12 h-44 w-44 bg-brand-yellow/10 rounded-full blur-3xl -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Heading and Description */}
            <div className="lg:col-span-4 space-y-4 text-white">
              <h2 className="font-heading text-4xl md:text-5xl font-semibold leading-tight">
                Let's <span className="text-brand-yellow">Grow Your Business</span>
              </h2>
              <p className="text-sm text-brand-zinc-300 leading-relaxed font-normal">
                Have a project in mind? Let's discuss how I can help you achieve your goals.
              </p>
            </div>

            {/* Right Column: 3-Column Inputs & Textarea Form */}
            <div className="lg:col-span-8 w-full">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                    noValidate
                  >
                    {/* Top Row: Name, Email, Phone (3 Columns) */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {/* Name */}
                      <div className="space-y-1">
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className={`w-full rounded-xl border-none bg-white px-4 py-3.5 text-sm font-semibold text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-yellow/40 transition-all ${
                            errors.name ? "ring-2 ring-red-500" : ""
                          }`}
                          placeholder="Your Name"
                        />
                        {errors.name && <span className="text-[10px] font-bold text-red-400 pl-1">{errors.name}</span>}
                      </div>

                      {/* Email */}
                      <div className="space-y-1">
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={`w-full rounded-xl border-none bg-white px-4 py-3.5 text-sm font-semibold text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-yellow/40 transition-all ${
                            errors.email ? "ring-2 ring-red-500" : ""
                          }`}
                          placeholder="Your Email"
                        />
                        {errors.email && <span className="text-[10px] font-bold text-red-400 pl-1">{errors.email}</span>}
                      </div>

                      {/* Phone */}
                      <div className="space-y-1">
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className={`w-full rounded-xl border-none bg-white px-4 py-3.5 text-sm font-semibold text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-yellow/40 transition-all ${
                            errors.phone ? "ring-2 ring-red-500" : ""
                          }`}
                          placeholder="Your Phone"
                        />
                        {errors.phone && <span className="text-[10px] font-bold text-red-400 pl-1">{errors.phone}</span>}
                      </div>
                    </div>

                    {/* Middle Row: Message Textarea */}
                    <div className="space-y-1">
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={`w-full rounded-xl border-none bg-white px-4 py-3.5 text-sm font-semibold text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-yellow/40 transition-all ${
                          errors.message ? "ring-2 ring-red-500" : ""
                        }`}
                        placeholder="Tell me about your project..."
                      />
                      {errors.message && <span className="text-[10px] font-bold text-red-400 pl-1">{errors.message}</span>}
                    </div>

                    {/* Bottom Row: Submit Button (Aligned Right) */}
                    <div className="flex justify-end pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group flex items-center gap-3 rounded-full bg-brand-yellow px-8 py-4 text-xs font-black uppercase tracking-widest text-brand-dark hover:bg-white hover:text-brand-blue transition-all shadow-md cursor-pointer"
                      >
                        {isSubmitting ? (
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-brand-dark border-t-transparent" />
                        ) : (
                          <>
                            Send Message
                            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-dark text-brand-yellow group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                              <ArrowUpRight className="h-3.5 w-3.5" />
                            </div>
                          </>
                        )}
                      </button>
                    </div>

                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-6 space-y-4 text-white"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-yellow text-brand-dark shadow-lg">
                      <CheckCircle className="h-8 w-8 fill-brand-dark text-brand-yellow" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-heading font-bold text-xl text-white">Message Sent Successfully!</h3>
                      <p className="text-xs text-brand-zinc-300 font-semibold leading-relaxed">
                        Thank you. James and our strategists will reach out to you within 24 hours.
                      </p>
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 px-4 py-1.5 text-[10px] font-bold text-brand-yellow uppercase tracking-widest">
                      <Sparkles className="h-3 w-3 fill-brand-yellow" />
                      Strategic brief received
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
