
import Image from "next/image";
import { homepageContent } from "@/data/homepage";

export default function HeroInfoCards() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {homepageContent.hero.infoCards.map((card) => (
        <article
          key={card.title}
          className="group relative min-h-[210px] overflow-hidden rounded-2xl bg-[#B77872] shadow-[0_8px_22px_rgba(70,35,30,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >

          {/* Right side image */}
          <div className="absolute inset-y-0 right-0 w-[48%]">
            <Image
              src={card.image}
              alt={card.alt}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#B77872] from-40% via-[#B77872]/95 via-55% to-transparent" />

          {/* Card content */}
          <div className="relative z-10 flex min-h-[210px] flex-col justify-center p-6 sm:p-7">
            <h2 className="max-w-[65%] text-xl font-semibold leading-snug text-white">
              {card.title}
            </h2>

            <p className="mt-3 max-w-[62%] text-xs leading-5 text-white/95">
              {card.description}
            </p>
          </div>

        </article>
      ))}
    </div>
  );
}
