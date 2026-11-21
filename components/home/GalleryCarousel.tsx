
"use client";

import {
  useCallback,
  useEffect,
  useState,
} from "react";

import Image from "next/image";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";

import {
  Camera,
  ChevronLeft,
  ChevronRight,
  ImageIcon,
} from "lucide-react";

import { galleryData } from "@/data/home/gallery";
import GalleryLightbox from "./GalleryLightbox";

const images = galleryData.images;
const total = images.length;

function GalleryPhoto({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative h-full w-full bg-[#F7E6DC]">
      {!failed ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 640px) 85vw, 60vw"
          className="object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-2 text-[#BC8066]">
          <ImageIcon size={36} strokeWidth={1.5} />
          <span className="text-xs">Image coming soon</span>
        </div>
      )}
    </div>
  );
}

export default function GalleryCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] =
    useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const reduceMotion = useReducedMotion();

  const goToSlide = useCallback((index: number) => {
    setActiveIndex((index + total) % total);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const changeLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  useEffect(() => {
    if (isPaused || lightboxIndex !== null || reduceMotion || !isVisible) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % total);
    }, 2000);

    return () => window.clearInterval(interval);
  }, [isPaused, lightboxIndex, reduceMotion, isVisible]);

  // Pause when section is outside viewport
  useEffect(() => {
    const element = document.getElementById("gallery-carousel");
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const getRelativePosition = (index: number) => {
    let diff = index - activeIndex;

    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    return diff;
  };

  return (
    <>
      <div
        id="gallery-carousel"
        className="relative mx-auto w-full max-w-[1300px]"
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
        aria-roledescription="carousel"
        aria-label="HrdyaSara photo gallery"
      >
        {/* Carousel viewport */}
        <div className="relative h-[270px] overflow-hidden sm:h-[340px] lg:h-[400px]">
          <AnimatePresence initial={false}>
            {images.map((item, index) => {
              const position = getRelativePosition(index);
              const visible = Math.abs(position) <= 1;

              if (!visible) return null;

              const isCenter = position === 0;

              return (
                <motion.button
                  key={item.id}
                  type="button"
                  aria-label={`Open ${item.caption} in full screen`}
                  onClick={() => {
                    if (isCenter) {
                      setLightboxIndex(index);
                    } else {
                      goToSlide(index);
                    }
                  }}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          scale: 0.75,
                        }
                  }
                  animate={{
                    x: `${position * 82}%`,
                    scale: isCenter ? 1 : 0.72,
                    opacity: isCenter ? 1 : 0.75,
                  }}
                  exit={
                    reduceMotion
                      ? undefined
                      : {
                          opacity: 0,
                          scale: 0.65,
                        }
                  }
                  transition={{
                    duration: reduceMotion ? 0 : 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    zIndex: isCenter ? 20 : 10,
                  }}
                  className={`absolute left-1/2 top-1/2 h-[88%] w-[78%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[24px] border-[3px] bg-white shadow-lg sm:w-[60%] lg:w-[52%] ${
                    isCenter
                      ? "border-[#F0900B] shadow-[0_18px_45px_rgba(80,40,30,0.2)]"
                      : "border-transparent"
                  }`}
                >
                  <GalleryPhoto
                    src={item.src}
                    alt={item.alt}
                    priority={index === 0}
                  />
                </motion.button>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Navigation arrows */}
        <button
          type="button"
          onClick={() => goToSlide(activeIndex - 1)}
          aria-label="Previous gallery image"
          className="absolute left-0 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#D23C4D] shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#FFF0E7] sm:left-2"
        >
          <ChevronLeft size={23} />
        </button>

        <button
          type="button"
          onClick={() => goToSlide(activeIndex + 1)}
          aria-label="Next gallery image"
          className="absolute right-0 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#D23C4D] shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#FFF0E7] sm:right-2"
        >
          <ChevronRight size={23} />
        </button>

        {/* Pagination dots */}
        <div className="mt-6 flex items-center justify-center gap-2.5">
          {images.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => goToSlide(index)}
              aria-label={`Go to gallery image ${index + 1}`}
              aria-current={
                index === activeIndex ? "true" : undefined
              }
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-8 bg-[#F0900B]"
                  : "w-2.5 bg-[#EACDBD] hover:bg-[#D23C4D]"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Fullscreen popup */}
      <GalleryLightbox
        images={images}
        activeIndex={lightboxIndex}
        onClose={closeLightbox}
        onChange={changeLightbox}
      />
    </>
  );
}
