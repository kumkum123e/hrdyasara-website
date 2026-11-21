
"use client";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import { ourInitiativesData } from "@/data/home/ourInitiatives";
import InitiativeCard from "./InitiativeCard";

export default function OurInitiatives() {
  const data = ourInitiativesData;
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="our-initiatives"
      aria-labelledby="our-initiatives-heading"
      className="relative isolate overflow-hidden bg-[#ffffff] py-14 sm:py-16 lg:py-20"
    >
      {/* Soft background gradients */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 -top-28 h-[320px] w-[320px] rounded-full bg-[#F0900B]/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -right-28 h-[320px] w-[320px] rounded-full bg-[#D23C4D]/10 blur-3xl"
      />

      {/* Decorative corner wave */}
      <svg
        aria-hidden="true"
        className="decorative-wave-cross pointer-events-none absolute left-0 top-0 w-[200px] opacity-40 sm:w-[280px]"
        viewBox="0 0 300 170"
        fill="none"
      >
        <path
          d="M-20 110 C65 25 90 110 170 10 C205 -35 260 10 320 -20"
          stroke="#F0900B"
          strokeWidth="28"
          strokeLinecap="round"
          opacity="0.35"
        />
        <path
          d="M-30 150 C60 60 105 130 190 30 C230 -15 280 35 330 0"
          stroke="#D23C4D"
          strokeWidth="18"
          strokeLinecap="round"
          opacity="0.3"
        />
      </svg>

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* Heading */}
        <motion.div
          initial={
            reduceMotion ? false : { opacity: 0, y: 25 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-9 text-center"
        >
          <div className="mb-2 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#D23C4D]" />

            <p className="text-xs font-bold tracking-[0.12em] text-[#D23C4D]">
              {data.eyebrow}
            </p>

            <span className="h-px w-8 bg-[#D23C4D]" />
          </div>

          <h2
            id="our-initiatives-heading"
            className="font-serif text-[clamp(2.5rem,4vw,4rem)] font-bold leading-tight text-[#252525]"
          >
            {data.heading.normal}{" "}
            <span className="text-[#D23C4D]">
              {data.heading.highlighted}
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-[650px] text-[15px] leading-7 text-[#5D6067]">
            {data.description}
          </p>
        </motion.div>

        {/* Three initiative cards */}
        <div className="grid gap-5 md:grid-cols-3 lg:gap-6">
          {data.initiatives.map((initiative, index) => (
            <motion.div
              key={initiative.id}
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 30 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >
              <InitiativeCard initiative={initiative} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
