
"use client";

import { useState } from "react";
import Image from "next/image";
import {
  HandHeart,
  HeartHandshake,
  UsersRound,
} from "lucide-react";

import type {
  ApproachValue,
} from "@/data/home/ourApproach";

const iconMap = {
  "hand-heart": HandHeart,
  "heart-handshake": HeartHandshake,
  users: UsersRound,
};

export default function ApproachValueCard({
  value,
}: {
  value: ApproachValue;
}) {
  const Icon = iconMap[value.icon];
  const [imageError, setImageError] = useState(false);

  const isRed = value.color === "red";

  return (
    <article className="group grid grid-cols-[54px_minmax(0,1fr)] items-center gap-4 rounded-[24px] border border-[#F7EFEA] bg-white p-4 shadow-[0_8px_24px_rgba(74,38,28,0.07)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(74,38,28,0.11)] sm:grid-cols-[70px_3px_minmax(0,1fr)_160px] sm:gap-4 sm:p-4 lg:grid-cols-[80px_3px_minmax(0,1fr)_190px] lg:gap-5 lg:p-5 xl:grid-cols-[96px_4px_minmax(0,1fr)_230px]">

      {/* Icon */}
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-[18px] shadow-sm sm:h-[74px] sm:w-[74px] xl:h-24 xl:w-24 ${
          isRed ? "bg-[#FBE9EC]" : "bg-[#FFF0E0]"
        }`}
      >
        <Icon
          size={32}
          strokeWidth={1.7}
          className={`sm:h-10 sm:w-10 xl:h-12 xl:w-12 ${
            isRed ? "text-[#D23C4D]" : "text-[#F0900B]"
          }`}
        />
      </div>

      <div
        aria-hidden="true"
        className={`hidden h-24 w-[3px] rounded-full sm:block ${
          isRed ? "bg-[#D23C4D]" : "bg-[#F0900B]"
        }`}
      />

      {/* Text */}
      <div className="min-w-0">
        <h3
          className={`text-xl font-bold sm:text-2xl xl:text-[26px] ${
            isRed ? "text-[#D23C4D]" : "text-[#F0900B]"
          }`}
        >
          {value.title}
        </h3>

        <p className="mt-1 text-[13px] leading-[1.55] text-[#5D6067] sm:text-sm xl:text-[15px]">
          {value.description}
        </p>
      </div>

      {/* Image */}
      <div className="relative col-span-2 h-[140px] overflow-hidden rounded-[22px] bg-[#FFF0E7] sm:col-span-1 sm:h-[100px] lg:h-[112px] xl:h-[120px]">
        {!imageError ? (
          <Image
            src={value.image}
            alt={value.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, 150px"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 text-[#C58D71]">
            <Icon size={26} strokeWidth={1.5} />
            <span className="text-xs">Image coming soon</span>
          </div>
        )}
      </div>
    </article>
  );
}
