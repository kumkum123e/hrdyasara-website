
"use client";

import Image from "next/image";
import { Heart, UsersRound } from "lucide-react";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import { coreMembersData } from "@/data/about/coreMembersData";

const ease = [0.22, 1, 0.36, 1] as const;

export default function CoreMembers() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-white px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-[1250px]">

        {/* SECTION HEADING */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 25 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            ease,
          }}
          className="mb-10 rounded-[22px] bg-[#FFF8F1] px-5 py-7 text-center sm:py-8"
        >
          <div className="flex items-center justify-center gap-4">
            <span className="hidden h-px w-14 bg-[#E0A052] sm:block" />

            <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-semibold tracking-[-0.03em] text-[#C56C39]">
              {coreMembersData.heading}
            </h2>

            <span className="hidden h-px w-14 bg-[#E0A052] sm:block" />
          </div>

          <div className="mt-3 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#E0A052]" />
            <Heart
              size={17}
              strokeWidth={1.8}
              className="text-[#F0900B]"
            />
            <span className="h-px w-10 bg-[#E0A052]" />
          </div>
        </motion.div>

        {/* 3 COLUMNS x 2 ROWS */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">

          {coreMembersData.members.map(
            (member, index) => (
              <motion.article
                key={member.id}
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 35,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.65,
                  delay: reduceMotion
                    ? 0
                    : (index % 3) * 0.1,
                  ease,
                }}
                className="group relative min-w-0 overflow-hidden rounded-[20px] border border-[#F1E5D9] bg-[#FFF9F3] shadow-[0_8px_24px_rgba(70,40,25,0.08)] transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-2 hover:border-[#F0900B] hover:shadow-[0_18px_38px_rgba(190,105,55,0.17)]"
              >

                {/* IMAGE AREA */}
                <div className="relative h-[300px] overflow-hidden rounded-t-[19px] sm:h-[320px] lg:h-[350px]">

                  <Image
                    src={member.image}
                    alt={member.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top grayscale-0 scale-100 transition-[transform,filter] duration-700 ease-out group-hover:scale-[1.12] group-hover:grayscale motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />

                  {/* Bottom gradient on hover */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                </div>

                {/* CURVED IMAGE BOTTOM */}
                <div className="pointer-events-none relative z-10 -mt-5 h-6">
                  <svg
                    viewBox="0 0 400 32"
                    preserveAspectRatio="none"
                    className="h-full w-full"
                    aria-hidden="true"
                  >
                    <path
                      d="M0 0 Q200 50 400 0 L400 32 L0 32 Z"
                      fill="#FFF9F3"
                    />
                    <path
                      d="M0 0 Q200 50 400 0"
                      fill="none"
                      stroke="#F0900B"
                      strokeWidth="2"
                    />
                  </svg>
                </div>

                {/* CENTER ICON */}
                <div className="absolute left-1/2 top-[300px] z-20 flex h-10 w-10 -translate-x-1/2 -translate-y-[30px] items-center justify-center rounded-full border-2 border-[#F0900B] bg-white text-[#F0900B] shadow-sm sm:top-[320px] lg:top-[350px]">
                  <UsersRound
                    size={19}
                    strokeWidth={1.8}
                  />
                </div>

                {/* MEMBER DETAILS */}
                <div className="relative z-10 flex min-h-[105px] flex-col items-center justify-center px-5 pb-6 pt-7 text-center">

                  <h3 className="text-[17px] font-semibold leading-snug text-[#2D2927] transition-colors duration-300 group-hover:text-[#D47B34]">
                    {member.name}
                  </h3>

                  <span className="mt-3 h-[2px] w-12 rounded-full bg-[#E0A052] transition-all duration-300 group-hover:w-20" />

                </div>

              </motion.article>
            )
          )}

        </div>
      </div>
    </section>
  );
}
