
"use client";

import Image from "next/image";
import {
  Heart,
  UsersRound,
  Leaf,
} from "lucide-react";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import { meetSaraHeroData } from "@/data/about/meetSaraHeroData";

const ease = [0.22, 1, 0.36, 1] as const;

export default function MeetSaraHero() {
  const reduceMotion = useReducedMotion();

  const { hero, introduction } = meetSaraHeroData;

  const reveal = (y: number, delay = 0) => ({
    initial: reduceMotion
      ? false
      : { opacity: 0, y },

    whileInView: {
      opacity: 1,
      y: 0,
    },

    viewport: {
      once: true,
      amount: 0.2,
    },

    transition: {
      duration: reduceMotion ? 0 : 0.85,
      delay: reduceMotion ? 0 : delay,
      ease,
    },
  });

  return (
    <section className="w-full overflow-hidden bg-[#FFFCF9]">

      {/* ================= HERO ================= */}
      <div className="relative isolate h-[290px] overflow-hidden bg-[#D23C4D] sm:h-[320px] lg:h-[340px]">

        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#B92036] via-[#D23C4D] to-[#AA2032]" />

        {/* Sara image - right side */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, x: 45 }
          }
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: reduceMotion ? 0 : 1.2,
            ease,
          }}
          className="absolute inset-y-0 right-0 w-[55%] sm:w-[48%] lg:w-[38%]"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 40%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 40%)",
          }}
        >
          <Image
            src={hero.image}
            alt={hero.imageAlt}
            fill
            priority
            sizes="(max-width: 640px) 55vw, (max-width: 1024px) 48vw, 38vw"
            className="object-cover object-center"
          />

          {/* Red image tint */}
          <div className="absolute inset-0 bg-[#D23C4D]/40 mix-blend-multiply" />
        </motion.div>

        {/* Soft red overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#B92036]/30 via-transparent to-[#B92036]/20" />

        {/* Hero content */}
        <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col items-center justify-center px-5 pb-9 text-center sm:pb-12">

          {/* Heart icon */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, scale: 0.7 }
            }
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
            }}
            className="mb-5 flex items-center gap-4"
          >
            <span className="h-px w-12 bg-white/80 sm:w-20" />

            <div className="relative">
              <Heart
                size={42}
                strokeWidth={1.4}
                className="text-white sm:h-12 sm:w-12"
              />
              <UsersRound
                size={19}
                strokeWidth={1.5}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[35%] text-white"
              />
            </div>

            <span className="h-px w-12 bg-white/80 sm:w-20" />
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 40 }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              delay: reduceMotion ? 0 : 0.15,
              ease,
            }}
          >
            <h1 className="font-serif text-[clamp(3.5rem,7vw,6.3rem)] font-normal leading-[1.05] tracking-[-0.04em] text-white">
              {hero.title}{" "}
              <span className="italic">
                {hero.highlightedTitle}
              </span>
            </h1>

            {/* Curved orange underline */}
            <svg
              viewBox="0 0 290 35"
              className="mx-auto mt-2 h-[25px] w-[190px] text-[#F6A23C] sm:w-[245px]"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M8 25 Q145 -5 282 19"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>
        </div>

        {/* Bottom curved wave */}
        <svg
          className="absolute bottom-[-1px] left-0 z-20 h-[55px] w-full sm:h-[75px]"
          viewBox="0 0 1440 110"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 45 C260 -35 430 100 760 92 C1070 110 1230 85 1440 30"
            fill="none"
            stroke="#F4A4AC"
            strokeWidth="15"
          />
          <path
            d="M0 55 C260 -25 430 110 760 102 C1070 120 1230 95 1440 40 L1440 110 L0 110 Z"
            fill="#FFFCF9"
          />
        </svg>
      </div>

      {/* ============== INTRODUCTION ============== */}
      <div className="mx-auto max-w-[1400px] px-5 pb-16 pt-[65px] sm:px-8 sm:pt-[75px] lg:px-12">

        <motion.div
          {...reveal(60)}
          className="relative isolate overflow-hidden rounded-[28px] border border-[#F5D9C8] bg-[#FFF8F2] px-6 py-12 shadow-[0_15px_45px_rgba(160,75,50,0.08)] sm:px-10 sm:py-14 lg:px-16 lg:py-[60px]"
        >

          {/* Left decorative heart */}
          <Heart
            size={105}
            strokeWidth={1}
            className="pointer-events-none absolute -left-6 top-1/2 -z-10 -translate-y-1/2 rotate-[-15deg] text-[#EFAE96]/30 sm:left-5"
          />

          {/* Bottom right botanical element */}
          <Leaf
            size={110}
            strokeWidth={0.8}
            className="pointer-events-none absolute -bottom-5 -right-3 -z-10 rotate-[-25deg] text-[#E6A46C]/25 sm:right-8"
          />

          <div className="relative z-10 mx-auto max-w-[1100px] text-center">

            {/* Quote */}
            <motion.div
              {...reveal(20, 0.1)}
              className="mb-7 flex items-center justify-center gap-3 sm:gap-5"
            >
              <span className="hidden h-px w-10 shrink-0 bg-[#F0900B] sm:block" />

              <p className="text-[10px] font-semibold uppercase leading-6 tracking-[0.17em] text-[#333333] sm:text-[12px] lg:text-[13px]">
                {introduction.quote}
              </p>

              <span className="hidden h-px w-10 shrink-0 bg-[#F0900B] sm:block" />
            </motion.div>

            {/* Heading */}
            <motion.div {...reveal(30, 0.25)}>
              <h2 className="font-serif text-[clamp(1.9rem,3.6vw,3.4rem)] font-semibold leading-[1.2] tracking-[-0.025em] text-[#252525]">
                <span className="block">
                  {introduction.heading}
                </span>

                <span className="mt-1 block">
                  {introduction.subheading}{" "}
                  <span className="text-[#D23C4D]">
                    {introduction.highlightedName}
                  </span>
                </span>
              </h2>

              {/* Orange accent underline */}
              <div className="mx-auto mt-7 h-[4px] w-[90px] rounded-full bg-[#F0900B]" />
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
