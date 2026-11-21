
"use client";

import Image from "next/image";
import {
  Heart,
  Sprout,
  UsersRound,
  Handshake,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
} from "motion/react";

import { ourValuesData } from "@/data/about/ourValuesData";

const icons = {
  sprout: Sprout,
  users: UsersRound,
  heart: Heart,
  handshake: Handshake,
};

type ValueIcon = keyof typeof icons;

type Value = (typeof ourValuesData.values)[number];

function ValueItem({
  item,
  side,
  index,
  reduceMotion,
}: {
  item: Value;
  side: "left" | "right";
  index: number;
  reduceMotion: boolean | null;
}) {
  const Icon = icons[item.icon as ValueIcon] ?? Heart;

  return (
    <motion.div
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              x: side === "left" ? -45 : 45,
              y: 12,
            }
      }
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: reduceMotion ? 0 : 0.8,
        delay: reduceMotion ? 0 : index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group flex flex-col items-center gap-5 sm:flex-row ${
        side === "left"
          ? "lg:flex-row-reverse lg:text-right"
          : "lg:text-left"
      }`}
    >
      {/* Circular icon */}
      <div className="relative z-10 flex h-[100px] w-[100px] shrink-0 items-center justify-center rounded-full border-2 border-[#F6DCD8] bg-white shadow-[0_8px_25px_rgba(210,60,77,0.09)] transition-all duration-500 group-hover:-translate-y-1 group-hover:border-[#D23C4D] group-hover:shadow-[0_12px_30px_rgba(210,60,77,0.17)] sm:h-[112px] sm:w-[112px] lg:h-[125px] lg:w-[125px]">
        <Icon
          size={46}
          strokeWidth={1.7}
          className="text-[#D23C4D] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6"
        />
      </div>

      {/* Content */}
      <div className="max-w-[240px] text-center lg:text-inherit">
        <h3 className="mb-2 text-[25px] font-bold leading-tight text-[#D23C4D] sm:text-[29px]">
          {item.title}
        </h3>

        <p className="text-[14px] leading-[1.7] text-[#4B4B4B] sm:text-[16px]">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function OurValues() {
  const reduceMotion = useReducedMotion();

  const leftValues = ourValuesData.values.filter(
    (item) => item.position.startsWith("left")
  );

  const rightValues = ourValuesData.values.filter(
    (item) => item.position.startsWith("right")
  );

  return (
    <section
      aria-labelledby="our-values-heading"
      className="relative isolate overflow-hidden bg-[#FFFCF9] py-14 sm:py-16 lg:py-20"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D23C4D]/[0.035] blur-[100px]" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">

        {/* Heading */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 30 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.7 }}
          className="mb-12 text-center lg:mb-16"
        >
          {/* Heart decoration */}
          <div className="mb-5 flex items-center justify-center gap-5">
            <span className="h-[2px] w-20 bg-gradient-to-r from-transparent to-[#D23C4D]" />

            <Heart
              size={36}
              strokeWidth={1.8}
              className="text-[#D23C4D]"
            />

            <span className="h-[2px] w-20 bg-gradient-to-l from-transparent to-[#D23C4D]" />
          </div>

          <h2
            id="our-values-heading"
            className="text-[clamp(2.6rem,5vw,4.5rem)] font-bold leading-tight tracking-tight text-[#202124]"
          >
            Our{" "}
            <span className="text-[#D23C4D]">
              Values
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-[650px] text-[15px] leading-7 text-[#555] sm:text-[17px]">
            {ourValuesData.subtitle}
          </p>
        </motion.div>

        {/* Desktop values composition */}
        <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_1.1fr_1fr] lg:gap-5">

          {/* LEFT VALUES */}
          <div className="order-2 grid gap-9 sm:grid-cols-2 lg:order-1 lg:grid-cols-1 lg:gap-20">
            {leftValues.map((item, index) => (
              <ValueItem
                key={item.id}
                item={item}
                side="left"
                index={index}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>

          {/* CENTER IMAGE */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, scale: 0.88 }
            }
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: reduceMotion ? 0 : 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative order-1 mx-auto flex w-full max-w-[390px] items-center justify-center lg:order-2"
          >
            {/* Outer circular ring */}
            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      scale: [1, 1.025, 1],
                      opacity: [0.55, 0.85, 0.55],
                    }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute -inset-4 rounded-full border border-[#D23C4D]/30"
            />

            {/* Soft inner ring */}
            <div className="pointer-events-none absolute -inset-2 rounded-full border-[7px] border-[#FCE9E5]" />

            {/* Circular image */}
            <div className="group relative aspect-square w-full overflow-hidden rounded-full border-[8px] border-white bg-[#F8E3D6] shadow-[0_20px_55px_rgba(210,60,77,0.14)]">
              <Image
                src={ourValuesData.centerImage}
                alt="Child representing the values of HrdyaSara Foundation"
                fill
                sizes="(max-width: 1024px) 80vw, 390px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* RIGHT VALUES */}
          <div className="order-3 grid gap-9 sm:grid-cols-2 lg:grid-cols-1 lg:gap-20">
            {rightValues.map((item, index) => (
              <ValueItem
                key={item.id}
                item={item}
                side="right"
                index={index}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
