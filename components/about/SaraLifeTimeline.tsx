
"use client";

import { useRef } from "react";
import Image from "next/image";

import {
  Baby,
  Cake,
  Clock3,
  Heart,
  HeartHandshake,
  GraduationCap,
  UsersRound,
  Palmtree,
  Waves,
  Gift,
  Flower2,
  UtensilsCrossed,
  Smile,
  Hand,
  Sparkles,
  Church,
  RotateCcw,
} from "lucide-react";

import {
  motion,
  useScroll,
  useSpring,
  useReducedMotion,
  useInView,
} from "motion/react";

import { saraLifeTimelineData } from "@/data/about/saraLifeTimelineData";

const ease = [0.22, 1, 0.36, 1] as const;

const icons = {
  baby: Baby,
  cake: Cake,
  utensils: UtensilsCrossed,
  smile: Smile,
  heart: Heart,
  family: UsersRound,
  users: UsersRound,
  hand: Hand,
  heartHandshake: HeartHandshake,
  palm: Palmtree,
  waves: Waves,
  clock: Clock3,
  gift: Gift,
  graduation: GraduationCap,
  flower: Flower2,
  sparkles: Sparkles,
  church: Church,
  resurrection: RotateCcw,
};

type Story =
  (typeof saraLifeTimelineData.stories)[number];

function TimelineItem({
  story,
  index,
  reduceMotion,
}: {
  story: Story;
  index: number;
  reduceMotion: boolean | null;
}) {
  const itemRef = useRef<HTMLDivElement>(null);

  const isActive = useInView(itemRef, {
    amount: 0.45,
    margin: "-10% 0px -10% 0px",
  });

  const Icon =
    icons[story.icon as keyof typeof icons] ?? Heart;

  const imageOnLeft = index % 2 === 0;

  const imageAnimation = reduceMotion
    ? false
    : {
        opacity: 0,
        x: imageOnLeft ? -90 : 90,
        y: 20,
      };

  const textAnimation = reduceMotion
    ? false
    : {
        opacity: 0,
        x: imageOnLeft ? 70 : -70,
        y: 20,
      };

  return (
    <div
      ref={itemRef}
      className="relative grid grid-cols-[36px_minmax(0,1fr)] gap-x-5 gap-y-5 pb-20 last:pb-0 md:grid-cols-[minmax(0,1fr)_70px_minmax(0,1fr)] md:gap-x-10 md:pb-28"
    >
      {/* Timeline center dot */}
      <div className="relative z-20 col-start-1 row-start-1 flex justify-center md:col-start-2">
        <motion.div
          animate={{
            scale: isActive && !reduceMotion ? 1.12 : 1,
            borderColor: isActive
              ? "#D23C4D"
              : "#E0A052",
            backgroundColor: isActive
              ? "#D23C4D"
              : "#FFFFFF",
          }}
          transition={{ duration: 0.35 }}
          className="flex h-[36px] w-[36px] items-center justify-center rounded-full border-2 bg-white shadow-[0_4px_15px_rgba(224,160,82,0.15)] md:h-[54px] md:w-[54px]"
        >
          <Icon
            size={20}
            strokeWidth={1.8}
            className={
              isActive
                ? "text-white"
                : "text-[#E0A052]"
            }
          />
        </motion.div>
      </div>

      {/* Story image */}
      <motion.div
        initial={imageAnimation}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: reduceMotion ? 0 : 0.9,
          ease,
        }}
        className={`relative col-start-2 row-start-1 min-w-0 self-start ${
          imageOnLeft
            ? "md:col-start-1"
            : "md:col-start-3"
        }`}
      >
        <div className="group relative overflow-hidden rounded-[24px] border border-[#F4E3D7] bg-[#FFF8F2] p-3 shadow-[0_14px_35px_rgba(95,55,30,0.10)] transition-all duration-300 hover:shadow-[0_18px_42px_rgba(95,55,30,0.16)]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] bg-[#FFF8F2]">
            <Image
              src={story.image}
              alt={story.alt}
              fill
              sizes="(max-width: 768px) 85vw, 46vw"
              className="object-contain p-2"
            />
          </div>
        </div>

        {/* Horizontal connector desktop */}
        <div
          aria-hidden="true"
          className={`absolute top-[27px] hidden h-px w-8 bg-[#E0A052]/60 md:block ${
            imageOnLeft
              ? "-right-8"
              : "-left-8"
          }`}
        />
      </motion.div>

      {/* Story content */}
      <motion.article
        initial={textAnimation}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: reduceMotion ? 0 : 0.85,
          delay: reduceMotion ? 0 : 0.12,
          ease,
        }}
        className={`relative col-start-2 row-start-2 min-w-0 self-center rounded-[24px] border border-[#F6E7DB] bg-[#FFF8F2] p-7 shadow-[0_10px_30px_rgba(100,60,35,0.06)] sm:p-8 lg:p-10 md:min-h-[260px] md:row-start-1 ${
          imageOnLeft
            ? "md:col-start-3"
            : "md:col-start-1"
        }`}
      >
        <span className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.15em] text-[#C68B53]">
          Memory {String(index + 1).padStart(2, "0")}
        </span>

        <h3 className="mb-4 font-serif text-[26px] font-semibold leading-tight text-[#D23C4D] sm:text-[32px]">
          {story.title}
        </h3>

        <p className="text-[15px] leading-[1.85] text-[#5B5552] sm:text-[17px]">
          {story.description}
        </p>

        {/* Small accent line */}
        <div className="mt-5 h-[2px] w-12 rounded-full bg-[#E0A052]" />

        {/* Horizontal connector desktop */}
        <div
          aria-hidden="true"
          className={`absolute top-[27px] hidden h-px w-8 bg-[#E0A052]/60 md:block ${
            imageOnLeft
              ? "-left-8"
              : "-right-8"
          }`}
        />
      </motion.article>
    </div>
  );
}

export default function SaraLifeTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    mass: 0.5,
  });

  return (
    <section
      aria-labelledby="sara-timeline-heading"
      className="relative overflow-x-clip bg-[#FFFCF9] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">

        {/* Section heading */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 35 }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: reduceMotion ? 0 : 0.8,
            ease,
          }}
          className="mb-16 text-center lg:mb-20"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#D23C4D]">
            {saraLifeTimelineData.eyebrow}
          </p>

          <h2
            id="sara-timeline-heading"
            className="font-serif text-[clamp(2.3rem,4vw,3.8rem)] font-semibold tracking-tight text-[#252525]"
          >
            Sara&apos;s{" "}
            <span className="text-[#D23C4D]">
              Life Journey
            </span>
          </h2>

          <div className="mx-auto my-5 h-[3px] w-20 rounded-full bg-[#E0A052]" />

          <p className="mx-auto max-w-[650px] text-[15px] leading-7 text-[#666]">
            {saraLifeTimelineData.description}
          </p>
        </motion.div>

        {/* Timeline wrapper */}
        <div ref={containerRef} className="relative">

          {/* Base timeline line */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[17px] top-0 w-[2px] bg-[#F0DCC5] md:left-1/2 md:-translate-x-1/2"
          />

          {/* Animated progress line */}
          <motion.div
            aria-hidden="true"
            style={{
              scaleY: reduceMotion
                ? 1
                : smoothProgress,
              transformOrigin: "top",
            }}
            className="absolute bottom-0 left-[17px] top-0 z-10 w-[3px] bg-[#E0A052] md:left-1/2 md:-translate-x-1/2"
          />

          {/* Timeline stories */}
          {saraLifeTimelineData.stories.map(
            (story, index) => (
              <TimelineItem
                key={story.id}
                story={story}
                index={index}
                reduceMotion={reduceMotion}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
