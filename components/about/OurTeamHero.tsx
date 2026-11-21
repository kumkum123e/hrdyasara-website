
"use client";

import { motion, useReducedMotion } from "motion/react";
import { Heart, UsersRound } from "lucide-react";
import { ourTeamHeroData } from "@/data/about/ourTeamHeroData";

const ease = [0.22, 1, 0.36, 1] as const;

export default function OurTeamHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#FFFAF6]">

      {/* RED HERO */}
      <div className="relative isolate flex min-h-[260px] items-center justify-center overflow-hidden bg-[#D23C4D] pb-16 pt-12 sm:min-h-[300px] lg:min-h-[330px]">

        {/* Soft gradient */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_75%_20%,rgba(255,255,255,0.14),transparent_55%),linear-gradient(120deg,#9F303A_0%,#D23C4D_55%,#A83240_100%)]" />

        {/* Subtle glow */}
        <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-white/10 blur-[90px]" />

        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 35 }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.85,
            ease,
          }}
          className="relative z-10 flex flex-col items-center px-5 text-center"
        >

          {/* Heart decoration */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, scale: 0.75 }
            }
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              delay: reduceMotion ? 0 : 0.2,
            }}
            className="mb-5 flex items-center gap-5"
          >
            <span className="h-px w-16 bg-[#F8D7B2]/80 sm:w-24" />

            <div className="relative flex items-center justify-center">
              <Heart
                size={43}
                strokeWidth={1.4}
                className="text-[#F8D7B2]"
              />

              <UsersRound
                size={19}
                strokeWidth={1.5}
                className="absolute text-[#F8D7B2]"
              />
            </div>

            <span className="h-px w-16 bg-[#F8D7B2]/80 sm:w-24" />
          </motion.div>

          {/* Heading */}
          <h1 className="font-serif text-[clamp(3.5rem,7vw,6rem)] font-normal leading-[1.1] tracking-[-0.035em] text-white">
            {ourTeamHeroData.title}
          </h1>
        </motion.div>

        {/* Bottom curved wave */}
        <div className="pointer-events-none absolute bottom-[-1px] left-0 z-10 w-full">
          <svg
            viewBox="0 0 1440 110"
            preserveAspectRatio="none"
            className="block h-[65px] w-full sm:h-[85px] lg:h-[105px]"
            aria-hidden="true"
          >
            <path
              d="M0 55 C180 15 310 105 500 65 C680 20 770 30 950 75 C1110 115 1270 70 1440 40 L1440 110 L0 110 Z"
              fill="#F5D8C5"
            />
            <path
              d="M0 75 C180 35 310 115 500 85 C680 40 770 50 950 90 C1110 125 1270 85 1440 65 L1440 110 L0 110 Z"
              fill="#FFFAF6"
            />
          </svg>
        </div>
      </div>

      {/* FOUNDER SECTION HEADING */}
      <motion.div
        initial={
          reduceMotion
            ? false
            : { opacity: 0, y: 25 }
        }
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: reduceMotion ? 0 : 0.8,
          ease,
        }}
        className="relative mx-auto flex max-w-[1100px] items-center justify-center gap-4 px-5 pb-12 pt-8 sm:gap-6 lg:pb-16 lg:pt-10"
      >
        <span className="h-px w-14 bg-gradient-to-r from-transparent to-[#E0A052] sm:w-28" />

        <div className="rounded-full border border-[#E0A052] bg-[#FFF8F2] px-9 py-2.5 shadow-[0_5px_18px_rgba(170,105,55,0.06)] sm:px-14">
          <h2 className="font-serif text-[clamp(1.8rem,3vw,2.6rem)] leading-tight text-[#B77B42]">
            {ourTeamHeroData.sectionTitle}
          </h2>
        </div>

        <span className="h-px w-14 bg-gradient-to-l from-transparent to-[#E0A052] sm:w-28" />
      </motion.div>
    </section>
  );
}
