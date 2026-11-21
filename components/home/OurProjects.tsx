
"use client";

import {
  useCallback,
  useEffect,
  useState,
} from "react";

import {
  ChevronLeft,
  ChevronRight,
  Heart,
} from "lucide-react";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import { ourProjectsData } from "@/data/home/ourProjects";
import ProjectSlide from "./ProjectSlide";

export default function OurProjects() {
  const data = ourProjectsData;
  const total = data.projects.length;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const reduceMotion = useReducedMotion();

  const goToSlide = useCallback(
    (index: number) => {
      setActiveIndex((index + total) % total);
    },
    [total]
  );

  // Automatic carousel
  useEffect(() => {
    if (isPaused || reduceMotion || total <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % total);
    }, 4500);

    return () => window.clearInterval(interval);
  }, [isPaused, reduceMotion, total]);

  return (
    <section
      id="our-projects"
      aria-labelledby="our-projects-heading"
      className="relative isolate overflow-hidden bg-[#ffffff] py-14 sm:py-16 lg:py-20"
    >
      {/* Top corner decorations */}
      <svg
        aria-hidden="true"
        className="hero-curve-drift pointer-events-none absolute -left-5 -top-4 h-[100px] w-[220px] opacity-80 sm:h-[130px] sm:w-[290px]"
        viewBox="0 0 290 130"
        fill="none"
      >
        <path
          d="M0 0H230C204 25 174 37 129 41C78 46 40 77 0 115V0Z"
          fill="#F5D5C3"
          fillOpacity="0.55"
        />
        <path
          d="M0 0H170C148 24 117 36 85 51C50 67 22 91 0 111V0Z"
          fill="#EBAE94"
          fillOpacity="0.42"
        />
        <path
          d="M0 96C54 44 91 26 143 29C204 33 222 1 286 -8"
          stroke="#E89174"
          strokeWidth="1.5"
        />
      </svg>

      <div
        aria-hidden="true"
        className="hero-curve-drift pointer-events-none absolute right-[3%] top-6 hidden h-[82px] w-[280px] sm:block"
      >
        <svg
          className="absolute inset-0 h-full w-full opacity-85"
          viewBox="0 0 300 90"
          fill="none"
        >
          <path
            d="M0 70C42 52 68 55 96 62C117 67 132 48 148 45C163 42 171 58 184 65C202 75 220 60 242 45C262 31 279 17 300 14"
            stroke="#E97840"
            strokeWidth="1.7"
          />
        </svg>

        <Heart
          size={38}
          strokeWidth={1.2}
          className="absolute left-1/2 top-3 -translate-x-1/2 text-[#E97840]"
        />
      </div>

      {/* Corner decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[#F0900B]/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[#D23C4D]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* Heading */}
        <motion.div
          initial={
            reduceMotion ? false : { opacity: 0, y: 25 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-9 text-center"
        >
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-9 bg-[#D23C4D]" />

            <h2
              id="our-projects-heading"
              className="font-serif text-[clamp(2.5rem,4vw,4rem)] font-bold leading-tight text-[#252525]"
            >
              {data.heading.normal}{" "}
              <span className="text-[#D23C4D]">
                {data.heading.highlighted}
              </span>
            </h2>

            <span className="h-px w-9 bg-[#F0900B]" />
          </div>

          <p className="mx-auto mt-3 max-w-[700px] text-[15px] leading-7 text-[#5D6067]">
            {data.description}
          </p>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative"
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
        >
          {/* Main wide card */}
          <div
            aria-roledescription="carousel"
            aria-label="HrdyaSara foundation projects"
            className="relative h-[470px] overflow-hidden rounded-[26px] shadow-[0_16px_45px_rgba(70,30,30,0.13)] sm:h-[490px] lg:h-[520px] 2xl:h-[540px]"
          >
            {data.projects.map((project, index) => (
              <ProjectSlide
                key={project.id}
                project={project}
                active={index === activeIndex}
                priority={index === 0}
              />
            ))}

            {/* Previous arrow */}
            <button
              type="button"
              onClick={() => goToSlide(activeIndex - 1)}
              aria-label="Previous project"
              className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#343434] shadow-lg transition-all duration-300 hover:scale-110 hover:text-[#D23C4D] sm:left-5 sm:h-12 sm:w-12"
            >
              <ChevronLeft size={23} />
            </button>

            {/* Next arrow */}
            <button
              type="button"
              onClick={() => goToSlide(activeIndex + 1)}
              aria-label="Next project"
              className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#343434] shadow-lg transition-all duration-300 hover:scale-110 hover:text-[#D23C4D] sm:right-5 sm:h-12 sm:w-12"
            >
              <ChevronRight size={23} />
            </button>
          </div>

          {/* Pagination dots */}
          <div className="mt-6 flex items-center justify-center gap-2.5">
            {data.projects.map((project, index) => (
              <button
                key={project.id}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Go to ${project.title}`}
                aria-current={
                  index === activeIndex ? "true" : undefined
                }
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-7 bg-[#D23C4D]"
                    : "w-2.5 bg-[#E9CFC2] hover:bg-[#F0900B]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
