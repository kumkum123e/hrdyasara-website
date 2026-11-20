
import { Heart } from "lucide-react";

export default function LegacyDecorations() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
    >
      {/* Top left floating heart */}
      <Heart
        size={45}
        strokeWidth={1}
        className="legacy-float absolute left-[8%] top-[5%] text-[#F5C3A9]/70"
      />

      {/* Top right decorative rays */}
      <svg
        className="legacy-float absolute right-[5%] top-[12%]"
        width="55"
        height="55"
        viewBox="0 0 55 55"
        fill="none"
      >
        <path
          d="M27 2V14M47 12L39 21M53 31H42M9 12L17 21"
          stroke="#E9A45B"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>

      {/* Curved top line */}
      <svg
        className="absolute left-0 top-0 w-[320px] opacity-60"
        viewBox="0 0 320 120"
        fill="none"
      >
        <path
          d="M-10 70C70 10 135 130 320 0"
          stroke="#F1B69A"
          strokeWidth="1.5"
        />
      </svg>

      {/* Bottom curved line */}
      <svg
        className="absolute bottom-8 left-0 w-full opacity-50"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0 40C280 0 460 110 760 45C1050 -10 1220 85 1440 25"
          stroke="#F0B08D"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}
