
"use client";

import { motion, useReducedMotion } from "motion/react";
import { missionBannerData } from "@/data/home/missionBanner";

export default function MissionBanner() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-label="HrdyaSara Foundation Mission"
      className="relative overflow-hidden bg-white px-5 py-12 sm:px-8 lg:px-12 lg:py-14"
    >
      <motion.div
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0,
                y: 45,
              }
        }
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.25,
        }}
        transition={{
          duration: reduceMotion ? 0 : 0.85,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative mx-auto flex
          min-h-[170px] max-w-[1250px]
          items-center justify-center
          overflow-hidden
          rounded-[24px]
          bg-[#D23C4D]
          px-7 py-10
          text-center text-white
          shadow-[0_12px_35px_rgba(210,60,77,0.13)]
          sm:px-12
          lg:min-h-[185px]
          lg:px-20
        "
      >
        {/* Decorative background circles */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            -left-16 -top-20
            h-52 w-52 rounded-full
            border border-white/15
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            -bottom-28 -right-14
            h-64 w-64 rounded-full
            bg-white/[0.045]
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            right-12 top-5
            h-16 w-16 rounded-full
            border border-white/10
          "
        />

        {/* Quote content */}
        <div className="relative z-10 w-full max-w-[1050px]">
          {/* Quote icon */}
          <span
            aria-hidden="true"
            className="
              mb-2 block
              font-serif text-[65px]
              leading-[0.75]
              text-white/85
              sm:text-[75px]
            "
          >
            “
          </span>

          {/* Mission quote */}
          <blockquote>
            <p
              className="
                text-balance
                font-sans
                text-[clamp(1.25rem,2.5vw,2rem)]
                font-semibold
                leading-[1.4]
                tracking-[-0.02em]
                text-white
              "
            >
              {missionBannerData.quote}
            </p>
          </blockquote>

          {/* Small accent */}
          <div
            aria-hidden="true"
            className="
              mx-auto mt-5
              h-[3px] w-12
              rounded-full
              bg-[#F5B06B]
            "
          />
        </div>
      </motion.div>
    </section>
  );
}
