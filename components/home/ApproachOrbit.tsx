
"use client";

import {
  HandHeart,
  HeartHandshake,
  UsersRound,
} from "lucide-react";

import {
  ourApproachData,
  type ApproachIcon,
} from "@/data/home/ourApproach";

const iconMap = {
  "hand-heart": HandHeart,
  "heart-handshake": HeartHandshake,
  users: UsersRound,
};

const positions = [0, 120, 240];

export default function ApproachOrbit() {
  return (
    <div
      className="relative mx-auto flex aspect-square w-full max-w-[470px] items-center justify-center"
      aria-label="HrdyaSara values: Accept, Empathise and Engage"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute h-[78%] w-[78%] rounded-full bg-[#FFF0E7]/70 blur-2xl" />

      {/* Dashed orbital ring */}
      <div className="absolute h-[69%] w-[69%] rounded-full border-2 border-dashed border-[#F0900B]/60" />

      {/* Center circle */}
      <div className="relative z-10 flex h-[32%] w-[32%] flex-col items-center justify-center rounded-full bg-gradient-to-br from-[#D23C4D] to-[#A72B39] text-center text-white shadow-[0_12px_30px_rgba(210,60,77,0.22)]">
        <UsersRound
          className="mb-2 h-7 w-7 sm:h-9 sm:w-9"
          strokeWidth={1.5}
        />

        <span className="text-[10px] font-bold tracking-wide sm:text-sm">
          {ourApproachData.centerLabel}
        </span>

        <span className="mt-1 text-[10px] text-white/90 sm:text-xs">
          {ourApproachData.centerSubtitle}
        </span>
      </div>

      {/* Rotating orbital system */}
      <div className="approach-orbit absolute inset-0">
        {ourApproachData.values.map((value, index) => {
          const Icon = iconMap[value.icon as ApproachIcon];

          return (
            <div
              key={value.id}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `rotate(${positions[index]}deg)`,
              }}
            >
              <div
                className="absolute"
                style={{
                  transform: "translateY(-170px)",
                }}
              >
                <div
                  className="approach-counter-orbit flex h-[100px] w-[100px] flex-col items-center justify-center rounded-full border-2 border-[#F4C58F] bg-white text-center shadow-[0_7px_22px_rgba(0,0,0,0.1)] sm:h-[112px] sm:w-[112px]"
                  style={{
                    ["--orbit-offset" as string]:
                      `${-positions[index]}deg`,
                  }}
                >
                  <Icon
                    size={29}
                    strokeWidth={1.7}
                    className={
                      value.color === "red"
                        ? "text-[#D23C4D]"
                        : "text-[#F0900B]"
                    }
                  />

                  <span className="mt-2 text-xs font-bold text-[#A82F3C] sm:text-sm">
                    {value.title}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Decorative corner accents */}
      <span className="absolute left-[6%] top-[15%] h-2 w-2 rounded-full bg-[#F0900B]/60" />
      <span className="absolute bottom-[12%] right-[9%] h-2 w-2 rounded-full bg-[#D23C4D]/40" />
    </div>
  );
}
