
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, CirclePlay, Heart } from "lucide-react";

import { sarasLegacyData } from "@/data/home/sarasLegacy";
import LegacyDecorations from "./LegacyDecorations";

export default function SarasLegacy() {
  const data = sarasLegacyData;
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="saras-legacy-heading"
      className="relative isolate min-h-[570px] overflow-hidden bg-[#3C211D] text-white lg:min-h-[690px]"
    >
      {/* FULL WIDTH BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={data.backgroundImage}
          alt={data.imageAlt}
          fill
          sizes="100vw"
          className="object-cover object-[65%_center]"
        />
      </div>

      {/* CINEMATIC GRADIENT OVERLAY */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#301712]/95 via-[#49231D]/85 via-40% to-[#301712]/10 lg:to-transparent"
      />

      {/* Bottom gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#3C211D]/70 to-transparent"
      />

      {/* Decorative floating elements */}
      <LegacyDecorations />

      {/* MAIN CONTENT */}
      <div className="relative z-10  mx-auto flex min-h-[570px] max-w-[1440px] flex-col justify-center px-5 py-20 sm:px-8 lg:min-h-[650px] lg:px-12">

        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 35 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="max-w-[520px]"
        >
          {/* Eyebrow */}
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#F3D7C7]">
            {data.eyebrow}
          </p>

          <div className="mt-4 h-[3px] w-16 bg-[#E6A25B]" />

          {/* Main heading */}
          <h2
            id="saras-legacy-heading"
            className="mt-6 font-serif text-[clamp(3.2rem,5.5vw,6rem)] leading-[1.05] tracking-tight"
          >
            {data.title}{" "}
            <span className="text-[#E8A052]">
              {data.highlightedTitle}
            </span>
          </h2>

          {/* Subtitle */}
          <h3 className="mt-5 max-w-[420px] font-serif text-2xl leading-snug sm:text-3xl">
            {data.subtitle}
          </h3>

          {/* Description */}
          <p className="mt-5 max-w-[450px] text-sm leading-7 text-[#F3E3DC] sm:text-[15px]">
            {data.description}
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link
              href={data.primaryButton.href}
              className="group inline-flex h-[48px] items-center gap-3 rounded-full bg-[#d23c4d] px-6 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#AE3833] hover:shadow-[0_10px_30px_rgba(201,73,64,0.3)]"
            >
              {data.primaryButton.label}

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <Link
              href={data.journeyButton.href}
              className="group inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-[#F3D7C7]"
            >
              <CirclePlay
                size={26}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:scale-105"
              />
              {data.journeyButton.label}
            </Link>
          </div>
        </motion.div>

        {/* FLOATING QUOTE CARD */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 30 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="relative mt-12 w-full max-w-[440px] self-end rounded-[26px] bg-[#FFF7F0] p-6 text-[#d23c4d] shadow-[0_18px_45px_rgba(0,0,0,0.2)] sm:p-8 md:absolute md:bottom-8 md:right-8 md:mt-0 md:w-[38vw] md:p-4 lg:bottom-0 lg:right-12 lg:p-8"
        >
          <span className="absolute left-5 top-3 font-serif text-6xl leading-none text-[#d23c4d]">
            “
          </span>

          <blockquote className="relative z-10 pl-7">
            <p className="font-serif text-lg font-semibold leading-relaxed sm:text-xl md:text-base md:leading-snug lg:text-xl lg:leading-relaxed">
              “{data.quote.text}”
            </p>

            <footer className="mt-4 text-sm md:mt-3 lg:mt-4">
              <p className="font-semibold text-[#d23c4d]">
                — {data.quote.author}
              </p>

              <p className="mt-1 text-xs text-[#766B65]">
                {data.quote.designation}
              </p>
            </footer>
          </blockquote>

          <Heart
            size={34}
            strokeWidth={1.3}
            className="absolute bottom-5 right-6 text-[#d23c4d]"
          />
        </motion.div>
      </div>

      {/* Decorative bottom wave */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 95"
        preserveAspectRatio="none"
      >
        <path
          d="M0 45C280 110 540 15 810 42C1100 70 1240 20 1440 45V95H0Z"
          fill="#E8A77F"
          fillOpacity="0.85"
        />
      </svg>
    </section>
  );
}
