
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  ArrowUpRight,
  UsersRound,
  Drama,
  ImageIcon,
} from "lucide-react";

import type { Initiative } from "@/data/home/ourInitiatives";

const iconMap = {
  users: UsersRound,
  masks: Drama,
};

export default function InitiativeCard({
  initiative,
}: {
  initiative: Initiative;
}) {
  const [imageError, setImageError] = useState(false);
  const Icon = iconMap[initiative.icon];

  return (
    <article
      className="
        group relative overflow-hidden
        rounded-[22px] border border-[#F0E4DC]
        bg-white p-2
        shadow-[0_7px_25px_rgba(80,40,30,0.06)]
        transition-all duration-300
        hover:-translate-y-1
        hover:border-[#F0900B]
        hover:shadow-[0_15px_35px_rgba(240,144,11,0.13)]
        focus-within:border-[#F0900B]
      "
    >
      {/* Header */}
      <div className="flex h-[48px] items-center justify-center gap-2">
        <Icon
          size={23}
          strokeWidth={1.8}
          className="text-[#D23C4D]"
        />

        <h3 className="text-[17px] font-bold text-[#252525]">
          {initiative.title}
        </h3>
      </div>

      {/* Image container */}
      <div className="relative h-[230px] overflow-hidden rounded-[16px] bg-[#F9EDE4] sm:h-[250px] lg:h-[235px]">

        {!imageError ? (
          <Image
            src={initiative.image}
            alt={initiative.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07] group-focus-within:scale-[1.07]"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 text-[#C78D73]">
            <ImageIcon size={32} strokeWidth={1.4} />
            <span className="text-xs">Initiative image coming soon</span>
          </div>
        )}

        {/* Dark overlay sliding from top */}
        <div
          aria-hidden="true"
          className="
            absolute inset-0 origin-top
            scale-y-100 bg-gradient-to-b
            from-[#351A1C]/80 via-[#5B2528]/75
            to-[#9C3A32]/80
            transition-transform duration-500 ease-in-out
            motion-safe:md:scale-y-0
            motion-safe:md:group-hover:scale-y-100
            motion-safe:md:group-focus-within:scale-y-100
          "
        />

        {/* CTA */}
        <div
          className="
            absolute inset-0 flex flex-col
            items-center justify-center px-5
            text-center text-white
            opacity-100 transition-all duration-500
            motion-safe:md:translate-y-4
            motion-safe:md:opacity-0
            motion-safe:md:group-hover:translate-y-0
            motion-safe:md:group-hover:opacity-100
            motion-safe:md:group-focus-within:translate-y-0
            motion-safe:md:group-focus-within:opacity-100
          "
        >
          <p className="mb-5 max-w-[260px] text-[13px] leading-5 text-white/95">
            {initiative.description}
          </p>

          <Link
            href={initiative.href}
            className="
              inline-flex h-[44px] items-center gap-2
              rounded-full border border-white/40
              bg-white px-5 text-[13px] font-semibold
              text-[#B93442] shadow-md
              transition-all duration-300
              hover:scale-105 hover:bg-[#FFF1E5]
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-white
            "
          >
            Explore Initiative
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </article>
  );
}
