
"use client";

import { useRef } from "react";
import Image from "next/image";

import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";

import {
  communityImpactData,
  type CommunityCard,
} from "@/data/home/communityImpact";

const ease = [0.22, 1, 0.36, 1] as const;

type ImpactCardProps = {
  card: CommunityCard;
  index: number;
  reduceMotion: boolean | null;
};

function ImpactCard({
  card,
  index,
  reduceMotion,
}: ImpactCardProps) {
  return (
    <motion.article
     initial={
  reduceMotion
    ? false
    : {
        opacity: 0,
        x: `var(--card-entry-x)`,
        y: 25,
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
        duration: reduceMotion ? 0 : 0.95,
        delay: reduceMotion ? 0 : index * 0.15,
        ease,
      }}
      className={`
        community-impact-card
        community-impact-card-${index}
        h-full min-w-0
      `}
    >
      <div
        className="
          community-impact-card-inner
          flex h-full flex-col items-center
          rounded-[28px]
          border border-[#E89A45]/15
          bg-[#FFF8F0]
          px-6 py-9 text-center
          shadow-[0_14px_40px_rgba(95,57,31,0.11)]
          transition-[transform,border-color,box-shadow]
          duration-300
          hover:border-[#E89A45]/60
          hover:shadow-[0_22px_55px_rgba(232,154,69,0.19)]
          sm:px-8 sm:py-10
          lg:px-12 lg:py-11
        "
      >
        {/* Orange accent line */}
        <div
          aria-hidden="true"
          className="mb-5 h-[3px] w-12 rounded-full bg-[#E89A45]"
        />

        {/* Heading */}
        <h3
          className="
            font-serif
            text-[clamp(1.7rem,2.5vw,2.6rem)]
            font-bold leading-tight
            tracking-tight text-[#E89A45]
          "
        >
          {card.title}
        </h3>

        {/* Description */}
        <p
          className="
            mt-5 max-w-[520px]
            text-[14px] leading-[1.9]
            text-[#666666]
            sm:text-[15px]
            lg:text-[16px]
          "
        >
          {card.description}
        </p>
      </div>
    </motion.article>
  );
}

export default function CommunityImpact() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    [-15, 15]
  );

  return (
    <section
      ref={sectionRef}
      aria-label="How you can make a difference"
      className="
        relative isolate overflow-x-clip
        bg-[#FFFAF7]
        px-4 pb-14 pt-12
        sm:px-6 sm:pb-16
        lg:px-10 lg:pt-16
      "
    >
      <div className="relative mx-auto max-w-[1600px]">

        {/* Background image */}
        <div
          className="
            relative h-[340px] overflow-hidden
            rounded-[24px] bg-[#F5E8DD]
            sm:h-[470px]
            lg:h-[630px]
            lg:rounded-[32px]
          "
        >
          {/* Image reveal animation */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    scale: 1.06,
                  }
            }
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: reduceMotion ? 0 : 1.2,
              ease: "easeOut",
            }}
            className="absolute inset-0"
          >
            {/* Subtle parallax */}
            <motion.div
              style={{
                y: reduceMotion ? 0 : imageY,
              }}
              className="absolute -inset-y-5 inset-x-0"
            >
              <Image
                src={communityImpactData.image}
                alt={communityImpactData.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 95vw"
                className="
                  object-cover
                  object-center
                "
              />
            </motion.div>
          </motion.div>

          {/* Bottom gradient overlay */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute inset-0
              bg-gradient-to-t
              from-[#34221C]/25
              via-transparent
              to-transparent
            "
          />
        </div>

        {/* Overlapping cards */}
        <div
          className="
            relative z-10 mx-auto
            -mt-12 grid max-w-[1320px]
            grid-cols-1 items-stretch
            gap-5 px-3
            sm:px-6
            md:-mt-20 md:grid-cols-2 md:gap-6
            lg:-mt-28 lg:px-8
          "
        >
          {communityImpactData.cards.map((card, index) => (
            <ImpactCard
              key={card.id}
              card={card}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
