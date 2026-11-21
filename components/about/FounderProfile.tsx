
"use client";

import Image from "next/image";

import {
  Heart,
  GraduationCap,
  UsersRound,
} from "lucide-react";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import { founderProfileData } from "@/data/about/founderProfileData";

const iconMap = {
  heart: Heart,
  graduation: GraduationCap,
  users: UsersRound,
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function FounderProfile() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#FFFAF6] px-5 pb-16 pt-2 sm:px-8 lg:px-12 lg:pb-20">

      <div className="mx-auto max-w-[1320px]">

        <div className="grid items-stretch gap-5 lg:grid-cols-[0.92fr_1.08fr] lg:gap-7">

          {/* LEFT - FOUNDER IMAGE */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, x: -45, y: 20 }
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
              ease,
            }}
            className="group relative min-h-[390px] overflow-hidden rounded-[24px] bg-[#F5E9DD] shadow-[0_12px_35px_rgba(85,55,35,0.10)] sm:min-h-[480px] lg:min-h-[590px]"
          >

            <Image
              src={founderProfileData.image}
              alt={founderProfileData.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />

            {/* Very subtle bottom gradient */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/10 to-transparent" />

          </motion.div>

          {/* RIGHT - CONTENT CARD */}
          <motion.article
            initial={
              reduceMotion
                ? false
                : { opacity: 0, x: 45, y: 20 }
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
              delay: reduceMotion ? 0 : 0.1,
              ease,
            }}
            className="relative flex flex-col rounded-[24px] border border-[#F4E5D7] bg-[#FFF8F1] p-6 shadow-[0_10px_30px_rgba(100,65,40,0.05)] transition-all duration-300 hover:shadow-[0_18px_45px_rgba(100,65,40,0.11)] sm:p-8 lg:p-10"
          >

            {/* Name label */}
            <span className="mb-4 inline-flex w-fit rounded-full bg-[#FBEBDD] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.13em] text-[#D77B32]">
              {founderProfileData.name}
            </span>

            {/* Heading */}
            <h2 className="max-w-[550px] text-[clamp(1.55rem,2.4vw,2.25rem)] font-semibold leading-[1.25] tracking-[-0.025em] text-[#BE7139]">
              {founderProfileData.heading}
            </h2>

            {/* Orange accent line */}
            <div className="mb-8 mt-5 h-[3px] w-16 rounded-full bg-[#F0900B]" />

            {/* Description blocks */}
            <div className="space-y-5">

              {founderProfileData.paragraphs.map(
                (item, index) => {
                  const Icon =
                    iconMap[
                      item.icon as keyof typeof iconMap
                    ] ?? Heart;

                  return (
                    <motion.div
                      key={index}
                      initial={
                        reduceMotion
                          ? false
                          : {
                              opacity: 0,
                              y: 22,
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
                        duration: reduceMotion
                          ? 0
                          : 0.65,
                        delay: reduceMotion
                          ? 0
                          : index * 0.12,
                        ease,
                      }}
                      className="flex items-start gap-4"
                    >

                      {/* Icon */}
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FCEBDC] text-[#E58A3D]">
                        <Icon
                          size={21}
                          strokeWidth={1.8}
                        />
                      </div>

                      {/* Text */}
                      <p className="min-w-0 text-[13px] leading-[1.8] text-[#59534F] sm:text-[14px]">
                        {item.text}
                      </p>

                    </motion.div>
                  );
                }
              )}

            </div>

          </motion.article>

        </div>
      </div>
    </section>
  );
}
