
"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, Sparkles } from "lucide-react";

import AboutImageGrid from "./AboutImageGrid";
import ImpactCounters from "./ImpactCounters";
import { homepageContent } from "@/data/homepage";

export default function WhoWeAre() {
  const { about } = homepageContent;

  return (
    <section
      id="who-we-are"
      aria-labelledby="who-we-are-heading"
      className="relative overflow-hidden bg-[#ffffff] py-14 sm:py-18 lg:py-20"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-[#FBE8D8]/50 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-8 top-16 h-3 w-3 rounded-full bg-[#E8B17D]/60"
      />

      <motion.svg
        aria-hidden="true"
        viewBox="0 0 64 64"
        className="pointer-events-none absolute right-[7%] top-15 hidden h-14 w-14 text-[#f0900b]/70 lg:block"
        animate={{ rotate: [0, 8, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <circle cx="32" cy="32" r="11" fill="currentColor" />
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="3"
        >
          <path d="M32 4v7M32 53v7M4 32h7M53 32h7M12.2 12.2l5 5M46.8 46.8l5 5M51.8 12.2l-5 5M17.2 46.8l-5 5" />
        </g>
      </motion.svg>

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">

          {/* LEFT IMAGE GRID */}
          <div className="relative">
            <motion.svg
              aria-hidden="true"
              viewBox="0 0 48 48"
              className="pointer-events-none absolute top-[-2%] right-[-5%] z-10 hidden h-9 w-9 text-[#d6a64f]/80 lg:block"
              animate={{ rotate: [-8, 8, -8], y: [0, -4, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <path
                d="M8 36C9 20 20 8 40 7C39 26 28 38 8 36Z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                d="M9 38C17 28 25 21 36 13M21 27l-1-9M26 23l9 1"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </motion.svg>

            <motion.svg
              aria-hidden="true"
              viewBox="0 0 48 48"
              className="pointer-events-none absolute top-[-2%] right-[-1%] z-10 hidden h-7 w-7 -scale-x-100 text-[#d6a64f]/70 lg:block"
              animate={{ rotate: [8, -8, 8], y: [0, -3, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <path
                d="M8 36C9 20 20 8 40 7C39 26 28 38 8 36Z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                d="M9 38C17 28 25 21 36 13M21 27l-1-9M26 23l9 1"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </motion.svg>

            <AboutImageGrid />
          </div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {/* Section label */}
            <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#f0900b]">
              <Sparkles size={15} />
              {about.eyebrow}
            </div>

            {/* Heading */}
            <h2
              id="who-we-are-heading"
              className="font-serif text-[clamp(2.5rem,4vw,4rem)] leading-tight tracking-tight text-[#252020]"
            >
              {about.heading}
            </h2>

            {/* Decorative underline */}
            <div className="mt-4 h-[3px] w-16 rounded-full bg-[#E19B50]" />

            {/* Tagline */}
            <h3 className="mt-6 text-lg font-medium text-[#f0900b] sm:text-xl">
              {about.tagline}
            </h3>

            {/* About content */}
            <div className="mt-5 max-w-[600px] space-y-3 text-[15px] leading-7 text-[#655D58]">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {/* CTA */}
            <Link
              href={about.action.href}
              className="group mt-6 inline-flex h-[46px] items-center gap-3 rounded-full border border-[#E6C9B3] bg-white px-6 text-sm font-semibold text-[#f0900b] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#f0900b] hover:bg-[#f0900b] hover:text-white hover:shadow-md"
            >
              {about.action.label}
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            {/* IMPACT COUNTERS */}
            <div className="mt-8">
              <ImpactCounters />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
