
import { Camera } from "lucide-react";
import { galleryData } from "@/data/home/gallery";
import GalleryCarousel from "./GalleryCarousel";

export default function GallerySection() {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="relative overflow-hidden bg-[#FFFAF7] py-12 sm:py-14 lg:py-16"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-3">
            <Camera
              size={38}
              strokeWidth={1.7}
              className="text-[#D23C4D]"
            />

            <h2
              id="gallery-heading"
              className="font-serif text-[clamp(2.5rem,4vw,4rem)] font-bold leading-tight text-[#252525]"
            >
              {galleryData.heading}
            </h2>
          </div>

          <div className="mt-2 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#F0900B]" />

            <p className="text-[14px] text-[#5D6067]">
              {galleryData.description}
            </p>

            <span className="h-px w-10 bg-[#F0900B]" />
          </div>
        </div>

        <GalleryCarousel />
      </div>
    </section>
  );
}
