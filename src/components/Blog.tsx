"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const posts = [
  {
    image: "/blog4.png",
    date: "May 12, 2026",
    readTime: "5 min read",
    title: "10 SEO Strategies to Boost Your Website Traffic",
    link: "#"
  },
  {
    image: "/blog2.png",
    date: "May 8, 2026",
    readTime: "4 min read",
    title: "How Social Media Marketing Can Grow Your Business",
    link: "#"
  },
  {
    image: "/blog3.png",
    date: "May 5, 2026",
    readTime: "6 min read",
    title: "PPC Advertising: Get More Leads for Less",
    link: "#"
  },
  {
    image: "/blog1.png",
    date: "May 1, 2026",
    readTime: "4 min read",
    title: "Why Your Business Needs a Modern Website",
    link: "#"
  }
];

export default function Blog() {
  return (
    <section id="blog" className="relative bg-white py-24 border-b border-brand-zinc-200">
      <div className="absolute top-0 right-1/4 -z-10 h-72 w-72 rounded-full bg-brand-yellow/15 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-brand-dark tracking-tight inline-flex items-center gap-3">
            Latest Blogs
            <span className="h-[3px] w-14 bg-brand-yellow rounded-full mt-2" />
          </h2>
        </div>

        {/* 4-Card Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group cursor-pointer flex flex-col justify-between rounded-2xl border border-brand-zinc-200 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:border-brand-blue transition-all duration-300"
            >
              <div>
                {/* Image Wrapper */}
                <div className="relative aspect-[16/11] overflow-hidden bg-brand-light border-b border-brand-zinc-200">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 250px"
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  {/* Date & Read time */}
                  <span className="block text-[11px] font-bold text-brand-zinc-400 uppercase tracking-wider">
                    {post.date} &nbsp;•&nbsp; {post.readTime}
                  </span>

                  {/* Title */}
                  <h3 className="font-sans font-extrabold text-sm text-brand-dark leading-snug group-hover:text-brand-blue transition-colors line-clamp-3">
                    {post.title}
                  </h3>
                </div>
              </div>

              {/* Read More Link */}
              <div className="px-6 pb-6 pt-0 flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-brand-blue group-hover:text-brand-blue-dark transition-colors mt-auto">
                <span>Read More</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
