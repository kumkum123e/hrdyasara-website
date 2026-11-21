
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Utensils,
  GraduationCap,
  HandHeart,
  Ear,
  Palette,
  Sprout,
  HeartPulse,
} from "lucide-react";

import type { Project } from "@/data/home/ourProjects";

const iconMap = {
  utensils: Utensils,
  "graduation-cap": GraduationCap,
  "hand-heart": HandHeart,
  ear: Ear,
  palette: Palette,
  sprout: Sprout,
  "heart-pulse": HeartPulse,
};

type Props = {
  project: Project;
  active: boolean;
  priority?: boolean;
};

export default function ProjectSlide({
  project,
  active,
  priority = false,
}: Props) {
  const [imageError, setImageError] = useState(false);
  const Icon = iconMap[project.icon];

  return (
    <article
      aria-hidden={!active}
      inert={!active}
      className={`absolute inset-0 overflow-hidden rounded-[26px] transition-opacity duration-700 ease-in-out ${
        active
          ? "z-10 opacity-100"
          : "pointer-events-none z-0 opacity-0"
      }`}
    >
      {/* Background image */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#A84B46] via-[#B76C51] to-[#7D353B]">
        {!imageError && (
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            priority={priority}
            sizes="(max-width: 1440px) 100vw, 1350px"
            className="object-cover lg:object-[50%_38%]"
            onError={() => setImageError(true)}
          />
        )}
      </div>

      {/* Red-orange cinematic overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#611F2B]/90 via-[#7A332F]/55 to-[#241416]/35 lg:bg-gradient-to-r lg:from-[#4E1E29]/95 lg:via-[#782F33]/65 lg:to-transparent"
      />

      {/* Soft orange glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#F0900B]/15 blur-3xl"
      />

      {/* Center content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 py-12 text-center text-white sm:px-16 lg:items-start lg:px-[8%] lg:text-left">
        <div
          key={`${project.id}-${active}`}
          className={
            active
              ? "project-content-reveal flex max-w-[580px] flex-col items-center lg:items-start"
              : "flex max-w-[580px] flex-col items-center lg:items-start"
          }
        >
          

          {/* Title */}
          <h3 className="max-w-[720px] font-serif text-[clamp(1.7rem,3.3vw,3rem)] font-bold leading-tight lg:max-w-[580px]">
            {project.title}
          </h3>

          {/* Orange underline */}
          <div className="mt-4 h-[3px] w-20 rounded-full bg-[#F0900B]" />

          {/* Description */}
          <p className="mt-5 max-w-[580px] text-sm leading-7 text-white/95 sm:text-[16px]">
            {project.description}
          </p>

          {/* CTA */}
          <Link
            href={project.href}
            tabIndex={active ? 0 : -1}
            className="group mt-7 inline-flex h-[46px] items-center gap-3 rounded-full bg-white px-6 text-sm font-semibold text-[#B52F40] shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFF1E4] hover:shadow-xl"
          >
            Explore Project
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
