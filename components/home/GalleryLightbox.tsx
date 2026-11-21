
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ImageIcon,
} from "lucide-react";

import type { GalleryImage } from "@/data/home/gallery";

type Props = {
  images: GalleryImage[];
  activeIndex: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
};

export default function GalleryLightbox({
  images,
  activeIndex,
  onClose,
  onChange,
}: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const [failedImages, setFailedImages] = useState<string[]>([]);

  const isOpen = activeIndex !== null;

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement as HTMLElement | null;

    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowRight") {
        onChange(((activeIndex ?? 0) + 1) % images.length);
      }

      if (event.key === "ArrowLeft") {
        onChange(
          ((activeIndex ?? 0) - 1 + images.length) %
            images.length
        );
      }

      if (event.key === "Tab") {
        const dialog = closeRef.current?.closest(
          '[role="dialog"]'
        );

        const controls = Array.from(
          dialog?.querySelectorAll<HTMLElement>(
            'button:not([disabled])'
          ) ?? []
        );

        if (!controls.length) return;

        const first = controls[0];
        const last = controls[controls.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (
          !event.shiftKey &&
          document.activeElement === last
        ) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previousFocus?.focus();
    };
  }, [isOpen, activeIndex, images.length, onClose, onChange]);

  if (activeIndex === null || images.length === 0) return null;

  const currentImage = images[activeIndex];
  const imageFailed = failedImages.includes(currentImage.src);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Gallery image viewer"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      {/* Close */}
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Close gallery"
        className="absolute right-5 top-5 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-[#D23C4D]"
      >
        <X size={24} />
      </button>

      {/* Previous */}
      <button
        type="button"
        onClick={() =>
          onChange(
            (activeIndex - 1 + images.length) % images.length
          )
        }
        aria-label="Previous image"
        className="absolute left-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#D23C4D] shadow-lg transition hover:scale-105 sm:left-8"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Image */}
      <div className="flex w-full max-w-[1100px] flex-col items-center px-10 sm:px-14">
        <div className="relative h-[65vh] w-full overflow-hidden rounded-2xl bg-[#292929]">
          {!imageFailed ? (
            <Image
              key={currentImage.src}
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              sizes="100vw"
              className="object-contain"
              onError={() =>
                setFailedImages((prev) =>
                  prev.includes(currentImage.src)
                    ? prev
                    : [...prev, currentImage.src]
                )
              }
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-white/70">
              <ImageIcon size={42} />
              <p>Image coming soon</p>
            </div>
          )}
        </div>

        <div className="mt-5 text-center text-white">
          <p className="text-lg font-semibold">
            {currentImage.caption}
          </p>

          <p className="mt-2 text-sm text-white/60">
            {activeIndex + 1} / {images.length}
          </p>
        </div>
      </div>

      {/* Next */}
      <button
        type="button"
        onClick={() =>
          onChange((activeIndex + 1) % images.length)
        }
        aria-label="Next image"
        className="absolute right-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#D23C4D] shadow-lg transition hover:scale-105 sm:right-8"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
