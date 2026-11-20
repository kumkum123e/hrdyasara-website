
"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { HeartHandshake } from "lucide-react";
import { homepageContent } from "@/data/homepage";

export default function AboutImageGrid() {
  const { images, highlight } = homepageContent.about.imageGrid;

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="grid h-[390px] grid-cols-2 grid-rows-2 gap-3 sm:h-[460px] sm:gap-4"
    >
      {/* Top left image */}
      <div className="group relative overflow-hidden rounded-[22px]">
        <Image
          src={images[0].src}
          alt={images[0].alt}
          fill
          sizes="(max-width: 768px) 45vw, 20vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Tall right image */}
      <div className="group relative row-span-1 overflow-hidden rounded-[22px]">
        <Image
          src={images[1].src}
          alt={images[1].alt}
          fill
          sizes="(max-width: 768px) 45vw, 20vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Bottom left image */}
      <div className="group relative overflow-hidden rounded-[22px]">
        <Image
          src={images[2].src}
          alt={images[2].alt}
          fill
          sizes="(max-width: 768px) 45vw, 20vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Highlight card */}
      <div className="flex flex-col items-center justify-center rounded-[22px] bg-[#d23c4d] p-5 text-center text-white">
        <HeartHandshake
          size={32}
          strokeWidth={1.5}
          className="mb-3"
        />

        <h3 className="text-lg font-semibold sm:text-xl">
          {highlight.title}
        </h3>

        <p className="mt-2 text-xs leading-5 text-white/90">
          {highlight.description}
        </p>
      </div>
    </motion.div>
  );
}
