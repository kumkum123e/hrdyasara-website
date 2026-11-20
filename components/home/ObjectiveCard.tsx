
import Link from "next/link";

import {
  ArrowRight,
  HeartPulse,
  Apple,
  GraduationCap,
  Leaf,
  HandHeart,
  Palette,
  Handshake,
  UsersRound,
} from "lucide-react";

import { coreObjectivesData } from "@/data/home/coreObjectives";

type Objective =
  (typeof coreObjectivesData.objectives)[number];

const iconMap = {
  "heart-pulse": HeartPulse,
  apple: Apple,
  "graduation-cap": GraduationCap,
  leaf: Leaf,
  "hand-heart": HandHeart,
  palette: Palette,
  handshake: Handshake,
  users: UsersRound,
};

export default function ObjectiveCard({
  objective,
}: {
  objective: Objective;
}) {
  const Icon = iconMap[objective.icon];
  const isRed = objective.color === "red";

  return (
    <article
      className="
        group relative flex h-full min-h-[340px]
        flex-col overflow-hidden rounded-[22px]
        border border-[#F0E7E2] bg-white p-6
        shadow-[0_6px_22px_rgba(0,0,0,0.045)]
        transition-all duration-300 ease-out
        hover:z-10 hover:scale-[1.025]
        hover:border-[#D23C4D]
        hover:shadow-[0_15px_35px_rgba(210,60,77,0.12)]
        focus-within:border-[#D23C4D]
        motion-reduce:transform-none
      "
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#FFF7F1] opacity-70" />

      {/* Icon */}
      <div
        className={`relative mb-5 flex h-[65px] w-[65px] items-center justify-center rounded-[18px] ${
          isRed ? "bg-[#FBE9EC]" : "bg-[#FFF0E0]"
        }`}
      >
        <Icon
          size={32}
          strokeWidth={1.8}
          className={
            isRed ? "text-[#D23C4D]" : "text-[#F0900B]"
          }
        />
      </div>

      {/* Pillar number */}
      <p
        className={`mb-2 text-xs font-bold tracking-[0.1em] ${
          isRed ? "text-[#D23C4D]" : "text-[#F0900B]"
        }`}
      >
        PILLAR {objective.number}
      </p>

      {/* Title */}
      <h3 className="relative font-serif text-[21px] font-bold leading-[1.25] text-[#202025]">
        {objective.title}
      </h3>

      {/* Description */}
      <p className="relative mt-3 flex-1 text-[14px] leading-[1.65] text-[#5D6067]">
        {objective.description}
      </p>

      {/* Button */}
      <Link
        href={objective.href}
        className={`relative mt-6 inline-flex h-[41px] w-fit items-center gap-4 rounded-full border px-5 text-[13px] font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 ${
          isRed
            ? "border-[#D23C4D] text-[#D23C4D] hover:bg-[#D23C4D] focus-visible:outline-[#D23C4D]"
            : "border-[#F0900B] text-[#F0900B] hover:bg-[#F0900B] focus-visible:outline-[#F0900B]"
        }`}
      >
        Learn More

        <ArrowRight
          size={17}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>
    </article>
  );
}
