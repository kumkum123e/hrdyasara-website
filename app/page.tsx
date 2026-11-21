
import HeroSection from "@/components/home/HeroSection";
import WhoWeAre from "@/components/home/WhoWeAre";
import SarasLegacy from "@/components/home/SarasLegacy";
import CoreObjectives from "@/components/home/CoreObjectives";
import OurApproach from "@/components/home/OurApproach";
import OurProjects from "@/components/home/OurProjects";
import OurInitiatives from "@/components/home/OurInitiatives";
import OurPartners from "@/components/home/OurPartners";
import GallerySection from "@/components/home/GallerySection";
import CommunityImpact from "@/components/home/CommunityImpact";
import MissionBanner from "@/components/home/MissionBanner";
export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <WhoWeAre />
      <SarasLegacy />
      <CoreObjectives />
      <OurApproach />
      <OurProjects />
      <OurInitiatives />
      <OurPartners />
      <GallerySection />
      <CommunityImpact />
      <MissionBanner />
    </main>
  );
}
