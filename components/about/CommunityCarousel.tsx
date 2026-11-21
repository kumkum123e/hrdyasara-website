
"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import Image from "next/image";
import { ChevronLeft, ChevronRight, UsersRound } from "lucide-react";

import {
  motion,
  useReducedMotion,
  useInView,
} from "motion/react";

import {
  communityData,
  type CommunityMember,
} from "@/data/about/communityData";

const RED = "#D23C4D";
const ORANGE = "#F0900B";

const ease = [0.22, 1, 0.36, 1] as const;

function getOffset(
  index: number,
  active: number,
  total: number
) {
  let offset = (index - active + total) % total;

  if (offset > total / 2) {
    offset -= total;
  }

  return offset;
}

export default function CommunityCarousel() {
  const members: CommunityMember[] =
    communityData.members;
  const total = members.length;

  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [width, setWidth] = useState(1200);

  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const reduceMotion = useReducedMotion();

  const inView = useInView(sectionRef, {
    amount: 0.15,
  });

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % total);
  }, [total]);

  const previous = useCallback(() => {
    setActive((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goTo = useCallback(
    (index: number) => {
      setActive((index + total) % total);
    },
    [total]
  );

  // Track carousel width for responsive positioning
  useEffect(() => {
    const element = carouselRef.current;
    if (!element) return;

    const observer = new ResizeObserver((entries) => {
      setWidth(entries[0].contentRect.width);
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Automatic carousel every 2 seconds
  useEffect(() => {
    if (
      !inView ||
      isPaused ||
      isFocused ||
      reduceMotion ||
      total < 2
    ) {
      return;
    }

    const interval = window.setInterval(() => {
      next();
    }, communityData.autoplayDelay);

    return () => window.clearInterval(interval);
  }, [
    inView,
    isPaused,
    isFocused,
    reduceMotion,
    total,
    next,
  ]);

  // Pause when browser tab is hidden
  useEffect(() => {
    const handleVisibility = () => {
      setIsPaused(document.hidden);
    };

    document.addEventListener(
      "visibilitychange",
      handleVisibility
    );

    return () =>
      document.removeEventListener(
        "visibilitychange",
        handleVisibility
      );
  }, []);

  const isMobile = width < 640;
  const isTablet = width >= 640 && width < 1024;

  const cardWidth = isMobile
    ? Math.min(280, width * 0.76)
    : isTablet
    ? 280
    : 320;

  const cardHeight = isMobile ? 370 : 420;

  const step = isMobile
    ? cardWidth * 0.84
    : isTablet
    ? 220
    : 245;

  const visibleRange = isMobile ? 1 : isTablet ? 1 : 2;

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>
  ) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      next();
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      previous();
    }
  };

  return (
    <section
      ref={sectionRef}
      aria-labelledby="community-heading"
      className="relative overflow-hidden bg-[#FFFAF6] px-4 py-16 sm:px-6 lg:py-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_70%,rgba(240,144,11,0.055),transparent_65%)]" />

      <div className="relative mx-auto max-w-[1400px]">

        {/* HEADING */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 30 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: reduceMotion ? 0 : 0.8,
            ease,
          }}
          className="mb-8 text-center sm:mb-12"
        >
          <div className="mb-3 flex items-center justify-center gap-5">
            <span className="h-px w-12 bg-[#D23C4D]/60" />

            <UsersRound
              size={31}
              strokeWidth={1.5}
              className="text-[#B91C32]"
            />

            <span className="h-px w-12 bg-[#D23C4D]/60" />
          </div>

          <p className="mb-2 text-xs font-semibold tracking-[0.35em] text-[#292929] sm:text-sm">
            {communityData.label}
          </p>

          <h2
            id="community-heading"
            className="font-serif text-5xl font-semibold italic leading-tight text-[#B91C32] sm:text-[56px]"
          >
            {communityData.heading}
          </h2>

          {/* Orange curved underline */}
          <svg
            width="190"
            height="17"
            viewBox="0 0 190 17"
            className="mx-auto mt-1"
            aria-hidden="true"
          >
            <path
              d="M7 12 Q95 -1 183 12"
              stroke={ORANGE}
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
          </svg>

          <p className="mx-auto mt-4 max-w-[650px] text-sm leading-7 text-[#555] sm:text-base">
            {communityData.description}
          </p>
        </motion.div>

        {/* CAROUSEL */}
        <div
          ref={carouselRef}
          className="relative w-full outline-none"
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="Community members"
          onKeyDown={handleKeyDown}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsFocused(true)}
          onBlurCapture={(event) => {
            if (
              !event.currentTarget.contains(
                event.relatedTarget as Node | null
              )
            ) {
              setIsFocused(false);
            }
          }}
        >
          <motion.div
            className="relative mx-auto h-[410px] w-full touch-pan-y sm:h-[470px]"
            style={{ perspective: "1200px" }}
            onPanEnd={(_, info) => {
              if (info.offset.x < -55) next();
              if (info.offset.x > 55) previous();
            }}
          >
            {members.map((member, index) => {
              const offset = getOffset(
                index,
                active,
                total
              );

              const distance = Math.abs(offset);
              const isActive = offset === 0;
              const isVisible =
                distance <= visibleRange;

              const scale = isActive
                ? 1
                : distance === 1
                ? 0.87
                : 0.76;

              const opacity = isActive
                ? 1
                : distance === 1
                ? 0.85
                : 0.5;

              const rotateY = isMobile
                ? 0
                : offset < 0
                ? 12
                : offset > 0
                ? -12
                : 0;

              return (
                <motion.div
                  key={member.id}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`Member ${index + 1} of ${total}${
                    member.name
                      ? `: ${member.name}`
                      : ""
                  }`}
                  aria-hidden={!isVisible}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          scale: 0.9,
                        }
                  }
                  animate={{
                    x: offset * step,
                    scale,
                    opacity: isVisible ? opacity : 0,
                    rotateY,
                    y: 0,
                  }}
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : {
                          type: "spring",
                          stiffness: 180,
                          damping: 24,
                        }
                  }
                  style={{
                    width: cardWidth,
                    height: cardHeight,
                    position: "absolute",
                    top: 12,
                    left: "50%",
                    marginLeft: -cardWidth / 2,
                    zIndex: isActive
                      ? 30
                      : 20 - distance,
                    pointerEvents: isVisible
                      ? "auto"
                      : "none",
                    transformStyle: "preserve-3d",
                  }}
                  className="group"
                >
                  <motion.button
                    type="button"
                    onClick={() => goTo(index)}
                    tabIndex={isVisible ? 0 : -1}
                    aria-label={
                      isActive
                        ? `Current member: ${
                            member.name || index + 1
                          }`
                        : `Show ${
                            member.name ||
                            `member ${index + 1}`
                          }`
                    }
                    whileHover={
                      reduceMotion ? {} : { y: -5 }
                    }
                    transition={{ duration: 0.3 }}
                    className={`flex h-full w-full flex-col overflow-hidden rounded-[26px] border bg-white text-left shadow-[0_12px_30px_rgba(100,55,30,0.10)] transition-[box-shadow,border-color] duration-300 hover:shadow-[0_18px_38px_rgba(100,55,30,0.16)] ${
                      isActive
                        ? "border-[#F0900B]"
                        : "border-[#F1E2D7]"
                    }`}
                  >
                    {/* PORTRAIT */}
                    <div className="relative min-h-0 flex-1 overflow-hidden bg-[#F4E9DF]">
                      <Image
                        src={member.image}
                        alt={member.name || "Community member"}
                        fill
                        sizes="(max-width: 640px) 280px, (max-width: 1024px) 280px, 320px"
                        className="object-cover"
                        style={{
                          objectPosition:
                            member.imagePosition ||
                            "center top",
                        }}
                      />
                    </div>

                    {/* INFO PANEL */}
                    <div className="flex min-h-[94px] flex-col items-center justify-center bg-[#FFF9F3] px-4 py-3 text-center">
                      {member.name ? (
                        <h3 className="text-base font-semibold leading-snug text-[#262626] sm:text-lg">
                          {member.name}
                        </h3>
                      ) : (
                        <span className="text-sm text-[#666]">
                          Community Member
                        </span>
                      )}

                      {member.role && (
                        <p className="mt-1 text-xs text-[#777]">
                          {member.role}
                        </p>
                      )}

                      <span className="mt-2 h-[3px] w-10 rounded-full bg-[#F0900B]" />
                    </div>
                  </motion.button>
                </motion.div>
              );
            })}
          </motion.div>

          {/* PREVIOUS */}
          <button
            type="button"
            onClick={previous}
            aria-label="Previous community member"
            className="absolute left-0 top-1/2 z-40 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#F0900B]/50 bg-white text-[#B91C32] shadow-sm transition-all duration-300 hover:scale-105 hover:border-[#D23C4D] hover:bg-[#D23C4D] hover:text-white sm:left-3"
          >
            <ChevronLeft size={23} />
          </button>

          {/* NEXT */}
          <button
            type="button"
            onClick={next}
            aria-label="Next community member"
            className="absolute right-0 top-1/2 z-40 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#F0900B]/50 bg-white text-[#B91C32] shadow-sm transition-all duration-300 hover:scale-105 hover:border-[#D23C4D] hover:bg-[#D23C4D] hover:text-white sm:right-3"
          >
            <ChevronRight size={23} />
          </button>
        </div>

        {/* PAGINATION: EXACTLY 9 DOTS */}
        <div
          className="mt-2 flex items-center justify-center gap-2.5 sm:mt-5"
          aria-label="Select community member"
        >
          {members.map((member, index) => (
            <button
              key={member.id}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Go to member ${index + 1}`}
              aria-current={
                active === index ? "true" : undefined
              }
              className={`h-2.5 rounded-full transition-all duration-300 ${
                active === index
                  ? "w-8 bg-[#D23C4D]"
                  : "w-2.5 bg-[#F1D6C7] hover:bg-[#F0900B]"
              }`}
            />
          ))}
        </div>

        <p
          className="sr-only"
          aria-live="polite"
          aria-atomic="true"
        >
          {isPaused || isFocused
            ? `Showing member ${active + 1} of ${total}: ${
                members[active].name ||
                "Community Member"
              }`
            : ""}
        </p>
      </div>
    </section>
  );
}
