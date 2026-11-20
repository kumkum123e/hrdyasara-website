
"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { coreObjectivesData } from "@/data/home/coreObjectives";
import ObjectiveCard from "./ObjectiveCard";
import ObjectivesDecorations from "./ObjectivesDecorations";

export default function CoreObjectives() {
  const data = coreObjectivesData;
  const total = data.objectives.length;

  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);
  const [isPaused, setIsPaused] = useState(false);

  const reduceMotion = useReducedMotion();

  // Responsive card count
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(4);
      }
    };

    updateVisibleCards();

    window.addEventListener("resize", updateVisibleCards);

    return () => {
      window.removeEventListener(
        "resize",
        updateVisibleCards
      );
    };
  }, []);

  const maxIndex = Math.max(0, total - visibleCards);

  const goToSlide = useCallback(
    (index: number) => {
      const container = scrollRef.current;
      if (!container) return;

      const safeIndex =
        index > maxIndex
          ? 0
          : index < 0
            ? maxIndex
            : index;

      const cards =
        container.querySelectorAll<HTMLElement>(
          "[data-objective-card]"
        );

      const target = cards[safeIndex];

      if (!target) return;

      container.scrollTo({
        left: target.offsetLeft - container.offsetLeft,
        behavior: reduceMotion ? "instant" : "smooth",
      });

      setActiveIndex(safeIndex);
    },
    [maxIndex, reduceMotion]
  );

  // Automatic sliding
  useEffect(() => {
    if (isPaused || reduceMotion || maxIndex === 0) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => {
        const next = current >= maxIndex ? 0 : current + 1;

        const container = scrollRef.current;

        if (container) {
          const cards =
            container.querySelectorAll<HTMLElement>(
              "[data-objective-card]"
            );

          const target = cards[next];

          if (target) {
            container.scrollTo({
              left:
                target.offsetLeft - container.offsetLeft,
              behavior: "smooth",
            });
          }
        }

        return next;
      });
    }, 3500);

    return () => window.clearInterval(interval);
  }, [isPaused, maxIndex, reduceMotion]);

  // Keep active index valid on resize
  useEffect(() => {
    if (activeIndex > maxIndex) {
      goToSlide(maxIndex);
    }
  }, [activeIndex, maxIndex, goToSlide]);

  return (
    <section
      id="core-objectives"
      aria-labelledby="core-objectives-heading"
      className="relative isolate overflow-hidden bg-[#FFFCFA] py-14 sm:py-16 lg:py-20"
    >
      <ObjectivesDecorations />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* HEADER */}
        <div className="mb-9 flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <motion.div
            initial={
              reduceMotion ? false : { opacity: 0, y: 25 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#D23C4D]" />

              <p className="text-xs font-bold tracking-[0.12em] text-[#D23C4D]">
                {data.eyebrow}
              </p>
            </div>

            <h2
              id="core-objectives-heading"
              className="font-serif text-[clamp(2.5rem,4vw,4rem)] leading-tight tracking-tight text-[#202025]"
            >
              {data.heading.normal}{" "}
              <span className="relative text-[#D23C4D]">
                {data.heading.highlighted}

                <span className="absolute -bottom-2 left-1/2 h-[3px] w-[65%] -translate-x-1/2 rounded-full bg-[#F0900B]" />
              </span>
            </h2>

            <p className="mt-6 max-w-[760px] text-[15px] leading-7 text-[#5D6067]">
              {data.description}
            </p>
          </motion.div>

          {/* NAVIGATION ARROWS */}
          <div className="flex shrink-0 items-center gap-3">
            <button
              type="button"
              onClick={() => goToSlide(activeIndex - 1)}
              aria-label="Previous objectives"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#F1E8E2] bg-white text-[#202025] shadow-sm transition-all duration-300 hover:border-[#D23C4D] hover:text-[#D23C4D]"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              type="button"
              onClick={() => goToSlide(activeIndex + 1)}
              aria-label="Next objectives"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#D23C4D] text-white shadow-sm transition-all duration-300 hover:bg-[#B72D3E]"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* CAROUSEL */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={(event) => {
            if (
              !event.currentTarget.contains(
                event.relatedTarget as Node | null
              )
            ) {
              setIsPaused(false);
            }
          }}
          onScroll={(event) => {
            const container = event.currentTarget;

            const cards = Array.from(
              container.querySelectorAll<HTMLElement>(
                "[data-objective-card]"
              )
            );

            if (!cards.length) return;

            const closest = cards.reduce(
              (best, card, index) => {
                const distance = Math.abs(
                  card.offsetLeft -
                  container.offsetLeft -
                  container.scrollLeft
                );

                return distance < best.distance
                  ? { index, distance }
                  : best;
              },
              { index: 0, distance: Infinity }
            );

            setActiveIndex(
              Math.min(closest.index, maxIndex)
            );
          }}
          aria-label="Foundation core objectives carousel"
          aria-roledescription="carousel"
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-1 py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {data.objectives.map((objective) => (
            <div
              key={objective.id}
              data-objective-card
              className="w-[calc(100%-4px)] shrink-0 snap-start sm:w-[calc((100%-20px)/2)] lg:w-[calc((100%-60px)/4)]"
            >
              <ObjectiveCard objective={objective} />
            </div>
          ))}
        </div>

        {/* PAGINATION DOTS */}
        <div className="mt-5 flex items-center justify-center gap-2">
          {Array.from(
            { length: maxIndex + 1 },
            (_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Go to objectives slide ${index + 1}`}
                aria-current={
                  activeIndex === index ? "true" : undefined
                }
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-8 bg-[#D23C4D]"
                    : "w-2 bg-[#F3D9CC] hover:bg-[#F0900B]"
                }`}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
