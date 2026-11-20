
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Heart,
  BookOpen,
  Globe2,
} from "lucide-react";

import HeroDecorations from "./HeroDecorations";
import HeroInfoCards from "./HeroInfoCards";
import { homepageContent } from "@/data/homepage";

export default function HeroSection() {
  const { hero } = homepageContent;

  return (
    <section className="relative isolate bg-white">
      <div className="relative bg-[#FFFAF6]">
        <div className="mx-auto max-w-[1440px] px-5 pb-[140px] pt-16 sm:px-8 lg:px-12 lg:pt-20">
        <div className="relative isolate pb-20">
          <HeroDecorations />

          {/* HERO TWO COLUMN LAYOUT */}
          <div className="relative z-10 grid items-center gap-12 md:grid-cols-[1.08fr_0.92fr] md:gap-8 lg:gap-16">

          {/* LEFT CONTENT */}
          <div className="hero-fade-up">

            {/* Small label */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f0900b]/25 bg-[#f0900b]/10 px-4 py-2 text-xs font-medium text-[#f0900b]">
              <span className="text-[#f0900b]">✦</span>
              {hero.eyebrow}
            </div>

            {/* Main Heading */}
            <h1 className="max-w-[680px] font-serif text-[clamp(2.6rem,4.2vw,4.8rem)] leading-[1.1] tracking-[-0.035em] text-[#252020]">
              {hero.heading.before}{" "}
              <span className="italic text-[#f0900b]">
                {hero.heading.highlight}
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-[560px] text-[15px] leading-7 text-[#655D58] md:text-[16px]">
              {hero.description}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">

              <Link
                href={hero.actions.donate.href}
                className="inline-flex h-[48px] items-center gap-2 rounded-full bg-[#f0900b] px-6 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:brightness-95 hover:shadow-lg"
              >
                <Heart size={16} fill="currentColor" />
                {hero.actions.donate.label}
              </Link>

              <Link
                href={hero.actions.explore.href}
                className="inline-flex h-[48px] items-center gap-2 rounded-full border border-[#E7DCD2] bg-white px-6 text-sm font-medium text-[#302B28] transition-all duration-300 hover:-translate-y-1 hover:border-[#f0900b] hover:text-[#f0900b]"
              >
                <BookOpen size={16} />
                {hero.actions.explore.label}
                <ArrowUpRight size={15} />
              </Link>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="hero-fade-in relative mx-auto mt-12 w-full max-w-[440px] md:mt-16">
            <div className="hero-float-slow absolute -left-[7%] top-[-9%] h-[76%] w-[76%] rounded-[48%_52%_42%_58%/46%_40%_60%_54%] bg-[#F2B2A2]/85" />
            <div className="hero-float-reverse absolute -right-[9%] top-[14%] h-[60%] w-[58%] rounded-full bg-[#F5D39F]/90" />

            {/* Image frame */}
            <div className="relative z-10 rounded-[26px] border border-[#EBD6C4] bg-[#eadada] p-2.5 shadow-[0_20px_60px_rgba(170,111,65,0.12)]">
              <div className="relative aspect-[1.08/1] overflow-hidden rounded-[19px]">
                <Image
                  src={hero.image.src}
                  alt={hero.image.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />

                <div className="hero-float-slow absolute bottom-3 left-[5%] right-[5%] rounded-xl border border-[#F0E2D4] bg-white/95 px-4 py-3 shadow-xl backdrop-blur-md">
                  <div className="flex items-start gap-3">
                    <Globe2
                      size={20}
                      className="mt-0.5 shrink-0 text-[#f0900b]"
                    />

                    <div>
                      <p className="text-xs font-medium leading-5 text-[#554A43]">
                        “{hero.quote.text}”
                      </p>

                      <span className="mt-1 block text-[11px] text-[#f0900b]">
                        — {hero.quote.attribution}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>

        </div>
      </div>

      {/* BOTTOM TWO IMAGE CARDS */}
      <div className="relative z-10 mx-auto -mt-[105px] max-w-[1440px] px-5 pb-12 sm:px-8 lg:px-12">
          <HeroInfoCards />
      </div>
    </section>
  );
}
