
"use client";

import Image from "next/image";
import {
  Heart,
  HeartHandshake,
  Target,
  UsersRound,
  Quote,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
} from "motion/react";

import { aboutJourneyData } from "@/data/about/aboutJourneyData";

const iconMap = {
  community: UsersRound,
  target: Target,
  heart: HeartHandshake,
};

export default function AboutJourney() {
  const reduceMotion = useReducedMotion();

  const { founder, images, blocks } = aboutJourneyData;

  const reveal = (delay = 0) => ({
    initial: reduceMotion
      ? false
      : { opacity: 0, y: 35 },

    whileInView: { opacity: 1, y: 0 },

    viewport: {
      once: true,
      amount: 0.15,
    },

    transition: {
      duration: reduceMotion ? 0 : 0.8,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  return (
    <section
      aria-label="HrdyaSara Foundation journey"
      className="relative isolate overflow-hidden bg-[#FFFBF7] py-14 sm:py-16 lg:py-20"
    >
      {/* Soft Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-16 h-80 w-80 rounded-full bg-[#F0900B]/10 blur-[100px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#D23C4D]/10 blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-[1350px] px-5 sm:px-8 lg:px-12">

        {/* ============================= */}
        {/* FOUNDER QUOTE CARD */}
        {/* ============================= */}

        <motion.div
          {...reveal()}
          className="relative mx-auto max-w-[1160px] overflow-hidden rounded-[28px] bg-gradient-to-r from-[#B93643] via-[#D23C4D] to-[#AD3940] px-6 py-7 text-white shadow-[0_15px_35px_rgba(150,40,50,0.18)] sm:px-9 lg:px-12"
        >
          {/* Decorative Glow */}
          <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-[#F0900B]/20 blur-3xl" />

          <div className="relative z-10 flex flex-col items-center gap-6 md:flex-row-reverse md:gap-10">

            {/* Founder Image */}
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, scale: 0.85 }
              }
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: reduceMotion ? 0 : 0.8,
              }}
              className="relative h-[125px] w-[125px] shrink-0 overflow-hidden rounded-full border-[5px] border-white shadow-lg sm:h-[145px] sm:w-[145px]"
            >
              <Image
                src={founder.image}
                alt={founder.imageAlt}
                fill
                sizes="(max-width: 640px) 125px, 145px"
                className="object-cover"
              />
            </motion.div>

            {/* Founder Quote */}
            <div className="flex-1 text-center md:text-left">
              <Quote
                size={35}
                fill="currentColor"
                className="mx-auto mb-2 text-white/90 md:mx-0"
              />

              <blockquote className="max-w-[850px] text-[15px] font-medium leading-[1.85] sm:text-[17px]">
                “{founder.quote}”
              </blockquote>

              <div className="mt-5 inline-flex items-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#B93643] shadow-sm">
                — {founder.name}
              </div>
            </div>
          </div>

          {/* Decorative Heart */}
          <motion.div
            aria-hidden="true"
            animate={
              reduceMotion
                ? undefined
                : { y: [0, -7, 0] }
            }
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute bottom-4 right-7 hidden text-white/40 lg:block"
          >
            <Heart size={55} strokeWidth={1.2} />
          </motion.div>
        </motion.div>

        {/* ============================= */}
        {/* BOTTOM CONTENT */}
        {/* ============================= */}

        <div className="mt-12 grid items-center gap-12 lg:mt-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">

          {/* LEFT: OVERLAPPING IMAGE FRAMES */}
          <motion.div
            {...reveal(0.1)}
            className="relative mx-auto flex min-h-[370px] w-full max-w-[540px] items-center justify-center sm:min-h-[470px]"
          >
            {/* First Image */}
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: -55,
                      rotate: -12,
                    }
              }
              whileInView={{
                opacity: 1,
                x: 0,
                rotate: -7,
              }}
              viewport={{ once: true }}
              transition={{
                duration: reduceMotion ? 0 : 0.9,
                ease: "easeOut",
              }}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      rotate: -3,
                      y: -8,
                    }
              }
              className="absolute left-[5%] top-[7%] z-10 h-[290px] w-[48%] overflow-hidden rounded-[20px] border-[7px] border-white bg-[#F5E9DE] shadow-[0_18px_40px_rgba(75,40,30,0.20)] sm:h-[370px]"
            >
              <Image
                src={images[0].src}
                alt={images[0].alt}
                fill
                sizes="(max-width: 640px) 45vw, 260px"
                className="object-cover"
              />
            </motion.div>

            {/* Second Image */}
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: 55,
                      rotate: 12,
                    }
              }
              whileInView={{
                opacity: 1,
                x: 0,
                rotate: 7,
              }}
              viewport={{ once: true }}
              transition={{
                duration: reduceMotion ? 0 : 0.9,
                delay: reduceMotion ? 0 : 0.15,
                ease: "easeOut",
              }}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      rotate: 3,
                      y: -8,
                    }
              }
              className="absolute right-[5%] top-[12%] z-20 h-[290px] w-[48%] overflow-hidden rounded-[20px] border-[7px] border-white bg-[#F5E9DE] shadow-[0_18px_40px_rgba(75,40,30,0.20)] sm:h-[370px]"
            >
              <Image
                src={images[1].src}
                alt={images[1].alt}
                fill
                sizes="(max-width: 640px) 45vw, 260px"
                className="object-cover"
              />
            </motion.div>

            {/* Decorative Orange Lines */}
            <motion.div
              aria-hidden="true"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      rotate: [-8, 8, -8],
                    }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute -left-2 top-4 text-[#F0900B]"
            >
              <svg
                width="65"
                height="65"
                viewBox="0 0 65 65"
                fill="none"
              >
                <path
                  d="M15 15L5 5M32 10V0M48 17L60 7"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>

            {/* Animated Heart Line */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 left-1/2 z-30 -translate-x-1/2 text-[#E77932]"
            >
              <svg
                width="175"
                height="65"
                viewBox="0 0 175 65"
                fill="none"
              >
                <motion.path
                  d="M5 49C35 59 55 55 75 40C65 30 64 12 77 10C88 8 92 21 92 21C92 21 100 5 111 13C126 25 108 43 92 51C119 48 140 29 170 33"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={
                    reduceMotion
                      ? false
                      : { pathLength: 0 }
                  }
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: reduceMotion ? 0 : 2,
                    delay: reduceMotion ? 0 : 0.3,
                    ease: "easeInOut",
                  }}
                />
              </svg>
            </div>
          </motion.div>

          {/* ============================= */}
          {/* RIGHT: THREE CONTENT BLOCKS */}
          {/* ============================= */}

          <motion.div
            {...reveal(0.2)}
            className="rounded-[30px] border border-[#F1E3D8] bg-white/85 p-5 shadow-[0_15px_40px_rgba(90,50,35,0.06)] backdrop-blur-sm sm:p-7"
          >
            <div className="flex flex-col">

              {blocks.map((block, index) => {
                const Icon =
                  iconMap[block.icon as keyof typeof iconMap];

                return (
                  <motion.article
                    key={block.id}
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity: 0,
                            y: 30,
                          }
                    }
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.65,
                      delay: reduceMotion
                        ? 0
                        : index * 0.15,
                    }}
                    className={`group flex items-start gap-4 py-6 sm:gap-5 ${
                      index !== blocks.length - 1
                        ? "border-b border-[#F2E5DC]"
                        : ""
                    }`}
                  >
                    {/* Icon */}
                    <div className="flex h-[65px] w-[65px] shrink-0 items-center justify-center rounded-[18px] bg-[#FFF1E6] text-[#ED7E2E] transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[#FCE5D4] sm:h-[75px] sm:w-[75px]">
                      <Icon
                        size={34}
                        strokeWidth={1.6}
                      />
                    </div>

                    {/* Accent Line */}
                    <div className="mt-1 h-auto min-h-[75px] w-[2px] shrink-0 self-stretch bg-gradient-to-b from-[#F0900B] to-[#D23C4D]/30" />

                    {/* Text */}
                    <p className="flex-1 text-[13px] leading-[1.85] text-[#4D4A48] sm:text-[14px]">
                      {block.textBefore}

                      <span className="font-bold text-[#D23C4D]">
                        {block.highlight}
                      </span>

                      {block.textAfter}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
