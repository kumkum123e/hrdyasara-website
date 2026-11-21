
"use client";

import {
  HeartHandshake,
  Sprout,
  UsersRound,
} from "lucide-react";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import { hrdyasaraData } from "@/data/about/hrdyasaraData";

const iconMap = {
  heart: HeartHandshake,
  sprout: Sprout,
  users: UsersRound,
};

export default function AboutIntroduction() {
  const { introduction, values } = hrdyasaraData;
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="our-story"
      className="relative scroll-mt-28 overflow-hidden bg-[#FFFCF9] py-14 lg:py-20"
    >
      <div className="relative mx-auto grid max-w-[1320px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">

        {/* LEFT - Story */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, x: -45 }
          }
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          {/* Eyebrow */}
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F0900B]">
            {introduction.eyebrow}
          </span>

          {/* Heading */}
          <h2 className="mt-3 font-serif text-[clamp(2.2rem,4vw,3.5rem)] font-bold leading-tight text-[#252027]">
            {introduction.title}{" "}
            <span className="text-[#D23C4D]">
              {introduction.highlightedTitle}
            </span>
          </h2>

          {/* Underline */}
          <div className="mt-4 h-1 w-24 rounded-full bg-[#F0900B]" />

          {/* Paragraphs */}
          <div className="mt-7 space-y-5">
            {introduction.paragraphs.map(
              (paragraph, index) => (
                <p
                  key={index}
                  className="max-w-[590px] text-[15px] leading-[1.9] text-[#625C5B] sm:text-[16px]"
                >
                  {paragraph}
                </p>
              )
            )}
          </div>
        </motion.div>

        {/* RIGHT - Values */}
        <div className="space-y-4">
          {values.map((value, index) => {
            const Icon = iconMap[value.icon];

            return (
              <motion.article
                key={value.id}
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        x: 45,
                        y: 15,
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
                  duration: 0.7,
                  delay: reduceMotion
                    ? 0
                    : index * 0.12,
                }}
                className="group flex items-center gap-5 rounded-[22px] border border-[#F5E8DF] bg-[#FFF4EB] p-5 shadow-[0_5px_20px_rgba(80,45,30,0.035)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#F0900B]/60 hover:bg-white hover:shadow-[0_14px_35px_rgba(210,60,77,0.10)] motion-reduce:transform-none sm:p-6"
              >
                {/* Icon container */}
                <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-2xl bg-white text-[#E87932] transition-colors duration-300 group-hover:bg-[#FFF0E4] group-hover:text-[#D23C4D]">
                  <Icon
                    size={34}
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-lg font-bold text-[#252027] sm:text-xl">
                    {value.title}
                  </h3>

                  <p className="mt-1.5 text-sm leading-6 text-[#69615D]">
                    {value.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
