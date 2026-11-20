
"use client";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import { ourApproachData } from "@/data/home/ourApproach";

import ApproachOrbit from "./ApproachOrbit";
import ApproachValueCard from "./ApproachValueCard";

export default function OurApproach() {
  const data = ourApproachData;
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="our-approach"
      aria-labelledby="our-approach-heading"
      className="relative isolate overflow-hidden bg-[#FFFCF9] py-14 sm:py-16 lg:py-20"
    >
      {/* Subtle corner gradients */}
      <div
        aria-hidden="true"
        className="approach-bg-glow pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[#F0900B]/[0.07] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="approach-bg-glow-reverse pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[#D23C4D]/[0.06] blur-3xl"
      />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* SECTION HEADING */}
        <motion.div
          initial={
            reduceMotion ? false : { opacity: 0, y: 25 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-8 text-center"
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#F0900B]" />

            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#D23C4D]">
              {data.eyebrow}
            </p>

            <span className="h-px w-10 bg-[#F0900B]" />
          </div>

          <h2
            id="our-approach-heading"
            className="font-serif text-[clamp(2.5rem,4vw,4rem)] leading-tight text-[#252525]"
          >
            {data.heading.normal}{" "}
            <span className="text-[#F0900B]">
              {data.heading.highlighted}
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-[650px] text-[15px] leading-7 text-[#5D6067]">
            {data.description}
          </p>
        </motion.div>

        {/* TWO COLUMN CONTENT */}
        <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">

          {/* LEFT ORBIT */}
          <motion.div
            initial={
              reduceMotion ? false : { opacity: 0, x: -30 }
            }
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
          >
            <ApproachOrbit />
          </motion.div>

          {/* RIGHT VALUES */}
          <motion.div
            initial={
              reduceMotion ? false : { opacity: 0, x: 30 }
            }
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.1 }}
          >
            <div className="space-y-4">
              {data.values.map((value) => (
                <ApproachValueCard
                  key={value.id}
                  value={value}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom caption */}
        <p className="mt-5 text-center text-xs italic text-[#8A7770]">
          Three connected values, one shared mission.
        </p>
      </div>
    </section>
  );
}
