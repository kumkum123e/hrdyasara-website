
import Image from "next/image";
import { ourPartnersData } from "@/data/home/ourPartners";

export default function OurPartners() {
  return (
    <section
      aria-label="Our Partners"
      className="relative overflow-hidden bg-[#FFFAF7] px-4 py-8 sm:px-8 lg:py-10"
    >
      <div className="mx-auto max-w-[1440px]">
        <div
          className="
            grid grid-cols-3 items-center
            overflow-hidden rounded-[28px]
            border border-white
            bg-gradient-to-r
            from-[#FFF4E9] via-[#FFF9F4] to-[#FFF2E6]
            px-2 py-4
            shadow-[0_8px_30px_rgba(110,60,40,0.05)]
            sm:px-6 sm:py-5
          "
        >
          {ourPartnersData.partners.map((partner, index) => (
            <div
              key={partner.id}
              className={`
                group flex min-w-0 items-center justify-center
                px-2 sm:px-5 lg:px-8
                ${
                  index !== 0
                    ? "border-l border-[#D9BFA9]"
                    : ""
                }
              `}
            >
              <div className="relative h-[42px] w-full max-w-[240px] transition-transform duration-300 group-hover:scale-105 sm:h-[55px] lg:h-[65px]">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  sizes="(max-width: 640px) 30vw, 240px"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
