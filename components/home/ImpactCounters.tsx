
"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { homepageContent } from "@/data/homepage";

function AnimatedCounter({
  value,
  suffix = "",
}: {
  value: number | null;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView || value === null) return;

    if (reduceMotion) {
      return;
    }

    let frame: number;
    const duration = 1600;
    const start = performance.now();

    const animate = (now: number) => {
      const progress = Math.min(
        (now - start) / duration,
        1
      );

      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.round(value * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [inView, value, reduceMotion]);

  return (
    <span ref={ref} className="tabular-nums">
      {value === null
        ? "—"
        : reduceMotion
          ? value.toLocaleString("en-IN")
          : count.toLocaleString("en-IN")}
      {value !== null && suffix}
    </span>
  );
}

export default function ImpactCounters() {
  return (
    <div className="grid grid-cols-3 divide-x divide-[#EADDD1] border-t border-[#EADDD1] pt-4">
      {homepageContent.about.impactCounters.map((item) => (
        <div
          key={item.label}
          className="px-2 text-center sm:px-5"
        >
          <div className="text-2xl font-bold text-[#f0900b] sm:text-4xl">
            <AnimatedCounter
              value={item.value}
              suffix={item.suffix}
            />
          </div>

          <p className="mt-2 text-[11px] font-medium text-[#655D58] sm:text-sm">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}
