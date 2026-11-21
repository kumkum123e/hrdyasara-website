
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { missionVisionData } from "@/data/about/missionVisionData";

export default function MissionVision() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="mission-vision-heading"
      className="relative overflow-hidden bg-[#FFFBF7] py-14 sm:py-16 lg:py-20"
    >
      {/* Soft background gradient */}
      <div className="pointer-events-none absolute -left-28 top-0 h-72 w-72 rounded-full bg-[#F0900B]/5 blur-[90px]" />

      <div className="pointer-events-none absolute -right-28 bottom-0 h-72 w-72 rounded-full bg-[#D23C4D]/5 blur-[90px]" />

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">

        {/* SECTION HEADING */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 25 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
          }}
          className="mb-10 text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#D23C4D]">
            What Guides Us
          </p>

          <h2
            id="mission-vision-heading"
            className="font-serif text-4xl font-bold tracking-tight text-[#252525] sm:text-5xl"
          >
            Our Mission{" "}
            <span className="text-[#D23C4D]">&</span>{" "}
            Vision
          </h2>

          <div className="mx-auto mt-4 h-[3px] w-20 rounded-full bg-[#F0900B]" />

          <p className="mx-auto mt-5 max-w-[620px] text-sm leading-7 text-[#77706C] sm:text-base">
            Guided by compassion, driven by purpose, and committed
            to building a more inclusive future.
          </p>
        </motion.div>

        {/* TWO CARDS */}
        <div className="grid items-stretch gap-6 md:grid-cols-2 lg:gap-8">
          {missionVisionData.map((item, index) => (
            <motion.article
              key={item.id}
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: index === 0 ? -65 : 65,
                      y: 20,
                    }
              }
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.85,
                delay: reduceMotion ? 0 : index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative flex h-full flex-col overflow-hidden rounded-[26px] border border-[#F0E5DC] bg-white shadow-[0_10px_30px_rgba(70,40,25,0.06)] transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-2 hover:border-[#F0900B] hover:shadow-[0_22px_45px_rgba(180,85,40,0.13)]"
            >
              {/* FULL WIDTH IMAGE */}
              <div className="relative h-[240px] w-full overflow-hidden bg-[#F5E8DB] sm:h-[280px] lg:h-[320px]">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle image overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                {/* Image label */}
                <div className="absolute bottom-4 left-5 rounded-full border border-white/30 bg-white/90 px-4 py-2 text-[11px] font-semibold tracking-wide text-[#B94A3F] shadow-sm backdrop-blur-md">
                  {item.keywords.join(" • ")}
                </div>
              </div>

              {/* CONTENT */}
              <div className="flex flex-1 flex-col px-6 pb-8 pt-7 sm:px-8 sm:pb-9">
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-xs font-semibold tracking-[0.15em] text-[#D23C4D]">
                    {item.number} / {item.label}
                  </span>

                  <span className="h-px w-12 bg-[#F0900B]/60" />
                </div>

                <h3 className="font-serif text-[30px] font-bold leading-tight text-[#292524] transition-colors duration-300 group-hover:text-[#D23C4D] sm:text-[34px]">
                  {item.title}
                </h3>

                <div className="mt-3 h-[3px] w-12 rounded-full bg-[#F0900B] transition-all duration-300 group-hover:w-20" />

                <p className="mt-5 text-[14px] leading-[1.9] text-[#68615D] sm:text-[15px]">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
