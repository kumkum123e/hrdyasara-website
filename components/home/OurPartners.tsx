
import Image from "next/image";
import { ourPartnersData } from "@/data/home/ourPartners";

export default function OurPartners() {
  return (
    <section
      aria-label="Our Partners"
      className="relative overflow-hidden bg-white py-5 sm:py-7 lg:py-8"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div
          className="
            grid grid-cols-3 items-center
            overflow-hidden rounded-[22px]
            bg-[#f6dfc3]
            px-2 py-4
            shadow-[0_8px_30px_rgba(110,60,40,0.05)]
            sm:px-6 sm:py-5
            lg:min-h-[88px] lg:px-10
          "
        >
          {ourPartnersData.partners.map((partner, index) => (
            <div
              key={partner.id}
              className={`
                group flex min-w-0 items-center justify-center
                px-2 sm:px-5 lg:px-10
                ${
                  index !== 0
                    ? "border-l border-[#ead8c7]/80"
                    : ""
                }
              `}
            >
              <div
                className={`
                  relative w-full transition-transform duration-300 group-hover:scale-105
                  ${
                    partner.id === "osttra"
                      ? "h-[30px] max-w-[200px] sm:h-[60px] sm:max-w-[380px] lg:h-[70px] lg:max-w-[420px] 2xl:h-[80px]"
                      : "h-[30px] max-w-[180px] sm:h-[55px] sm:max-w-[300px] lg:h-[65px] lg:max-w-[350px] 2xl:h-[75px]"
                  }
                `}
              >
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
