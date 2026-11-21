
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  Heart,
  HandHeart,
  UsersRound,
  Mail,
} from "lucide-react";
import { getInvolvedData } from "@/data/home/footer";

const icons = [HandHeart, UsersRound, Mail];

export default function GetInvolved() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="get-involved-heading"
      className="relative z-10 bg-[#FFFCF9] px-4 pt-10 sm:px-6 lg:px-10 lg:pt-12"
    >
      <motion.div
        initial={
          reduceMotion
            ? false
            : { opacity: 0, y: 45 }
        }
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: reduceMotion ? 0 : 0.85,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative top-[72px] mx-auto -mb-10 max-w-[1180px] overflow-hidden rounded-[28px] border border-[#F3DFC8] bg-[#FFF8F0] shadow-[0_18px_45px_rgba(110,64,35,0.12)] sm:top-[80px] sm:rounded-[32px] lg:-mb-14"
      >
        {/* Background decorations */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full bg-[#F0900B]/[0.06] blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-[#D23C4D]/[0.05] blur-3xl"
        />

        <Heart
          aria-hidden="true"
          className="absolute right-[34%] top-12 hidden rotate-[-15deg] text-[#D23C4D]/70 lg:block"
          size={42}
          strokeWidth={1.5}
        />

        <div
          aria-hidden="true"
          className="absolute left-10 top-8 h-2 w-2 rounded-full bg-[#F0900B]/40"
        />

        <div
          aria-hidden="true"
          className="absolute bottom-12 left-[45%] h-2 w-2 rounded-full bg-[#D23C4D]/30"
        />

        <div className="relative grid min-h-[230px] items-center lg:grid-cols-[1.45fr_0.55fr]">
          {/* LEFT CONTENT */}
          <div className="relative z-20 px-6 pb-8 pt-10 sm:px-10 sm:pt-11 lg:px-12 lg:pb-9 lg:pt-12">
            <div className="mb-3 h-[4px] w-12 rounded-full bg-[#F0900B]" />

            <h2
              id="get-involved-heading"
              className="text-[clamp(2rem,3.3vw,3.3rem)] font-bold leading-[1.1] tracking-tight"
            >
              <span className="bg-gradient-to-r from-[#D23C4D] to-[#F0900B] bg-clip-text text-transparent">
                {getInvolvedData.heading}
              </span>
            </h2>

            <p className="mt-2 text-base font-semibold text-[#B94B47] sm:text-lg">
              {getInvolvedData.tagline}
            </p>

            <p className="mt-3 max-w-[700px] text-[13px] leading-6 text-[#55515A] sm:text-[15px] sm:leading-7">
              {getInvolvedData.description}
            </p>

            {/* CTA Buttons */}
            <div className="mt-5 flex flex-wrap gap-2.5">
              {getInvolvedData.buttons.map(
                (button, index) => {
                  const Icon = icons[index] ?? Heart;

                  return (
                    <Link
                      key={button.href}
                      href={button.href}
                      className={`
                        group inline-flex min-h-10
                        items-center justify-center gap-2
                        rounded-full border px-5 py-3
                        text-[13px] font-semibold
                        transition-all duration-300
                        hover:-translate-y-1
                        focus-visible:outline-2
                        focus-visible:outline-offset-4
                        focus-visible:outline-[#D23C4D]
                        sm:text-sm
                        ${
                          button.primary
                            ? "border-[#D23C4D] bg-[#D23C4D] text-white shadow-[0_8px_20px_rgba(210,60,77,0.22)] hover:border-[#B52D40] hover:bg-[#B52D40] hover:shadow-lg"
                            : "border-[#E99443] bg-white text-[#C76B28] hover:bg-[#F0900B] hover:text-white hover:shadow-lg"
                        }
                      `}
                    >
                      <Icon size={18} />
                      <span>{button.label}</span>
                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </Link>
                  );
                }
              )}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative mx-auto h-[220px] w-full max-w-[380px] overflow-hidden lg:h-full lg:max-w-none">
          
            {/* Child image */}
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 30 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: reduceMotion ? 0 : 0.9,
                delay: reduceMotion ? 0 : 0.2,
              }}
              className="absolute inset-0"
            >
              <Image
                src={getInvolvedData.image}
                alt="Child featured in HrdyaSara Foundation's Get Involved campaign"
                fill
                sizes="(max-width: 1024px) 100vw, 35vw"
                className="object-contain object-bottom"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
