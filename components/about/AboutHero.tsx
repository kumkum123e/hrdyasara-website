
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { hrdyasaraData } from "@/data/about/hrdyasaraData";

export default function AboutHero() {
  const { hero } = hrdyasaraData;
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-[#FFFCF9]">
      {/* Soft background gradients */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_0%_0%,rgba(240,144,11,0.11),transparent_38%),radial-gradient(ellipse_at_100%_90%,rgba(210,60,77,0.09),transparent_40%)]"
      />

      {/* Decorative circle */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 -top-28 h-64 w-64 rounded-full border-[28px] border-[#F0900B]/10"
      />

      {/* Decorative glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-40 h-64 w-64 rounded-full bg-[#D23C4D]/5 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 pb-8 pt-12 sm:px-8 lg:px-12 lg:pt-16">

        {/* Heading */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 35 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="mx-auto max-w-[800px] text-center"
        >
          {/* Eyebrow */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#F5DCC7] bg-[#FFF3E8] px-4 py-2 text-xs font-semibold tracking-widest text-[#C36A35]">
            <Sparkles size={14} />
            {hero.eyebrow}
          </div>

          {/* Main heading */}
          <h1 className="font-serif text-[clamp(3rem,6vw,5rem)] font-bold leading-[1.1] tracking-tight text-[#202027]">
            {hero.title}{" "}
            <span className="text-[#D23C4D]">
              {hero.highlightedTitle}
            </span>
          </h1>

          {/* Orange underline */}
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#F0900B]" />

          {/* Description */}
          <p className="mx-auto mt-6 max-w-[680px] text-[15px] leading-7 text-[#666666] sm:text-[17px]">
            {hero.description}
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {hero.buttons.map((button) => (
              <Link
                key={button.label}
                href={button.href}
                className={`
                  group inline-flex min-h-12 items-center
                  justify-center gap-3 rounded-full px-7
                  text-sm font-semibold
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-lg
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-[#D23C4D]
                  ${
                    button.primary
                      ? "bg-[#D23C4D] text-white hover:bg-[#B82D3D]"
                      : "border border-[#D23C4D] bg-white text-[#D23C4D] hover:bg-[#D23C4D] hover:text-white"
                  }
                `}
              >
                {button.primary && (
                  <Heart size={16} />
                )}

                {button.label}

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Group Image */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 45,
                  scale: 1.03,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="group relative mt-14 overflow-hidden rounded-[24px] bg-[#F5E6DB] shadow-[0_18px_55px_rgba(82,45,34,0.12)] lg:mt-16 lg:rounded-[32px]"
        >
          <div className="relative h-[260px] w-full sm:h-[380px] lg:h-[470px]">
            <Image
              src={hero.image}
              alt={hero.imageAlt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 90vw"
              className="object-cover object-center transition-transform duration-1000 group-hover:scale-[1.035] motion-reduce:transform-none"
            />
          </div>

          {/* Bottom overlay */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
