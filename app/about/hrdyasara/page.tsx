
import type { Metadata } from "next";

import AboutHero from "@/components/about/AboutHero";
import AboutIntroduction from "@/components/about/AboutIntroduction";
import AboutJourney from "@/components/about/AboutJourney";
import MissionVision from "@/components/about/MissionVision";
import OurValues from "@/components/about/OurValues";

export const metadata: Metadata = {
  title: "About HrdyaSara",
  description:
    "Discover HrdyaSara Foundation's story, mission, vision and values.",
};

export default function AboutHrdyasaraPage() {
  return (
    <>
      <AboutHero />
      <AboutIntroduction />
      <AboutJourney />
       
      <MissionVision />
      <OurValues />
     
    </>
  );
}
